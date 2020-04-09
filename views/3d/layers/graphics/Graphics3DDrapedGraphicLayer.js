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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","./graphicUtils","../../webgl-engine/lib/ComponentUtils"],(function(e,t,r,i,n,o,s,a,d,c,h){var u=function(){function e(e,t,r){this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.boundingBox=r,this.type="draped",this.stage=null,this._visible=!1,this._addedToStage=!1,this._layerView=null,this.isElevationSource=!1}return e.prototype.initialize=function(e,t,r){this.stage=e,this._layerView=r,this._overlayRenderer=this._layerView.view.basemapTerrain.overlayManager.renderer},e.prototype.setVisibility=function(e){if(null!=this.stage){if(this._visible!==e){if(this._visible=e,e&&!this._addedToStage)return this._addedToStage=!0,this._overlayRenderer.addGeometries(this.renderGeometries,this._layerView,0),!0;if(!e&&!this._addedToStage)return!1;for(var t=0,r=this.renderGeometries;t<r.length;t++){var i=r[t],n=i.instanceParameters.componentVisibilities,o=e?h.unhideAllComponents(n):h.hideAllComponents(n);i.instanceParameters.componentVisibilities=o}return this._overlayRenderer.updateGeometries(this.renderGeometries,this._layerView,1),!0}return!1}},e.prototype.destroy=function(){this.stage&&this._addedToStage&&this._overlayRenderer.removeGeometries(this.renderGeometries,this._layerView,1),this._addedToStage=!1,this._visible=!1,this.stage=null},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce((function(e,t){return Math.max(e,t.bsRadius)}),0)},e.prototype.getCenterObjectSpace=function(e){return void 0===e&&(e=s.vec3f64.create()),o.vec3.set(e,0,0,0)},e.prototype.getBoundingBoxObjectSpace=function(e){return void 0===e&&(e=a.create()),a.empty(e)},e.prototype.addObjectState=function(e,t){var r=this;0===e&&(this.renderGeometries.forEach((function(e){var i=e.addHighlight();t.addRenderGeometry(e,i,r)})),this._addedToStage&&this._overlayRenderer.updateHighlights(this.renderGeometries,this._layerView))},e.prototype.removeObjectState=function(e){this.renderGeometries.forEach((function(t){e.removeRenderGeometry(t)}))},e.prototype.removeRenderGeometryObjectState=function(e,t){e.removeHighlight(t),this._addedToStage&&this._overlayRenderer.updateHighlights(this.renderGeometries,this._layerView)},e.prototype.computeAttachmentOrigin=function(e){for(var t=0,r=this.renderGeometries;t<r.length;t++){r[t].computeAttachmentOrigin(g)&&(e.draped.origin[0]+=g[0],e.draped.origin[1]+=g[1],e.draped.num++)}},e.prototype.getProjectedBoundingBox=function(e,t,r,o,s){return n(this,void 0,void 0,(function(){var n,d,h,u;return i(this,(function(i){switch(i.label){case 0:for(a.empty(s),n=0;n<this.renderGeometries.length;n++)d=this.renderGeometries[n],this._getRenderGeometryProjectedBoundingRect(d,e,l,r),a.expand(s,l);if(!t)return[3,5];a.center(s,g),h=void 0,u=c.demResolutionForBoundingBox(s,t),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.service.queryElevation(g[0],g[1],o,u)];case 2:return h=i.sent(),[3,4];case 3:return i.sent(),h=null,[3,4];case 4:null!=h&&(s[2]=Math.min(s[2],h),s[5]=Math.max(s[5],h)),i.label=5;case 5:return[2,s]}}))}))},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,r,i){if(this.boundingBox)a.set(p,this.boundingBox);else{var n=e.center,o=e.bsRadius;p[0]=n[0]-o,p[1]=n[1]-o,p[2]=n[2]-o,p[3]=n[0]+o,p[4]=n[1]+o,p[5]=n[2]+o}return t(p,0,2),this.calculateRelativeScreenBounds&&i.push({location:a.center(p),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),a.toRect(p,r)},e}(),l=d.create(),p=a.create(),g=s.vec3f64.create();return u}));