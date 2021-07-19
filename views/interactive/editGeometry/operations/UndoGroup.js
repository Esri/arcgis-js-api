/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";let o=function(){function t(){this.operations=[],this.closed=!1}var o=t.prototype;return o.close=function(){this.closed=!0},o.apply=function(){for(const t of this.operations)t.apply()},o.undo=function(){for(let t=this.operations.length-1;t>=0;t--)this.operations[t].undo()},o.accumulate=function(t){if(this.closed)return!1;const o=this.operations.length?this.operations[this.operations.length-1]:null;return o&&o.accumulate(t)||(this.operations.push(t),t.apply()),!0},t}();t.UndoGroup=o,Object.defineProperty(t,"__esModule",{value:!0})}));
