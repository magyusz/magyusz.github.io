/* Kozos logika: tema valtas, nyelvvaltas, navigacio, logo es hero kep helykitoltes */
(function () {
  "use strict";

  var LANGS = ["hu", "en", "de"];
  var STORE_LANG = "zsu.lang";
  var STORE_THEME = "zsu.theme";

  var App = window.App = {
    lang: "hu",
    theme: "light",
    listeners: []
  };

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* privat mod */ }
  }

  App.t = function (key) {
    var dict = window.I18N[App.lang] || window.I18N.hu;
    if (dict[key] !== undefined) return dict[key];
    return (window.I18N.hu[key] !== undefined) ? window.I18N.hu[key] : key;
  };

  App.onChange = function (fn) { App.listeners.push(fn); };

  /* ---------- Tema ---------- */

  function applyTheme(theme) {
    App.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeToggle");
    if (btn) {
      var toDark = theme === "light";
      btn.setAttribute("aria-label", App.t(toDark ? "theme.toDark" : "theme.toLight"));
      btn.setAttribute("title", btn.getAttribute("aria-label"));
      btn.innerHTML = toDark ? ICON_MOON : ICON_SUN;
    }
    safeSet(STORE_THEME, theme);
  }

  var ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  /* ---------- Nyelv ---------- */

  function applyLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "hu";
    App.lang = lang;
    document.documentElement.setAttribute("lang", lang);
    safeSet(STORE_LANG, lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = App.t(nodes[i].getAttribute("data-i18n"));
    }
    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var spec = attrNodes[j].getAttribute("data-i18n-attr").split("|");
      for (var k = 0; k < spec.length; k++) {
        var pair = spec[k].split(":");
        attrNodes[j].setAttribute(pair[0], App.t(pair[1]));
      }
    }
    var titleKey = document.body.getAttribute("data-title-key") || "meta.title";
    document.title = App.t(titleKey);

    var langBtns = document.querySelectorAll(".lang-group button");
    for (var m = 0; m < langBtns.length; m++) {
      langBtns[m].setAttribute("aria-pressed", langBtns[m].getAttribute("data-lang") === lang ? "true" : "false");
    }

    applyTheme(App.theme);

    for (var n = 0; n < App.listeners.length; n++) App.listeners[n](lang);
  }

  App.setLang = applyLang;

  /* ---------- Logo es hero kep helykitoltes ---------- */
  /* Ha letezik a kep, megjelenik. Ha nem, marad a kihagyott hely jelolese. */

  function tryImage(src, onOk) {
    var img = new Image();
    img.onload = function () { onOk(img); };
    img.onerror = function () { /* marad a placeholder */ };
    img.src = src;
  }

  function setupSlots() {
    var logo = document.getElementById("logoSlot");
    if (logo) {
      tryImage("assets/img/logo.png", function () {
        logo.innerHTML = '<img src="assets/img/logo.png" alt="">';
        logo.classList.add("has-image");
      });
    }
    var hero = document.getElementById("heroMedia");
    if (hero) {
      tryImage("assets/img/hero.jpg", function () {
        hero.innerHTML = '<img src="assets/img/hero.jpg" alt="">';
      });
    }
  }

  /* ---------- Mobil menu ---------- */

  function setupNav() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Toast ---------- */

  App.toast = function (msg) {
    var el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 2600);
  };

  /* ---------- Indulas ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    var storedTheme = safeGet(STORE_THEME);
    if (!storedTheme) {
      storedTheme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    }
    App.theme = storedTheme;

    /* Alapertelmezett nyelv a magyar. Ha a latogato mar valasztott, azt tartjuk meg. */
    var storedLang = safeGet(STORE_LANG) || "hu";

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        applyTheme(App.theme === "light" ? "dark" : "light");
      });
    }
    var langBtns = document.querySelectorAll(".lang-group button");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }

    setupNav();
    setupSlots();
    applyLang(storedLang);
  });
})();
