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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfoUtils","./MaterialInfoUtils_updateMaterialVariations","./MaterialKeyInfo","./util/serializationUtils"],function(e,i,t,a,n,r,o){Object.defineProperty(i,"__esModule",{value:!0});var l=function(){function e(e,i,t){this.unit=e,this.pageId=i,this.semantic=t}return e.prototype.clone=function(){return new e(this.unit,this.pageId,this.semantic)},e.prototype.serialize=function(e){return e.push(this.unit),e.push(this.pageId),e},e.deserialize=function(i){return new e(i.readInt32(),i.readInt32(),"u_texture")},e}();i.TexBindingInfo=l;var s=function(){function e(e,i){this.name=e,this.value=i}return e.prototype.clone=function(){return new e(this.name,this.value)},e.prototype.serialize=function(e){return e.push(this.value),e},e.deserialize=function(i){return new e("u_my_param",i.readInt32())},e}();i.MaterialParam=s;var u=function(){function e(){this.texBindingInfo=[],this.materialParams=[]}return e.fromSprite=function(i,n,o){var s=new e,u=new r;return u.geometryType=n,i?(u.sdf=i.sdf,u.pattern=!0,s.texBindingInfo.push(new l(1,i.page,"u_texture"))):(u.sdf=!1,u.pattern=!1),0===o?u.vvOpacity=u.vvSizeMinMaxValue=u.vvSizeScaleStops=u.vvSizeFieldStops=u.vvSizeUnitValue=u.vvColor=u.vvRotation=!1:(u.vvOpacity=0!=(o&t.WGLVVFlag.OPACITY),u.vvSizeMinMaxValue=0!=(o&t.WGLVVFlag.SIZE_MINMAX_VALUE),u.vvSizeScaleStops=0!=(o&t.WGLVVFlag.SIZE_SCALE_STOPS),u.vvSizeFieldStops=0!=(o&t.WGLVVFlag.SIZE_FIELD_STOPS),u.vvSizeUnitValue=0!=(o&t.WGLVVFlag.SIZE_UNIT_VALUE),u.vvColor=0!=(o&t.WGLVVFlag.COLOR),u.vvRotation=0!=(o&t.WGLVVFlag.ROTATION)),u.visibility=!1,s.materialKey=a.getMaterialKey(u),s.materialKeyInfo=u,s},e.fromGlyph=function(i,n,o){var s=new e,u=new r;return u.geometryType=n,u.sdf=!0,u.pattern=!1,u.visibility=!1,u.heatmap=!1,s.texBindingInfo.push(new l(2,i.page,"u_texture")),0===o?u.vvOpacity=u.vvSizeMinMaxValue=u.vvSizeScaleStops=u.vvSizeFieldStops=u.vvSizeUnitValue=u.vvColor=u.vvRotation=!1:(u.vvOpacity=0!=(o&t.WGLVVFlag.OPACITY),u.vvSizeMinMaxValue=0!=(o&t.WGLVVFlag.SIZE_MINMAX_VALUE),u.vvSizeScaleStops=0!=(o&t.WGLVVFlag.SIZE_SCALE_STOPS),u.vvSizeFieldStops=0!=(o&t.WGLVVFlag.SIZE_FIELD_STOPS),u.vvSizeUnitValue=0!=(o&t.WGLVVFlag.SIZE_UNIT_VALUE),u.vvColor=0!=(o&t.WGLVVFlag.COLOR),u.vvRotation=0!=(o&t.WGLVVFlag.ROTATION)),s.materialKey=a.getMaterialKey(u),s.materialKeyInfo=u,s},e.prototype.copy=function(e){this.materialParams=e.materialParams.map(function(e){return e.clone()}),this.texBindingInfo=e.texBindingInfo.map(function(e){return e.clone()}),e.materialKeyInfo&&(this.materialKeyInfo=new r,this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},e.prototype.serialize=function(e){return e.push(this.materialKey),o.serializeList(e,this.texBindingInfo),o.serializeList(e,this.materialParams),e},e.deserialize=function(i){var t=new e;return t.materialKey=i.readInt32(),t.texBindingInfo=o.deserializeList(i,l),t.materialParams=o.deserializeList(i,s),t.materialKeyInfo=new r,n(t.materialKeyInfo,t.materialKey),t},e}();i.default=u});