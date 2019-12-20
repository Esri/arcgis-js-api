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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/RandomLCG","../../../../webgl","../definitions","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,o,r,i,a,E,n,S,s,U){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType,a.enums.TextureSamplingMode,a.enums.PixelFormat,a.enums.PixelType,a.enums.TextureWrapMode;var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._dotTextureSize=0,e._dotTextures=null,e._dotSamplers=new Int32Array([E.TEXTURE_BINDING_RENDERER_0,E.TEXTURE_BINDING_RENDERER_1]),e}return o(e,t),e.prototype.dispose=function(){this._disposeTextures()},e.prototype.getGeometryType=function(){return n.WGLGeometryType.FILL},e.prototype.drawGeometry=function(e,t,o,r,i){var a,n=e.context,s=e.painter,u=e.rendererInfo,l=e.requiredLevel,d=o.indexCount,p=o.indexFrom,c=o.materialKey,_=U.FillMaterialKey.load(c),m=(a=_,S.createProgramDescriptor(a.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121}].concat(a.dotDensity?[]:[{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_tlbr",count:4,type:5123},{location:4,name:"a_aux1",count:4,type:5121},{location:5,name:"a_aux2",count:2,type:5123},{location:6,name:"a_aux3",count:4,type:5121}],a.dotDensity?[{location:2,name:"a_inverseArea",count:1,type:5126}]:[])})),v=m.bufferLayouts,f=m.attributes,y=s.materialManager.getMaterialProgram(e,_,"materials/fill",f,i),x=this._getVAO(n,v,f,r);if(n.bindProgram(y),n.bindVAO(x),this._setSharedUniforms(y,e,t),_.textureBinding){s.textureManager.bindTextures(n,y,_);var T=1/Math.pow(2,l-t.key.level)/e.pixelRatio;y.setUniform1f("u_zoomFactor",T)}if(_.vvColor&&(y.setUniform1fv("u_vvColorValues",u.vvColorValues),y.setUniform4fv("u_vvColors",u.vvColors)),_.vvOpacity&&(y.setUniform1fv("u_vvOpacityValues",u.vvOpacityValues),y.setUniform1fv("u_vvOpacities",u.vvOpacities)),_.dotDensity){var h=E.TILE_SIZE/u.ddDotSize,D=h*window.devicePixelRatio*h*window.devicePixelRatio,g=1/(T=1/Math.pow(2,l-t.key.level))*(1/T),w=u.ddDotScale?e.state.scale/u.ddDotScale:1;y.setUniform1f("u_tileZoomFactor",T),y.setUniform1f("u_tileDotsOverArea",D/(E.TILE_SIZE*window.devicePixelRatio*E.TILE_SIZE*window.devicePixelRatio)),y.setUniformMatrix4fv("u_dotColors",u.ddColors),y.setUniform4fv("u_isActive",u.ddActiveDots),y.setUniform4fv("u_dotBackgroundColor",u.ddBackgroundColor),y.setUniform1f("u_dotValue",Math.max(1,u.ddDotValue*w*g)),this._bindDotDensityTextures(n,y,u,h)}n.drawElements(4,d,5125,4*p),n.bindVAO(null)},e.prototype._disposeTextures=function(){if(this._dotTextures){for(var e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}},e.prototype._bindDotDensityTextures=function(e,t,o,r){var i=this._createDotDensityTextures(e,r,o.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(var a=0;a<i.length;a++)e.bindTexture(i[a],this._dotSamplers[a])},e.prototype._createDotDensityTextures=function(e,t,o){if(this._dotTextureSize===t&&this._seed===o||(this._disposeTextures(),this._dotTextureSize=t,this._seed=o),null===this._dotTextures){var r=new i(o);this._dotTextures=[this._allocDotDensityTexture(e,t,r),this._allocDotDensityTexture(e,t,r)]}return this._dotTextures},e.prototype._allocDotDensityTexture=function(e,t,o){for(var r=new Float32Array(t*t*4),i=0;i<r.length;i++)r[i]=o.getFloat();return new a.Texture(e,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:t,height:t},r)},e}(s.default);t.default=u});