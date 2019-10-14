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

define(["require","exports","../../../../core/has","../../../../core/now","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/geometryUtils","./intersectorUtils"],function(r,e,t,n,i,a,s,o,d){var c=t("dojo-debug-messages"),u=1e-5,l=i.mat4f64.create();return function(){function r(r){this.enable=new d.EnableIntersectorOptions,this.results=new d.IntersectorResults,this.transform=new d.IntersectorTransform,this.performanceInfo={queryDuration:0,numObjectsTested:0},this.tolerance=u,this._ray={origin:s.vec3f64.create(),direction:s.vec3f64.create()},this._rayEndPoint=s.vec3f64.create(),this._rayStartPointTransformed=s.vec3f64.create(),this._rayEndPointTransformed=s.vec3f64.create(),this.viewingMode=r||"global"}return Object.defineProperty(r.prototype,"ray",{get:function(){return this._ray},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"rayBeginPoint",{get:function(){return this._ray.origin},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"rayEndPoint",{get:function(){return this._rayEndPoint},enumerable:!0,configurable:!0}),r.prototype.intersect=function(r,e,t,i,s,d,l,f,m,y){var h=this;void 0!==m&&!0!==m||(this._numObjectsTested=0,o.ray.fromPoints(e,t,this._ray),this.results.init(this._ray)),this.point=i,this.camera=s,this.enable.selectionMode=l,this.filterPredicate=f,this.tolerance=null==d?u:d,a.vec3.add(this._rayEndPoint,this._ray.origin,this._ray.direction);var p;c&&(p=n());var v=y?function(r){y(r)&&h.intersectObject(r)}:function(r){h.intersectObject(r)};if(r&&r.length>0)for(var b=0,g=r;b<g.length;b++){var _=g[b],O=_.getSpatialQueryAccelerator?_.getSpatialQueryAccelerator():void 0;if(O)O.forEachAlongRay(this._ray.origin,this._ray.direction,v),l&&O.forEachDegenerateObject(v);else for(var L=_.getObjects(),P=0,E=L;P<E.length;P++){var T=E[P];v(T)}}this.sortResults(),c&&(this.performanceInfo.queryDuration=n()-p,this.performanceInfo.numObjectsTested=this._numObjectsTested)},r.prototype.intersectObject=function(r){var e=this;this._numObjectsTested++;var t=r.geometryRecords;if(t)for(var n,i=r.id,s=r.objectTransformation,o=this,c=0,u=t;c<u.length;c++){var f=u[c];!function(t){var c=t.geometry,u=t.material,f=t.instanceParameters;if(f.hidden)return"continue";n=c.id,o.transform.setAndInvalidateLazyTransforms(s,t.getShaderTransformation()),a.vec3.transformMat4(o._rayStartPointTransformed,o._ray.origin,o.transform.inverse),a.vec3.transformMat4(o._rayEndPointTransformed,o._rayEndPoint,o.transform.inverse);var m=o.transform.transform;u.intersect(c,f,o.transform.transform,o,o._rayStartPointTransformed,o._rayEndPointTransformed,function(t,a,s,o,c,u){if(t>=0){if(null!=e.filterPredicate&&!e.filterPredicate(e._ray.origin,e._rayEndPoint,t))return;if(c)return void((null==e.results.hud.dist||t<e.results.hud.dist)&&e.results.hud.set(r,i,t,a,l,o,u,n,s));var f=function(e){return e.set(r,i,t,a,m,o,null,n,s)};if((null==e.results.min.drapedLayerOrder||o>=e.results.min.drapedLayerOrder)&&(null==e.results.min.dist||t<e.results.min.dist)&&f(e.results.min),(null==e.results.max.drapedLayerOrder||o<e.results.max.drapedLayerOrder)&&(null==e.results.max.dist||t>e.results.max.dist)&&f(e.results.max),e.enable.storeAll){var y=new d.IntersectorResult(e._ray);f(y),e.results.all.push(y)}}},t.shaderTransformation)}(f)}},r.prototype.sortResults=function(){this.results.all.sort(function(r,e){return r.dist!==e.dist?r.dist-e.dist:r.drapedLayerOrder!==e.drapedLayerOrder?(void 0!==r.drapedLayerOrder?r.drapedLayerOrder:Number.MAX_VALUE)-(void 0!==e.drapedLayerOrder?e.drapedLayerOrder:Number.MAX_VALUE):(void 0!==e.drapedLayerGraphicOrder?e.drapedLayerGraphicOrder:Number.MIN_VALUE)-(void 0!==r.drapedLayerGraphicOrder?r.drapedLayerGraphicOrder:Number.MIN_VALUE)})},r.DEFAULT_TOLERANCE=u,r}()});