// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/promiseUtils","../../core/Accessor","../../core/Error","../../core/Evented"],function(e,t,i,o,n,r,s,p,l){var a=function(e){function t(t){var i=e.call(this,t)||this;return i._initialViewpoint=null,i._goingHome=null,i.go=i.go.bind(i),i}return i(t,e),t.prototype.destroy=function(){this._stopGoingHome(),this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?this._goingHome?"going-home":"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){var t=this;this._initialViewpoint=null,e&&e.then(function(){t._initialViewpoint=e.viewpoint.clone(),t.notifyChange("viewpoint")}),this._set("view",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{get:function(){return this._get("viewpoint")||this._initialViewpoint},set:function(e){this._set("viewpoint",e)},enumerable:!0,configurable:!0}),t.prototype.go=function(){var e=this;if(!this.get("view.ready"))return r.reject(new p("home:disabled-state","Cannot go when disabled."));this._stopGoingHome(),this.emit("go");var t=this.view,i=t.goTo(this.viewpoint).always(function(){e.notifyChange("state"),e._goingHome=null});return this._goingHome=i,this.notifyChange("state"),i},t.prototype._stopGoingHome=function(){this._goingHome&&(this._goingHome.cancel(),this._goingHome=null)},t}(n.declared(s,l));return o([n.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"state",null),o([n.property()],a.prototype,"view",null),o([n.property()],a.prototype,"viewpoint",null),a=o([n.subclass("esri.widgets.Home.HomeViewModel")],a)});