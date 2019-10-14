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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/awaiterHelper","../../../core/maybe","../../../core/requireUtils","../../../core/workers","../../../core/libs/gl-matrix-2/vec3f64","./ElevationSamplerWorker","../../../layers/support/ElevationSampler","../../../views/3d/support/geometryUtils","../../../views/3d/support/geometryUtils/triangle","module"],function(e,t,r,n,o,i,a,u,l,s,c,p,f,m){function d(e,t){return o(this,void 0,void 0,function(){var n,o;return r(this,function(r){switch(r.label){case 0:return[4,v()];case 1:return n=r.sent(),[4,I.createIndex(e,n)];case 2:return o=r.sent(),x(n),[2,new h(e,o,t)]}})})}function v(){return++S,y(),E||(E=u.open(a.getAbsMid("./ElevationSamplerWorker",e,m)).catch(function(e){return null}))}function x(e){--S,i.isSome(e)&&0===S&&(N=setTimeout(function(){e.close(),E=null,N=0},b))}function y(){N&&(clearTimeout(N),N=0)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=d;var h=function(e){function t(t,r,n){var o=e.call(this)||this;return o.rindex=r,o.demResolution={min:0,max:0},o.spatialReference=t.spatialReference.clone(),o.extent=t.extent.clone(),o.noDataValue=i.isSome(n)&&n.noDataValue||0,o}return n(t,e),t.prototype.elevationAt=function(e){var t=this.projectIfRequired(e,this.spatialReference),r=Number.NEGATIVE_INFINITY;return p.ray.fromValues([t.x,t.y,0],[0,0,-1],w),this.rindex.search({minX:t.x,maxX:t.x,minY:t.y,maxY:t.y},function(e){f.intersectRay(e,w,V)&&V[2]>r&&(r=V[2])}),r===Number.NEGATIVE_INFINITY?this.noDataValue:r},t}(c.ElevationSamplerBase),I=new s.default,S=0,E=null,N=0,b=1e4,w=p.ray.fromValues([0,0,0],[0,0,-1]),V=l.vec3f64.create()});