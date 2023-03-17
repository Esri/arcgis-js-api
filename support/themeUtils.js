/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t="calcite-mode-";function r(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replace(/\s|'|"/g,"")}function s(){return r().startsWith("dark")}function a(){return`${t}${s()?"dark":"light"}`}function i(e){c(e),e.classList.add(a())}function c(e){Array.from(e.classList).forEach((r=>{r.startsWith(t)&&e.classList.remove(r)}))}e.getCalciteThemeClass=a,e.isDarkTheme=s,e.setCalciteThemeClass=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
