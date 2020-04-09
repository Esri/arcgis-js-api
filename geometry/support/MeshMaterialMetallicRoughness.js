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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../Color","../../core/maybe","../../core/accessorSupport/decorators","./MeshMaterial","./MeshTexture"],(function(e,t,o,i,r,s,l,n,u,p){return function(e){function t(t){var o=e.call(this,t)||this;return o.emissiveColor=null,o.emissiveTexture=null,o.occlusionTexture=null,o.metallic=1,o.roughness=1,o.metallicRoughnessTexture=null,o}var u;return o(t,e),u=t,t.prototype.clone=function(){return this.cloneWithDeduplication(null,new Map)},t.prototype.cloneWithDeduplication=function(e,t){var o=l.isSome(e)?e.get(this):null;if(o)return o;var i=new u(this.clonePropertiesWithDeduplication(t));return l.isSome(e)&&e.set(this,i),i},t.prototype.clonePropertiesWithDeduplication=function(e){return r({},this.inherited(arguments),{emissiveColor:this.emissiveColor?this.emissiveColor.clone():null,emissiveTexture:this.emissiveTexture?this.emissiveTexture.cloneWithDeduplication(e):null,occlusionTexture:this.occlusionTexture?this.occlusionTexture.cloneWithDeduplication(e):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?this.metallicRoughnessTexture.cloneWithDeduplication(e):null})},i([n.property({type:s,json:{write:!0}})],t.prototype,"emissiveColor",void 0),i([n.property({type:p,json:{write:!0}})],t.prototype,"emissiveTexture",void 0),i([n.property({type:p,json:{write:!0}})],t.prototype,"occlusionTexture",void 0),i([n.property({type:Number,json:{write:!0},range:{min:0,max:1}})],t.prototype,"metallic",void 0),i([n.property({type:Number,json:{write:!0},range:{min:0,max:1}})],t.prototype,"roughness",void 0),i([n.property({type:p,json:{write:!0}})],t.prototype,"metallicRoughnessTexture",void 0),t=u=i([n.subclass("esri.geometry.support.MeshMaterialMetallicRoughness")],t)}(n.declared(u))}));