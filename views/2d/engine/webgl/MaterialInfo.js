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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./MaterialInfoUtils_updateMaterialVariations","./MaterialKeyInfo","./util/serializationUtils"],function(e,t,i,n,a){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,i){this.unit=e,this.pageId=t,this.semantic=i}return e.prototype.clone=function(){return new e(this.unit,this.pageId,this.semantic)},e.prototype.serialize=function(e){return e.writeInt32(this.unit),e.writeInt32(this.pageId),e},e.deserialize=function(t){return new e(t.readInt32(),t.readInt32(),"u_texture")},e}();t.TexBindingInfo=r;var o=function(){function e(e,t){this.name=e,this.value=t}return e.prototype.clone=function(){return new e(this.name,this.value)},e.prototype.serialize=function(e){return e.writeInt32(this.value),e},e.deserialize=function(t){return new e("u_my_param",t.readInt32())},e}();t.MaterialParam=o;var s=function(){function e(){this.texBindingInfo=[],this.materialParams=[]}return e.prototype.copy=function(e){this.materialParams=e.materialParams.map(function(e){return e.clone()}),this.texBindingInfo=e.texBindingInfo.map(function(e){return e.clone()}),e.materialKeyInfo&&(this.materialKeyInfo=new n,this.materialKeyInfo.copy(e.materialKeyInfo)),this.materialKey=e.materialKey},e.prototype.serialize=function(e){return e.writeInt32(this.materialKey),a.serializeList(e,this.texBindingInfo),a.serializeList(e,this.materialParams),e},e.deserialize=function(t){var s=new e;return s.materialKey=t.readInt32(),s.texBindingInfo=a.deserializeList(t,r),s.materialParams=a.deserializeList(t,o),s.materialKeyInfo=new n,i(s.materialKeyInfo,s.materialKey),s},e}();t.default=s});