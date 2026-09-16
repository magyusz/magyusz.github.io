/* ============================================================
   RECEPTEK ADATFAJL
   ------------------------------------------------------------
   Ide kerulnek a vegleges receptek. Az oldalon a "Mentés fájlba"
   gombbal letoltheto egy uj recipes-data.js, amit egyszeruen
   felul lehet irni ezzel a fajllal.

   Kategoriak: soups (levesek), breakfast (reggelik),
               mains (foetelek), desserts (edessegek)

   Kep: az "image" mezobe egy fajlnev jon az assets/img/receptek
   mappabol, peldaul "assets/img/receptek/gulyas.jpg".
   Ha nincs kep, az "emoji" mezo jelenik meg helyette.
   ============================================================ */

window.RECIPES_DATA = [

  /* ---------------- LEVESEK ---------------- */
  {
    id: "husleves",
    category: "soups",
    emoji: "🍜",
    time: 150,
    servings: 6,
    image: "",
    title: { hu: "Újházi tyúkhúsleves", en: "Ujhazi chicken soup", de: "Ujhazi Hühnersuppe" },
    desc: {
      hu: "Vasárnapi klasszikus, hosszan főzött aranyszínű alaplével és sok zöldséggel.",
      en: "A Sunday classic with a long simmered golden broth and plenty of vegetables.",
      de: "Ein Sonntagsklassiker mit lange gekochter goldener Brühe und viel Gemüse."
    },
    ingredients: {
      hu: ["1 egész tyúk vagy 1 kg csirkeaprólék", "3 sárgarépa", "2 fehérrépa", "1 zellergumó negyede", "1 vöröshagyma", "1 fej fokhagyma", "1 kis karalábé", "10 dkg gomba", "só, egész bors, petrezselyem"],
      en: ["1 whole hen or 1 kg chicken pieces", "3 carrots", "2 parsley roots", "quarter celeriac", "1 onion", "1 head of garlic", "1 small kohlrabi", "100 g mushrooms", "salt, peppercorns, parsley"],
      de: ["1 ganzes Huhn oder 1 kg Hühnerteile", "3 Karotten", "2 Petersilienwurzeln", "ein Viertel Sellerieknolle", "1 Zwiebel", "1 Knoblauchknolle", "1 kleiner Kohlrabi", "100 g Champignons", "Salz, Pfefferkörner, Petersilie"]
    },
    steps: {
      hu: ["A húst hideg vízbe tesszük, felforraljuk, és leszedjük a habját.", "Hozzáadjuk a megtisztított zöldségeket, a hagymát, a fokhagymát, a sót és az egész borsot.", "Nagyon lassú tűzön, gyöngyözve főzzük két órán át.", "Az utolsó fél órában tesszük bele a gombát.", "A levest leszűrjük, a zöldségeket és a húst visszatesszük, friss petrezselyemmel tálaljuk."],
      en: ["Put the meat in cold water, bring to a boil and skim off the foam.", "Add the cleaned vegetables, onion, garlic, salt and peppercorns.", "Simmer very gently for about two hours.", "Add the mushrooms during the last half hour.", "Strain the soup, return the vegetables and meat, and serve with fresh parsley."],
      de: ["Das Fleisch in kaltes Wasser geben, aufkochen und den Schaum abschöpfen.", "Das geputzte Gemüse, Zwiebel, Knoblauch, Salz und Pfefferkörner zugeben.", "Zwei Stunden bei sehr kleiner Hitze leise köcheln lassen.", "In der letzten halben Stunde die Champignons zugeben.", "Die Suppe abseihen, Gemüse und Fleisch zurückgeben und mit frischer Petersilie servieren."]
    }
  },
  {
    id: "gulyasleves",
    category: "soups",
    emoji: "🥘",
    time: 90,
    servings: 6,
    image: "",
    title: { hu: "Gulyásleves", en: "Goulash soup", de: "Gulaschsuppe" },
    desc: {
      hu: "Bográcsos ízvilág a konyhában is: marhalábszár, paprika és csipetke.",
      en: "Kettle flavours made at home: beef shank, paprika and little pinched noodles.",
      de: "Kesselgulasch für zu Hause: Rinderwade, Paprika und Nockerl."
    },
    ingredients: {
      hu: ["60 dkg marhalábszár", "2 fej vöröshagyma", "2 evőkanál fűszerpaprika", "3 sárgarépa", "2 fehérrépa", "4 közepes burgonya", "2 paradicsom, 1 paprika", "köménymag, babérlevél, só", "csipetke tésztához: 1 tojás, liszt"],
      en: ["600 g beef shank", "2 onions", "2 tablespoons ground paprika", "3 carrots", "2 parsley roots", "4 medium potatoes", "2 tomatoes, 1 pepper", "caraway seeds, bay leaf, salt", "for the noodles: 1 egg, flour"],
      de: ["600 g Rinderwade", "2 Zwiebeln", "2 Esslöffel Paprikapulver", "3 Karotten", "2 Petersilienwurzeln", "4 mittlere Kartoffeln", "2 Tomaten, 1 Paprika", "Kümmel, Lorbeerblatt, Salz", "für die Nockerl: 1 Ei, Mehl"]
    },
    steps: {
      hu: ["A hagymát zsíron üvegesre pirítjuk, félrehúzzuk, és belekeverjük a fűszerpaprikát.", "Hozzáadjuk a kockázott húst, sózzuk, köménnyel fűszerezzük, és saját levében pároljuk.", "Ha a hús félig megpuhult, jöhetnek a karikára vágott zöldségek.", "Felöntjük vízzel, beletesszük a burgonyát, a paradicsomot és a paprikát.", "A végén belefőzzük a csipetkét, és még öt percig forraljuk."],
      en: ["Fry the onion until translucent, take it off the heat and stir in the paprika.", "Add the diced meat, season with salt and caraway, and braise in its own juices.", "When the meat is half tender, add the sliced vegetables.", "Pour in water and add the potatoes, tomatoes and pepper.", "Finally drop in the pinched noodles and cook for another five minutes."],
      de: ["Die Zwiebel glasig anbraten, vom Herd nehmen und das Paprikapulver einrühren.", "Das gewürfelte Fleisch zugeben, salzen, mit Kümmel würzen und im eigenen Saft schmoren.", "Wenn das Fleisch halb weich ist, das geschnittene Gemüse zugeben.", "Mit Wasser aufgießen, Kartoffeln, Tomaten und Paprika zugeben.", "Zum Schluss die Nockerl einkochen und fünf Minuten weitergaren."]
    }
  },
  {
    id: "jokai-bableves",
    category: "soups",
    emoji: "🫘",
    time: 120,
    servings: 6,
    image: "",
    title: { hu: "Jókai bableves", en: "Jokai bean soup", de: "Jokai Bohnensuppe" },
    desc: {
      hu: "Füstölt csülök, tarhonya és tejfölös habarás. Egytálételnek is bőven elég.",
      en: "Smoked pork knuckle, egg barley and a sour cream thickening. A meal in itself.",
      de: "Geräucherte Haxe, Eiergraupen und Sauerrahm. Reicht als ganze Mahlzeit."
    },
    ingredients: {
      hu: ["30 dkg tarkabab", "1 füstölt csülök", "2 sárgarépa, 1 fehérrépa", "1 vöröshagyma, 2 gerezd fokhagyma", "10 dkg csabai kolbász", "10 dkg tarhonya", "2 dl tejföl, 2 evőkanál liszt", "fűszerpaprika, babérlevél, só"],
      en: ["300 g pinto beans", "1 smoked pork knuckle", "2 carrots, 1 parsley root", "1 onion, 2 cloves of garlic", "100 g paprika sausage", "100 g egg barley", "200 ml sour cream, 2 tablespoons flour", "ground paprika, bay leaf, salt"],
      de: ["300 g Wachtelbohnen", "1 geräucherte Schweinshaxe", "2 Karotten, 1 Petersilienwurzel", "1 Zwiebel, 2 Knoblauchzehen", "100 g Paprikawurst", "100 g Eiergraupen", "200 ml Sauerrahm, 2 Esslöffel Mehl", "Paprikapulver, Lorbeerblatt, Salz"]
    },
    steps: {
      hu: ["A babot előző este beáztatjuk.", "A csülköt a babbal és a babérlevéllel puhára főzzük.", "A zöldségeket felkarikázzuk, és a levesbe tesszük.", "A tarhonyát kevés zsíron megpirítjuk, és beleszórjuk a levesbe.", "A tejfölt a liszttel elkeverjük, behabarjuk a levest, és a karikára vágott kolbásszal még összeforraljuk."],
      en: ["Soak the beans the night before.", "Cook the knuckle with the beans and bay leaf until tender.", "Slice the vegetables and add them to the soup.", "Toast the egg barley in a little fat and stir it into the soup.", "Mix the sour cream with the flour, thicken the soup, add the sliced sausage and bring it back to a boil."],
      de: ["Die Bohnen am Vorabend einweichen.", "Die Haxe mit den Bohnen und dem Lorbeerblatt weich kochen.", "Das Gemüse in Scheiben schneiden und in die Suppe geben.", "Die Eiergraupen in wenig Fett anrösten und in die Suppe streuen.", "Sauerrahm mit Mehl verrühren, die Suppe abziehen, die Wurstscheiben zugeben und aufkochen."]
    }
  },

  /* ---------------- REGGELIK ---------------- */
  {
    id: "bundas-kenyer",
    category: "breakfast",
    emoji: "🍞",
    time: 15,
    servings: 2,
    image: "",
    title: { hu: "Bundás kenyér", en: "Hungarian French toast", de: "Arme Ritter" },
    desc: {
      hu: "Az örök megoldás a tegnapi kenyérre, fokhagymásan vagy sósan.",
      en: "The classic answer to yesterday's bread, savoury and garlicky.",
      de: "Die klassische Lösung für das Brot von gestern, herzhaft und mit Knoblauch."
    },
    ingredients: {
      hu: ["6 szelet kenyér", "3 tojás", "1 dl tej", "só, őrölt bors", "olaj a sütéshez", "1 gerezd fokhagyma"],
      en: ["6 slices of bread", "3 eggs", "100 ml milk", "salt, ground pepper", "oil for frying", "1 clove of garlic"],
      de: ["6 Scheiben Brot", "3 Eier", "100 ml Milch", "Salz, gemahlener Pfeffer", "Öl zum Braten", "1 Knoblauchzehe"]
    },
    steps: {
      hu: ["A tojásokat a tejjel, sóval és borssal simára keverjük.", "A kenyérszeleteket mindkét oldalukon megforgatjuk a masszában.", "Forró olajban aranybarnára sütjük.", "Papírtörlőn lecsepegtetjük, és fokhagymával bedörzsöljük."],
      en: ["Whisk the eggs with the milk, salt and pepper.", "Turn the bread slices in the mixture on both sides.", "Fry in hot oil until golden brown.", "Drain on kitchen paper and rub with garlic."],
      de: ["Die Eier mit Milch, Salz und Pfeffer glatt verrühren.", "Die Brotscheiben von beiden Seiten in der Masse wenden.", "In heißem Öl goldbraun braten.", "Auf Küchenpapier abtropfen lassen und mit Knoblauch einreiben."]
    }
  },
  {
    id: "kolbaszos-rantotta",
    category: "breakfast",
    emoji: "🍳",
    time: 12,
    servings: 2,
    image: "",
    title: { hu: "Kolbászos rántotta", en: "Scrambled eggs with sausage", de: "Rührei mit Wurst" },
    desc: {
      hu: "Tíz perc alatt kész, laktató reggeli friss kenyérrel és paradicsommal.",
      en: "A filling breakfast ready in ten minutes, with fresh bread and tomato.",
      de: "In zehn Minuten fertiges, sättigendes Frühstück mit frischem Brot und Tomate."
    },
    ingredients: {
      hu: ["5 tojás", "15 dkg házi kolbász", "1 kis vöröshagyma", "1 evőkanál zsír", "só, őrölt bors", "friss petrezselyem"],
      en: ["5 eggs", "150 g smoked sausage", "1 small onion", "1 tablespoon lard", "salt, ground pepper", "fresh parsley"],
      de: ["5 Eier", "150 g geräucherte Wurst", "1 kleine Zwiebel", "1 Esslöffel Schmalz", "Salz, gemahlener Pfeffer", "frische Petersilie"]
    },
    steps: {
      hu: ["A kolbászt felkarikázzuk, és zsíron kisütjük.", "Hozzáadjuk az apróra vágott hagymát, és üvegesre pirítjuk.", "Ráöntjük a felvert tojást, sózzuk, borsozzuk.", "Kis lángon, folyamatosan kevergetve krémesre készítjük, és petrezselyemmel megszórjuk."],
      en: ["Slice the sausage and fry it in the lard.", "Add the finely chopped onion and fry until translucent.", "Pour in the beaten eggs, season with salt and pepper.", "Stir constantly over low heat until creamy, then sprinkle with parsley."],
      de: ["Die Wurst in Scheiben schneiden und im Schmalz anbraten.", "Die fein gehackte Zwiebel zugeben und glasig braten.", "Die verquirlten Eier zugießen, salzen und pfeffern.", "Bei kleiner Hitze ständig rührend cremig garen und mit Petersilie bestreuen."]
    }
  },
  {
    id: "zabkasa",
    category: "breakfast",
    emoji: "🥣",
    time: 10,
    servings: 2,
    image: "",
    title: { hu: "Gyümölcsös zabkása", en: "Fruity porridge", de: "Haferbrei mit Früchten" },
    desc: {
      hu: "Könnyű, meleg reggeli fahéjjal, mézzel és idénygyümölccsel.",
      en: "A light warm breakfast with cinnamon, honey and seasonal fruit.",
      de: "Ein leichtes warmes Frühstück mit Zimt, Honig und Obst der Saison."
    },
    ingredients: {
      hu: ["10 dkg zabpehely", "3 dl tej vagy növényi ital", "1 csipet só", "1 teáskanál méz", "fahéj", "1 alma vagy egy marék bogyós gyümölcs", "dió vagy mandula a tetejére"],
      en: ["100 g rolled oats", "300 ml milk or plant drink", "a pinch of salt", "1 teaspoon honey", "cinnamon", "1 apple or a handful of berries", "walnuts or almonds on top"],
      de: ["100 g Haferflocken", "300 ml Milch oder Pflanzendrink", "1 Prise Salz", "1 Teelöffel Honig", "Zimt", "1 Apfel oder eine Handvoll Beeren", "Walnüsse oder Mandeln als Topping"]
    },
    steps: {
      hu: ["A zabpelyhet a tejjel és egy csipet sóval feltesszük főni.", "Kis lángon, kevergetve öt percig főzzük.", "Levesszük a tűzről, mézzel és fahéjjal ízesítjük.", "Friss gyümölccsel és dióval tálaljuk."],
      en: ["Put the oats on to cook with the milk and a pinch of salt.", "Simmer over low heat for five minutes, stirring.", "Take off the heat and flavour with honey and cinnamon.", "Serve with fresh fruit and nuts."],
      de: ["Die Haferflocken mit der Milch und einer Prise Salz aufsetzen.", "Bei kleiner Hitze fünf Minuten unter Rühren kochen.", "Vom Herd nehmen und mit Honig und Zimt abschmecken.", "Mit frischem Obst und Nüssen servieren."]
    }
  },

  /* ---------------- FOETELEK ---------------- */
  {
    id: "paprikas-csirke",
    category: "mains",
    emoji: "🍗",
    time: 60,
    servings: 4,
    image: "",
    title: { hu: "Paprikás csirke galuskával", en: "Chicken paprikash with dumplings", de: "Paprikahuhn mit Nockerln" },
    desc: {
      hu: "Selymes, tejfölös paprikás szaft, mellé friss galuska.",
      en: "Silky sour cream and paprika sauce with freshly made dumplings.",
      de: "Samtige Paprikasauce mit Sauerrahm und frischen Nockerln."
    },
    ingredients: {
      hu: ["1 egész csirke felbontva", "2 fej vöröshagyma", "2 evőkanál fűszerpaprika", "1 paradicsom, 1 tv paprika", "2 dl tejföl, 1 evőkanál liszt", "zsír, só", "galuska: 30 dkg liszt, 2 tojás, víz, só"],
      en: ["1 whole chicken, jointed", "2 onions", "2 tablespoons ground paprika", "1 tomato, 1 pepper", "200 ml sour cream, 1 tablespoon flour", "lard, salt", "dumplings: 300 g flour, 2 eggs, water, salt"],
      de: ["1 ganzes Huhn, zerteilt", "2 Zwiebeln", "2 Esslöffel Paprikapulver", "1 Tomate, 1 Paprika", "200 ml Sauerrahm, 1 Esslöffel Mehl", "Schmalz, Salz", "Nockerln: 300 g Mehl, 2 Eier, Wasser, Salz"]
    },
    steps: {
      hu: ["A hagymát zsíron megpirítjuk, félrehúzzuk, és belekeverjük a paprikát.", "Beletesszük a csirkedarabokat, sózzuk, és kevés vízzel pároljuk.", "Hozzáadjuk a paradicsomot és a paprikát, és puhára főzzük.", "A tejfölt a liszttel elkeverjük, és behabarjuk a szaftot.", "A galuska hozzávalóit összekeverjük, sós vízbe szaggatjuk, és a paprikás mellé tálaljuk."],
      en: ["Fry the onion in lard, take it off the heat and stir in the paprika.", "Add the chicken pieces, season with salt and braise with a little water.", "Add the tomato and pepper and cook until tender.", "Mix the sour cream with the flour and thicken the sauce.", "Mix the dumpling ingredients, drop them into salted water, and serve alongside."],
      de: ["Die Zwiebel in Schmalz anbraten, vom Herd nehmen und das Paprikapulver einrühren.", "Die Hühnerteile zugeben, salzen und mit wenig Wasser schmoren.", "Tomate und Paprika zugeben und weich garen.", "Sauerrahm mit Mehl verrühren und die Sauce damit abziehen.", "Die Zutaten für die Nockerln verrühren, in Salzwasser abschaben und dazu servieren."]
    }
  },
  {
    id: "toltott-kaposzta",
    category: "mains",
    emoji: "🥬",
    time: 180,
    servings: 6,
    image: "",
    title: { hu: "Töltött káposzta", en: "Stuffed cabbage", de: "Gefüllte Kohlrouladen" },
    desc: {
      hu: "Ünnepi fogás savanyú káposztán, füstölt hússal, hosszan összeérlelve.",
      en: "A festive dish on sauerkraut with smoked meat, slowly simmered.",
      de: "Ein festliches Gericht auf Sauerkraut mit Räucherfleisch, lange geschmort."
    },
    ingredients: {
      hu: ["1 fej savanyú káposzta levelekben", "50 dkg savanyú káposzta", "60 dkg darált sertéshús", "10 dkg rizs", "1 vöröshagyma, 2 gerezd fokhagyma", "20 dkg füstölt oldalas", "1 tojás, fűszerpaprika, bors, só", "2 dl tejföl a tálaláshoz"],
      en: ["1 head of soured cabbage in leaves", "500 g sauerkraut", "600 g minced pork", "100 g rice", "1 onion, 2 cloves of garlic", "200 g smoked ribs", "1 egg, paprika, pepper, salt", "200 ml sour cream to serve"],
      de: ["1 Kopf Sauerkohl in Blättern", "500 g Sauerkraut", "600 g Schweinehackfleisch", "100 g Reis", "1 Zwiebel, 2 Knoblauchzehen", "200 g geräucherte Rippchen", "1 Ei, Paprikapulver, Pfeffer, Salz", "200 ml Sauerrahm zum Servieren"]
    },
    steps: {
      hu: ["A hagymát megdinszteljük, és összekeverjük a darált hússal, a rizzsel, a tojással és a fűszerekkel.", "A tölteléket a káposztalevelekbe csavarjuk.", "Egy nagy lábas aljára savanyú káposztát terítünk, rárakjuk a töltelékeket és a füstölt húst.", "Felöntjük vízzel, és lassú tűzön két órán át főzzük.", "Tejföllel tálaljuk. Másnap még finomabb."],
      en: ["Sweat the onion and mix it with the mince, rice, egg and spices.", "Roll the filling into the cabbage leaves.", "Line a large pot with sauerkraut, place the rolls and the smoked meat on top.", "Pour in water and simmer gently for two hours.", "Serve with sour cream. It is even better the next day."],
      de: ["Die Zwiebel andünsten und mit Hackfleisch, Reis, Ei und Gewürzen vermengen.", "Die Füllung in die Kohlblätter rollen.", "Einen großen Topf mit Sauerkraut auslegen, die Rouladen und das Räucherfleisch darauf setzen.", "Mit Wasser aufgießen und zwei Stunden sanft köcheln lassen.", "Mit Sauerrahm servieren. Am nächsten Tag schmeckt es noch besser."]
    }
  },
  {
    id: "rakott-krumpli",
    category: "mains",
    emoji: "🥔",
    time: 60,
    servings: 4,
    image: "",
    title: { hu: "Rakott krumpli", en: "Layered potato bake", de: "Kartoffelauflauf" },
    desc: {
      hu: "Krumpli, tojás, kolbász és tejföl rétegekben, ropogósra sütve.",
      en: "Potato, egg, sausage and sour cream in layers, baked until crisp.",
      de: "Kartoffeln, Eier, Wurst und Sauerrahm in Schichten, knusprig gebacken."
    },
    ingredients: {
      hu: ["1 kg burgonya", "6 főtt tojás", "25 dkg füstölt kolbász", "4 dl tejföl", "5 dkg reszelt sajt", "vaj a forma kikenéséhez", "só, őrölt bors"],
      en: ["1 kg potatoes", "6 boiled eggs", "250 g smoked sausage", "400 ml sour cream", "50 g grated cheese", "butter for the dish", "salt, ground pepper"],
      de: ["1 kg Kartoffeln", "6 gekochte Eier", "250 g geräucherte Wurst", "400 ml Sauerrahm", "50 g geriebener Käse", "Butter für die Form", "Salz, gemahlener Pfeffer"]
    },
    steps: {
      hu: ["A burgonyát héjában megfőzzük, meghámozzuk és felkarikázzuk.", "A tojásokat és a kolbászt szintén felkarikázzuk.", "Kivajazott tálba rétegezzük: krumpli, tojás, kolbász, tejföl.", "A tetejére krumpli és tejföl kerül, megszórjuk sajttal.", "180 fokon 30 percig sütjük, amíg a teteje aranybarna lesz."],
      en: ["Boil the potatoes in their skins, peel and slice them.", "Slice the eggs and the sausage as well.", "Layer in a buttered dish: potato, egg, sausage, sour cream.", "Finish with potato and sour cream, then sprinkle with cheese.", "Bake at 180 degrees for 30 minutes until the top is golden."],
      de: ["Die Kartoffeln in der Schale kochen, schälen und in Scheiben schneiden.", "Eier und Wurst ebenfalls in Scheiben schneiden.", "In einer gebutterten Form schichten: Kartoffeln, Eier, Wurst, Sauerrahm.", "Oben mit Kartoffeln und Sauerrahm abschließen, mit Käse bestreuen.", "Bei 180 Grad 30 Minuten backen, bis die Oberfläche goldbraun ist."]
    }
  },
  {
    id: "porkolt",
    category: "mains",
    emoji: "🍲",
    time: 120,
    servings: 4,
    image: "",
    title: { hu: "Sertéspörkölt", en: "Pork stew", de: "Schweinepörkölt" },
    desc: {
      hu: "Sok hagyma, jó paprika, türelem. Nokedlivel vagy főtt burgonyával.",
      en: "Plenty of onion, good paprika and patience. With dumplings or boiled potatoes.",
      de: "Viel Zwiebel, gutes Paprikapulver und Geduld. Mit Nockerln oder Salzkartoffeln."
    },
    ingredients: {
      hu: ["80 dkg sertéslapocka", "4 fej vöröshagyma", "2 evőkanál fűszerpaprika", "2 gerezd fokhagyma", "1 paradicsom, 1 paprika", "zsír, só, őrölt bors", "kevés köménymag"],
      en: ["800 g pork shoulder", "4 onions", "2 tablespoons ground paprika", "2 cloves of garlic", "1 tomato, 1 pepper", "lard, salt, ground pepper", "a little caraway"],
      de: ["800 g Schweineschulter", "4 Zwiebeln", "2 Esslöffel Paprikapulver", "2 Knoblauchzehen", "1 Tomate, 1 Paprika", "Schmalz, Salz, gemahlener Pfeffer", "etwas Kümmel"]
    },
    steps: {
      hu: ["A hagymát bőséges zsíron, lassan aranyszínűre pirítjuk.", "Levesszük a tűzről, belekeverjük a fűszerpaprikát, és azonnal felöntjük kevés vízzel.", "Beletesszük a kockázott húst, sózzuk, borsozzuk, köménnyel ízesítjük.", "Fedő alatt, lassú tűzön másfél órán át pároljuk, közben pótoljuk a folyadékot.", "A végén hozzáadjuk a paradicsomot és a paprikát, és sűrűre főzzük a szaftot."],
      en: ["Slowly fry the onion in plenty of lard until golden.", "Take it off the heat, stir in the paprika and immediately add a little water.", "Add the diced meat, season with salt, pepper and caraway.", "Braise covered over low heat for an hour and a half, topping up the liquid as needed.", "Finally add the tomato and pepper and reduce the sauce until thick."],
      de: ["Die Zwiebel in reichlich Schmalz langsam goldgelb braten.", "Vom Herd nehmen, das Paprikapulver einrühren und sofort mit wenig Wasser aufgießen.", "Das gewürfelte Fleisch zugeben, mit Salz, Pfeffer und Kümmel würzen.", "Zugedeckt bei kleiner Hitze eineinhalb Stunden schmoren, dabei Flüssigkeit nachgießen.", "Zum Schluss Tomate und Paprika zugeben und die Sauce einkochen lassen."]
    }
  },

  /* ---------------- EDESSEGEK ---------------- */
  {
    id: "almas-pite",
    category: "desserts",
    emoji: "🥧",
    time: 75,
    servings: 12,
    image: "",
    title: { hu: "Almás pite", en: "Apple pie", de: "Apfelkuchen" },
    desc: {
      hu: "Omlós tészta, fahéjas reszelt alma, porcukros tető.",
      en: "Short pastry, cinnamon apple filling and a dusting of icing sugar.",
      de: "Mürbeteig, Zimtäpfel und eine Haube aus Puderzucker."
    },
    ingredients: {
      hu: ["50 dkg liszt", "25 dkg vaj vagy margarin", "10 dkg porcukor", "1 tojás, 1 csomag sütőpor", "3 evőkanál tejföl", "1 kg alma", "fahéj, 5 dkg cukor", "2 evőkanál zsemlemorzsa"],
      en: ["500 g flour", "250 g butter or margarine", "100 g icing sugar", "1 egg, 1 sachet baking powder", "3 tablespoons sour cream", "1 kg apples", "cinnamon, 50 g sugar", "2 tablespoons breadcrumbs"],
      de: ["500 g Mehl", "250 g Butter oder Margarine", "100 g Puderzucker", "1 Ei, 1 Päckchen Backpulver", "3 Esslöffel Sauerrahm", "1 kg Äpfel", "Zimt, 50 g Zucker", "2 Esslöffel Semmelbrösel"]
    },
    steps: {
      hu: ["A tészta hozzávalóit összegyúrjuk, és fél órára hűtőbe tesszük.", "Az almát lereszeljük, cukorral és fahéjjal megszórjuk, és kicsit lecsepegtetjük.", "A tészta felét tepsibe nyújtjuk, megszórjuk zsemlemorzsával.", "Rásimítjuk az almát, majd befedjük a tészta másik felével.", "180 fokon 40 percig sütjük, langyosan porcukrozzuk."],
      en: ["Knead the pastry ingredients together and chill for half an hour.", "Grate the apples, sprinkle with sugar and cinnamon, and let them drain a little.", "Roll out half the pastry into a tin and scatter with breadcrumbs.", "Spread the apples on top and cover with the other half of the pastry.", "Bake at 180 degrees for 40 minutes and dust with icing sugar while lukewarm."],
      de: ["Die Teigzutaten verkneten und eine halbe Stunde kalt stellen.", "Die Äpfel reiben, mit Zucker und Zimt bestreuen und etwas abtropfen lassen.", "Die Hälfte des Teigs in ein Blech ausrollen und mit Semmelbröseln bestreuen.", "Die Äpfel darauf verteilen und mit der zweiten Teighälfte bedecken.", "Bei 180 Grad 40 Minuten backen und lauwarm mit Puderzucker bestäuben."]
    }
  },
  {
    id: "palacsinta",
    category: "desserts",
    emoji: "🥞",
    time: 40,
    servings: 4,
    image: "",
    title: { hu: "Palacsinta", en: "Hungarian pancakes", de: "Palatschinken" },
    desc: {
      hu: "Vékony, hajszálvékony palacsinta lekvárral, túróval vagy kakaóval.",
      en: "Paper thin pancakes with jam, sweet curd cheese or cocoa.",
      de: "Hauchdünne Palatschinken mit Marmelade, Quark oder Kakao."
    },
    ingredients: {
      hu: ["25 dkg liszt", "5 dl tej", "2 tojás", "1 csipet só", "1 evőkanál cukor", "2 dl szódavíz", "olaj a sütéshez", "töltelék: baracklekvár, túró vagy kakaó"],
      en: ["250 g flour", "500 ml milk", "2 eggs", "a pinch of salt", "1 tablespoon sugar", "200 ml soda water", "oil for frying", "filling: apricot jam, curd cheese or cocoa"],
      de: ["250 g Mehl", "500 ml Milch", "2 Eier", "1 Prise Salz", "1 Esslöffel Zucker", "200 ml Sodawasser", "Öl zum Braten", "Füllung: Marillenmarmelade, Quark oder Kakao"]
    },
    steps: {
      hu: ["A lisztet a tojással, a tejjel, a sóval és a cukorral csomómentesre keverjük.", "Fél órát pihentetjük, majd hozzáadjuk a szódavizet.", "Forró, kiolajozott palacsintasütőben vékony lapokat sütünk.", "Megtöltjük lekvárral vagy édesített túróval, és feltekerjük."],
      en: ["Whisk the flour with the eggs, milk, salt and sugar until smooth.", "Rest the batter for half an hour, then add the soda water.", "Fry thin pancakes in a hot, lightly oiled pan.", "Fill with jam or sweetened curd cheese and roll them up."],
      de: ["Mehl mit Eiern, Milch, Salz und Zucker klümpchenfrei verrühren.", "Den Teig eine halbe Stunde ruhen lassen, dann das Sodawasser zugeben.", "In einer heißen, leicht geölten Pfanne dünne Palatschinken backen.", "Mit Marmelade oder gesüßtem Quark füllen und aufrollen."]
    }
  },
  {
    id: "makos-guba",
    category: "desserts",
    emoji: "🍰",
    time: 45,
    servings: 6,
    image: "",
    title: { hu: "Mákos guba", en: "Poppy seed bread pudding", de: "Mohnauflauf" },
    desc: {
      hu: "Régi vasárnapi édesség kifliből, vaníliás tejjel és sok mákkal.",
      en: "An old Sunday dessert made from crescent rolls, vanilla milk and plenty of poppy seed.",
      de: "Eine alte Sonntagsspeise aus Kipferln, Vanillemilch und viel Mohn."
    },
    ingredients: {
      hu: ["6 szikkadt kifli", "5 dl tej", "15 dkg darált mák", "10 dkg porcukor", "1 vaníliarúd vagy vaníliás cukor", "1 evőkanál vaj", "vaníliasodó a tálaláshoz"],
      en: ["6 stale crescent rolls", "500 ml milk", "150 g ground poppy seed", "100 g icing sugar", "1 vanilla pod or vanilla sugar", "1 tablespoon butter", "vanilla sauce to serve"],
      de: ["6 altbackene Kipferl", "500 ml Milch", "150 g gemahlener Mohn", "100 g Puderzucker", "1 Vanilleschote oder Vanillezucker", "1 Esslöffel Butter", "Vanillesauce zum Servieren"]
    },
    steps: {
      hu: ["A kifliket felkarikázzuk.", "A tejet a cukorral és a vaníliával felforraljuk.", "A kiflikarikákat kivajazott tálba tesszük, és leöntjük a forró tejjel.", "Megszórjuk a mákkal, és rétegezve megismételjük.", "180 fokon 20 percig sütjük, vaníliasodóval tálaljuk."],
      en: ["Slice the crescent rolls.", "Bring the milk to a boil with the sugar and vanilla.", "Put the slices into a buttered dish and pour the hot milk over them.", "Sprinkle with poppy seed and repeat in layers.", "Bake at 180 degrees for 20 minutes and serve with vanilla sauce."],
      de: ["Die Kipferl in Scheiben schneiden.", "Die Milch mit Zucker und Vanille aufkochen.", "Die Scheiben in eine gebutterte Form geben und mit der heißen Milch übergießen.", "Mit Mohn bestreuen und in Schichten wiederholen.", "Bei 180 Grad 20 Minuten backen und mit Vanillesauce servieren."]
    }
  }
];
