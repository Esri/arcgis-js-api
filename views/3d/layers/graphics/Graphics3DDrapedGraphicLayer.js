// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","./ElevationInfo","../../support/aaBoundingBox","../../support/aaBoundingRect","../../webgl-engine/Stage"],function(e,t,i,r,n,s,o,u,a){var h=function(){function e(e,t,i,r,n,o){this.needsElevationUpdates=!1,this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.uniqueMaterials=i,this.uniqueTextures=r,this.boundingBox=n,this.elevationInfo=new s(o),this.stage=null,this._visible=!1}return e.prototype.initialize=function(e,t){if(this.stage=t,this.uniqueMaterials)for(var i=0;i<this.uniqueMaterials.length;i++)t.add(a.ModelContentType.MATERIAL,this.uniqueMaterials[i]);if(this.uniqueTextures)for(var i=0;i<this.uniqueTextures.length;i++)t.add(a.ModelContentType.TEXTURE,this.uniqueTextures[i])},e.prototype.isDraped=function(){return!0},e.prototype.setVisibility=function(e){return null!=this.stage?this._visible!==e?(this._visible=e,this._visible?this.stage.getTextureGraphicsRenderer().addRenderGeometries(this.renderGeometries):this.stage.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),!0):!1:void 0},e.prototype.destroy=function(){if(this.stage){var e=this.stage;if(this._visible&&e.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),this._visible=!1,this.uniqueMaterials)for(var t=0;t<this.uniqueMaterials.length;t++)e.remove(a.ModelContentType.MATERIAL,this.uniqueMaterials[t].getId());if(this.uniqueTextures)for(var t=0;t<this.uniqueTextures.length;t++)e.remove(a.ModelContentType.TEXTURE,this.uniqueTextures[t].getId());this.stage=null}},e.prototype.alignWithElevation=function(e,t,i){},e.prototype.setDrawOrder=function(e,t,i){var r=this;this.uniqueMaterials&&this.uniqueMaterials.forEach(function(i){i.setRenderPriority(e),r._visible&&(t[i.getId()]=!0)})},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(e,t){return Math.max(e,t.bsRadius)},0)},e.prototype.getCenterObjectSpace=function(){return[0,0,0]},e.prototype.addHighlight=function(e,t){var i=this.stage.getTextureGraphicsRenderer();this.renderGeometries.forEach(function(r){var n=i.addRenderGeometryHighlight(r,t);e.addRenderGeometry(r,i,n)})},e.prototype.removeHighlight=function(e){this.renderGeometries.forEach(function(t){e.removeRenderGeometry(t)})},e.prototype.getProjectedBoundingBox=function(e,t,i,s){return n(this,void 0,void 0,function(){var n,u,a,h;return r(this,function(r){switch(r.label){case 0:for(o.set(i,o.NEGATIVE_INFINITY),n=0;n<this.renderGeometries.length;n++)u=this.renderGeometries[n],this._getRenderGeometryProjectedBoundingRect(u,d,e,s),o.expand(i,d);if(!t)return[3,5];o.center(i,c),a=void 0,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.queryElevation(c[0],c[1])];case 2:return a=r.sent(),[3,4];case 3:return h=r.sent(),a=null,[3,4];case 4:null!=a&&(i[2]=Math.min(i[2],a),i[5]=Math.max(i[5],a)),r.label=5;case 5:return[2,i]}})})},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,i,r){if(this.boundingBox)o.set(l,this.boundingBox);else{var n=e.center,s=e.bsRadius;l[0]=n[0]-s,l[1]=n[1]-s,l[2]=n[2]-s,l[3]=n[0]+s,l[4]=n[1]+s,l[5]=n[2]+s}return i(l,0,2),this.calculateRelativeScreenBounds&&r.push({location:o.center(l),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),o.toRect(l,t)},e}(),d=u.create(),l=[0,0,0,0,0,0],c=[0,0,0];return h});