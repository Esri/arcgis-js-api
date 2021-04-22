/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const s=e=>-1!==e.indexOf("Brush");let n=function(){function e(){this._names=new Map}var n=e.prototype;return n.begin=function(e){this._names.has(e)||(this._names.set(e,!1),s(e)&&this.record("Esri.FirstDraw"),performance.mark(`Esri.${e}.Start`))},n.end=function(e){this._names.has(e)&&!this._names.get(e)&&(this._names.set(e,!0),performance.mark(`Esri.${e}.End`))},n.record=function(e){this._names.has(e)||(this._names.set(e,!0),performance.mark(`Esri.${e}`))},e}();e.Timeline=n,Object.defineProperty(e,"__esModule",{value:!0})}));
