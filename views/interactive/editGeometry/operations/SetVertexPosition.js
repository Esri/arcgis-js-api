/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/maybe"],(function(t,e){"use strict";let i=function(){function t(t,e,i){this.editGeometry=t,this.vertex=e,this.pos=i}var i=t.prototype;return i.apply=function(){const t=e.isNone(this.originalPosition);t&&(this.originalPosition=this.vertex.pos),this._apply(t?"apply":"redo")},i.undo=function(){this.vertex.pos=e.unwrap(this.originalPosition),this.editGeometry.notifyChanges({operation:"undo",updatedVertices:[this.vertex]})},i.accumulate=function(e){return e instanceof t&&e.vertex===this.vertex&&(this.pos=e.pos,this._apply("apply"),!0)},i._apply=function(t){this.vertex.pos=this.pos,this.editGeometry.components.forEach((t=>t.unnormalizeVertexPositions())),this.editGeometry.notifyChanges({operation:t,updatedVertices:[this.vertex]})},t}();t.SetVertexPosition=i,Object.defineProperty(t,"__esModule",{value:!0})}));
