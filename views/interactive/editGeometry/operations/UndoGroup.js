/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this.operations=[],this.closed=!1}close(){this.closed=!0}apply(){for(const t of this.operations)t.apply()}undo(){for(let t=this.operations.length-1;t>=0;t--)this.operations[t].undo()}accumulate(t){if(this.closed)return!1;const o=this.operations.length?this.operations[this.operations.length-1]:null;return o&&o.accumulate(t)||(this.operations.push(t),t.apply()),!0}}export{t as UndoGroup};
