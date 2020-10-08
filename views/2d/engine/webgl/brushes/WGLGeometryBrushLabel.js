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

define(["require","exports","tslib","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,a,i,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return i.WGLGeometryType.LABEL},t.prototype.drawGeometry=function(e,t,a,i,n){var l=e.context,s=e.painter,u=e.state,f=e.rendererInfo,m=a.indexCount,d=a.indexFrom,p=a.materialKey,v=r.LabelMaterialKey.load(p),c=v.mapAligned?1:0;if(c||!(Math.abs(t.key.level-Math.round(100*e.displayLevel)/100)>=1)){var y=function(e){return o.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texAndSize",count:4,type:5121},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:5121},{location:6,name:"a_glyphData",count:4,type:5121},{location:7,name:"a_vertexOffset",count:2,type:5122},{location:8,name:"a_texCoords",count:2,type:5123}]})}(v),S=y.bufferLayouts,_=y.attributes,M=s.materialManager.getMaterialProgram(e,v,"materials/label",_,n),z=this._getVAO(l,S,_,i);e.context.setStencilFunction(514,0,255),l.bindProgram(M),l.bindVAO(z),this._setSharedUniforms(M,e,t),s.textureManager.bindTextures(l,M,v);var U=1===c?u.displayViewMat3:u.displayMat3;if(v.vvSizeMinMaxValue&&M.setUniform4fv("u_vvSizeMinMaxValue",f.vvSizeMinMaxValue),v.vvSizeScaleStops&&M.setUniform1f("u_vvSizeScaleStopsValue",f.vvSizeScaleStopsValue),v.vvSizeFieldStops){var x=f.getSizeVVFieldStops(t.key.level);M.setUniform1fv("u_vvSizeFieldStopsValues",x.values),M.setUniform1fv("u_vvSizeFieldStopsSizes",x.sizes)}v.vvSizeUnitValue&&M.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",f.vvSizeUnitValueToPixelsRatio),M.setUniform1f("u_mapRotation",Math.floor(u.rotation/360*254)),M.setUniform1f("u_mapAligned",c),M.setUniformMatrix3fv("u_displayMat3",U),M.setUniform1f("u_opacity",1),M.setUniform1f("u_zoomLevel",Math.round(10*e.displayLevel)),M.setUniform2fv("u_screenSize",e.state.size),M.setUniform1f("u_isHalo",1),l.drawElements(4,m,5125,Uint32Array.BYTES_PER_ELEMENT*d),M.setUniform1f("u_isHalo",0),l.drawElements(4,m,5125,Uint32Array.BYTES_PER_ELEMENT*d),l.bindVAO(null),l.setStencilTestEnabled(!0),l.setBlendingEnabled(!0)}},t}(n.default);t.default=l}));