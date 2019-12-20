// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec3","../../support/orientedBoundingBox","../../webgl-engine/lib/intersectorUtils"],function(e,t,n,i,r,o){function s(e,t,n,i){void 0===i&&(i=0);var r=e[3]+i,o=t[0]-e[0],s=t[1]-e[1],l=t[2]-e[2],a=n[0],c=n[1],u=n[2],d=a*a+c*c+u*u,f=a*o+c*s+u*l;return f*f-d*(o*o+s*s+l*l-r*r)>=0}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e){this.type="I3S",this.layerUid=e.layerUid,this.sublayerUid=e.sublayerUid,this.collection=e.collection,this.forEach=e.forEach,this.slicePlaneEnabled=e.slicePlaneEnabled,this.intersectionHandlerId=this.layerUid}return e.prototype.intersect=function(e,t,l,a){var c=this,u=e.results,d=2===e.options.store,f=e.ray.direction,b=e.tolerance,y=function(e){return e},p=function(e){return e},h=n.isSome(e.options.verticalOffset)?e.options.verticalOffset.i3s:null;n.isSome(h)&&(y=function(e){return h.applyToMbs(e)},p=function(e){return h.applyToObb(e)}),this.forEach(function(n,m){n.renderMbs&&!s(y(n.renderMbs),l,f,b)||n.renderObb&&!r.intersectLine(p(n.renderObb),l,f,b)||c.collection.intersect(m,l,a,b,h,function(r,s,f,b){if(s>=0){if(null!=t&&!t(l,a,s))return;var y=function(e){e.intersector=c.type,e.target={type:"external",metadata:{layerUid:c.layerUid,sublayerUid:c.sublayerUid,nodeIndex:n.index,componentIndex:r}},e.dist=s,i.vec3.copy(e.normal,f),e.triangleNr=b};if((null==u.min.dist||s<u.min.dist)&&y(u.min),(null==u.max.dist||s>u.max.dist)&&y(u.max),d){var p=new o.IntersectorResult(e.ray);y(p),e.results.all.push(p)}}})})},e}();t.I3SIntersectionHandler=l});