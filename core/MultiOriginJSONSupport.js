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

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./accessorSupport/decorators","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/write"],function(t,r,e,i,n,o,u,s,p,a,c){function f(t){return a.getProperties(t).store}function g(t){return t&&"getAtOrigin"in t&&"originOf"in t}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(t){return function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var i=t.apply(this,r)||this,n=a.getProperties(i),o=n.metadatas,p=n.store,c=new u.default;return n.store=c,p.keys().forEach(function(t){c.set(t,p.get(t),s.OriginId.DEFAULTS)}),Object.keys(o).forEach(function(t){n.internalGet(t)&&c.set(t,n.internalGet(t),s.OriginId.DEFAULTS)}),i}return e(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),f(this).clear(t,s.nameToId(r))},r.prototype.read=function(t,r){p.default(this,t,r)},r.prototype.write=function(t,r){return t=t||{},c.default(this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),i=s.nameToId(r);if("string"==typeof t)return e.get(t,i);var n={};return t.forEach(function(t){n[t]=e.get(t,i)}),n},r.prototype.originOf=function(t){var r=f(this);if("string"==typeof t)return s.idToName(r.originOf(t));var e={};t.forEach(function(t){e[t]=s.idToName(r.originOf(t))})},r.prototype.revert=function(t,r){var e,i=f(this),n=s.nameToId(r),o=a.getProperties(this);e="string"==typeof t?"*"===t?Object.keys(i.getAll(n)):[t]:t,e.forEach(function(t){o.propertyInvalidated(t),i.revert(t,n),o.propertyCommitted(t)})},r.prototype.removeOrigin=function(t){var r=f(this),e=s.nameToId(t),i=r.getAll(e);for(var n in i)r.originOf(n)===e&&r.set(n,i[n],s.OriginId.USER)},r.prototype.updateOrigin=function(t,r){var e=f(this),i=s.nameToId(r),n=this.get(t);e.clear(t),e.set(t,n,i)},r=i([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(o.declared(t))};var l=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r=i([o.subclass("esri.core.MultiOriginJSONSupport")],r)}(o.declared(r.MultiOriginJSONMixin(n)));r.MultiOriginJSONSupport=l,r.isMultiOriginJSONMixin=g});