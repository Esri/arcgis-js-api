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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/lang","../../core/maybe","../../core/accessorSupport/decorators","./MeshTexture"],(function(e,o,t,r,i,l,p,n,u){"use strict";return function(e){function o(o){var t=e.call(this,o)||this;return t.color=null,t.colorTexture=null,t.normalTexture=null,t.alphaMode="auto",t.alphaCutoff=.5,t.doubleSided=!0,t}var i;return t.__extends(o,e),i=o,o.prototype.clone=function(){return this.cloneWithDeduplication(null,new Map)},o.prototype.cloneWithDeduplication=function(e,o){var t=p.isSome(e)?e.get(this):null;if(t)return t;var r=new i(this.clonePropertiesWithDeduplication(o));return p.isSome(e)&&e.set(this,r),r},o.prototype.clonePropertiesWithDeduplication=function(e){return{color:l.clone(this.color),colorTexture:this.colorTexture?this.colorTexture.cloneWithDeduplication(e):null,normalTexture:this.normalTexture?this.normalTexture.cloneWithDeduplication(e):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided}},t.__decorate([n.property({type:r,json:{write:!0}})],o.prototype,"color",void 0),t.__decorate([n.property({type:u,json:{write:!0}})],o.prototype,"colorTexture",void 0),t.__decorate([n.property({type:u,json:{write:!0}})],o.prototype,"normalTexture",void 0),t.__decorate([n.property({json:{write:!0}})],o.prototype,"alphaMode",void 0),t.__decorate([n.property({json:{write:!0}})],o.prototype,"alphaCutoff",void 0),t.__decorate([n.property({json:{write:!0}})],o.prototype,"doubleSided",void 0),o=i=t.__decorate([n.subclass("esri.geometry.support.MeshMaterial")],o)}(i.JSONSupport)}));