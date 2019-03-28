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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../../core/RandomLCG","../definitions","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey","../../../../webgl/Texture"],function(e,t,o,i,n,g,r,w,a,E,s){Object.defineProperty(t,"__esModule",{value:!0});var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._dotTextureSize=0,e._dotTextures=null,e._dotSamplers=new Int32Array([g.TEXTURE_BINDING_RENDERER_0,g.TEXTURE_BINDING_RENDERER_1]),e}return o(e,t),e.prototype.dispose=function(){this._disposeTextures()},e.prototype.getGeometryType=function(){return r.WGLGeometryType.FILL},e.prototype.drawGeometry=function(e,t,o,i){var r,a=e.context,n=e.painter,s=e.rendererInfo,u=e.requiredLevel,l=e.drawPhase,d=o.indexCount,c=o.indexFrom,p=o.materialKey,_=E.FillMaterialKey.load(p),y=(r=_,w.createProgramDescriptor(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121,normalized:!0}].concat(r.dotDensity?[]:[{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_tlbr",count:4,type:5123},{location:4,name:"a_aux1",count:4,type:5121,normalized:!1},{location:5,name:"a_aux2",count:2,type:5123},{location:6,name:"a_aux3",count:4,type:5121}],r.hasVV()?[{location:7,name:"a_vv",count:2,type:5126}]:[],r.dotDensity?[{location:2,name:"a_dd1",count:4,type:5126},{location:3,name:"a_dd2",count:4,type:5126}]:[]),visibility:[{location:8,name:"a_visible",count:1,type:5121}]})),v=n.materialManager.getProgram(_,l,s,"fill",y.attributes);a.bindProgram(v);var m=this._getVAO(a,y.bufferLayouts,y.attributes,i);if(a.bindVAO(m),this._setSharedUniforms(v,e,t),_.textureBinding){n.textureManager.bindTextures(a,v,_);var f=1/Math.pow(2,u-t.key.level)/e.pixelRatio;v.setUniform1f("u_zoomFactor",f)}if(_.vvColor&&(v.setUniform1fv("u_vvColorValues",s.vvColorValues),v.setUniform4fv("u_vvColors",s.vvColors)),_.vvOpacity&&(v.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),v.setUniform1fv("u_vvOpacities",s.vvOpacities)),_.dotDensity){var x=g.TILE_SIZE/s.ddDotSize,T=x*window.devicePixelRatio*x*window.devicePixelRatio,h=1/(f=1/Math.pow(2,u-t.key.level))*(1/f),D=s.ddDotScale?e.state.scale/s.ddDotScale:1;v.setUniform1f("u_tileZoomFactor",f),v.setUniform1f("u_tileDotsOverArea",T/(g.TILE_SIZE*window.devicePixelRatio*g.TILE_SIZE*window.devicePixelRatio)),v.setUniformMatrix4fv("u_dotColors",s.ddColors),v.setUniform4fv("u_dotBackgroundColor",s.ddBackgroundColor),v.setUniform1f("u_dotValue",Math.max(1,s.ddDotValue*D*h)),this._bindDotDensityTextures(a,v,s,x)}a.drawElements(4,d,5125,4*c),a.bindVAO(null)},e.prototype._disposeTextures=function(){if(this._dotTextures){for(var e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}},e.prototype._bindDotDensityTextures=function(e,t,o,i){var r=this._createDotDensityTextures(e,i,o.ddSeed);t.setUniform1iv("u_dotTextures",this._dotSamplers);for(var a=0;a<r.length;a++)e.bindTexture(r[a],this._dotSamplers[a])},e.prototype._createDotDensityTextures=function(e,t,o){return this._dotTextureSize!==t&&(this._disposeTextures(),this._dotTextureSize=t),null===this._dotTextures&&(this._dotTextures=[this._allocDotDensityTexture(e,t,o),this._allocDotDensityTexture(e,t,o)]),this._dotTextures},e.prototype._allocDotDensityTexture=function(e,t,o){for(var i=new n(o),r=new Float32Array(t*t*4),a=0;a<r.length;a++)r[a]=i.getFloat();return new s(e,{wrapMode:10497,pixelFormat:6408,dataType:5126,samplingMode:9728,width:t,height:t},r)},e}(a.default);t.default=u});