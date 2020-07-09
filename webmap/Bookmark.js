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

define(["require","exports","tslib","../core/Identifiable","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","../geometry/Extent","../webdoc/support/Thumbnail"],(function(e,t,r,n,o,i,u,a,l,p){return function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.name=null,r.thumbnail=new p.default,r}var n;return r.__extends(t,e),n=t,t.prototype.castThumbnail=function(e){return"string"==typeof e?new p.default({url:e}):a.ensureType(p.default,e)},t.prototype.clone=function(){return new n(i.clone({extent:this.extent,name:this.name,thumbnail:this.thumbnail}))},r.__decorate([u.property({type:l,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"extent",void 0),r.__decorate([u.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"name",void 0),r.__decorate([u.property({type:p.default,json:{write:{overridePolicy:function(e){return{enabled:!(!e||!e.url)}}}}})],t.prototype,"thumbnail",void 0),r.__decorate([u.cast("thumbnail")],t.prototype,"castThumbnail",null),t=n=r.__decorate([u.subclass("esri.webmap.Bookmark")],t)}(n.IdentifiableMixin(o.JSONSupport))}));