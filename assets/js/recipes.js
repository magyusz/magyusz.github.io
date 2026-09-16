/* Receptek oldal logikaja: kategoriak, kereses, reszletek, uj recept urlap,
   bongeszoben tarolt sajat receptek, export es import. */
(function () {
  "use strict";

  var CATS = ["soups", "breakfast", "mains", "desserts"];
  var STORE_KEY = "zsu.recipes.custom";
  var MAX_IMG = 1200;

  var state = { cat: "all", query: "", image: "" };
  var draft = { hu: {}, en: {}, de: {} };
  var formLang = "hu";
  var editingId = null;

  /* ---------- tarolas ---------- */

  function loadCustom() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function saveCustom(list) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      alert("A böngésző tárhelye betelt. Mentsd fájlba a recepteket, majd told át őket a recipes-data.js fájlba.");
      return false;
    }
  }
  function allRecipes() {
    return (window.RECIPES_DATA || []).concat(loadCustom());
  }

  /* ---------- segedek ---------- */

  function t(key) { return window.App.t(key); }
  function lang() { return window.App.lang; }

  function pick(field, r) {
    var v = r[field];
    if (!v) return "";
    return v[lang()] || v.hu || "";
  }
  function pickList(field, r) {
    var v = r[field];
    if (!v) return [];
    var arr = v[lang()];
    if (!arr || !arr.length) arr = v.hu || [];
    return arr;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function catLabel(c) { return t("rec.cat." + c); }

  function matches(r) {
    if (state.cat !== "all" && r.category !== state.cat) return false;
    if (!state.query) return true;
    var hay = (pick("title", r) + " " + pick("desc", r) + " " + pickList("ingredients", r).join(" ")).toLowerCase();
    return hay.indexOf(state.query.toLowerCase()) !== -1;
  }

  /* ---------- kategoria fulek ---------- */

  function renderTabs() {
    var box = document.getElementById("catTabs");
    box.innerHTML = "";
    var list = allRecipes();

    function tab(value, label, count) {
      var b = el("button", "cat-tab");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", state.cat === value ? "true" : "false");
      b.appendChild(document.createTextNode(label));
      var c = el("span", "count", "(" + count + ")");
      b.appendChild(c);
      b.addEventListener("click", function () {
        state.cat = value;
        renderTabs();
        renderGrid();
      });
      return b;
    }

    box.appendChild(tab("all", t("rec.all"), list.length));
    CATS.forEach(function (c) {
      var n = list.filter(function (r) { return r.category === c; }).length;
      box.appendChild(tab(c, catLabel(c), n));
    });
  }

  /* ---------- lista ---------- */

  function thumb(r) {
    var wrap = el("div", "recipe-thumb");
    if (r.image) {
      var img = document.createElement("img");
      img.src = r.image;
      img.alt = "";
      img.addEventListener("error", function () {
        wrap.innerHTML = "";
        wrap.appendChild(fallback(r));
      });
      wrap.appendChild(img);
    } else {
      wrap.appendChild(fallback(r));
    }
    return wrap;
  }
  function fallback(r) {
    return el("div", "thumb-fallback", r.emoji || "🍽️");
  }

  function renderGrid() {
    var grid = document.getElementById("recipeGrid");
    var empty = document.getElementById("emptyState");
    grid.innerHTML = "";
    var list = allRecipes().filter(matches);

    empty.classList.toggle("hidden", list.length > 0);

    list.forEach(function (r) {
      var card = el("button", "recipe-card");
      card.type = "button";
      card.appendChild(thumb(r));

      var body = el("div", "recipe-body");
      var catRow = el("span", "recipe-cat", catLabel(r.category));
      if (r.custom) {
        var badge = el("span", "badge-own", t("rec.own"));
        catRow.appendChild(badge);
      }
      body.appendChild(catRow);
      body.appendChild(el("h3", null, pick("title", r)));
      body.appendChild(el("p", null, pick("desc", r)));

      var meta = el("div", "recipe-meta");
      if (r.time) meta.appendChild(el("span", null, "⏱ " + r.time + " " + t("rec.minutes")));
      if (r.servings) meta.appendChild(el("span", null, "🍽 " + r.servings + " " + t("rec.person")));
      body.appendChild(meta);

      card.appendChild(body);
      card.addEventListener("click", function () { showDetail(r.id); });
      grid.appendChild(card);
    });
  }

  /* ---------- reszletek ---------- */

  function showDetail(id) {
    var r = allRecipes().filter(function (x) { return x.id === id; })[0];
    if (!r) return;
    state.detailId = id;

    var box = document.getElementById("detailContent");
    box.innerHTML = "";

    var back = el("button", "btn btn-quiet");
    back.type = "button";
    back.textContent = "← " + t("rec.back");
    back.addEventListener("click", showList);
    box.appendChild(back);

    var hero = el("div", "detail-hero");
    if (r.image) {
      var img = document.createElement("img");
      img.src = r.image; img.alt = "";
      hero.appendChild(img);
    } else {
      hero.appendChild(fallback(r));
    }
    box.appendChild(hero);

    box.appendChild(el("span", "recipe-cat", catLabel(r.category)));
    var h = el("h1", null, pick("title", r));
    h.style.margin = "6px 0 10px";
    box.appendChild(h);
    box.appendChild(el("p", null, pick("desc", r)));

    var meta = el("div", "detail-meta");
    if (r.time) meta.appendChild(el("span", "meta-pill", t("rec.time") + ": " + r.time + " " + t("rec.minutes")));
    if (r.servings) meta.appendChild(el("span", "meta-pill", t("rec.servings") + ": " + r.servings));
    box.appendChild(meta);

    var cols = el("div", "detail-columns");

    var ing = el("div", "ingredient-box");
    ing.appendChild(el("h3", null, t("rec.ingredients")));
    var ul = el("ul");
    pickList("ingredients", r).forEach(function (i) { ul.appendChild(el("li", null, i)); });
    ing.appendChild(ul);
    cols.appendChild(ing);

    var st = el("div", "steps-box");
    st.appendChild(el("h3", null, t("rec.steps")));
    var ol = document.createElement("ol");
    pickList("steps", r).forEach(function (s) { ol.appendChild(el("li", null, s)); });
    st.appendChild(ol);
    cols.appendChild(st);

    box.appendChild(cols);

    if (r.custom) {
      var actions = el("div", "btn-row");
      actions.style.marginTop = "26px";
      var edit = el("button", "btn btn-ghost");
      edit.type = "button";
      edit.textContent = t("form.editTitle");
      edit.addEventListener("click", function () { openForm(r); });
      var del = el("button", "btn btn-quiet");
      del.type = "button";
      del.textContent = t("rec.delete");
      del.addEventListener("click", function () {
        if (!confirm(t("rec.deleteConfirm"))) return;
        var list = loadCustom().filter(function (x) { return x.id !== r.id; });
        saveCustom(list);
        showList();
        renderTabs();
        renderGrid();
      });
      actions.appendChild(edit);
      actions.appendChild(del);
      box.appendChild(actions);
    }

    document.getElementById("listView").classList.add("hidden");
    document.getElementById("detailView").classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  function showList() {
    state.detailId = null;
    document.getElementById("detailView").classList.add("hidden");
    document.getElementById("listView").classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  /* ---------- urlap ---------- */

  function fieldEls() {
    return {
      name: document.getElementById("fName"),
      desc: document.getElementById("fDesc"),
      ing: document.getElementById("fIngredients"),
      steps: document.getElementById("fSteps")
    };
  }

  function storeDraft() {
    var f = fieldEls();
    draft[formLang] = {
      name: f.name.value,
      desc: f.desc.value,
      ing: f.ing.value,
      steps: f.steps.value
    };
  }
  function loadDraft() {
    var f = fieldEls();
    var d = draft[formLang] || {};
    f.name.value = d.name || "";
    f.desc.value = d.desc || "";
    f.ing.value = d.ing || "";
    f.steps.value = d.steps || "";
  }

  function setFormLang(lg) {
    storeDraft();
    formLang = lg;
    var btns = document.querySelectorAll("#formLangTabs button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-flang") === lg ? "true" : "false");
    }
    loadDraft();
  }

  function openForm(recipe) {
    draft = { hu: {}, en: {}, de: {} };
    state.image = "";
    editingId = null;
    document.getElementById("imgPreview").classList.add("hidden");
    document.getElementById("fImage").value = "";
    document.getElementById("formTitle").textContent = t("form.title");

    if (recipe) {
      editingId = recipe.id;
      document.getElementById("formTitle").textContent = t("form.editTitle");
      ["hu", "en", "de"].forEach(function (lg) {
        draft[lg] = {
          name: (recipe.title && recipe.title[lg]) || "",
          desc: (recipe.desc && recipe.desc[lg]) || "",
          ing: ((recipe.ingredients && recipe.ingredients[lg]) || []).join("\n"),
          steps: ((recipe.steps && recipe.steps[lg]) || []).join("\n")
        };
      });
      document.getElementById("fCategory").value = recipe.category;
      document.getElementById("fTime").value = recipe.time || "";
      document.getElementById("fServings").value = recipe.servings || "";
      if (recipe.image) {
        state.image = recipe.image;
        document.getElementById("imgPreviewEl").src = recipe.image;
        document.getElementById("imgPreview").classList.remove("hidden");
      }
    } else {
      document.getElementById("fTime").value = 30;
      document.getElementById("fServings").value = 4;
    }

    formLang = "hu";
    var btns = document.querySelectorAll("#formLangTabs button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-flang") === "hu" ? "true" : "false");
    }
    loadDraft();
    document.getElementById("formModal").classList.remove("hidden");
  }

  function closeForm() {
    document.getElementById("formModal").classList.add("hidden");
  }

  function splitLines(text) {
    return (text || "").split("\n").map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 0; });
  }

  function saveRecipe(e) {
    e.preventDefault();
    storeDraft();

    if (!draft.hu.name || !draft.hu.name.trim()) {
      alert(t("form.required"));
      setFormLang("hu");
      return;
    }

    var rec = {
      id: editingId || ("sajat-" + Date.now()),
      custom: true,
      category: document.getElementById("fCategory").value,
      emoji: "🍽️",
      time: parseInt(document.getElementById("fTime").value, 10) || 0,
      servings: parseInt(document.getElementById("fServings").value, 10) || 0,
      image: state.image || "",
      title: {}, desc: {}, ingredients: {}, steps: {}
    };

    ["hu", "en", "de"].forEach(function (lg) {
      var d = draft[lg] || {};
      if (d.name && d.name.trim()) rec.title[lg] = d.name.trim();
      if (d.desc && d.desc.trim()) rec.desc[lg] = d.desc.trim();
      var ing = splitLines(d.ing);
      if (ing.length) rec.ingredients[lg] = ing;
      var st = splitLines(d.steps);
      if (st.length) rec.steps[lg] = st;
    });

    var list = loadCustom().filter(function (x) { return x.id !== rec.id; });
    list.push(rec);
    if (!saveCustom(list)) return;

    closeForm();
    renderTabs();
    renderGrid();
    window.App.toast(t("form.saved"));
  }

  /* ---------- kep kicsinyites ---------- */

  function handleImage(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (ev) {
      var img = new Image();
      img.onload = function () {
        var w = img.width, h = img.height;
        var scale = Math.min(1, MAX_IMG / Math.max(w, h));
        var canvas = document.createElement("canvas");
        canvas.width = Math.round(w * scale);
        canvas.height = Math.round(h * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        state.image = canvas.toDataURL("image/jpeg", 0.82);
        document.getElementById("imgPreviewEl").src = state.image;
        document.getElementById("imgPreview").classList.remove("hidden");
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  /* ---------- export es import ---------- */

  function download(filename, text) {
    var blob = new Blob([text], { type: "text/javascript;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function exportAll() {
    var list = allRecipes().map(function (r) {
      var c = JSON.parse(JSON.stringify(r));
      delete c.custom;
      return c;
    });
    var header = "/* Receptek adatfajl. Ezt a fajlt masold az assets/js mappaba,\n" +
                 "   a regi recipes-data.js helyere. */\n\n";
    download("recipes-data.js", header + "window.RECIPES_DATA = " + JSON.stringify(list, null, 2) + ";\n");
  }

  function importFile(file) {
    var reader = new FileReader();
    reader.onload = function (ev) {
      var text = String(ev.target.result);
      var start = text.indexOf("[");
      var end = text.lastIndexOf("]");
      if (start === -1 || end === -1) { alert(t("rec.importErr")); return; }
      var data;
      try {
        data = JSON.parse(text.slice(start, end + 1));
      } catch (err) {
        alert(t("rec.importErr"));
        return;
      }
      if (!Array.isArray(data)) { alert(t("rec.importErr")); return; }

      var builtIn = {};
      (window.RECIPES_DATA || []).forEach(function (r) { builtIn[r.id] = true; });
      var custom = data.filter(function (r) { return r && r.id && !builtIn[r.id]; })
        .map(function (r) { r.custom = true; return r; });
      saveCustom(custom);
      renderTabs();
      renderGrid();
      window.App.toast(custom.length + " " + t("rec.importOk"));
    };
    reader.readAsText(file);
  }

  /* ---------- indulas ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    loadCustom();
    renderTabs();
    renderGrid();

    document.getElementById("searchInput").addEventListener("input", function () {
      state.query = this.value;
      renderGrid();
    });
    document.getElementById("addBtn").addEventListener("click", function () { openForm(null); });
    document.getElementById("formClose").addEventListener("click", closeForm);
    document.getElementById("formCancel").addEventListener("click", closeForm);
    document.getElementById("recipeForm").addEventListener("submit", saveRecipe);
    document.getElementById("fImage").addEventListener("change", function () {
      handleImage(this.files && this.files[0]);
    });
    var tabs = document.querySelectorAll("#formLangTabs button");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () { setFormLang(this.getAttribute("data-flang")); });
    }
    document.getElementById("exportBtn").addEventListener("click", exportAll);
    document.getElementById("importBtn").addEventListener("click", function () {
      document.getElementById("importFile").click();
    });
    document.getElementById("importFile").addEventListener("change", function () {
      if (this.files && this.files[0]) importFile(this.files[0]);
      this.value = "";
    });
    document.getElementById("formModal").addEventListener("click", function (e) {
      if (e.target === this) closeForm();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeForm();
    });

    window.App.onChange(function () {
      renderTabs();
      if (state.detailId) { showDetail(state.detailId); } else { renderGrid(); }
    });
  });
})();
