// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./accessorSupport/decorators","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/write"],function(t,r,e,o,i,n,s,a,p,c,u){function f(t){return c.getProperties(t).store}return function(t){function r(){var r=t.call(this)||this,e=c.getProperties(r),o=e.metadatas,i=e.store,n=new s.default;return e.store=n,i.keys().forEach(function(t){n.set(t,i.get(t),a.OriginId.DEFAULTS)}),Object.keys(o).forEach(function(t){e.internalGet(t)&&n.set(t,e.internalGet(t),a.OriginId.DEFAULTS)}),r}return e(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),f(this).clear(t,a.nameToId(r))},r.prototype.read=function(t,r){return p.default(this,t,r),this},r.prototype.write=function(t,r){return t=t||{},u.default(this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),o=a.nameToId(r);if("string"==typeof t)return e.get(t,o);var i={};return t.forEach(function(t){i[t]=e.get(t,o)}),i},r.prototype.originOf=function(t){var r=f(this);if("string"==typeof t)return a.idToName(r.originOf(t));var e={};t.forEach(function(t){e[t]=a.idToName(r.originOf(t))})},r.prototype.revert=function(t,r){var e,o=f(this),i=a.nameToId(r),n=c.getProperties(this);e="string"==typeof t?"*"===t?Object.keys(o.getAll(i)):[t]:t,e.forEach(function(t){n.propertyInvalidated(t),o.revert(t,i),n.propertyCommitted(t)})},r.prototype.removeOrigin=function(t){var r=f(this),e=a.nameToId(t),o=r.getAll(e);for(var i in o)r.originOf(i)===e&&r.set(i,o[i],a.OriginId.USER)},r.prototype.updateOrigin=function(t,r){var e=f(this),o=a.nameToId(r),i=this.get(t);e.clear(t),e.set(t,i,o)},r=o([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(i))});