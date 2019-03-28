// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/has","../../../../core/now","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../support/geometryUtils","./intersectorUtils"],function(r,e,t,n,i,a,s,o,d){var c=t("dojo-debug-messages"),u=i.mat4f64.create();return function(){function r(r){this.enable=new d.EnableIntersectorOptions,this.results=new d.IntersectorResults,this.transform=new d.IntersectorTransform,this.performanceInfo={queryDuration:0,numObjectsTested:0},this._ray={origin:s.vec3f64.create(),direction:s.vec3f64.create()},this._rayEndPoint=s.vec3f64.create(),this._rayStartPointTransformed=s.vec3f64.create(),this._rayEndPointTransformed=s.vec3f64.create(),this.viewingMode=r||"global"}return Object.defineProperty(r.prototype,"ray",{get:function(){return this._ray},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"rayBeginPoint",{get:function(){return this._ray.origin},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"rayEndPoint",{get:function(){return this._rayEndPoint},enumerable:!0,configurable:!0}),r.prototype.intersect=function(r,e,t,i,s,d,u,l,f){var m=this;void 0!==f&&!0!==f||(this._numObjectsTested=0,o.ray.fromPoints(e,t,this._ray),this.results.init(this._ray)),this.point=i,this.camera=s,this.enable.selectionMode=u,this.filterPredicate=l,this.tolerance=null==d?1e-5:d,a.vec3.add(this._rayEndPoint,this._ray.origin,this._ray.direction);var y;if(c&&(y=n()),r&&r.length>0)for(var h=0,p=r;h<p.length;h++){var v=p[h],b=v.getSpatialQueryAccelerator?v.getSpatialQueryAccelerator():void 0;if(b){var g=function(r){m.intersectObject(r)};b.forEachAlongRay(this._ray.origin,this._ray.direction,g),u&&b.forEachDegenerateObject(g)}else for(var _=v.getObjects(),O=0,L=_;O<L.length;O++){var P=L[O];this.intersectObject(P)}}this.sortResults(),c&&(this.performanceInfo.queryDuration=n()-y,this.performanceInfo.numObjectsTested=this._numObjectsTested)},r.prototype.intersectObject=function(r){var e=this;this._numObjectsTested++;for(var t,n=r.id,i=r.getGeometryRecords(),s=r.objectTransformation,o=this,c=0;c<i.length;c++)!function(c){var l=i[c],f=l.geometry,m=l.material,y=l.instanceParameters;if(y.hidden)return"continue";t=f.id,o.transform.setAndInvalidateLazyTransforms(s,l.getShaderTransformation()),a.vec3.transformMat4(o._rayStartPointTransformed,o._ray.origin,o.transform.inverse),a.vec3.transformMat4(o._rayEndPointTransformed,o._rayEndPoint,o.transform.inverse);var h=o.transform.transform;m.intersect(f,y,o.transform.transform,o,o._rayStartPointTransformed,o._rayEndPointTransformed,function(i,a,s,o,c,l){if(i>=0){if(null!=e.filterPredicate&&!e.filterPredicate(e._ray.origin,e._rayEndPoint,i))return;if(c)return void((null==e.results.hud.dist||i<e.results.hud.dist)&&e.results.hud.set(r,n,i,a,u,o,l,t,s));var f=function(e){return e.set(r,n,i,a,h,o,null,t,s)};if((null==e.results.min.drapedLayerOrder||o>=e.results.min.drapedLayerOrder)&&(null==e.results.min.dist||i<e.results.min.dist)&&f(e.results.min),(null==e.results.max.drapedLayerOrder||o<e.results.max.drapedLayerOrder)&&(null==e.results.max.dist||i>e.results.max.dist)&&f(e.results.max),e.enable.storeAll){var m=new d.IntersectorResult(e._ray);f(m),e.results.all.push(m)}}},l.shaderTransformation)}(c)},r.prototype.sortResults=function(){this.results.all.sort(function(r,e){return r.dist!==e.dist?r.dist-e.dist:r.drapedLayerOrder!==e.drapedLayerOrder?(void 0!==r.drapedLayerOrder?r.drapedLayerOrder:Number.MAX_VALUE)-(void 0!==e.drapedLayerOrder?e.drapedLayerOrder:Number.MAX_VALUE):(void 0!==e.drapedLayerGraphicOrder?e.drapedLayerGraphicOrder:Number.MIN_VALUE)-(void 0!==r.drapedLayerGraphicOrder?r.drapedLayerGraphicOrder:Number.MIN_VALUE)})},r.DEFAULT_TOLERANCE=1e-5,r}()});