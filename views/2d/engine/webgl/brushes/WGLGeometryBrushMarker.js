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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,i,o,a,_,n,z){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return a.WGLGeometryType.MARKER},t.prototype.drawGeometry=function(e,t,i,o){var a,n=e.context,r=e.painter,v=e.rendererInfo,l=e.drawPhase,s=e.state,u=i.indexCount,p=i.indexFrom,c=i.materialKey,f=z.MarkerMaterialKey.load(c),m=(a=f,_.createProgramDescriptor(a.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffsetAndTex",count:4,type:5120},{location:2,name:"a_id",count:4,type:5121,normalized:!0},{location:3,name:"a_color",count:4,type:5121,normalized:!0},{location:4,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:5,name:"a_sizeAndOutlineWidth",count:4,type:5121}].concat(a.hasVV()?[{location:6,name:"a_vv",count:4,type:5126}]:[]),visibility:[{location:8,name:"a_visible",count:1,type:5121}]})),d=r.materialManager.getProgram(f,l,v,"icon",m.attributes),y=this._getVAO(n,m.bufferLayouts,m.attributes,o);n.bindProgram(d),n.bindVAO(y),f.textureBinding&&r.textureManager.bindTextures(n,d,f,4),this._setSharedUniforms(d,e,t);var S=f.vvRotation?s.displayViewMat3:s.displayMat3;d.setUniformMatrix3fv("u_displayMat3",S),f.vvSizeMinMaxValue&&d.setUniform4fv("u_vvSizeMinMaxValue",v.vvSizeMinMaxValue),f.vvSizeScaleStops&&d.setUniform1f("u_vvSizeScaleStopsValue",v.vvSizeScaleStopsValue),f.vvSizeFieldStops&&(d.setUniform1fv("u_vvSizeFieldStopsValues",v.vvSizeFieldStopsValues),d.setUniform1fv("u_vvSizeFieldStopsSizes",v.vvSizeFieldStopsSizes)),f.vvSizeUnitValue&&d.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",v.vvSizeUnitValueToPixelsRatio),f.vvColor&&(d.setUniform1fv("u_vvColorValues",v.vvColorValues),d.setUniform4fv("u_vvColors",v.vvColors)),f.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",v.vvOpacityValues),d.setUniform1fv("u_vvOpacities",v.vvOpacities)),f.vvRotation&&d.setUniform1f("u_vvRotationType","geographic"===v.vvMaterialParameters.vvRotationType?0:1),n.drawElements(4,u,5125,4*p),n.bindVAO(null)},t}(n.default);t.default=r});