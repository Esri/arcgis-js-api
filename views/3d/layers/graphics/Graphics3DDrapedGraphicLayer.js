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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","./ElevationInfo","../../support/aaBoundingBox","../../support/aaBoundingRect","../../webgl-engine/Stage","../../webgl-engine/lib/Util"],function(e,t,i,r,n,s,o,u,a,h){var l=h.assert,d=function(){function e(e,t,i,r,n,o){this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.uniqueMaterials=i,this.uniqueTextures=r,this.boundingBox=n,this.elevationInfo=new s(o),this.stage=null,this._visibilityFlags={},this._shown=!1}return e.prototype.initialize=function(e,t){if(this.stage=t,this.uniqueMaterials)for(var i=0;i<this.uniqueMaterials.length;i++)t.add(a.ModelContentType.MATERIAL,this.uniqueMaterials[i]);if(this.uniqueTextures)for(var i=0;i<this.uniqueTextures.length;i++)t.add(a.ModelContentType.TEXTURE,this.uniqueTextures[i])},e.prototype.isDraped=function(){return!0},e.prototype.areVisibilityFlagsSet=function(e,t){for(var i=!0,r=Object.keys(this._visibilityFlags),n=0;n<r.length;n++){var s=r[n];if(s!==t){if(s===e)return this._visibilityFlags[s];i=i&&this._visibilityFlags[s]}}return i},e.prototype.setVisibilityFlag=function(e,t){return this._visibilityFlags[e]=t,this._calcAndSetVisibility()},e.prototype._calcAndSetVisibility=function(){var e=this.areVisibilityFlagsSet();return this._shown!==e?(this._shown=e,l(!!this.stage,"Graphics3DDrapedGraphicLayer must be initialized first"),this._shown?this.stage.getTextureGraphicsRenderer().addRenderGeometries(this.renderGeometries):this.stage.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),!0):!1},e.prototype.destroy=function(){if(this.stage){var e=this.stage;if(this._shown&&e.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),this._shown=!1,this.uniqueMaterials)for(var t=0;t<this.uniqueMaterials.length;t++)e.remove(a.ModelContentType.MATERIAL,this.uniqueMaterials[t].getId());if(this.uniqueTextures)for(var t=0;t<this.uniqueTextures.length;t++)e.remove(a.ModelContentType.TEXTURE,this.uniqueTextures[t].getId());this.stage=null}},e.prototype.mustAlignToTerrain=function(){return!1},e.prototype.alignWithElevation=function(e,t){},e.prototype.setDrawOrder=function(e,t,i){var r=this;this.uniqueMaterials&&this.uniqueMaterials.forEach(function(i){i.setRenderPriority(e),r._shown&&(t[i.getId()]=!0)})},e.prototype.getBSRadius=function(){return this.renderGeometries.reduce(function(e,t){return Math.max(e,t.bsRadius)},0)},e.prototype.getCenterObjectSpace=function(){return[0,0,0]},e.prototype.getProjectedBoundingBox=function(e,t,i){return n(this,void 0,void 0,function(){var n,s,u,a;return r(this,function(r){switch(r.label){case 0:for(o.set(i,o.NEGATIVE_INFINITY),n=0;n<this.renderGeometries.length;n++)s=this.renderGeometries[n],this._getRenderGeometryProjectedBoundingRect(s,c,e),o.expand(i,c);if(!t)return[3,5];o.center(i,g),u=void 0,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.queryElevation(g[0],g[1])];case 2:return u=r.sent(),[3,4];case 3:return a=r.sent(),u=null,[3,4];case 4:null!=u&&(i[2]=Math.min(i[2],u),i[5]=Math.max(i[5],u)),r.label=5;case 5:return[2,i]}})})},e.prototype._getRenderGeometryProjectedBoundingRect=function(e,t,i){if(this.boundingBox)o.set(p,this.boundingBox);else{var r=e.center,n=e.bsRadius;p[0]=r[0]-n,p[1]=r[1]-n,p[2]=r[2]-n,p[3]=r[0]+n,p[4]=r[1]+n,p[5]=r[2]+n}return i(p,0,2),o.toRect(p,t)},e}(),c=u.create(),p=[0,0,0,0,0,0],g=[0,0,0];return d});