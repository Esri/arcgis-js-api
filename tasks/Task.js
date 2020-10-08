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

define(["require","exports","tslib","../core/Accessor","../core/urlUtils","../core/accessorSupport/decorators"],(function(r,e,t,o,n,s){"use strict";return function(r){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=r.apply(this,e)||this;return o.requestOptions=null,o.url=null,o}return t.__extends(e,r),e.prototype.normalizeCtorArgs=function(r,e){return"string"!=typeof r?r:t.__assign({url:r},e)},Object.defineProperty(e.prototype,"parsedUrl",{get:function(){return this._parseUrl(this.url)},enumerable:!1,configurable:!0}),e.prototype._parseUrl=function(r){return r?n.urlToObject(r):null},e.prototype._encode=function(r,e,t){var o={};for(var n in r)if("declaredClass"!==n){var s=r[n];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){o[n]=[];for(var i=0;i<s.length;i++)o[n][i]=this._encode(s[i])}else if("object"==typeof s)if(s.toJSON){var p=s.toJSON(t&&t[n]);o[n]=e?p:JSON.stringify(p)}else o[n]=e?s:JSON.stringify(s);else o[n]=s}return o},t.__decorate([s.property({readOnly:!0,dependsOn:["url"]})],e.prototype,"parsedUrl",null),t.__decorate([s.property()],e.prototype,"requestOptions",void 0),t.__decorate([s.property({type:String})],e.prototype,"url",void 0),e=t.__decorate([s.subclass("esri.tasks.Task")],e)}(o)}));