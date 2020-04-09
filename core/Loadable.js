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

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./Error","./lang","./Promise","./promiseUtils","./Warning","./accessorSupport/decorators"],(function(o,r,e,t,n,a,l,d,s,i,u){var c=function(o){var r=function(o){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var t=o.apply(this,r)||this;return t.loadError=null,t.loadStatus="not-loaded",t.loadWarnings=null,t._set("loadWarnings",[]),t.addResolvingPromise(s.create((function(o){var r=t.load.bind(t);t.load=function(e){var n=s.create((function(o,r){s.onAbortOrThrow(e,r),t.destroyed&&r(new a("load:instance-destroyed","Instance is destroyed",{instance:t})),t._promiseProps.when(o,r)}));if("not-loaded"===t.loadStatus){t._set("loadStatus","loading");var l=t._loadController=s.createAbortController();r({signal:l.signal}),s.onAbort(l.signal,(function(){t._promiseProps.abort()}))}return o(),n}}))),t.when((function(){t._set("loadStatus","loaded"),t._loadController=null}),(function(o){t._set("loadStatus","failed"),t._set("loadError",o),t._loadController=null})),t}return e(r,o),Object.defineProperty(r.prototype,"loaded",{get:function(){return"loaded"===this.loadStatus},enumerable:!0,configurable:!0}),r.prototype.load=function(){return null},r.prototype.cancelLoad=function(){return this.isFulfilled()?this:(this._set("loadError",new a("load:cancelled","Cancelled")),this._loadController.abort(),this)},t([u.property({readOnly:!0,dependsOn:["loadStatus"]})],r.prototype,"loaded",null),t([u.property({readOnly:!0})],r.prototype,"loadError",void 0),t([u.property()],r.prototype,"loadStatus",void 0),t([u.property({type:[i],readOnly:!0})],r.prototype,"loadWarnings",void 0),r=t([u.subclass("esri.core.Loadable")],r)}(u.declared(o));return r.prototype["-chains-"]=l.mixin({},n._meta.chains,{load:"after"}),r},p=function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return e(r,o),r=t([u.subclass("esri.core.Loadable")],r)}(u.declared(c(d.EsriPromise)));return function(o){o.LoadableMixin=c,o.isLoadable=function(o){return!(!o||!o.load)}}(p||(p={})),p}));