/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t="calcite-theme-";function s(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-theme-name").replace(/\s|'|"/g,"")}function r(){return s().startsWith("dark")}function a(){return`${t}${r()?"dark":"light"}`}function i(e){c(e),e.classList.add(a())}function c(e){Array.from(e.classList).forEach((s=>{s.startsWith(t)&&e.classList.remove(s)}))}e.getCalciteThemeClass=a,e.isDarkTheme=r,e.setCalciteThemeClass=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
