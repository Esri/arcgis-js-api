/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unwrap as e}from"../../../core/maybe.js";import{s as t}from"../../../chunks/vec2.js";import{a as r}from"../../../chunks/vec2f64.js";import{defaults as o}from"./Settings.js";import{SnappingAlgorithm as i}from"./SnappingAlgorithm.js";import{squareDistance as s}from"./snappingUtils.js";import{ParallelLineSnappingCandidate as n}from"./candidates/ParallelLineSnappingCandidate.js";import{anyMapPointToScreenPoint as l}from"../support/viewUtils.js";import{projectPointToLine as a}from"../../support/geometry2dUtils.js";class c extends i{constructor(){super(...arguments),this._tmpProjection=r()}snapNewVertex(e,t){const r=t.editGeometryOperations.data.components[0],o=r.edges.length,i=r.vertices.length,s=[];if(o<2)return s;const n=l(e,t.coordinateHelper,t.elevationInfo,this.view),a=r.vertices[i-1],c=r.vertices[0],h=r.edges[o-1];let p=h;do{this.edgeExceedsShortLineThreshold(p,t)&&(this._checkEdgeForParalleLines(p,a.pos,e,n,t,s),this._checkEdgeForParalleLines(p,c.pos,e,n,t,s)),p=p.leftVertex.leftEdge}while(p&&p!==h);return s}snapExistingVertex(t,r){const o=[],i=e(r.vertexHandle),s=i.component;if(s.edges.length<3)return o;const n=l(t,r.coordinateHelper,r.elevationInfo,this.view),a=i.leftEdge,c=i.rightEdge,h=s.vertices[0],p=s.vertices.length,d=s.vertices[p-1],g=s.edges[0];let m=g;do{m!==a&&m!==c&&this.edgeExceedsShortLineThreshold(m,r)&&(a&&this._checkEdgeForParalleLines(m,a.leftVertex.pos,t,n,r,o),c&&this._checkEdgeForParalleLines(m,c.rightVertex.pos,t,n,r,o),i===h?this._checkEdgeForParalleLines(m,d.pos,t,n,r,o):i===d&&this._checkEdgeForParalleLines(m,h.pos,t,n,r,o)),m=m.rightVertex.rightEdge}while(m&&m!==g);return o}_checkEdgeForParalleLines(e,r,i,c,h,p){const d=e.leftVertex.pos,g=e.rightVertex.pos;if(a(this._tmpProjection,r,d,g),t(this._tmpProjection,r)<o.parallelLineThreshold)return;a(this._tmpProjection,i,d,g,r);const{coordinateHelper:m,elevationInfo:f,pointer:v}=h,P=m.fromXYZ(this._tmpProjection,m.getZ(i,0));if(s(c,l(P,m,f,this.view))<this.squaredProximityTreshold(v)){if(this._parallelToPreviousCandidate(e,p))return;p.push(new n({coordinateHelper:m,referenceLine:e,lineStart:r,targetPoint:P,elevationInfo:f}))}}_parallelToPreviousCandidate(e,r){const i=e.leftVertex.pos,s=e.rightVertex.pos;for(const n of r)if(a(this._tmpProjection,s,n.constraint.start,n.constraint.end,i),t(this._tmpProjection,s)<o.parallelLineThreshold)return n.addReferenceLine(e),!0;return!1}}export{c as ParallelLineSnapper};