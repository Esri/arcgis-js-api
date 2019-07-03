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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,i,a,o,S,r,_){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType;var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return o.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,i,a){var o,r=e.context,n=e.painter,v=e.rendererInfo,s=e.drawPhase,l=e.state,u=i.indexCount,p=i.indexFrom,f=i.materialKey,m=_.TextMaterialKey.load(f),c=(o=m,S.createProgramDescriptor(o.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_vertexOffset",count:2,type:5122},{location:4,name:"a_texFontSize",count:4,type:5120},{location:5,name:"a_aux",count:4,type:5120}]})),y=n.materialManager.getProgram(m,s,v,"text",c.attributes),d=this._getVAO(r,c.bufferLayouts,c.attributes,a);r.bindProgram(y),r.bindVAO(d),this._setSharedUniforms(y,e,t),n.textureManager.bindTextures(r,y,m,4),y.setUniformMatrix3fv("u_displayMat3",l.displayMat3),m.vvSizeMinMaxValue&&y.setUniform4fv("u_vvSizeMinMaxValue",v.vvSizeMinMaxValue),m.vvSizeScaleStops&&y.setUniform1f("u_vvSizeScaleStopsValue",v.vvSizeScaleStopsValue),m.vvSizeFieldStops&&(y.setUniform1fv("u_vvSizeFieldStopsValues",v.vvSizeFieldStopsValues),y.setUniform1fv("u_vvSizeFieldStopsSizes",v.vvSizeFieldStopsSizes)),m.vvSizeUnitValue&&y.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",v.vvSizeUnitValueToPixelsRatio),m.vvColor&&(y.setUniform1fv("u_vvColorValues",v.vvColorValues),y.setUniform4fv("u_vvColors",v.vvColors)),m.vvOpacity&&(y.setUniform1fv("u_vvOpacityValues",v.vvOpacityValues),y.setUniform1fv("u_vvOpacities",v.vvOpacities)),m.vvRotation&&y.setUniform1f("u_vvRotationType","geographic"===v.vvMaterialParameters.vvRotationType?0:1),r.drawElements(4,u,5125,4*p),r.bindVAO(null)},t}(r.default);t.default=n});