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

define(["require","exports","tslib","./Accessor","./accessorSupport/decorators","./accessorSupport/read","./accessorSupport/write"],(function(r,t,e,o,n,i,u){function s(r,t){if(!r)return null;if(r.declaredClass)throw new Error("JSON object is already hydrated");var e=new this;return e.read(r,t),e}Object.defineProperty(t,"__esModule",{value:!0}),t.JSONSupportMixin=function(r){var t=function(r){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.apply(this,t)||this}return e.__extends(t,r),t.prototype.read=function(r,t){i.default(this,r,t)},t.prototype.write=function(r,t){return u.default(this,r||{},t)},t.prototype.toJSON=function(r){return this.write(null,r)},t.fromJSON=function(r,t){return s.call(this,r,t)},t=e.__decorate([n.subclass("esri.core.JSONSupport")],t)}(r);return t.prototype.toJSON.isDefaultToJSON=!0,t},t.isJSONSupport=function(r){return r&&"read"in r&&"write"in r&&"toJSON"in r};var p=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return e.__extends(t,r),t=e.__decorate([n.subclass("esri.core.JSONSupport")],t)}(t.JSONSupportMixin(o));t.JSONSupport=p}));