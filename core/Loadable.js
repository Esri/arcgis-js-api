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

define(["require","exports","tslib","./Error","./Promise","./promiseUtils","./Warning","./accessorSupport/decorators"],(function(o,e,r,t,n,a,l,d){var s=function(o){return function(o){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=o.apply(this,e)||this;return n.loadError=null,n.loadStatus="not-loaded",n.loadWarnings=null,n._set("loadWarnings",[]),n.addResolvingPromise(a.create((function(o){var e=n.load.bind(n);n.load=function(r){var l=a.create((function(o,e){a.onAbortOrThrow(r,e),n.destroyed&&e(new t("load:instance-destroyed","Instance is destroyed",{instance:n})),n._promiseProps.when(o,e)}));if("not-loaded"===n.loadStatus){n._set("loadStatus","loading");var d=n._loadController=a.createAbortController();e({signal:d.signal}),a.onAbort(d.signal,(function(){n._promiseProps.abort()}))}return o(),l}}))),n.when((function(){n._set("loadStatus","loaded"),n._loadController=null}),(function(o){n._set("loadStatus","failed"),n._set("loadError",o),n._loadController=null})),n}return r.__extends(e,o),Object.defineProperty(e.prototype,"loaded",{get:function(){return"loaded"===this.loadStatus},enumerable:!0,configurable:!0}),e.prototype.load=function(){return null},e.prototype.cancelLoad=function(){return this.isFulfilled()?this:(this._set("loadError",new t("load:cancelled","Cancelled")),this._loadController.abort(),this)},r.__decorate([d.property({readOnly:!0,dependsOn:["loadStatus"]})],e.prototype,"loaded",null),r.__decorate([d.property({readOnly:!0})],e.prototype,"loadError",void 0),r.__decorate([d.property()],e.prototype,"loadStatus",void 0),r.__decorate([d.property({type:[l],readOnly:!0})],e.prototype,"loadWarnings",void 0),e=r.__decorate([d.subclass("esri.core.Loadable")],e)}(o)},i=function(o){function e(){return null!==o&&o.apply(this,arguments)||this}return r.__extends(e,o),e=r.__decorate([d.subclass("esri.core.Loadable")],e)}(s(n.EsriPromise));return function(o){o.LoadableMixin=s,o.isLoadable=function(o){return!(!o||!o.load)}}(i||(i={})),i}));