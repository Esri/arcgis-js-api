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

define(["require","exports","tslib","../Viewpoint","../core/deprecate","../core/Error","../core/Identifiable","../core/JSONSupport","../core/lang","../core/Logger","../core/accessorSupport/decorators","../core/accessorSupport/ensureType","../geometry/Extent","../webdoc/support/Thumbnail"],(function(e,t,r,o,n,i,p,a,l,u,c,s,d,y){"use strict";var w=u.getLogger("esri.webmap.Bookmark");return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.thumbnail=new y.default,r}var p;return r.__extends(t,e),p=t,Object.defineProperty(t.prototype,"extent",{set:function(e){n.deprecatedProperty(w,"extent",{replacement:"viewpoint",version:"4.17"}),this._set("viewpoint",new o({targetGeometry:e.clone()})),this._set("extent",e)},enumerable:!1,configurable:!0}),t.prototype.castThumbnail=function(e){return"string"==typeof e?new y.default({url:e}):s.ensureType(y.default,e)},Object.defineProperty(t.prototype,"viewpoint",{set:function(e){var t=e.targetGeometry;if("extent"===(null==t?void 0:t.type))this._set("extent",t.clone()),this._set("viewpoint",e);else{var r=new i("invalid-viewpoint","'viewpoint.targetGeometry' should be an extent",{viewpoint:e});w.error(r)}},enumerable:!1,configurable:!0}),t.prototype.readViewpoint=function(e,t){var r=t.extent,n=t.viewpoint;return o.fromJSON(n||{targetGeometry:r})},t.prototype.clone=function(){return new p(l.clone({name:this.name,thumbnail:this.thumbnail,viewpoint:this.viewpoint}))},r.__decorate([c.property({type:d,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],t.prototype,"extent",null),r.__decorate([c.property({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"name",void 0),r.__decorate([c.property({type:y.default,json:{write:{overridePolicy:function(e){return{enabled:!(!e||!e.url)}}}}})],t.prototype,"thumbnail",void 0),r.__decorate([c.cast("thumbnail")],t.prototype,"castThumbnail",null),r.__decorate([c.property({type:o,nonNullable:!0,json:{write:!0}})],t.prototype,"viewpoint",null),r.__decorate([c.reader("viewpoint",["extent","viewpoint"])],t.prototype,"readViewpoint",null),t=p=r.__decorate([c.subclass("esri.webmap.Bookmark")],t)}(p.IdentifiableMixin(a.JSONSupport))}));