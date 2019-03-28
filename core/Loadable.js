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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./Error","./lang","./Promise","./promiseUtils","./Warning","./accessorSupport/decorators"],function(e,o,r,t,a,n,l,d,s,i,p){var u="not-loaded",c="loading",y="failed",f="loaded",h=function(e){function o(){var o=e.call(this)||this;return o.loadError=null,o.loadStatus="not-loaded",o.loadWarnings=null,o._set("loadWarnings",[]),o.addResolvingPromise(s.create(function(e){var r=!1,t=o.load.bind(o);o.load=function(){return o.loadStatus===u&&(o._set("loadStatus",c),t()),r||(e(),r=!0),o.when()}})),o.when(function(e){o._set("loadStatus",f)},function(e){o._set("loadStatus",y),o._set("loadError",e)}),o}return r(o,e),Object.defineProperty(o.prototype,"loaded",{get:function(){return this.loadStatus===f},enumerable:!0,configurable:!0}),o.prototype.load=function(){return null},o.prototype.cancelLoad=function(){return this.isFulfilled()?this:(this._set("loadError",new n("load:cancelled","Cancelled")),this._promiseProps.resolver.reject(this.loadError),this)},t([p.property({readOnly:!0,dependsOn:["loadStatus"]})],o.prototype,"loaded",null),t([p.property({readOnly:!0})],o.prototype,"loadError",void 0),t([p.property()],o.prototype,"loadStatus",void 0),t([p.property({type:[i],readOnly:!0})],o.prototype,"loadWarnings",void 0),o=t([p.subclass("esri.core.Loadable")],o)}(p.declared(a,d));return h.prototype["-chains-"]=l.mixin({},a._meta.chains,{load:"after"}),h});