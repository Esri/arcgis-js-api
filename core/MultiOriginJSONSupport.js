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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./Accessor","./accessorSupport/decorators","./accessorSupport/MultiOriginStore","./accessorSupport/PropertyOrigin","./accessorSupport/read","./accessorSupport/utils","./accessorSupport/write"],(function(t,e,r,o,i,n,s,u,p,a){function c(t){return p.getProperties(t).store}Object.defineProperty(e,"__esModule",{value:!0}),e.MultiOriginJSONMixin=function(t){var e=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=t.apply(this,e)||this,i=p.getProperties(o),s=i.metadatas,u=i.store,a=new n.default;return i.store=a,u.keys().forEach((function(t){a.set(t,u.get(t),0)})),Object.keys(s).forEach((function(t){i.internalGet(t)&&a.set(t,i.internalGet(t),0)})),o}return r.__extends(e,t),e.prototype.clear=function(t,e){return void 0===e&&(e="user"),c(this).delete(t,s.nameToId(e))},e.prototype.read=function(t,e){u.default(this,t,e)},e.prototype.write=function(t,e){return t=t||{},a.default(this,t,e),t},e.prototype.getAtOrigin=function(t,e){var r=c(this),o=s.nameToId(e);if("string"==typeof t)return r.get(t,o);var i={};return t.forEach((function(t){i[t]=r.get(t,o)})),i},e.prototype.setAtOrigin=function(t,e,r){p.getProperties(this).setAtOrigin(t,e,s.nameToId(r))},e.prototype.originOf=function(t){return s.idToName(this.originIdOf(t))},e.prototype.originIdOf=function(t){return c(this).originOf(t)},e.prototype.revert=function(t,e){var r=c(this),o=s.nameToId(e),i=p.getProperties(this);("string"==typeof t?"*"===t?r.keys(o):[t]:t).forEach((function(t){i.propertyInvalidated(t),r.revert(t,o),i.propertyCommitted(t)}))},e.prototype.removeOrigin=function(t){for(var e=c(this),r=s.nameToId(t),o=0,i=e.keys(r);o<i.length;o++){var n=i[o];e.originOf(n)===r&&e.set(n,e.get(n,r),6)}},e.prototype.updateOrigin=function(t,e){for(var r=c(this),o=s.nameToId(e),i=this.get(t),n=o+1;n<7;++n)r.delete(t,n);r.set(t,i,o)},e.prototype.toJSON=function(t){return this.write(null,t)},e=r.__decorate([i.subclass("esri.core.MultiOriginJSONSupport")],e)}(t);return e.prototype.toJSON.isDefaultToJSON=!0,e};var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e=r.__decorate([i.subclass("esri.core.MultiOriginJSONSupport")],e)}(e.MultiOriginJSONMixin(o));e.MultiOriginJSONSupport=f}));