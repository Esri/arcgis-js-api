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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../enums","../Utils","./WGLGeometryBrush","../materialKey/MaterialKey"],(function(e,t,i,a,o,n,r){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return a.WGLGeometryType.LINE},t.prototype.drawGeometry=function(e,t,i,a,n){var l=e.context,u=e.painter,s=e.rendererInfo,v=e.requiredLevel,c=i.indexFrom,f=i.indexCount,m=i.materialKey,p=r.LineMaterialKey.load(m),d=function(e){return o.createProgramDescriptor(e.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_offsetAndNormal",count:4,type:5120},{location:4,name:"a_accumulatedDistanceAndHalfWidth",count:2,type:5123},{location:5,name:"a_tlbr",count:4,type:5123},{location:6,name:"a_segmentDirection",count:4,type:5120},{location:7,name:"a_aux",count:2,type:5123}]})}(p),y=d.bufferLayouts,_=d.attributes,S=u.materialManager.getMaterialProgram(e,p,"materials/line",_,n),V=this._getVAO(l,y,_,a),z=1/e.pixelRatio;l.bindProgram(S),l.bindVAO(V),this._setSharedUniforms(S,e,t),p.textureBinding&&u.textureManager.bindTextures(l,S,p);var U=Math.pow(2,v-t.key.level)/e.pixelRatio;if(S.setUniform1f("u_zoomFactor",U),S.setUniform1f("u_blur",0+z),S.setUniform1f("u_antialiasing",z),p.vvSizeMinMaxValue&&S.setUniform4fv("u_vvSizeMinMaxValue",s.vvSizeMinMaxValue),p.vvSizeScaleStops&&S.setUniform1f("u_vvSizeScaleStopsValue",s.vvSizeScaleStopsValue),p.vvSizeFieldStops){var x=s.getSizeVVFieldStops(t.key.level);S.setUniform1fv("u_vvSizeFieldStopsValues",x.values),S.setUniform1fv("u_vvSizeFieldStopsSizes",x.sizes)}p.vvSizeUnitValue&&S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",s.vvSizeUnitValueToPixelsRatio),p.vvColor&&(S.setUniform1fv("u_vvColorValues",s.vvColorValues),S.setUniform4fv("u_vvColors",s.vvColors)),p.vvOpacity&&(S.setUniform1fv("u_vvOpacityValues",s.vvOpacityValues),S.setUniform1fv("u_vvOpacities",s.vvOpacities)),l.setFaceCullingEnabled(!0),l.setFrontFace(2305),l.setCullFace(1029),l.drawElements(4,f,5125,4*c),l.setFaceCullingEnabled(!1),l.bindVAO(null)},t}(n.default);t.default=l}));