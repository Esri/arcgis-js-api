/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as t,unwrap as e}from"../../../../core/maybe.js";class i{constructor(t,e,i){this.editGeometry=t,this.vertex=e,this.pos=i}apply(){const e=t(this.originalPosition);e&&(this.originalPosition=this.vertex.pos),this._apply(e?"apply":"redo")}undo(){this.vertex.pos=e(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})}accumulate(t){return t instanceof i&&t.vertex===this.vertex&&(this.pos=t.pos,this._apply("apply"),!0)}_apply(t){this.vertex.pos=this.pos,this.editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:t,updatedVertices:[this.vertex]})}}export{i as SetVertexPosition};
