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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/assignHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,i,a,o,n,z,r,x){Object.defineProperty(t,"__esModule",{value:!0});o.enums.DataType,o.enums.PrimitiveType;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return n.WGLGeometryType.MARKER},t.prototype.drawGeometry=function(e,t,i,a,o){var n,r=e.context,l=e.painter,v=e.rendererInfo,s=e.state,u=i.indexCount,p=i.indexFrom,m=i.materialKey,c=x.MarkerMaterialKey.load(m),f=(n=c,z.createProgramDescriptor(n.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texCoords",count:2,type:5123},{location:3,name:"a_bitSetAndDistRatio",count:4,type:5121},{location:4,name:"a_id",count:4,type:5121},{location:5,name:"a_color",count:4,type:5121,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:5121}]})),y=f.bufferLayouts,d=f.attributes,S=l.materialManager.getMaterialProgram(e,c,"materials/icon",d,o),_=this._getVAO(r,y,d,a);r.bindProgram(S),r.bindVAO(_),c.textureBinding&&l.textureManager.bindTextures(r,S,c,1),this._setSharedUniforms(S,e,t);var M=c.vvRotation?s.displayViewMat3:s.displayMat3;if(S.setUniformMatrix3fv("u_displayMat3",M),c.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",v.vvSizeMinMaxValue),c.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",v.vvSizeScaleStopsValue),c.vvSizeFieldStops){var V=v.getSizeVVFieldStops(t.key.level);S.setUniform1fv("u_vvSizeFieldStopsValues",V.values),S.setUniform1fv("u_vvSizeFieldStopsSizes",V.sizes)}c.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",v.vvSizeUnitValueToPixelsRatio),c.vvColor&&(S.setUniform1fv("u_vvColorValues",v.vvColorValues),S.setUniform4fv("u_vvColors",v.vvColors)),c.vvOpacity&&(S.setUniform1fv("u_vvOpacityValues",v.vvOpacityValues),S.setUniform1fv("u_vvOpacities",v.vvOpacities)),c.vvRotation&&S.setUniform1f("u_vvRotationType","geographic"===v.vvMaterialParameters.vvRotationType?0:1),r.drawElements(4,u,5125,4*p),r.bindVAO(null)},t}(r.default);t.default=l});