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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,a,i,o,V,r,z){Object.defineProperty(t,"__esModule",{value:!0});i.enums.DataType,i.enums.PrimitiveType;var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return o.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,a,i,o){var r,n=e.context,v=e.painter,l=e.rendererInfo,s=e.state,u=a.indexCount,p=a.indexFrom,f=a.materialKey,m=z.TextMaterialKey.load(f),c=(r=m,V.createProgramDescriptor(r.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_vertexOffset",count:2,type:5122},{location:4,name:"a_texFontSize",count:4,type:5121},{location:5,name:"a_aux",count:4,type:5120}]})),y=c.bufferLayouts,d=c.attributes,S=v.materialManager.getMaterialProgram(e,m,"materials/text",d,o),_=this._getVAO(n,y,d,i);if(n.bindProgram(S),n.bindVAO(_),this._setSharedUniforms(S,e,t),v.textureManager.bindTextures(n,S,m,4),S.setUniformMatrix3fv("u_displayMat3",s.displayMat3),m.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",l.vvSizeMinMaxValue),m.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",l.vvSizeScaleStopsValue),m.vvSizeFieldStops){var x=l.getSizeVVFieldStops(t.key.level);S.setUniform1fv("u_vvSizeFieldStopsValues",x.values),S.setUniform1fv("u_vvSizeFieldStopsSizes",x.sizes)}m.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",l.vvSizeUnitValueToPixelsRatio),m.vvColor&&(S.setUniform1fv("u_vvColorValues",l.vvColorValues),S.setUniform4fv("u_vvColors",l.vvColors)),m.vvOpacity&&(S.setUniform1fv("u_vvOpacityValues",l.vvOpacityValues),S.setUniform1fv("u_vvOpacities",l.vvOpacities)),m.vvRotation&&S.setUniform1f("u_vvRotationType","geographic"===l.vvMaterialParameters.vvRotationType?0:1),n.drawElements(4,u,5125,4*p),n.bindVAO(null)},t}(r.default);t.default=n});