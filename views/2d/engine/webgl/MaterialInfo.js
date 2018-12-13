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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfoUtils","./MaterialInfoUtils_updateMaterialVariations","./MaterialKeyInfo","./util/serializationUtils"],function(e,t,l,o,i,s,a){Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function t(e,t,i){this.unit=e,this.pageId=t,this.semantic=i}return t.prototype.clone=function(){return new t(this.unit,this.pageId,this.semantic)},t.prototype.serialize=function(e){return e.push(this.unit),e.push(this.pageId),e},t.deserialize=function(e){return new t(e.readInt32(),e.readInt32(),"u_texture")},t}();t.TexBindingInfo=u;var n=function(){function t(e,t){this.name=e,this.value=t}return t.prototype.clone=function(){return new t(this.name,this.value)},t.prototype.serialize=function(e){return e.push(this.value),e},t.deserialize=function(e){return new t("u_my_param",e.readInt32())},t}();t.MaterialParam=n;var r=function(){function r(){this.texBindingInfo=[],this.materialParams=[]}return r.fromSprite=function(e,t,i){var a=new r,n=new s;return n.geometryType=t,e?(n.sdf=e.sdf,n.pattern=!0,n.simplePattern=e.simplePattern,a.texBindingInfo.push(new u(1,e.page,"u_texture"))):(n.sdf=!1,n.pattern=!1,n.simplePattern=!1),0===i?n.vvOpacity=n.vvSizeMinMaxValue=n.vvSizeScaleStops=n.vvSizeFieldStops=n.vvSizeUnitValue=n.vvColor=n.vvRotation=!1:(n.vvOpacity=0!=(i&l.WGLVVFlag.OPACITY),n.vvSizeMinMaxValue=0!=(i&l.WGLVVFlag.SIZE_MINMAX_VALUE),n.vvSizeScaleStops=0!=(i&l.WGLVVFlag.SIZE_SCALE_STOPS),n.vvSizeFieldStops=0!=(i&l.WGLVVFlag.SIZE_FIELD_STOPS),n.vvSizeUnitValue=0!=(i&l.WGLVVFlag.SIZE_UNIT_VALUE),n.vvColor=0!=(i&l.WGLVVFlag.COLOR),n.vvRotation=0!=(i&l.WGLVVFlag.ROTATION)),n.visibility=!1,a.materialKey=o.getMaterialKey(n),a.materialKeyInfo=n,a},r.fromGlyph=function(e,t,i){var a=new r,n=new s;return n.geometryType=t,n.sdf=!0,n.pattern=!1,n.visibility=!1,n.simplePattern=!1,a.texBindingInfo.push(new u(2,e.page,"u_texture")),0===i?n.vvOpacity=n.vvSizeMinMaxValue=n.vvSizeScaleStops=n.vvSizeFieldStops=n.vvSizeUnitValue=n.vvColor=n.vvRotation=!1:(n.vvOpacity=0!=(i&l.WGLVVFlag.OPACITY),n.vvSizeMinMaxValue=0!=(i&l.WGLVVFlag.SIZE_MINMAX_VALUE),n.vvSizeScaleStops=0!=(i&l.WGLVVFlag.SIZE_SCALE_STOPS),n.vvSizeFieldStops=0!=(i&l.WGLVVFlag.SIZE_FIELD_STOPS),n.vvSizeUnitValue=0!=(i&l.WGLVVFlag.SIZE_UNIT_VALUE),n.vvColor=0!=(i&l.WGLVVFlag.COLOR),n.vvRotation=0!=(i&l.WGLVVFlag.ROTATION)),a.materialKey=o.getMaterialKey(n),a.materialKeyInfo=n,a},r.prototype.copy=function(e){this.materialParams=e.materialParams.map(function(e){return e.clone()}),this.texBindingInfo=e.texBindingInfo.map(function(e){return e.clone()}),e.materialKeyInfo&&(this.materialKeyInfo=new s,this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},r.prototype.serialize=function(e){return e.push(this.materialKey),a.serializeList(e,this.texBindingInfo),a.serializeList(e,this.materialParams),e},r.deserialize=function(e){var t=new r;return t.materialKey=e.readInt32(),t.texBindingInfo=a.deserializeList(e,u),t.materialParams=a.deserializeList(e,n),t.materialKeyInfo=new s,i(t.materialKeyInfo,t.materialKey),t},r}();t.default=r});