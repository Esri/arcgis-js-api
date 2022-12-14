/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../core/maybe.js";import{Edge as t}from"../EditGeometry.js";class r{constructor(e,t,r=0){this.editGeometry=e,this.vertices=t,this.minNumberOfVertices=r,this.removedVertices=null}apply(){let t="redo";null==this.removedVertices?(this.removedVertices=[],this.vertices.forEach((t=>{const r=this._removeVertex(t);e(r)&&this.removedVertices.push(r)})),t="apply"):this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex)})),this.editGeometry.notifyChanges({operation:t,removedVertices:this.vertices})}undo(){this.removedVertices.forEach((e=>{this._undoRemoveVertex(e)})),this.editGeometry.notifyChanges({operation:"undo",addedVertices:this.vertices})}accumulate(){return!1}_removeVertex(e){const r=e.component;if(r.vertices.length<=this.minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,d=e.rightEdge;return r.vertices.splice(r.vertices.indexOf(e),1),s&&(r.edges.splice(r.edges.indexOf(s),1),s.leftVertex.rightEdge=null),d&&(r.edges.splice(r.edges.indexOf(d),1),d.rightVertex.leftEdge=null),0===e.index&&d&&this.vertices.length>0&&r.swapVertices(r.vertices.indexOf(d.rightVertex),0),s&&d&&(i.createdEdge=new t(r,s.leftVertex,d.rightVertex),r.edges.push(i.createdEdge)),d&&r.updateVertexIndex(d.rightVertex,d.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,r=e.removedVertex.component,i=t.leftEdge,s=t.rightEdge;e.createdEdge&&r.edges.splice(r.edges.indexOf(e.createdEdge),1),r.vertices.push(t),i&&(r.edges.push(i),i.leftVertex.rightEdge=i),s&&(r.edges.push(s),s.rightVertex.leftEdge=s),r.updateVertexIndex(t,t.index)}}export{r as RemoveVertices};