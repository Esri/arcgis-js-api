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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./accessorSupport/decorators","./Accessor","./accessorSupport/read","./accessorSupport/write","./accessorSupport/utils","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin"],function(t,r,e,o,i,n,s,p,c,a,u){function f(t){return c.getProperties(t).store}var g=function(t){function r(){t.call(this);var r=c.getProperties(this),e=r.store,o=new a["default"];r.store=o,e.keys().forEach(function(t){o.set(t,e.get(t),u.OriginId.DEFAULTS)})}return e(r,t),r.prototype.read=function(t,r){return s["default"](this,t,r),this},r.prototype.write=function(t,r){return t=t||{},p["default"](this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),o=u.nameToId(r);if("string"==typeof t)return e.get(t,o);var i={};return t.forEach(function(t){i[t]=e.get(t,o)}),i},r.prototype.originOf=function(t){var r=f(this);if("string"==typeof t)return u.idToName(r.originOf(t));var e={};t.forEach(function(t){e[t]=u.idToName(r.originOf(t))})},r.prototype.revert=function(t,r){var e,o=f(this),i=u.nameToId(r),n=c.getProperties(this);e="string"==typeof t?"*"===t?Object.keys(o.getAll(i)):[t]:t,e.forEach(function(t){n.propertyInvalidated(t),o.revert(t,i),n.propertyCommitted(t)})},r.prototype.removeOrigin=function(t){var r=f(this),e=u.nameToId(t),o=r.getAll(e);for(var i in o)r.originOf(i)===e&&r.set(i,o[i],u.OriginId.USER)},r.prototype.updateOrigin=function(t,r){var e=f(this),o=u.nameToId(r),i=this.get(t);e.clear(t),e.set(t,i,o)},r=o([i.subclass("esri.core.MultiOriginJSONSupport")],r)}(i.declared(n));return g});