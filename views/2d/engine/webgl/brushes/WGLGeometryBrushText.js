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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,a,i,S,o,_){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return i.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,a,i){var o,n=e.context,r=e.painter,v=e.rendererInfo,l=e.drawPhase,s=e.state,u=a.indexCount,p=a.indexFrom,c=a.materialKey,f=_.TextMaterialKey.load(c),m=(o=f,S.createProgramDescriptor(o.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121,normalized:!0},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_vertexOffset",count:2,type:5122},{location:4,name:"a_texFontSize",count:4,type:5120},{location:5,name:"a_aux",count:4,type:5120}].concat(o.hasVV()?[{location:6,name:"a_vv",count:4,type:5126}]:[]),visibility:[{location:7,name:"a_visible",count:1,type:5121}]})),y=r.materialManager.getProgram(f,l,v,"text",m.attributes),d=this._getVAO(n,m.bufferLayouts,m.attributes,i);n.bindProgram(y),n.bindVAO(d),this._setSharedUniforms(y,e,t),r.textureManager.bindTextures(n,y,f,4),y.setUniformMatrix3fv("u_displayMat3",s.displayMat3),f.vvSizeMinMaxValue&&y.setUniform4fv("u_vvSizeMinMaxValue",v.vvSizeMinMaxValue),f.vvSizeScaleStops&&y.setUniform1f("u_vvSizeScaleStopsValue",v.vvSizeScaleStopsValue),f.vvSizeFieldStops&&(y.setUniform1fv("u_vvSizeFieldStopsValues",v.vvSizeFieldStopsValues),y.setUniform1fv("u_vvSizeFieldStopsSizes",v.vvSizeFieldStopsSizes)),f.vvSizeUnitValue&&y.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",v.vvSizeUnitValueToPixelsRatio),f.vvColor&&(y.setUniform1fv("u_vvColorValues",v.vvColorValues),y.setUniform4fv("u_vvColors",v.vvColors)),f.vvOpacity&&(y.setUniform1fv("u_vvOpacityValues",v.vvOpacityValues),y.setUniform1fv("u_vvOpacities",v.vvOpacities)),f.vvRotation&&y.setUniform1f("u_vvRotationType","geographic"===v.vvMaterialParameters.vvRotationType?0:1),n.drawElements(4,u,5125,4*p),n.bindVAO(null)},t}(o.default);t.default=n});