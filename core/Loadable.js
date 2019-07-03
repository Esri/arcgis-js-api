// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./Error","./lang","./Promise","./promiseUtils","./Warning","./accessorSupport/decorators"],function(o,r,t,e,a,l,n,d,s,i,p){var u="not-loaded",c="loading",f="failed",y="loaded",_=function(o){function r(){var r=o.call(this)||this;return r.loadError=null,r.loadStatus="not-loaded",r.loadWarnings=null,r._set("loadWarnings",[]),r.addResolvingPromise(s.create(function(o){var t=r.load.bind(r);r.load=function(e){var a=s.create(function(o,t){s.onAbort(e,t),r._promiseProps.when(o,t)});if(r.loadStatus===u){r._set("loadStatus",c);var l=r._loadController=s.createAbortController();t({signal:l.signal}),s.onAbort(l.signal,function(){r._promiseProps.abort()})}return o(),a}})),r.when(function(){r._set("loadStatus",y),r._loadController=null},function(o){r._set("loadStatus",f),r._set("loadError",o),r._loadController=null}),r}return t(r,o),Object.defineProperty(r.prototype,"loaded",{get:function(){return this.loadStatus===y},enumerable:!0,configurable:!0}),r.prototype.load=function(o){return null},r.prototype.cancelLoad=function(){return this.isFulfilled()?this:(this._set("loadError",new l("load:cancelled","Cancelled")),this._loadController.abort(),this)},e([p.property({readOnly:!0,dependsOn:["loadStatus"]})],r.prototype,"loaded",null),e([p.property({readOnly:!0})],r.prototype,"loadError",void 0),e([p.property()],r.prototype,"loadStatus",void 0),e([p.property({type:[i],readOnly:!0})],r.prototype,"loadWarnings",void 0),r=e([p.subclass("esri.core.Loadable")],r)}(p.declared(a,d));return _.prototype["-chains-"]=n.mixin({},a._meta.chains,{load:"after"}),_});