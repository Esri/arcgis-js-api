// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./accessorSupport/decorators","./Accessor","./accessorSupport/read","./accessorSupport/write","./accessorSupport/utils","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin"],function(t,r,e,o,i,n,s,a,p,c,u){function f(t){return p.getProperties(t).store}var d=function(t){function r(){t.call(this);var r=p.getProperties(this),e=r.metadatas,o=r.store,i=new c["default"];r.store=i,o.keys().forEach(function(t){i.set(t,o.get(t),u.OriginId.DEFAULTS)}),Object.keys(e).forEach(function(t){r.internalGet(t)&&i.set(t,r.internalGet(t),u.OriginId.DEFAULTS)})}return e(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),f(this).clear(t,u.nameToId(r))},r.prototype.read=function(t,r){return s["default"](this,t,r),this},r.prototype.write=function(t,r){return t=t||{},a["default"](this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),o=u.nameToId(r);if("string"==typeof t)return e.get(t,o);var i={};return t.forEach(function(t){i[t]=e.get(t,o)}),i},r.prototype.originOf=function(t){var r=f(this);if("string"==typeof t)return u.idToName(r.originOf(t));var e={};t.forEach(function(t){e[t]=u.idToName(r.originOf(t))})},r.prototype.revert=function(t,r){var e,o=f(this),i=u.nameToId(r),n=p.getProperties(this);e="string"==typeof t?"*"===t?Object.keys(o.getAll(i)):[t]:t,e.forEach(function(t){n.propertyInvalidated(t),o.revert(t,i),n.propertyCommitted(t)})},r.prototype.removeOrigin=function(t){var r=f(this),e=u.nameToId(t),o=r.getAll(e);for(var i in o)r.originOf(i)===e&&r.set(i,o[i],u.OriginId.USER)},r.prototype.updateOrigin=function(t,r){var e=f(this),o=u.nameToId(r),i=this.get(t);e.clear(t),e.set(t,i,o)},r=o([i.subclass("esri.core.MultiOriginJSONSupport")],r)}(i.declared(n));return d});