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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],function(e,t,i,a,z,o,V){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return a.WGLGeometryType.LINE},t.prototype.drawGeometry=function(e,t,i,a){var o,n=e.context,r=e.painter,l=e.rendererInfo,u=e.requiredLevel,s=e.drawPhase,v=i.indexFrom,c=i.indexCount,p=i.materialKey,m=V.LineMaterialKey.load(p),f=(o=m,z.createProgramDescriptor(o.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121,normalized:!0},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:5120},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123},{location:5,name:"a_tlbr",count:4,type:5123},{location:6,name:"a_segmentDirection",count:4,type:5120}].concat(o.hasVV()?[{location:7,name:"a_vv",count:3,type:5126}]:[]),visibility:[{location:8,name:"a_visible",count:1,type:5121}]})),d=r.materialManager.getProgram(m,s,l,"line",f.attributes),y=this._getVAO(n,f.bufferLayouts,f.attributes,a),S=1/e.pixelRatio;n.bindProgram(d),n.bindVAO(y),this._setSharedUniforms(d,e,t),m.textureBinding&&r.textureManager.bindTextures(n,d,m);var _=Math.pow(2,u-t.key.level)/e.pixelRatio;d.setUniform1f("u_zoomFactor",_),d.setUniform1f("u_blur",0+S),d.setUniform1f("u_antialiasing",S),m.vvSizeMinMaxValue&&d.setUniform4fv("u_vvSizeMinMaxValue",l.vvSizeMinMaxValue),m.vvSizeScaleStops&&d.setUniform1f("u_vvSizeScaleStopsValue",l.vvSizeScaleStopsValue),m.vvSizeFieldStops&&(d.setUniform1fv("u_vvSizeFieldStopsValues",l.vvSizeFieldStopsValues),d.setUniform1fv("u_vvSizeFieldStopsSizes",l.vvSizeFieldStopsSizes)),m.vvSizeUnitValue&&d.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",l.vvSizeUnitValueToPixelsRatio),m.vvColor&&(d.setUniform1fv("u_vvColorValues",l.vvColorValues),d.setUniform4fv("u_vvColors",l.vvColors)),m.vvOpacity&&(d.setUniform1fv("u_vvOpacityValues",l.vvOpacityValues),d.setUniform1fv("u_vvOpacities",l.vvOpacities)),n.setFaceCullingEnabled(!0),n.setFrontFace(2305),n.setCullFace(1029),n.drawElements(4,c,5125,4*v),n.setFaceCullingEnabled(!1),n.bindVAO(null)},t}(o.default);t.default=n});