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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","./graphicUtils","../../webgl-engine/lib/ComponentUtils"],function(e,t,r,i,n,o,s,d,a,u,c){var h=function(){function e(e,t,r){this.type="draped",this._addedToStage=!1,this.isElevationSource=!1,this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.boundingBox=r,this.stage=null,this._visible=!1}return e.prototype.initialize=function(e,t){this.stage=t},e.prototype.setVisibility=function(e){if(null!=this.stage){if(this._visible!==e){this._visible=e;var t=this.stage.renderView.getDrapedRenderer();if(e&&!this._addedToStage)return this._addedToStage=!0,t.addRenderGeometries(this.renderGeometries),!0;if(!e&&!this._addedToStage)return!1;for(var r=0,i=this.renderGeometries;r<i.length;r++){var n=i[r],o=n.instanceParameters.componentVisibilities,s=e?c.unhideAllComponents(o):c.hideAllComponents(o);n.instanceParameters.componentVisibilities=s}return t.updateRenderGeometries(this.renderGeometries,1),!0}return!1}},e.prototype.destroy=function(){this.stage&&this._addedToStage&&this.stage.renderView.getDrapedRenderer().removeRenderGeometries(this.renderGeometries),this._addedToStage=!1,this._visible=!1,this.stage=null},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(e,t){return Math.max(e,t.bsRadius)},0)},e.prototype.getCenterObjectSpace=function(e){return void 0===e&&(e=s.vec3f64.create()),o.vec3.set(e,0,0,0)},e.prototype.getBoundingBoxObjectSpace=function(e){return void 0===e&&(e=d.create()),d.empty(e)},e.prototype.addHighlight=function(e,t){var r=this;if(this.renderGeometries.forEach(function(i){var n=i.addHighlight(t);e.addRenderGeometry(i,n,r)}),this._addedToStage){this.stage.renderView.getDrapedRenderer().updateHighlights(this.renderGeometries)}},e.prototype.removeHighlight=function(e){this.renderGeometries.forEach(function(t){e.removeRenderGeometry(t)})},e.prototype.removeRenderGeometryHighlight=function(e,t){if(e.removeHighlight(t),this._addedToStage){this.stage.renderView.getDrapedRenderer().updateHighlights(this.renderGeometries)}},e.prototype.getProjectedBoundingBox=function(e,t,r,o,s){return n(this,void 0,void 0,function(){var n,a,c,h,l;return i(this,function(i){switch(i.label){case 0:for(d.empty(s),n=0;n<this.renderGeometries.length;n++)a=this.renderGeometries[n],this._getRenderGeometryProjectedBoundingRect(a,e,g,r),d.expand(s,g);if(!t)return[3,5];d.center(s,p),c=void 0,h=u.demResolutionForBoundingBox(s,t),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.service.queryElevation(p[0],p[1],o,h)];case 2:return c=i.sent(),[3,4];case 3:return l=i.sent(),c=null,[3,4];case 4:null!=c&&(s[2]=Math.min(s[2],c),s[5]=Math.max(s[5],c)),i.label=5;case 5:return[2,s]}})})},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,r,i){if(this.boundingBox)d.set(l,this.boundingBox);else{var n=e.center,o=e.bsRadius;l[0]=n[0]-o,l[1]=n[1]-o,l[2]=n[2]-o,l[3]=n[0]+o,l[4]=n[1]+o,l[5]=n[2]+o}return t(l,0,2),this.calculateRelativeScreenBounds&&i.push({location:d.center(l),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),d.toRect(l,r)},e}(),g=a.create(),l=d.create(),p=[0,0,0];return h});