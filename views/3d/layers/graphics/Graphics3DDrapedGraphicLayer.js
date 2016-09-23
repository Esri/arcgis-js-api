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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../../core/declare","../../webgl-engine/Stage","../../webgl-engine/lib/Util","../../support/aaBoundingRect","../../support/aaBoundingBox"],function(e,t,i,s,n){var r=i.assert,u=e(null,{constructor:function(e,t,i,s,n){this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.uniqueMaterials=i,this.uniqueTextures=s,this.boundingBox=n,this.stage=null,this._visibilityFlags={},this._shown=!1},initialize:function(e,i){this.stage=i;var s;if(this.uniqueMaterials)for(s=0;s<this.uniqueMaterials.length;s++)i.add(t.ModelContentType.MATERIAL,this.uniqueMaterials[s]);if(this.uniqueTextures)for(s=0;s<this.uniqueTextures.length;s++)i.add(t.ModelContentType.TEXTURE,this.uniqueTextures[s])},isDraped:function(){return!0},areVisibilityFlagsSet:function(e,t){for(var i=!0,s=Object.keys(this._visibilityFlags),n=0;n<s.length;n++){var r=s[n];if(r!==t){if(r===e)return this._visibilityFlags[r];i=i&&this._visibilityFlags[r]}}return i},setVisibilityFlag:function(e,t){return this._visibilityFlags[e]=t,this._calcAndSetVisibility()},_calcAndSetVisibility:function(){var e=this.areVisibilityFlagsSet();return this._shown!=e?(this._shown=e,r(this.stage,"Graphics3DDrapedGraphicLayer must be initialized first"),this._shown?this.stage.getTextureGraphicsRenderer().addRenderGeometries(this.renderGeometries):this.stage.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),!0):!1},destroy:function(){if(this.stage){var e,i=this.stage;if(this._shown&&i.getTextureGraphicsRenderer().removeRenderGeometries(this.renderGeometries),this._shown=!1,this.uniqueMaterials)for(e=0;e<this.uniqueMaterials.length;e++)i.remove(t.ModelContentType.MATERIAL,this.uniqueMaterials[e].getId());if(this.uniqueTextures)for(e=0;e<this.uniqueTextures.length;e++)i.remove(t.ModelContentType.TEXTURE,this.uniqueTextures[e].getId());this.stage=null}},mustAlignToTerrain:function(){return!1},alignWithElevation:function(){},setDrawOrder:function(e,t,i){this.uniqueMaterials&&this.uniqueMaterials.forEach(function(i){i.setRenderPriority(e),this._shown&&(t[i.getId()]=!0)}.bind(this))},getBSRadius:function(){var e=0;return this.renderGeometries.forEach(function(t){e=Math.max(e,t.bsRadius)}),e},getCenterObjectSpace:function(){return[0,0,0]},getProjectedBoundingBox:function(e,t){n.set(t,n.NEGATIVE_INFINITY);for(var i=0;i<this.renderGeometries.length;i++){var s=this.renderGeometries[i];this._getRenderGeometryProjectedBoundingRect(s,a,e),n.expand(t,a)}return t},_getRenderGeometryProjectedBoundingRect:function(e,t,i){if(this.boundingBox)n.set(o,this.boundingBox);else{var s=e.center,r=e.bsRadius;o[0]=s[0]-r,o[1]=s[1]-r,o[2]=s[2]-r,o[3]=s[0]+r,o[4]=s[1]+r,o[5]=s[2]+r}return i(o,0,2),n.toRect(o,t)}}),a=s.create(),o=[0,0,0,0,0,0];return u});