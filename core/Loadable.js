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

define(["require","exports","tslib","./Error","./Promise","./promiseUtils","./Warning","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass"],(function(o,r,e,t,n,a,l,d,s){"use strict";var i=function(o){return function(o){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var n=o.apply(this,r)||this;return n._loadController=null,n.loadError=null,n.loadStatus="not-loaded",n._set("loadWarnings",[]),n.addResolvingPromise(a.create((function(o){var r=n.load.bind(n);n.load=function(e){var l=a.create((function(o,r){a.onAbortOrThrow(e,r),n.destroyed&&r(new t("load:instance-destroyed","Instance of '"+(n.declaredClass||n.constructor.name)+"' is already destroyed",{instance:n})),n._promiseProps.when(o,r)}));if("not-loaded"===n.loadStatus){n._set("loadStatus","loading");var d=n._loadController=a.createAbortController();r({signal:d.signal}),a.onAbort(d.signal,(function(){n._promiseProps.abort()}))}return o(),l}}))),n.when((function(){n._set("loadStatus","loaded"),n._loadController=null}),(function(o){n._set("loadStatus","failed"),n._set("loadError",o),n._loadController=null})),n}return e.__extends(r,o),Object.defineProperty(r.prototype,"loaded",{get:function(){return"loaded"===this.loadStatus},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"loadWarnings",{get:function(){return this._get("loadWarnings")},enumerable:!1,configurable:!0}),r.prototype.load=function(){return null},r.prototype.cancelLoad=function(){var o;return this.isFulfilled()?this:(this._set("loadError",new t("load:cancelled","Cancelled")),null===(o=this._loadController)||void 0===o||o.abort(),this)},e.__decorate([d.property({readOnly:!0,dependsOn:["loadStatus"]})],r.prototype,"loaded",null),e.__decorate([d.property({readOnly:!0})],r.prototype,"loadError",void 0),e.__decorate([d.property()],r.prototype,"loadStatus",void 0),e.__decorate([d.property({type:[l],readOnly:!0})],r.prototype,"loadWarnings",null),r=e.__decorate([s.subclass("esri.core.Loadable")],r)}(o)},u=function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return e.__extends(r,o),r=e.__decorate([s.subclass("esri.core.Loadable")],r)}(i(n.EsriPromise));return function(o){o.LoadableMixin=i,o.isLoadable=function(o){return!(!o||!o.load)}}(u||(u={})),u}));