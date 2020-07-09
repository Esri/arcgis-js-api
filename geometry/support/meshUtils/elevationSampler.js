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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/maybe","../../../core/workers","../../../core/libs/gl-matrix-2/vec3f64","./ElevationSamplerWorker","../../../layers/support/ElevationSampler","../../../views/3d/support/geometryUtils","../../../views/3d/support/geometryUtils/triangle"],(function(e,t,r,n,a,i,o,u,l,s){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var a,i;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,f()];case 1:return a=r.sent(),[4,m.createIndex(e,a)];case 2:return i=r.sent(),function(e){--p,n.isSome(e)&&0===p&&(d=setTimeout((function(){e.close(),v=null,d=0}),x))}(a),[2,new c(e,i,t)]}}))}))};var c=function(e){function t(t,r,a){var i=e.call(this)||this;return i.rindex=r,i.demResolution={min:0,max:0},i.spatialReference=t.spatialReference.clone(),i.extent=t.extent.clone(),i.noDataValue=n.isSome(a)&&a.noDataValue||0,i}return r.__extends(t,e),t.prototype.elevationAt=function(e){var t=this.projectIfRequired(e,this.spatialReference),r=Number.NEGATIVE_INFINITY;return l.ray.fromValues([t.x,t.y,0],[0,0,-1],y),this.rindex.search({minX:t.x,maxX:t.x,minY:t.y,maxY:t.y},(function(e){s.intersectRay(e,y,h)&&h[2]>r&&(r=h[2])})),r===Number.NEGATIVE_INFINITY?this.noDataValue:r},t}(u.ElevationSamplerBase);function f(){return++p,d&&(clearTimeout(d),d=0),v||(v=a.open("ElevationSamplerWorker").catch((function(){return null})))}var m=new o.default,p=0,v=null,d=0,x=1e4,y=l.ray.fromValues([0,0,0],[0,0,-1]),h=i.vec3f64.create()}));