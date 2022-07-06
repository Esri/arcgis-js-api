/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t="calcite-theme-";function e(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function r(){return e().startsWith("dark")}function c(){return`${t}${r()?"dark":"light"}`}function n(t){s(t),t.classList.add(c())}function s(e){Array.from(e.classList).forEach((r=>{r.startsWith(t)&&e.classList.remove(r)}))}export{c as getCalciteThemeClass,r as isDarkTheme,n as setCalciteThemeClass};
