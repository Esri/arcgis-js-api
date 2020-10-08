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

define(["require","exports","tslib","./Accessor","./maybe","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/decorators/subclass"],(function(t,r,e,i,n,o,s,u,a,p){"use strict";function c(t){return a.getProperties(t).store}Object.defineProperty(r,"__esModule",{value:!0}),r.ReadOnlyMultiOriginJSONSupport=r.ReadOnlyMultiOriginJSONMixin=void 0,r.ReadOnlyMultiOriginJSONMixin=function(t){return function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var i=t.apply(this,r)||this,s=n.assumeNonNull(a.getProperties(i)),u=s.metadatas,p=s.store,c=new o.default;return s.store=c,p.keys().forEach((function(t){c.set(t,p.get(t),0)})),Object.keys(u).forEach((function(t){s.internalGet(t)&&c.set(t,s.internalGet(t),0)})),i}return e.__extends(r,t),r.prototype.read=function(t,r){u.default(this,t,r)},r.prototype.getAtOrigin=function(t,r){var e=c(this),i=s.nameToId(r);if("string"==typeof t)return e.get(t,i);var n={};return t.forEach((function(t){n[t]=e.get(t,i)})),n},r.prototype.originOf=function(t){return s.idToName(this.originIdOf(t))},r.prototype.originIdOf=function(t){return c(this).originOf(t)},r.prototype.revert=function(t,r){var e=c(this),i=s.nameToId(r),n=a.getProperties(this);("string"==typeof t?"*"===t?e.keys(i):[t]:t).forEach((function(t){n.propertyInvalidated(t),e.revert(t,i),n.propertyCommitted(t)}))},r=e.__decorate([p.subclass("esri.core.ReadOnlyMultiOriginJSONSupport")],r)}(t)};var l=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e.__extends(r,t),r=e.__decorate([p.subclass("esri.core.ReadOnlyMultiOriginJSONSupport")],r)}(r.ReadOnlyMultiOriginJSONMixin(i));r.ReadOnlyMultiOriginJSONSupport=l}));