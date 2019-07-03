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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,a,i,z,b,n,x){Object.defineProperty(t,"__esModule",{value:!0});i.enums.DataType,i.enums.PrimitiveType;var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return z.WGLGeometryType.LABEL},t.prototype.drawGeometry=function(e,t,a,i){var n=e.context,o=e.painter,r=e.drawPhase,l=e.state,s=e.rendererInfo,u=a.indexCount,f=a.indexFrom,d=a.materialKey,m=x.LabelMaterialKey.load(d),p=m.mapAligned?1:0;if(e.requiredLevel===t.key.level||p){var v,c=(v=m,b.createProgramDescriptor(v.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_vertexOffset",count:2,type:5122},{location:4,name:"a_texAndSize",count:4,type:5121},{location:5,name:"a_refSymbolAndPlacementOffset",count:4,type:5121},{location:6,name:"a_zoomRangeAndEmpty",count:4,type:5121}]})),S=o.materialManager.getProgram(m,r,s,"label",c.attributes),y=this._getVAO(n,c.bufferLayouts,c.attributes,i);n.setStencilTestEnabled(!1),n.bindProgram(S),n.bindVAO(y),this._setSharedUniforms(S,e,t),r===z.WGLDrawPhase.LABEL_ALPHA?(n.setBlendingEnabled(!1),S.setUniform1f("u_fadeStep",t.fader.value)):o.textureManager.bindTextures(n,S,m,4);var _=1===p?l.displayViewMat3:l.displayMat3;m.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),m.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),m.vvSizeFieldStops&&(S.setUniform1fv("u_vvSizeFieldStopsValues",s.vvSizeFieldStopsValues),S.setUniform1fv("u_vvSizeFieldStopsSizes",s.vvSizeFieldStopsSizes)),m.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),n.bindTexture(e.labelFBO.colorTexture,3),S.setUniform1i("u_referenceTex",3),S.setUniform1f("u_mapRotation",Math.floor(l.rotation/360*254)),S.setUniform1f("u_mapAligned",p),S.setUniformMatrix3fv("u_displayMat3",_),S.setUniform1f("u_opacity",1),S.setUniform1f("u_zoomLevel",Math.round(10*e.displayLevel)),S.setUniform2fv("u_screenSize",e.state.size),n.drawElements(4,u,5125,4*f),n.bindVAO(null),n.setStencilTestEnabled(!0),n.setBlendingEnabled(!0)}},t}(n.default);t.default=o});