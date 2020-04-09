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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Identifiable","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","../geometry/Extent","../webdoc/support/Thumbnail"],(function(e,t,r,n,o,u,i,p,l,a,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.name=null,r.thumbnail=new c.default,r}var o;return r(t,e),o=t,t.prototype.castThumbnail=function(e){return"string"==typeof e?new c.default({url:e}):l.ensureType(c.default,e)},t.prototype.clone=function(){return new o(i.clone({extent:this.extent,name:this.name,thumbnail:this.thumbnail}))},n([p.property({type:a,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"extent",void 0),n([p.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"name",void 0),n([p.property({type:c.default,json:{write:{overridePolicy:function(e){return{enabled:!(!e||!e.url)}}}}})],t.prototype,"thumbnail",void 0),n([p.cast("thumbnail")],t.prototype,"castThumbnail",null),t=o=n([p.subclass("esri.webmap.Bookmark")],t)}(p.declared(o.IdentifiableMixin(u.JSONSupport)))}));