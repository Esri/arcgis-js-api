// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","./enums","./MaterialInfoUtils","./MaterialInfoUtils_updateMaterialVariations","./MaterialKeyInfo","./util/serializationUtils"],(function(e,t,i,a,n,r,o){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t,i){this.unit=e,this.pageId=t,this.semantic=i}return e.prototype.clone=function(){return new e(this.unit,this.pageId,this.semantic)},e.prototype.serialize=function(e){return e.writeInt32(this.unit),e.writeInt32(this.pageId),e},e.deserialize=function(t){return new e(t.readInt32(),t.readInt32(),"u_texture")},e}();t.TexBindingInfo=l;var s=function(){function e(e,t){this.name=e,this.value=t}return e.prototype.clone=function(){return new e(this.name,this.value)},e.prototype.serialize=function(e){return e.writeInt32(this.value),e},e.deserialize=function(t){return new e("u_my_param",t.readInt32())},e}();t.MaterialParam=s;var v=function(){function e(){this.texBindingInfo=[],this.materialParams=[]}return e.fromSprite=function(t,n,o){var s=new e,v=new r;return v.geometryType=n,t?(v.sdf=t.sdf,v.pattern=!0,s.texBindingInfo.push(new l(1,t.page,"u_texture"))):(v.sdf=!1,v.pattern=!1),0===o?v.vvOpacity=v.vvSizeMinMaxValue=v.vvSizeScaleStops=v.vvSizeFieldStops=v.vvSizeUnitValue=v.vvColor=v.vvRotation=!1:(v.vvOpacity=0!=(o&i.WGLVVFlag.OPACITY),v.vvSizeMinMaxValue=0!=(o&i.WGLVVFlag.SIZE_MINMAX_VALUE),v.vvSizeScaleStops=0!=(o&i.WGLVVFlag.SIZE_SCALE_STOPS),v.vvSizeFieldStops=0!=(o&i.WGLVVFlag.SIZE_FIELD_STOPS),v.vvSizeUnitValue=0!=(o&i.WGLVVFlag.SIZE_UNIT_VALUE),v.vvColor=0!=(o&i.WGLVVFlag.COLOR),v.vvRotation=0!=(o&i.WGLVVFlag.ROTATION)),v.visibility=!1,s.materialKey=a.getMaterialKey(v),s.materialKeyInfo=v,s},e.fromGlyph=function(t,n,o){var s=new e,v=new r;return v.geometryType=n,v.sdf=!0,v.pattern=!1,v.visibility=!1,v.heatmap=!1,s.texBindingInfo.push(new l(2,t.page,"u_texture")),0===o?v.vvOpacity=v.vvSizeMinMaxValue=v.vvSizeScaleStops=v.vvSizeFieldStops=v.vvSizeUnitValue=v.vvColor=v.vvRotation=!1:(v.vvOpacity=0!=(o&i.WGLVVFlag.OPACITY),v.vvSizeMinMaxValue=0!=(o&i.WGLVVFlag.SIZE_MINMAX_VALUE),v.vvSizeScaleStops=0!=(o&i.WGLVVFlag.SIZE_SCALE_STOPS),v.vvSizeFieldStops=0!=(o&i.WGLVVFlag.SIZE_FIELD_STOPS),v.vvSizeUnitValue=0!=(o&i.WGLVVFlag.SIZE_UNIT_VALUE),v.vvColor=0!=(o&i.WGLVVFlag.COLOR),v.vvRotation=0!=(o&i.WGLVVFlag.ROTATION)),s.materialKey=a.getMaterialKey(v),s.materialKeyInfo=v,s},e.prototype.copy=function(e){this.materialParams=e.materialParams.map((function(e){return e.clone()})),this.texBindingInfo=e.texBindingInfo.map((function(e){return e.clone()})),e.materialKeyInfo&&(this.materialKeyInfo=new r,this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},e.prototype.serialize=function(e){return e.writeInt32(this.materialKey),o.serializeList(e,this.texBindingInfo),o.serializeList(e,this.materialParams),e},e.deserialize=function(t){var i=new e;return i.materialKey=t.readInt32(),i.texBindingInfo=o.deserializeList(t,l),i.materialParams=o.deserializeList(t,s),i.materialKeyInfo=new r,n(i.materialKeyInfo,i.materialKey),i},e}();t.default=v}));