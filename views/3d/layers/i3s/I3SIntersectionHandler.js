// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec3","../../support/orientedBoundingBox","../../webgl-engine/lib/intersectorUtils"],(function(e,n,t,r,i,o){Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e){this.type="I3S",this.layerUid=e.layerUid,this.sublayerUid=e.sublayerUid,this.collection=e.collection,this.forEach=e.forEach,this.slicePlane=e.slicePlaneEnabled,this.isGround=e.isGround}return e.prototype.intersect=function(e,n,s,l){var u=this,a=e.results,c=2===e.options.store,d=e.ray.direction,f=e.tolerance,b=function(e){return e},y=function(e){return e},p=o.getVerticalOffsetI3S(e.verticalOffset);t.isSome(p)&&(b=function(e){return p.applyToMbs(e)},y=function(e){return p.applyToObb(e)}),this.forEach((function(t,h){t.renderMbs&&!function(e,n,t,r){void 0===r&&(r=0);var i=e[3]+r,o=n[0]-e[0],s=n[1]-e[1],l=n[2]-e[2],u=t[0],a=t[1],c=t[2],d=u*o+a*s+c*l;return d*d-(u*u+a*a+c*c)*(o*o+s*s+l*l-i*i)>=0}(b(t.renderMbs),s,d,f)||t.renderObb&&!i.intersectLine(y(t.renderObb),s,d,f)||u.collection.intersect(h,s,l,f,p,(function(i,d,f,b){if(d>=0){if(null!=n&&!n(s,l,d))return;var y=function(e){e.intersector=u.type,e.target={type:"external",metadata:{layerUid:u.layerUid,sublayerUid:u.sublayerUid,nodeIndex:t.index,componentIndex:i}},e.dist=d,r.vec3.copy(e.normal,f),e.triangleNr=b};if((null==a.min.dist||d<a.min.dist)&&y(a.min),(null==a.max.dist||d>a.max.dist)&&y(a.max),c){var p=new o.IntersectorResult(e.ray);y(p),e.results.all.push(p)}u.isGround&&(null==a.ground.dist||d<a.ground.dist)&&y(a.ground)}}))}))},Object.defineProperty(e.prototype,"intersectionHandlerId",{get:function(){return this.layerUid},enumerable:!0,configurable:!0}),e}();n.I3SIntersectionHandler=s}));