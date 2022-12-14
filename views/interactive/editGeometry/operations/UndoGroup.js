/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let o=function(){function t(){this._operations=[],this._closed=!1}var o=t.prototype;return o.close=function(){this._closed=!0},o.apply=function(){for(const t of this._operations)t.apply()},o.undo=function(){for(let t=this._operations.length-1;t>=0;t--)this._operations[t].undo()},o.accumulate=function(t){if(this._closed)return!1;const o=this._operations.length?this._operations[this._operations.length-1]:null;return o&&o.accumulate(t)||(this._operations.push(t),t.apply()),!0},t}();t.UndoGroup=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
