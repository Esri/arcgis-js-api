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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","./graphicUtils"],function(e,t,r,i,n,o,s,u){var a=function(){function e(e,t,r){this.type="draped",this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.boundingBox=r,this.stage=null,this._visible=!1}return e.prototype.initialize=function(e,t){this.stage=t},e.prototype.setVisibility=function(e){if(null!=this.stage)return this._visible!==e&&(this._visible=e,this._visible?this.stage.getDrapedTextureRenderer().addRenderGeometries(this.renderGeometries):this.stage.getDrapedTextureRenderer().removeRenderGeometries(this.renderGeometries),!0)},e.prototype.destroy=function(){this.stage&&this._visible&&this.stage.getDrapedTextureRenderer().removeRenderGeometries(this.renderGeometries),this._visible=!1,this.stage=null},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(e,t){return Math.max(e,t.bsRadius)},0)},e.prototype.getCenterObjectSpace=function(){return[0,0,0]},e.prototype.addHighlight=function(e,t){var r=this.stage.getDrapedTextureRenderer();this.renderGeometries.forEach(function(i){var n=r.addRenderGeometryHighlight(i,t);e.addRenderGeometry(i,r,n)})},e.prototype.removeHighlight=function(e){this.renderGeometries.forEach(function(t){e.removeRenderGeometry(t)})},e.prototype.getProjectedBoundingBox=function(e,t,r,s){return n(this,void 0,void 0,function(){var n,a,c,p,l;return i(this,function(i){switch(i.label){case 0:for(o.empty(r),n=0;n<this.renderGeometries.length;n++)a=this.renderGeometries[n],this._getRenderGeometryProjectedBoundingRect(a,d,e,s),o.expand(r,d);if(!t)return[3,5];o.center(r,h),c=void 0,p=u.demResolutionForBoundingBox(r,t),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.service.queryElevation(h[0],h[1],p)];case 2:return c=i.sent(),[3,4];case 3:return l=i.sent(),c=null,[3,4];case 4:null!=c&&(r[2]=Math.min(r[2],c),r[5]=Math.max(r[5],c)),i.label=5;case 5:return[2,r]}})})},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,r,i){if(this.boundingBox)o.set(c,this.boundingBox);else{var n=e.center,s=e.bsRadius;c[0]=n[0]-s,c[1]=n[1]-s,c[2]=n[2]-s,c[3]=n[0]+s,c[4]=n[1]+s,c[5]=n[2]+s}return r(c,0,2),this.calculateRelativeScreenBounds&&i.push({location:o.center(c),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),o.toRect(c,t)},e}(),d=s.create(),c=o.create(),h=[0,0,0];return a});