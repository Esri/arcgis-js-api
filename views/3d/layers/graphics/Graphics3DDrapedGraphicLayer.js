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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","./graphicUtils"],function(e,t,r,i,n,o,s,a,u){var c=function(){function e(e,t,r){this.type="draped",this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.boundingBox=r,this.stage=null,this._visible=!1}return e.prototype.initialize=function(e,t){this.stage=t},e.prototype.setVisibility=function(e){if(null!=this.stage)return this._visible!==e&&(this._visible=e,this._visible?this.stage.getDrapedTextureRenderer().addRenderGeometries(this.renderGeometries):this.stage.getDrapedTextureRenderer().removeRenderGeometries(this.renderGeometries),!0)},e.prototype.destroy=function(){this.stage&&this._visible&&this.stage.getDrapedTextureRenderer().removeRenderGeometries(this.renderGeometries),this._visible=!1,this.stage=null},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(e,t){return Math.max(e,t.bsRadius)},0)},e.prototype.getCenterObjectSpace=function(e){return void 0===e&&(e=o.vec3f64.create()),o.vec3.set(e,0,0,0)},e.prototype.getBoundingBoxObjectSpace=function(e){return void 0===e&&(e=s.create()),s.empty(e)},e.prototype.addHighlight=function(e,t){var r=this.stage.getDrapedTextureRenderer();this.renderGeometries.forEach(function(i){var n=r.addRenderGeometryHighlight(i,t);e.addRenderGeometry(i,r,n)})},e.prototype.removeHighlight=function(e){this.renderGeometries.forEach(function(t){e.removeRenderGeometry(t)})},e.prototype.getProjectedBoundingBox=function(e,t,r,o){return n(this,void 0,void 0,function(){var n,a,c,h,l;return i(this,function(i){switch(i.label){case 0:for(s.empty(o),n=0;n<this.renderGeometries.length;n++)a=this.renderGeometries[n],this._getRenderGeometryProjectedBoundingRect(a,e,d,r),s.expand(o,d);if(!t)return[3,5];s.center(o,p),c=void 0,h=u.demResolutionForBoundingBox(o,t),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.service.queryElevation(p[0],p[1],h)];case 2:return c=i.sent(),[3,4];case 3:return l=i.sent(),c=null,[3,4];case 4:null!=c&&(o[2]=Math.min(o[2],c),o[5]=Math.max(o[5],c)),i.label=5;case 5:return[2,o]}})})},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,r,i){if(this.boundingBox)s.set(h,this.boundingBox);else{var n=e.center,o=e.bsRadius;h[0]=n[0]-o,h[1]=n[1]-o,h[2]=n[2]-o,h[3]=n[0]+o,h[4]=n[1]+o,h[5]=n[2]+o}return t(h,0,2),this.calculateRelativeScreenBounds&&i.push({location:s.center(h),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),s.toRect(h,r)},e}(),d=a.create(),h=s.create(),p=[0,0,0];return c});