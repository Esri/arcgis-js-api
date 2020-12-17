/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../lang"],(function(e,t){"use strict";let n=function(){function e(){this._values=new Map}var n=e.prototype;return n.clone=function(n){const s=new e;return this._values.forEach(((e,u)=>{n&&n.has(u)||s.set(u,t.clone(e))})),s},n.get=function(e){return this._values.get(e)},n.originOf=function(){return 6},n.keys=function(){return[...this._values.keys()]},n.set=function(e,t){this._values.set(e,t)},n.delete=function(e){this._values.delete(e)},n.has=function(e){return this._values.has(e)},n.forEach=function(e){this._values.forEach(e)},e}();e.Store=n,Object.defineProperty(e,"__esModule",{value:!0})}));
