# Magyar Gyuláné portfólió weboldal

Statikus weboldal, keretrendszer és telepítés nélkül. Elég megnyitni az `index.html` fájlt
egy böngészőben, de webtárhelyre feltöltve is ugyanígy működik.

## Mappaszerkezet

```
index.html            a portfólió főoldal
receptek.html         a receptek oldal
doc/                  az önéletrajzok (DOCX és PDF, három nyelven)
assets/css/style.css  a teljes megjelenés, világos és sötét téma
assets/img/           képek
assets/js/i18n.js         a felület szövegei magyarul, angolul, németül
assets/js/cv-data.js      a tapasztalat, tanulmányok, készségek adatai
assets/js/app.js          téma, nyelvváltás, menü
assets/js/recipes-data.js a receptek adatai
assets/js/recipes.js      a receptek oldal működése
```

## Kihagyott helyek

**HERO kép:** a főoldal jobb felső részén szaggatott kerettel jelölt terület.
Amint bekerül egy `assets/img/hero.jpg` nevű kép, automatikusan megjelenik,
semmit nem kell átírni. Ajánlott méret: kb. 1200 x 900 képpont.

**Logó:** a fejlécben a név előtt. Ha bekerül egy `assets/img/logo.png` fájl,
azonnal a helyére kerül. Ajánlott méret: 200 x 200 képpont, átlátszó háttérrel.

**Profilkép:** `assets/img/profil.jpg`. A meglévő fényképből készült, bármikor cserélhető.

## Nyelvek és téma

A fejlécben a HU / EN / DE gombokkal lehet nyelvet váltani, a hold vagy nap ikonnal
pedig sötét és világos téma között. A böngésző megjegyzi a választást.

Ha egy szöveget át szeretnél írni, az `assets/js/i18n.js` fájlban keresd meg a kulcsot,
és mindhárom nyelvnél írd át. A munkahelyek és tanulmányok az `assets/js/cv-data.js`
fájlban vannak.

## Önéletrajz

A `doc` mappában található, nyelvenként Word és PDF formátumban:

- `Magyar_Gyulane_Oneletrajz_HU.docx` és `.pdf`
- `Magyar_Gyulane_CV_EN.docx` és `.pdf`
- `Magyar_Gyulane_Lebenslauf_DE.docx` és `.pdf`

Ha frissül az önéletrajz, elég ugyanezekkel a fájlnevekkel felülírni őket, a linkek
változatlanul működni fognak.

## Receptek

Négy kategória: levesek, reggelik, főételek, édességek. A kategóriafüleken látszik,
hány recept tartozik hozzájuk, a kereső pedig a névben, a leírásban és a hozzávalókban
is keres.

### Új recept felvitele

1. Kattints az **Új recept** gombra.
2. Válassz kategóriát, adj meg időt és adagot, tölts fel fényképet.
3. A **Nyelv** fülekkel válts HU, EN és DE között. A magyar név kötelező, a másik két
   nyelv opcionális. Ahol nincs fordítás, ott a magyar szöveg jelenik meg.
4. A hozzávalókat és a lépéseket soronként egyet írd be.
5. **Mentés.**

A így felvitt receptek először csak abban a böngészőben látszanak, ahol felvitted őket.

### Véglegesítés minden látogató számára

1. A receptek oldalon kattints a **Mentés fájlba** gombra. Letöltődik egy `recipes-data.js` fájl.
2. Másold be az `assets/js` mappába, a régi `recipes-data.js` helyére.
3. Ezután minden látogatónál megjelennek az új receptek.

A **Betöltés fájlból** gombbal egy korábban lementett fájl tölthető vissza, például
másik gépen vagy másik böngészőben.

### Képek a receptekhez

Az űrlapon feltöltött kép a böngészőben tárolódik, ezért érdemes a véglegesítéskor
a képeket külön fájlként az `assets/img/receptek` mappába tenni, és a
`recipes-data.js` fájlban az `image` mezőt így megadni:

```js
image: "assets/img/receptek/gulyas.jpg"
```

## Publikálás

A teljes mappa feltölthető bármelyik tárhelyre, például a magyargyula.hu mellé egy
alkönyvtárba, vagy ingyenes megoldásként GitHub Pages, Netlify vagy Cloudflare Pages
szolgáltatásra. Nincs szükség adatbázisra vagy szerveroldali futtatásra.
