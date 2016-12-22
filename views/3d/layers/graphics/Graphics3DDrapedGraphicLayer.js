// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../webgl-engine/Stage","../../webgl-engine/lib/Util","../../support/aaBoundingBox","../../support/aaBoundingRect"],function(e,t,i,r,n,s,o){var u=n.assert,a=function(){function e(e,t,i,r,n){this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.uniqueMaterials=i,this.uniqueTextures=r,this.boundingBox=n,this.stage=null,this._visibilityFlags={},this._shown=!1}return e.prototype.initialize=function(e,t){if(this.stage=t,this.uniqueMaterials)for(var i=0;i<this.uniqueMaterials.length;i++)t.add(r.ModelContentType.MATERIAL,this.uniqueMaterials[i]);if(this.uniqueTextures)for(var i=0;i<this.uniqueTextures.length;i++)t.add(r.ModelContentType.TEXTURE,this.uniqueTextures[i])},e.prototype.isDraped=function(){return!0},e.prototype.areVisibilityFlagsSet=function(e,t){for(var i=!0,r=Object.keys(this._visibilityFlags),n=0;n<r.length;n++){var s=r[n];if(s!==t){if(s===e)return this._visibilityFlags[s];i=i&&this._visibilityFlags[s]}}return i},e.prototype.setVisibilityFlag=function(e,t){return this._visibilityFlags[e]=t,this._calcAndSetVisibility()},e.prototype._calcAndSetVisibility=function(){var e=this.areVisibilityFlagsSet();return this._shown!==e?(this._shown=e,u(!!this.stage,"Graphics3DDrapedGraphicLayer must be initialized first"),this._shown?this.stage.getTextureGraphicsRenderer().addRenderGeometries(this.renderGeometries):this.stage.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),!0):!1},e.prototype.destroy=function(){if(this.stage){var e=this.stage;if(this._shown&&e.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),this._shown=!1,this.uniqueMaterials)for(var t=0;t<this.uniqueMaterials.length;t++)e.remove(r.ModelContentType.MATERIAL,this.uniqueMaterials[t].getId());if(this.uniqueTextures)for(var t=0;t<this.uniqueTextures.length;t++)e.remove(r.ModelContentType.TEXTURE,this.uniqueTextures[t].getId());this.stage=null}},e.prototype.mustAlignToTerrain=function(){return!1},e.prototype.alignWithElevation=function(e,t){},e.prototype.setDrawOrder=function(e,t,i){var r=this;this.uniqueMaterials&&this.uniqueMaterials.forEach(function(i){i.setRenderPriority(e),r._shown&&(t[i.getId()]=!0)})},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(e,t){return Math.max(e,t.bsRadius)},0)},e.prototype.getCenterObjectSpace=function(){return[0,0,0]},e.prototype.getProjectedBoundingBox=function(e,t){s.set(t,s.NEGATIVE_INFINITY);for(var i=0;i<this.renderGeometries.length;i++){var r=this.renderGeometries[i];this._getRenderGeometryProjectedBoundingRect(r,h,e),s.expand(t,h)}return t},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,i){if(this.boundingBox)s.set(l,this.boundingBox);else{var r=e.center,n=e.bsRadius;l[0]=r[0]-n,l[1]=r[1]-n,l[2]=r[2]-n,l[3]=r[0]+n,l[4]=r[1]+n,l[5]=r[2]+n}return i(l,0,2),s.toRect(l,t)},e}(),h=o.create(),l=[0,0,0,0,0,0];return a});