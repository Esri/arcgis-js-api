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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,o,a,i,n,r,l){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType;var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return i.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,o,a,i){var r=e.context,s=e.painter,v=e.rendererInfo,u=e.state,p=o.indexCount,f=o.indexFrom,m=o.materialKey,c=l.TextMaterialKey.load(m),y=function(e){return n.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:5121},{location:5,name:"a_aux",count:4,type:5120},{location:6,name:"a_vertexOffset",count:2,type:5122},{location:7,name:"a_texCoords",count:2,type:5123}]})}(c),d=y.bufferLayouts,S=y.attributes,_=s.materialManager.getMaterialProgram(e,c,"materials/text",S,i),x=this._getVAO(r,d,S,a);if(r.bindProgram(_),r.bindVAO(x),this._setSharedUniforms(_,e,t),s.textureManager.bindTextures(r,_,c),_.setUniformMatrix3fv("u_displayMat3",u.displayMat3),c.vvSizeMinMaxValue&&_.setUniform4fv("u_vvSizeMinMaxValue",v.vvSizeMinMaxValue),c.vvSizeScaleStops&&_.setUniform1f("u_vvSizeScaleStopsValue",v.vvSizeScaleStopsValue),c.vvSizeFieldStops){var z=v.getSizeVVFieldStops(t.key.level);_.setUniform1fv("u_vvSizeFieldStopsValues",z.values),_.setUniform1fv("u_vvSizeFieldStopsSizes",z.sizes)}c.vvSizeUnitValue&&_.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",v.vvSizeUnitValueToPixelsRatio),c.vvColor&&(_.setUniform1fv("u_vvColorValues",v.vvColorValues),_.setUniform4fv("u_vvColors",v.vvColors)),c.vvOpacity&&(_.setUniform1fv("u_vvOpacityValues",v.vvOpacityValues),_.setUniform1fv("u_vvOpacities",v.vvOpacities)),c.vvRotation&&_.setUniform1f("u_vvRotationType","geographic"===v.vvMaterialParameters.vvRotationType?0:1),_.setUniform1f("u_isHalo",1),r.drawElements(4,p,5125,4*f),_.setUniform1f("u_isHalo",0),r.drawElements(4,p,5125,4*f),r.bindVAO(null)},t}(r.default);t.default=s}));