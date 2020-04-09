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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,i,o,a,n,r,l,v){Object.defineProperty(t,"__esModule",{value:!0});a.enums.DataType,a.enums.PrimitiveType;var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return n.WGLGeometryType.MARKER},t.prototype.drawGeometry=function(e,t,i,o,a){var n=e.context,l=e.painter,s=e.rendererInfo,u=e.state,p=i.indexCount,m=i.indexFrom,c=i.materialKey,f=v.MarkerMaterialKey.load(c),y=function(e){return r.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texCoords",count:2,type:5123},{location:3,name:"a_bitSetAndDistRatio",count:4,type:5121},{location:4,name:"a_id",count:4,type:5121},{location:5,name:"a_color",count:4,type:5121,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:5121}]})}(f),d=y.bufferLayouts,S=y.attributes,_=l.materialManager.getMaterialProgram(e,f,"materials/icon",S,a),M=this._getVAO(n,d,S,o);n.bindProgram(_),n.bindVAO(M),f.textureBinding&&l.textureManager.bindTextures(n,_,f),this._setSharedUniforms(_,e,t);var V=f.vvRotation?u.displayViewMat3:u.displayMat3;if(_.setUniformMatrix3fv("u_displayMat3",V),f.vvSizeMinMaxValue&&_.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),f.vvSizeScaleStops&&_.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),f.vvSizeFieldStops){var z=s.getSizeVVFieldStops(t.key.level);_.setUniform1fv("u_vvSizeFieldStopsValues",z.values),_.setUniform1fv("u_vvSizeFieldStopsSizes",z.sizes)}f.vvSizeUnitValue&&_.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),f.vvColor&&(_.setUniform1fv("u_vvColorValues",s.vvColorValues),_.setUniform4fv("u_vvColors",s.vvColors)),f.vvOpacity&&(_.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),_.setUniform1fv("u_vvOpacities",s.vvOpacities)),f.vvRotation&&_.setUniform1f("u_vvRotationType","geographic"===s.vvMaterialParameters.vvRotationType?0:1),n.drawElements(4,p,5125,4*m),n.bindVAO(null)},t}(l.default);t.default=s}));