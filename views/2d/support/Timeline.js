/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let s=function(){function e(){this._names=new Map}var s=e.prototype;return s.begin=function(e){this._names.has(e)||(this._names.set(e,!1),(e=>-1!==e.indexOf("Brush"))(e)&&this.record("Esri.FirstDraw"),performance.mark(`Esri.${e}.Start`))},s.end=function(e){this._names.has(e)&&!this._names.get(e)&&(this._names.set(e,!0),performance.mark(`Esri.${e}.End`))},s.record=function(e){this._names.has(e)||(this._names.set(e,!0),performance.mark(`Esri.${e}`))},e}();e.Timeline=s,Object.defineProperty(e,"__esModule",{value:!0})}));
