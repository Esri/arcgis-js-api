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

define(["require","exports","tslib","../../../../../core/RandomLCG","../../../../webgl","../definitions","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,o,i,r,a,n,s,u,l){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._dotTextureSize=0,t._dotTextures=null,t._dotSamplers=new Int32Array([a.TEXTURE_BINDING_RENDERER_0,a.TEXTURE_BINDING_RENDERER_1]),t}return o.__extends(t,e),t.prototype.dispose=function(){this._disposeTextures()},t.prototype.getGeometryType=function(){return n.WGLGeometryType.FILL},t.prototype.drawGeometry=function(e,t,i,r,n){var u=e.context,d=e.painter,_=e.rendererInfo,c=e.requiredLevel,p=i.indexCount,f=i.indexFrom,v=i.materialKey,y=l.FillMaterialKey.load(v),m=function(e){return s.createProgramDescriptor(e.data,{geometry:o.__spreadArrays([{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121}],e.dotDensity?[]:[{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_tlbr",count:4,type:5123},{location:4,name:"a_aux1",count:4,type:5121},{location:5,name:"a_aux2",count:2,type:5123},{location:6,name:"a_aux3",count:4,type:5121}],e.dotDensity?[{location:2,name:"a_inverseArea",count:1,type:5126}]:[])})}(y),x=m.bufferLayouts,T=m.attributes,h=d.materialManager.getMaterialProgram(e,y,"materials/fill",T,n),D=this._getVAO(u,x,T,r);if(u.bindProgram(h),u.bindVAO(D),this._setSharedUniforms(h,e,t),y.textureBinding){d.textureManager.bindTextures(u,h,y);var g=1/Math.pow(2,c-t.key.level)/e.pixelRatio;h.setUniform1f("u_zoomFactor",g)}if(y.vvColor&&(h.setUniform1fv("u_vvColorValues",_.vvColorValues),h.setUniform4fv("u_vvColors",_.vvColors)),y.vvOpacity&&(h.setUniform1fv("u_vvOpacityValues",_.vvOpacityValues),h.setUniform1fv("u_vvOpacities",_.vvOpacities)),y.dotDensity){var w=a.TILE_SIZE/_.ddDotSize,E=w*window.devicePixelRatio*w*window.devicePixelRatio,U=1/(g=1/Math.pow(2,c-t.key.level))*(1/g),R=_.ddDotScale?e.state.scale/_.ddDotScale:1;h.setUniform1f("u_tileZoomFactor",g),h.setUniform1f("u_tileDotsOverArea",E/(a.TILE_SIZE*window.devicePixelRatio*a.TILE_SIZE*window.devicePixelRatio)),h.setUniformMatrix4fv("u_dotColors",_.ddColors),h.setUniform4fv("u_isActive",_.ddActiveDots),h.setUniform4fv("u_dotBackgroundColor",_.ddBackgroundColor),h.setUniform1f("u_dotValue",Math.max(1,_.ddDotValue*R*U)),this._bindDotDensityTextures(u,h,_,w)}u.drawElements(4,p,5125,4*f),u.bindVAO(null)},t.prototype._disposeTextures=function(){if(this._dotTextures){for(var e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}},t.prototype._bindDotDensityTextures=function(e,t,o,i){var r=this._createDotDensityTextures(e,i,o.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(var a=0;a<r.length;a++)e.bindTexture(r[a],this._dotSamplers[a])},t.prototype._createDotDensityTextures=function(e,t,o){if(this._dotTextureSize===t&&this._seed===o||(this._disposeTextures(),this._dotTextureSize=t,this._seed=o),null===this._dotTextures){var r=new i(o);this._dotTextures=[this._allocDotDensityTexture(e,t,r),this._allocDotDensityTexture(e,t,r)]}return this._dotTextures},t.prototype._allocDotDensityTexture=function(e,t,o){for(var i=new Float32Array(t*t*4),a=0;a<i.length;a++)i[a]=o.getFloat();return new r.Texture(e,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:t,height:t},i)},t}(u.default);t.default=d}));