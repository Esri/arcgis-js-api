/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e,isSome as t}from"../../../../core/maybe.js";import{Vertex as i,Edge as s}from"../EditGeometry.js";class d{constructor(e,t,i){this.editGeometry=e,this.component=t,this.pos=i,this.addedVertex=null,this.originalEdge=null,this.left=null,this.right=null}apply(){let d="redo";e(this.addedVertex)&&(d="apply",this.addedVertex=new i(this.component));const h=this.component.getLastVertex();if(e(h))this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,this.addedVertex.index=0;else{let i=null;h.rightEdge&&(this.originalEdge=h.rightEdge,i=this.originalEdge.rightVertex,this.component.edges.splice(this.component.edges.indexOf(this.originalEdge),1)),this.component.vertices.push(this.addedVertex),this.addedVertex.pos=this.pos,e(this.left)&&(this.left=new s(this.component,h,this.addedVertex)),this.component.edges.push(this.left),h.rightEdge=this.left,t(this.originalEdge)&&t(i)&&(e(this.right)&&(this.right=new s(this.component,this.addedVertex,i)),this.component.edges.push(this.right),i.leftEdge=this.right),this.component.updateVertexIndex(this.addedVertex,h.index+1)}this.editGeometry.notifyChanges({operation:d,addedVertices:[this.addedVertex]})}undo(){if(e(this.addedVertex))return null;this.component.vertices.splice(this.component.vertices.indexOf(this.addedVertex),1),t(this.left)&&(this.component.edges.splice(this.component.edges.indexOf(this.left),1),this.left.leftVertex.rightEdge=null),t(this.right)&&(this.component.edges.splice(this.component.edges.indexOf(this.right),1),this.right.rightVertex.leftEdge=null),t(this.originalEdge)&&(this.component.edges.push(this.originalEdge),this.originalEdge.leftVertex.rightEdge=this.originalEdge,this.originalEdge.rightVertex.leftEdge=this.originalEdge),t(this.left)?this.component.updateVertexIndex(this.left.leftVertex,this.left.leftVertex.index):this.component.updateVertexIndex(this.addedVertex,0),this.editGeometry.notifyChanges({operation:"undo",removedVertices:[this.addedVertex]})}accumulate(){return!1}}export{d as AppendVertex};