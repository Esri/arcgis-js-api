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

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/awaiterHelper","../../../core/maybe","../../../core/workers","../../../core/libs/gl-matrix-2/vec3f64","./ElevationSamplerWorker","../../../layers/support/ElevationSampler","../../../views/3d/support/geometryUtils","../../../views/3d/support/geometryUtils/triangle"],(function(e,t,r,n,a,o,i,u,l,s,c,p){Object.defineProperty(t,"__esModule",{value:!0}),t.create=function(e,t){return a(this,void 0,void 0,(function(){var n,a;return r(this,(function(r){switch(r.label){case 0:return[4,m()];case 1:return n=r.sent(),[4,v.createIndex(e,n)];case 2:return a=r.sent(),function(e){--d,o.isSome(e)&&0===d&&(y=setTimeout((function(){e.close(),x=null,y=0}),h))}(n),[2,new f(e,a,t)]}}))}))};var f=function(e){function t(t,r,n){var a=e.call(this)||this;return a.rindex=r,a.demResolution={min:0,max:0},a.spatialReference=t.spatialReference.clone(),a.extent=t.extent.clone(),a.noDataValue=o.isSome(n)&&n.noDataValue||0,a}return n(t,e),t.prototype.elevationAt=function(e){var t=this.projectIfRequired(e,this.spatialReference),r=Number.NEGATIVE_INFINITY;return c.ray.fromValues([t.x,t.y,0],[0,0,-1],I),this.rindex.search({minX:t.x,maxX:t.x,minY:t.y,maxY:t.y},(function(e){p.intersectRay(e,I,S)&&S[2]>r&&(r=S[2])})),r===Number.NEGATIVE_INFINITY?this.noDataValue:r},t}(s.ElevationSamplerBase);function m(){return++d,y&&(clearTimeout(y),y=0),x||(x=i.open("ElevationSamplerWorker").catch((function(){return null})))}var v=new l.default,d=0,x=null,y=0,h=1e4,I=c.ray.fromValues([0,0,0],[0,0,-1]),S=u.vec3f64.create()}));