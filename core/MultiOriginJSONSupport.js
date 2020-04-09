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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./accessorSupport/decorators","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/write"],(function(t,r,e,i,o,n,u,s,p,c,a){function f(t){return c.getProperties(t).store}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(t){return function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var i=t.apply(this,r)||this,o=c.getProperties(i),n=o.metadatas,s=o.store,p=new u.default;return o.store=p,s.keys().forEach((function(t){p.set(t,s.get(t),0)})),Object.keys(n).forEach((function(t){o.internalGet(t)&&p.set(t,o.internalGet(t),0)})),i}return e(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),f(this).delete(t,s.nameToId(r))},r.prototype.read=function(t,r){p.default(this,t,r)},r.prototype.write=function(t,r){return t=t||{},a.default(this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),i=s.nameToId(r);if("string"==typeof t)return e.get(t,i);var o={};return t.forEach((function(t){o[t]=e.get(t,i)})),o},r.prototype.originOf=function(t){return s.idToName(this.originIdOf(t))},r.prototype.originIdOf=function(t){return f(this).originOf(t)},r.prototype.revert=function(t,r){var e=f(this),i=s.nameToId(r),o=c.getProperties(this);("string"==typeof t?"*"===t?e.keys(i):[t]:t).forEach((function(t){o.propertyInvalidated(t),e.revert(t,i),o.propertyCommitted(t)}))},r.prototype.removeOrigin=function(t){for(var r=f(this),e=s.nameToId(t),i=0,o=r.keys(e);i<o.length;i++){var n=o[i];r.originOf(n)===e&&r.set(n,r.get(n,e),6)}},r.prototype.updateOrigin=function(t,r){var e=f(this),i=s.nameToId(r),o=this.get(t);e.delete(t),e.set(t,o,i)},r=i([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(t))};var d=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r=i([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(r.MultiOriginJSONMixin(o)));r.MultiOriginJSONSupport=d,r.isMultiOriginJSONMixin=function(t){return t&&"getAtOrigin"in t&&"originOf"in t}}));