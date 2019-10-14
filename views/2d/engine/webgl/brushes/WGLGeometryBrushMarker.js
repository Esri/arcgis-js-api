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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,i,o,a,n,M,r,V){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType;var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return n.WGLGeometryType.MARKER},t.prototype.drawGeometry=function(e,t,i,o,a){var n,r=e.context,v=e.painter,l=e.rendererInfo,s=e.state,u=i.indexCount,p=i.indexFrom,m=i.materialKey,c=V.MarkerMaterialKey.load(m),f=(n=c,M.createProgramDescriptor(n.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texCoords",count:2,type:5123},{location:3,name:"a_bitSetAndDistRatio",count:4,type:5121},{location:4,name:"a_id",count:4,type:5121},{location:5,name:"a_color",count:4,type:5121,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:5121}]})),d=f.bufferLayouts,y=f.attributes,S=v.materialManager.getMaterialProgram(e,c,"materials/icon",y,a),_=this._getVAO(r,d,y,o);r.bindProgram(S),r.bindVAO(_),c.textureBinding&&v.textureManager.bindTextures(r,S,c,1),this._setSharedUniforms(S,e,t);var z=c.vvRotation?s.displayViewMat3:s.displayMat3;S.setUniformMatrix3fv("u_displayMat3",z),c.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",l.vvSizeMinMaxValue),c.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",l.vvSizeScaleStopsValue),c.vvSizeFieldStops&&(S.setUniform1fv("u_vvSizeFieldStopsValues",l.vvSizeFieldStopsValues),S.setUniform1fv("u_vvSizeFieldStopsSizes",l.vvSizeFieldStopsSizes)),c.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",l.vvSizeUnitValueToPixelsRatio),c.vvColor&&(S.setUniform1fv("u_vvColorValues",l.vvColorValues),S.setUniform4fv("u_vvColors",l.vvColors)),c.vvOpacity&&(S.setUniform1fv("u_vvOpacityValues",l.vvOpacityValues),S.setUniform1fv("u_vvOpacities",l.vvOpacities)),c.vvRotation&&S.setUniform1f("u_vvRotationType","geographic"===l.vvMaterialParameters.vvRotationType?0:1),r.drawElements(4,u,5125,4*p),r.bindVAO(null)},t}(r.default);t.default=v});