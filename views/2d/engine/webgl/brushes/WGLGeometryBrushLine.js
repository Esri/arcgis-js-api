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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../webgl","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,a,i,o,n,r,l){Object.defineProperty(t,"__esModule",{value:!0});i.enums.DataType,i.enums.PrimitiveType,i.enums.Face,i.enums.CullMode;var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return o.WGLGeometryType.LINE},t.prototype.drawGeometry=function(e,t,a,i,o){var r=e.context,u=e.painter,s=e.rendererInfo,v=e.requiredLevel,c=a.indexFrom,m=a.indexCount,p=a.materialKey,f=l.LineMaterialKey.load(p),d=function(e){return n.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:5120},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123},{location:5,name:"a_tlbr",count:4,type:5123},{location:6,name:"a_segmentDirection",count:4,type:5120},{location:7,name:"a_aux",count:2,type:5123}]})}(f),y=d.bufferLayouts,S=d.attributes,_=u.materialManager.getMaterialProgram(e,f,"materials/line",S,o),V=this._getVAO(r,y,S,i),z=1/e.pixelRatio;r.bindProgram(_),r.bindVAO(V),this._setSharedUniforms(_,e,t),f.textureBinding&&u.textureManager.bindTextures(r,_,f);var U=Math.pow(2,v-t.key.level)/e.pixelRatio;if(_.setUniform1f("u_zoomFactor",U),_.setUniform1f("u_blur",0+z),_.setUniform1f("u_antialiasing",z),f.vvSizeMinMaxValue&&_.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),f.vvSizeScaleStops&&_.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),f.vvSizeFieldStops){var g=s.getSizeVVFieldStops(t.key.level);_.setUniform1fv("u_vvSizeFieldStopsValues",g.values),_.setUniform1fv("u_vvSizeFieldStopsSizes",g.sizes)}f.vvSizeUnitValue&&_.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),f.vvColor&&(_.setUniform1fv("u_vvColorValues",s.vvColorValues),_.setUniform4fv("u_vvColors",s.vvColors)),f.vvOpacity&&(_.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),_.setUniform1fv("u_vvOpacities",s.vvOpacities)),r.setFaceCullingEnabled(!0),r.setFrontFace(2305),r.setCullFace(1029),r.drawElements(4,m,5125,4*c),r.setFaceCullingEnabled(!1),r.bindVAO(null)},t}(r.default);t.default=u}));