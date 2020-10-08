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

define(["require","exports","tslib","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,i,a,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return a.WGLGeometryType.MARKER},t.prototype.drawGeometry=function(e,t,i,a,n){var v=e.context,l=e.painter,s=e.rendererInfo,u=e.state,p=i.indexCount,f=i.indexFrom,c=i.materialKey,m=r.MarkerMaterialKey.load(c),d=function(e){return o.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_vertexOffset",count:2,type:5122},{location:2,name:"a_texCoords",count:2,type:5123},{location:3,name:"a_bitSetAndDistRatio",count:4,type:5121},{location:4,name:"a_id",count:4,type:5121},{location:5,name:"a_color",count:4,type:5121,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:5121,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:5121}]})}(m),y=d.bufferLayouts,S=d.attributes,_=l.materialManager.getMaterialProgram(e,m,"materials/icon",S,n),M=this._getVAO(v,y,S,a);v.bindProgram(_),v.bindVAO(M),m.textureBinding&&l.textureManager.bindTextures(v,_,m),this._setSharedUniforms(_,e,t);var V=m.vvRotation?u.displayViewMat3:u.displayMat3;if(_.setUniformMatrix3fv("u_displayMat3",V),m.vvSizeMinMaxValue&&_.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),m.vvSizeScaleStops&&_.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),m.vvSizeFieldStops){var z=s.getSizeVVFieldStops(t.key.level);_.setUniform1fv("u_vvSizeFieldStopsValues",z.values),_.setUniform1fv("u_vvSizeFieldStopsSizes",z.sizes)}m.vvSizeUnitValue&&_.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),m.vvColor&&(_.setUniform1fv("u_vvColorValues",s.vvColorValues),_.setUniform4fv("u_vvColors",s.vvColors)),m.vvOpacity&&(_.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),_.setUniform1fv("u_vvOpacities",s.vvOpacities)),m.vvRotation&&_.setUniform1f("u_vvRotationType","geographic"===s.vvMaterialParameters.vvRotationType?0:1),v.drawElements(4,p,5125,Uint32Array.BYTES_PER_ELEMENT*f),v.bindVAO(null)},t}(n.default);t.default=v}));