/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec2","../../../chunks/vec2f64","./SnappingAlgorithm","./snappingUtils","./candidates/RightAngleTriangleSnappingCandidate","../../support/geometry2dUtils"],(function(e,t,n,i,o,r,s,a,p){"use strict";let c=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var c=r.prototype;return c.snapNewVertex=function(e,t){const n=t.editGeometryOperations.data.components[0],i=[],o=n.vertices.length;if("polygon"!==t.editGeometryOperations.data.type||o<2)return i;const r=n.vertices[0],s=n.vertices[o-1];return this._processCandidateProposal(r.pos,s.pos,e,t,i),i},c.snapExistingVertex=function(e,t){const i=[],o=n.unwrap(t.vertexHandle),r=o.component;return r.edges.length<2?i:"polyline"!==t.editGeometryOperations.data.type||0!==o.index&&o.index!==r.vertices.length-1?(this._processCandidateProposal(o.leftEdge.leftVertex.pos,o.rightEdge.rightVertex.pos,e,t,i),i):i},c._processCandidateProposal=function(e,t,n,r,c){if(!this.exceedsShortLineThreshold(e,t,r))return;const l=i.lerp(o.create(),e,t,.5),d=.5*i.distance(e,t),g=p.projectPointToCircle(o.create(),n,l,d),h=r.coordinateHelper,u=h.fromXYZ(g,h.getZ(n,0)),f=s.anyMapPointToScreenPoint(n,h,r.elevationInfo,this.view);s.squareDistance(f,s.anyMapPointToScreenPoint(u,h,r.elevationInfo,this.view))<this.squaredProximityTreshold(r.pointer)&&c.push(new a.RightAngleTriangleSnappingCandidate({coordinateHelper:h,targetPoint:u,point1:e,point2:t}))},r}(r.SnappingAlgorithm);e.RightAngleTriangleSnapper=c,Object.defineProperty(e,"__esModule",{value:!0})}));
