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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,a,i,o,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return i.WGLGeometryType.TEXT},t.prototype.drawGeometry=function(e,t,a,i,r){var l=e.context,s=e.painter,v=e.rendererInfo,u=e.state,f=a.indexCount,p=a.indexFrom,m=a.materialKey,c=n.TextMaterialKey.load(m),y=function(e){return o.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:5121},{location:5,name:"a_aux",count:4,type:5120},{location:6,name:"a_vertexOffset",count:2,type:5122},{location:7,name:"a_texCoords",count:2,type:5123}]})}(c),d=y.bufferLayouts,_=y.attributes,S=s.materialManager.getMaterialProgram(e,c,"materials/text",_,r),M=this._getVAO(l,d,_,i);if(l.bindProgram(S),l.bindVAO(M),this._setSharedUniforms(S,e,t),s.textureManager.bindTextures(l,S,c),S.setUniformMatrix3fv("u_displayMat3",u.displayMat3),S.setUniformMatrix3fv("u_displayViewMat3",u.displayViewMat3),c.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",v.vvSizeMinMaxValue),c.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",v.vvSizeScaleStopsValue),c.vvSizeFieldStops){var U=v.getSizeVVFieldStops(t.key.level);S.setUniform1fv("u_vvSizeFieldStopsValues",U.values),S.setUniform1fv("u_vvSizeFieldStopsSizes",U.sizes)}c.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",v.vvSizeUnitValueToPixelsRatio),c.vvColor&&(S.setUniform1fv("u_vvColorValues",v.vvColorValues),S.setUniform4fv("u_vvColors",v.vvColors)),c.vvOpacity&&(S.setUniform1fv("u_vvOpacityValues",v.vvOpacityValues),S.setUniform1fv("u_vvOpacities",v.vvOpacities)),c.vvRotation&&S.setUniform1f("u_vvRotationType","geographic"===v.vvMaterialParameters.vvRotationType?0:1),S.setUniform1f("u_isHalo",1),l.drawElements(4,f,5125,Uint32Array.BYTES_PER_ELEMENT*p),S.setUniform1f("u_isHalo",0),l.drawElements(4,f,5125,Uint32Array.BYTES_PER_ELEMENT*p),l.bindVAO(null)},t}(r.default);t.default=l}));