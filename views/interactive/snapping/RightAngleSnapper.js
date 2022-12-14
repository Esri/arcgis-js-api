/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unwrap as e}from"../../../core/maybe.js";import{g as t,h as r,u as i,v as o}from"../../../chunks/vec2.js";import{a as s,f as n}from"../../../chunks/vec2f64.js";import{SnappingAlgorithm as p}from"./SnappingAlgorithm.js";import{RayConstraint as g}from"./SnappingConstraint.js";import{squareDistance as h}from"./snappingUtils.js";import{RightAngleSnappingCandidate as a,OtherVertexType as d}from"./candidates/RightAngleSnappingCandidate.js";import{anyMapPointToScreenPoint as c}from"../support/viewUtils.js";class f extends p{constructor(){super(...arguments),this._tmp=s()}snapNewVertex(e,t){const r=t.editGeometryOperations.data.components[0],i=r.vertices.length,o=[];if(i<2)return o;const s=c(e,t.coordinateHelper,t.elevationInfo,this.view),n=r.vertices[i-1];this._checkForSnappingCandidate(o,n.leftEdge,n.pos,e,n.leftEdge.leftVertex.pos,n.pos,t,e,s);const p=r.vertices[0];return this._checkForSnappingCandidate(o,p.rightEdge,p.pos,e,p.rightEdge.rightVertex.pos,p.pos,t,e,s),o}snapExistingVertex(t,r){const i=[],o=e(r.vertexHandle),s=o.component,n=s.vertices.length;if(n<3)return i;const p=c(t,r.coordinateHelper,r.elevationInfo,this.view),g=o.leftEdge,h=o.rightEdge,a=s.vertices[0],d=s.vertices[n-1];if(!g)return this._checkForSnappingCandidate(i,a.rightEdge.rightVertex.rightEdge,a.rightEdge.rightVertex.pos,t,a.rightEdge.rightVertex.rightEdge.rightVertex.pos,a.rightEdge.rightVertex.pos,r,t,p),i;if(!h)return this._checkForSnappingCandidate(i,d.leftEdge.leftVertex.leftEdge,d.leftEdge.leftVertex.pos,t,d.leftEdge.leftVertex.leftEdge.leftVertex.pos,d.leftEdge.leftVertex.pos,r,t,p),i;if(g&&g.leftVertex.leftEdge){const e=g.leftVertex.leftEdge;this._checkForSnappingCandidate(i,e,g.leftVertex.pos,t,e.leftVertex.pos,g.leftVertex.pos,r,t,p)}if(h&&h.rightVertex.rightEdge){const e=h.rightVertex.rightEdge;this._checkForSnappingCandidate(i,e,h.rightVertex.pos,t,e.rightVertex.pos,h.rightVertex.pos,r,t,p)}return i}_checkForSnappingCandidate(e,p,f,l,x,V,m,E,v){if(!this.edgeExceedsShortLineThreshold(p,m))return;t(this._tmp,p.rightVertex.pos,p.leftVertex.pos);const u=n(this._tmp[1],-this._tmp[0]),_=r(u,t(this._tmp,l,f))/i(u),{coordinateHelper:S,elevationInfo:C,pointer:k}=m,j=S.fromXYZ(o(s(),V,u,_),S.getZ(E,0));h(v,c(j,S,C,this.view))<this.squaredProximityTreshold(k)&&e.push(new a({coordinateHelper:S,targetPoint:j,constraint:new g(S,V,o(S.createVector(),V,u,Math.sign(_))),previousVertex:x,otherVertex:V,otherVertexType:d.CENTER,elevationInfo:C}))}}export{f as RightAngleSnapper};