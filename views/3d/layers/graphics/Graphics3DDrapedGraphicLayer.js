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

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","./graphicUtils"],(function(e,t,r,i,n,o,s,a){var d=function(){function e(e,t,r){this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.boundingBox=r,this.type="draped",this.stage=null,this._visible=!1,this._addedToStage=!1,this._layerView=null,this.isElevationSource=!1}return e.prototype.initialize=function(e,t,r){this.stage=e,this._layerView=r,this._overlayRenderer=this._layerView.view.basemapTerrain.overlayManager.renderer},e.prototype.setVisibility=function(e){if(null!=this.stage){if(this._visible!==e){if(this._visible=e,e&&!this._addedToStage)return this._addedToStage=!0,this._overlayRenderer.addGeometries(this.renderGeometries,this._layerView,0),!0;if(!e&&!this._addedToStage)return!1;for(var t=0,r=this.renderGeometries;t<r.length;t++){r[t].instanceParameters.visible=this._visible}return this._overlayRenderer.updateGeometries(this.renderGeometries,this._layerView,1),!0}return!1}},e.prototype.destroy=function(){this.stage&&this._addedToStage&&this._overlayRenderer.removeGeometries(this.renderGeometries,this._layerView,1),this._addedToStage=!1,this._visible=!1,this.stage=null},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce((function(e,t){return Math.max(e,t.bsRadius)}),0)},e.prototype.getCenterObjectSpace=function(e){return void 0===e&&(e=n.vec3f64.create()),i.vec3.set(e,0,0,0)},e.prototype.getBoundingBoxObjectSpace=function(e){return void 0===e&&(e=o.create()),o.empty(e)},e.prototype.addObjectState=function(e,t){var r=this;0===e&&(this.renderGeometries.forEach((function(e){var i=e.addHighlight();t.addRenderGeometry(e,i,r)})),this._addedToStage&&this._overlayRenderer.updateHighlights(this.renderGeometries,this._layerView))},e.prototype.removeObjectState=function(e){this.renderGeometries.forEach((function(t){e.removeRenderGeometry(t)}))},e.prototype.removeRenderGeometryObjectState=function(e,t){e.removeHighlight(t),this._addedToStage&&this._overlayRenderer.updateHighlights(this.renderGeometries,this._layerView)},e.prototype.computeAttachmentOrigin=function(e){for(var t=0,r=this.renderGeometries;t<r.length;t++){r[t].computeAttachmentOrigin(u)&&(e.draped.origin[0]+=u[0],e.draped.origin[1]+=u[1],e.draped.num++)}},e.prototype.getProjectedBoundingBox=function(e,t,i,n,s){return r.__awaiter(this,void 0,void 0,(function(){var d,c,l,g;return r.__generator(this,(function(r){switch(r.label){case 0:for(o.empty(s),d=0;d<this.renderGeometries.length;d++)c=this.renderGeometries[d],this._getRenderGeometryProjectedBoundingRect(c,e,h,i),o.expand(s,h);if(!t)return[3,5];o.center(s,u),l=void 0,g=a.demResolutionForBoundingBox(s,t),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.service.queryElevation(u[0],u[1],n,g)];case 2:return l=r.sent(),[3,4];case 3:return r.sent(),l=null,[3,4];case 4:null!=l&&(s[2]=Math.min(s[2],l),s[5]=Math.max(s[5],l)),r.label=5;case 5:return[2,s]}}))}))},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,r,i){if(this.boundingBox)o.set(c,this.boundingBox);else{var n=e.center,s=e.bsRadius;c[0]=n[0]-s,c[1]=n[1]-s,c[2]=n[2]-s,c[3]=n[0]+s,c[4]=n[1]+s,c[5]=n[2]+s}return t(c,0,2),this.calculateRelativeScreenBounds&&i.push({location:o.center(c),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),o.toRect(c,r)},e}(),h=s.create(),c=o.create(),u=n.vec3f64.create();return d}));