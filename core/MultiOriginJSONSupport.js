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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./accessorSupport/decorators","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/write"],function(t,r,e,i,o,n,s,u,p,a,c){function f(t){return a.getProperties(t).store}function g(t){return t&&"getAtOrigin"in t&&"originOf"in t}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(t){return function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var i=t.apply(this,r)||this,o=a.getProperties(i),n=o.metadatas,u=o.store,p=new s.default;return o.store=p,u.keys().forEach(function(t){p.set(t,u.get(t),0)}),Object.keys(n).forEach(function(t){o.internalGet(t)&&p.set(t,o.internalGet(t),0)}),i}return e(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),f(this).delete(t,u.nameToId(r))},r.prototype.read=function(t,r){p.default(this,t,r)},r.prototype.write=function(t,r){return t=t||{},c.default(this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),i=u.nameToId(r);if("string"==typeof t)return e.get(t,i);var o={};return t.forEach(function(t){o[t]=e.get(t,i)}),o},r.prototype.originOf=function(t){var r=f(this);if("string"==typeof t)return u.idToName(r.originOf(t));var e={};t.forEach(function(t){e[t]=u.idToName(r.originOf(t))})},r.prototype.revert=function(t,r){var e,i=f(this),o=u.nameToId(r),n=a.getProperties(this);e="string"==typeof t?"*"===t?i.keys(o):[t]:t,e.forEach(function(t){n.propertyInvalidated(t),i.revert(t,o),n.propertyCommitted(t)})},r.prototype.removeOrigin=function(t){for(var r=f(this),e=u.nameToId(t),i=r.keys(e),o=0,n=i;o<n.length;o++){var s=n[o];r.originOf(s)===e&&r.set(s,r.get(s,e),6)}},r.prototype.updateOrigin=function(t,r){var e=f(this),i=u.nameToId(r),o=this.get(t);e.delete(t),e.set(t,o,i)},r=i([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(t))};var l=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r=i([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(r.MultiOriginJSONMixin(o)));r.MultiOriginJSONSupport=l,r.isMultiOriginJSONMixin=g});