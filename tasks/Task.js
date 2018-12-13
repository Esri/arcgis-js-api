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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/tsSupport/assignHelper","../core/Accessor","../core/urlUtils","../core/accessorSupport/decorators"],function(r,e,t,o,p,n,s,l,u){return function(r){function e(e){var t=r.call(this)||this;return t.requestOptions=null,t.url=null,t}return t(e,r),e.prototype.normalizeCtorArgs=function(r,e){return"string"!=typeof r?r:n({url:r},e)},Object.defineProperty(e.prototype,"parsedUrl",{get:function(){return this._parseUrl(this.url)},enumerable:!0,configurable:!0}),e.prototype._parseUrl=function(r){return r?l.urlToObject(r):null},e.prototype._encode=function(r,e,t){var o={};for(var p in r)if("declaredClass"!==p){var n=r[p];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){o[p]=[];for(var s=0;s<n.length;s++)o[p][s]=this._encode(n[s])}else if("object"==typeof n){if(n.toJSON){var l=n.toJSON(t&&t[p]);o[p]=e?l:JSON.stringify(l)}}else o[p]=n}return o},o([u.property({readOnly:!0,dependsOn:["url"]})],e.prototype,"parsedUrl",null),o([u.property()],e.prototype,"requestOptions",void 0),o([u.property({type:String})],e.prototype,"url",void 0),e=o([u.subclass("esri.tasks.Task")],e)}(u.declared(s))});