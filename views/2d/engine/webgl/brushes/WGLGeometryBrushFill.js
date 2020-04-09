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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/RandomLCG","../../../../webgl","../definitions","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,o,r,i,n,a,s,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});n.enums.DataType,n.enums.PrimitiveType,n.enums.TextureSamplingMode,n.enums.PixelFormat,n.enums.PixelType,n.enums.TextureWrapMode;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._dotTextureSize=0,t._dotTextures=null,t._dotSamplers=new Int32Array([a.TEXTURE_BINDING_RENDERER_0,a.TEXTURE_BINDING_RENDERER_1]),t}return o(t,e),t.prototype.dispose=function(){this._disposeTextures()},t.prototype.getGeometryType=function(){return s.WGLGeometryType.FILL},t.prototype.drawGeometry=function(e,t,o,r,i){var n=e.context,s=e.painter,l=e.rendererInfo,p=e.requiredLevel,c=o.indexCount,_=o.indexFrom,m=o.materialKey,f=d.FillMaterialKey.load(m),v=function(e){return u.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121}].concat(e.dotDensity?[]:[{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_tlbr",count:4,type:5123},{location:4,name:"a_aux1",count:4,type:5121},{location:5,name:"a_aux2",count:2,type:5123},{location:6,name:"a_aux3",count:4,type:5121}],e.dotDensity?[{location:2,name:"a_inverseArea",count:1,type:5126}]:[])})}(f),y=v.bufferLayouts,x=v.attributes,T=s.materialManager.getMaterialProgram(e,f,"materials/fill",x,i),h=this._getVAO(n,y,x,r);if(n.bindProgram(T),n.bindVAO(h),this._setSharedUniforms(T,e,t),f.textureBinding){s.textureManager.bindTextures(n,T,f);var D=1/Math.pow(2,p-t.key.level)/e.pixelRatio;T.setUniform1f("u_zoomFactor",D)}if(f.vvColor&&(T.setUniform1fv("u_vvColorValues",l.vvColorValues),T.setUniform4fv("u_vvColors",l.vvColors)),f.vvOpacity&&(T.setUniform1fv("u_vvOpacityValues",l.vvOpacityValues),T.setUniform1fv("u_vvOpacities",l.vvOpacities)),f.dotDensity){var g=a.TILE_SIZE/l.ddDotSize,w=g*window.devicePixelRatio*g*window.devicePixelRatio,E=1/(D=1/Math.pow(2,p-t.key.level))*(1/D),S=l.ddDotScale?e.state.scale/l.ddDotScale:1;T.setUniform1f("u_tileZoomFactor",D),T.setUniform1f("u_tileDotsOverArea",w/(a.TILE_SIZE*window.devicePixelRatio*a.TILE_SIZE*window.devicePixelRatio)),T.setUniformMatrix4fv("u_dotColors",l.ddColors),T.setUniform4fv("u_isActive",l.ddActiveDots),T.setUniform4fv("u_dotBackgroundColor",l.ddBackgroundColor),T.setUniform1f("u_dotValue",Math.max(1,l.ddDotValue*S*E)),this._bindDotDensityTextures(n,T,l,g)}n.drawElements(4,c,5125,4*_),n.bindVAO(null)},t.prototype._disposeTextures=function(){if(this._dotTextures){for(var e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}},t.prototype._bindDotDensityTextures=function(e,t,o,r){var i=this._createDotDensityTextures(e,r,o.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(var n=0;n<i.length;n++)e.bindTexture(i[n],this._dotSamplers[n])},t.prototype._createDotDensityTextures=function(e,t,o){if(this._dotTextureSize===t&&this._seed===o||(this._disposeTextures(),this._dotTextureSize=t,this._seed=o),null===this._dotTextures){var r=new i(o);this._dotTextures=[this._allocDotDensityTexture(e,t,r),this._allocDotDensityTexture(e,t,r)]}return this._dotTextures},t.prototype._allocDotDensityTexture=function(e,t,o){for(var r=new Float32Array(t*t*4),i=0;i<r.length;i++)r[i]=o.getFloat();return new n.Texture(e,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:t,height:t},r)},t}(l.default);t.default=p}));