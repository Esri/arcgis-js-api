// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/assignHelper","../core/Accessor","../core/urlUtils","../core/accessorSupport/decorators"],function(r,e,t,o,n,p,s,l,i){return function(r){function e(e){var t=r.call(this)||this;return t.requestOptions=null,t.url=null,t}return t(e,r),e.prototype.normalizeCtorArgs=function(r,e){return"string"!=typeof r?r:p({url:r},e)},Object.defineProperty(e.prototype,"parsedUrl",{get:function(){return this._parseUrl(this.url)},enumerable:!0,configurable:!0}),e.prototype._parseUrl=function(r){return r?l.urlToObject(r):null},e.prototype._encode=function(r,e,t){var o={};for(var n in r)if("declaredClass"!==n){var p=r[n];if(null!=p&&"function"!=typeof p)if(Array.isArray(p)){o[n]=[];for(var s=0;s<p.length;s++)o[n][s]=this._encode(p[s])}else if("object"==typeof p)if(p.toJSON){var l=p.toJSON(t&&t[n]);o[n]=e?l:JSON.stringify(l)}else o[n]=e?p:JSON.stringify(p);else o[n]=p}return o},o([i.property({readOnly:!0,dependsOn:["url"]})],e.prototype,"parsedUrl",null),o([i.property()],e.prototype,"requestOptions",void 0),o([i.property({type:String})],e.prototype,"url",void 0),e=o([i.subclass("esri.tasks.Task")],e)}(i.declared(s))});