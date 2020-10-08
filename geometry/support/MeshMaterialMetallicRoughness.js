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

define(["require","exports","tslib","../../Color","../../core/maybe","../../core/accessorSupport/decorators","./MeshMaterial","./MeshTexture"],(function(e,t,o,i,r,s,n,l){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.emissiveColor=null,o.emissiveTexture=null,o.occlusionTexture=null,o.metallic=1,o.roughness=1,o.metallicRoughnessTexture=null,o}var n;return o.__extends(t,e),n=t,t.prototype.clone=function(){return this.cloneWithDeduplication(null,new Map)},t.prototype.cloneWithDeduplication=function(e,t){var o=r.isSome(e)?e.get(this):null;if(o)return o;var i=new n(this.clonePropertiesWithDeduplication(t));return r.isSome(e)&&e.set(this,i),i},t.prototype.clonePropertiesWithDeduplication=function(t){return o.__assign(o.__assign({},e.prototype.clonePropertiesWithDeduplication.call(this,t)),{emissiveColor:this.emissiveColor?this.emissiveColor.clone():null,emissiveTexture:this.emissiveTexture?this.emissiveTexture.cloneWithDeduplication(t):null,occlusionTexture:this.occlusionTexture?this.occlusionTexture.cloneWithDeduplication(t):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?this.metallicRoughnessTexture.cloneWithDeduplication(t):null})},o.__decorate([s.property({type:i,json:{write:!0}})],t.prototype,"emissiveColor",void 0),o.__decorate([s.property({type:l,json:{write:!0}})],t.prototype,"emissiveTexture",void 0),o.__decorate([s.property({type:l,json:{write:!0}})],t.prototype,"occlusionTexture",void 0),o.__decorate([s.property({type:Number,json:{write:!0},range:{min:0,max:1}})],t.prototype,"metallic",void 0),o.__decorate([s.property({type:Number,json:{write:!0},range:{min:0,max:1}})],t.prototype,"roughness",void 0),o.__decorate([s.property({type:l,json:{write:!0}})],t.prototype,"metallicRoughnessTexture",void 0),t=n=o.__decorate([s.subclass("esri.geometry.support.MeshMaterialMetallicRoughness")],t)}(n)}));