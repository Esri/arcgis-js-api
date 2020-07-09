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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(r,e,t,o,u){Object.defineProperty(e,"__esModule",{value:!0});var n=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.url="",e}var o;return t.__extends(e,r),o=e,e.prototype.destroy=function(){this.url=""},e.prototype.clone=function(){return new o({url:this.url})},t.__decorate([u.property({type:String,json:{write:{isRequired:!0}}})],e.prototype,"url",void 0),e=o=t.__decorate([u.subclass("esri.webdoc.support.Thumbnail")],e)}(o.JSONSupport);e.default=n}));