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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec3","../../support/orientedBoundingBox","../../webgl-engine/lib/intersectorUtils"],(function(e,t,n,r,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I3SIntersectionHandler=void 0;var s=function(){function e(e){this.type="I3S",this.layerUid=e.layerUid,this.sublayerUid=e.sublayerUid,this.collection=e.collection,this.forEach=e.forEach,this.slicePlane=e.slicePlaneEnabled,this.isGround=e.isGround}return e.prototype.intersect=function(e,t,s,l){var u=this,c=e.results,a=2===e.options.store,d=e.ray.direction,f=e.tolerance,b=function(e){return e},y=function(e){return e},p=o.getVerticalOffsetI3S(e.verticalOffset);n.isSome(p)&&(b=function(e){return p.applyToMbs(e)},y=function(e){return p.applyToObb(e)}),this.forEach((function(m,g){if(n.isSome(m.geometryObb)){if(!i.intersectLine(y(m.geometryObb),s,d,f))return}else if(n.isSome(m.serviceObbInRenderSR)){if(!i.intersectLine(y(m.serviceObbInRenderSR),s,d,f))return}else if(!function(e,t,n,r){void 0===r&&(r=0);var i=e[3]+r,o=t[0]-e[0],s=t[1]-e[1],l=t[2]-e[2],u=n[0],c=n[1],a=n[2],d=u*o+c*s+a*l;return d*d-(u*u+c*c+a*a)*(o*o+s*s+l*l-i*i)>=0}(b(m.renderMbs),s,d,f))return;u.collection.intersect(g,s,l,f,p,(function(n,i,d,f){if(i>=0){if(null!=t&&!t(s,l,i))return;var b=function(e){e.intersector=u.type,e.target={type:"external",metadata:{layerUid:u.layerUid,sublayerUid:u.sublayerUid,nodeIndex:m.index,componentIndex:n}},e.dist=i,r.vec3.copy(e.normal,d),e.triangleNr=f};if(u.isGround&&(null==c.ground.dist||i<c.ground.dist)&&b(c.ground),e.options.isFiltered)return;if((null==c.min.dist||i<c.min.dist)&&b(c.min),(null==c.max.dist||i>c.max.dist)&&b(c.max),a){var y=new o.IntersectorResult(e.ray);b(y),e.results.all.push(y)}}}))}))},Object.defineProperty(e.prototype,"intersectionHandlerId",{get:function(){return this.layerUid},enumerable:!1,configurable:!0}),e}();t.I3SIntersectionHandler=s}));