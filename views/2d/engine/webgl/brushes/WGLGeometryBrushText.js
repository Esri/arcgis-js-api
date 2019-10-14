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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,i,a,o,x,r,z){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType;var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return o.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,i,a,o){var r,n=e.context,v=e.painter,l=e.rendererInfo,s=e.state,u=i.indexCount,p=i.indexFrom,f=i.materialKey,m=z.TextMaterialKey.load(f),c=(r=m,x.createProgramDescriptor(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_vertexOffset",count:2,type:5122},{location:4,name:"a_texFontSize",count:4,type:5120},{location:5,name:"a_aux",count:4,type:5120}]})),y=c.bufferLayouts,S=c.attributes,d=v.materialManager.getMaterialProgram(e,m,"materials/text",S,o),_=this._getVAO(n,y,S,a);n.bindProgram(d),n.bindVAO(_),this._setSharedUniforms(d,e,t),v.textureManager.bindTextures(n,d,m,4),d.setUniformMatrix3fv("u_displayMat3",s.displayMat3),m.vvSizeMinMaxValue&&d.setUniform4fv("u_vvSizeMinMaxValue",l.vvSizeMinMaxValue),m.vvSizeScaleStops&&d.setUniform1f("u_vvSizeScaleStopsValue",l.vvSizeScaleStopsValue),m.vvSizeFieldStops&&(d.setUniform1fv("u_vvSizeFieldStopsValues",l.vvSizeFieldStopsValues),d.setUniform1fv("u_vvSizeFieldStopsSizes",l.vvSizeFieldStopsSizes)),m.vvSizeUnitValue&&d.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",l.vvSizeUnitValueToPixelsRatio),m.vvColor&&(d.setUniform1fv("u_vvColorValues",l.vvColorValues),d.setUniform4fv("u_vvColors",l.vvColors)),m.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",l.vvOpacityValues),d.setUniform1fv("u_vvOpacities",l.vvOpacities)),m.vvRotation&&d.setUniform1f("u_vvRotationType","geographic"===l.vvMaterialParameters.vvRotationType?0:1),n.drawElements(4,u,5125,4*p),n.bindVAO(null)},t}(r.default);t.default=n});