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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,a,i,n,U,o,g){Object.defineProperty(t,"__esModule",{value:!0});i.enums.DataType,i.enums.PrimitiveType;var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return n.WGLGeometryType.LABEL},t.prototype.drawGeometry=function(e,t,a,i,n){var o=e.context,r=e.painter,l=e.state,s=e.rendererInfo,u=a.indexCount,m=a.indexFrom,p=a.materialKey,f=g.LabelMaterialKey.load(p),v=f.mapAligned?1:0;if(v||!(1<=Math.abs(t.key.level-Math.round(100*e.displayLevel)/100))){var d,c=(d=f,U.createProgramDescriptor(d.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_vertexOffset",count:2,type:5122},{location:4,name:"a_texAndSize",count:4,type:5121},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:5121},{location:6,name:"a_zoomRangeAndEmpty",count:4,type:5121}]})),y=c.bufferLayouts,S=c.attributes,_=r.materialManager.getMaterialProgram(e,f,"materials/label",S,n),z=this._getVAO(o,y,S,i);e.context.setStencilFunction(514,0,255),o.bindProgram(_),o.bindVAO(z),this._setSharedUniforms(_,e,t),r.textureManager.bindTextures(o,_,f,4);var M=1===v?l.displayViewMat3:l.displayMat3;if(f.vvSizeMinMaxValue&&_.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),f.vvSizeScaleStops&&_.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),f.vvSizeFieldStops){var x=s.getSizeVVFieldStops(t.key.level);_.setUniform1fv("u_vvSizeFieldStopsValues",x.values),_.setUniform1fv("u_vvSizeFieldStopsSizes",x.sizes)}f.vvSizeUnitValue&&_.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),_.setUniform1f("u_mapRotation",Math.floor(l.rotation/360*254)),_.setUniform1f("u_mapAligned",v),_.setUniformMatrix3fv("u_displayMat3",M),_.setUniform1f("u_opacity",1),_.setUniform1f("u_zoomLevel",Math.round(10*e.displayLevel)),_.setUniform2fv("u_screenSize",e.state.size),o.drawElements(4,u,5125,4*m),o.bindVAO(null),o.setStencilTestEnabled(!0),o.setBlendingEnabled(!0)}},t}(o.default);t.default=r});