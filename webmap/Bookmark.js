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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Accessor","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","../geometry/Extent","../webdoc/support/Thumbnail"],function(e,t,r,o,p,n,u,a,c){return function(e){function t(t){var r=e.call(this)||this;return r.extent=null,r.name=null,r.thumbnail=new c.default,r}return r(t,e),t.prototype.castThumbnail=function(e){return"string"==typeof e?new c.default({url:e}):u.ensureType(c.default,e)},o([n.property({type:a})],t.prototype,"extent",void 0),o([n.property()],t.prototype,"name",void 0),o([n.property({type:c.default})],t.prototype,"thumbnail",void 0),o([n.cast("thumbnail")],t.prototype,"castThumbnail",null),t=o([n.subclass("esri.webmap.Bookmark")],t)}(n.declared(p))});