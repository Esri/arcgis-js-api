// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/RandomLCG","../../../../webgl","../definitions","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,o,r,i,a,g,n,w,s,E){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType,a.enums.TextureSamplingMode,a.enums.PixelFormat,a.enums.PixelType,a.enums.TextureWrapMode;var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._dotTextureSize=0,e._dotTextures=null,e._dotSamplers=new Int32Array([g.TEXTURE_BINDING_RENDERER_0,g.TEXTURE_BINDING_RENDERER_1]),e}return o(e,t),e.prototype.dispose=function(){this._disposeTextures()},e.prototype.getGeometryType=function(){return n.WGLGeometryType.FILL},e.prototype.drawGeometry=function(e,t,o,r){var i,a=e.context,n=e.painter,s=e.rendererInfo,u=e.requiredLevel,l=e.drawPhase,d=o.indexCount,p=o.indexFrom,c=o.materialKey,_=E.FillMaterialKey.load(c),m=(i=_,w.createProgramDescriptor(i.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121}].concat(i.dotDensity?[]:[{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_tlbr",count:4,type:5123},{location:4,name:"a_aux1",count:4,type:5121},{location:5,name:"a_aux2",count:2,type:5123},{location:6,name:"a_aux3",count:4,type:5121}],i.dotDensity?[{location:2,name:"a_inverseArea",count:1,type:5126}]:[])})),v=n.materialManager.getProgram(_,l,s,"fill",m.attributes);a.bindProgram(v);var f=this._getVAO(a,m.bufferLayouts,m.attributes,r);if(a.bindVAO(f),this._setSharedUniforms(v,e,t),_.textureBinding){n.textureManager.bindTextures(a,v,_);var y=1/Math.pow(2,u-t.key.level)/e.pixelRatio;v.setUniform1f("u_zoomFactor",y)}if(_.vvColor&&(v.setUniform1fv("u_vvColorValues",s.vvColorValues),v.setUniform4fv("u_vvColors",s.vvColors)),_.vvOpacity&&(v.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),v.setUniform1fv("u_vvOpacities",s.vvOpacities)),_.dotDensity){var x=g.TILE_SIZE/s.ddDotSize,T=x*window.devicePixelRatio*x*window.devicePixelRatio,h=1/(y=1/Math.pow(2,u-t.key.level))*(1/y),D=s.ddDotScale?e.state.scale/s.ddDotScale:1;v.setUniform1f("u_tileZoomFactor",y),v.setUniform1f("u_tileDotsOverArea",T/(g.TILE_SIZE*window.devicePixelRatio*g.TILE_SIZE*window.devicePixelRatio)),v.setUniformMatrix4fv("u_dotColors",s.ddColors),v.setUniform4fv("u_isActive",s.ddActiveDots),v.setUniform4fv("u_dotBackgroundColor",s.ddBackgroundColor),v.setUniform1f("u_dotValue",Math.max(1,s.ddDotValue*D*h)),this._bindDotDensityTextures(a,v,s,x)}a.drawElements(4,d,5125,4*p),a.bindVAO(null)},e.prototype._disposeTextures=function(){if(this._dotTextures){for(var e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}},e.prototype._bindDotDensityTextures=function(e,t,o,r){var i=this._createDotDensityTextures(e,r,o.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(var a=0;a<i.length;a++)e.bindTexture(i[a],this._dotSamplers[a])},e.prototype._createDotDensityTextures=function(e,t,o){if(this._dotTextureSize===t&&this._seed===o||(this._disposeTextures(),this._dotTextureSize=t,this._seed=o),null===this._dotTextures){var r=new i(o);this._dotTextures=[this._allocDotDensityTexture(e,t,r),this._allocDotDensityTexture(e,t,r)]}return this._dotTextures},e.prototype._allocDotDensityTexture=function(e,t,o){for(var r=new Float32Array(t*t*4),i=0;i<r.length;i++)r[i]=o.getFloat();return new a.Texture(e,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:t,height:t},r)},e}(s.default);t.default=u});