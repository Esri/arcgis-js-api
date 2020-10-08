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

define(["require","exports","tslib","./Accessor","./ReadOnlyMultiOriginJSONSupport","./accessorSupport/PropertyOrigin","./accessorSupport/utils","./accessorSupport/write","./accessorSupport/decorators/subclass"],(function(t,r,i,e,n,o,u,s,p){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONSupport=r.MultiOriginJSONMixin=void 0;function c(t){return u.getProperties(t).store}r.MultiOriginJSONMixin=function(t){return function(t){function r(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return t.apply(this,r)||this}return i.__extends(r,t),r=i.__decorate([p.subclass("esri.core.MultiOriginJSONSupport")],r)}(function(t){var r=function(t){function r(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return t.apply(this,r)||this}return i.__extends(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),c(this).delete(t,o.nameToId(r))},r.prototype.write=function(t,r){return void 0===t&&(t={}),t=t||{},s.default(this,t,r),t},r.prototype.setAtOrigin=function(t,r,i){u.getProperties(this).setAtOrigin(t,r,o.nameToId(i))},r.prototype.removeOrigin=function(t){for(var r=c(this),i=o.nameToId(t),e=0,n=r.keys(i);e<n.length;e++){var u=n[e];r.originOf(u)===i&&r.set(u,r.get(u,i),6)}},r.prototype.updateOrigin=function(t,r){for(var i=c(this),e=o.nameToId(r),n=this.get(t),u=e+1;u<o.OriginIdNum;++u)i.delete(t,u);i.set(t,n,e)},r.prototype.toJSON=function(t){return this.write({},t)},r=i.__decorate([p.subclass("esri.core.WriteableMultiOriginJSONSupport")],r)}(t);return r.prototype.toJSON.isDefaultToJSON=!0,r}(n.ReadOnlyMultiOriginJSONMixin(t)))};var a=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(r,t),r=i.__decorate([p.subclass("esri.core.MultiOriginJSONSupport")],r)}(r.MultiOriginJSONMixin(e));r.MultiOriginJSONSupport=a}));