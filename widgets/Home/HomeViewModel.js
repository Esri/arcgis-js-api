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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Viewpoint","../../core/Accessor","../../core/Error","../../core/Evented","../../core/promiseUtils","../../core/accessorSupport/decorators","../support/GoTo"],function(e,t,o,i,n,r,p,c,s,l,a){return function(e){function t(t){var o=e.call(this,t)||this;return o._initialViewpoint=null,o._goingHome=null,o.go=o.go.bind(o),o}return o(t,e),t.prototype.destroy=function(){this._cancelGo(),this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?this._goingHome?"going-home":"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){var t=this;this._initialViewpoint=null,e&&e.when().then(function(){t._initialViewpoint=e.viewpoint.clone(),t.notifyChange("viewpoint")}),this._set("view",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{get:function(){return this._get("viewpoint")||this._initialViewpoint},set:function(e){this._set("viewpoint",e)},enumerable:!0,configurable:!0}),t.prototype.go=function(){var e=this;if(!this.get("view.ready"))return s.reject(new p("home:disabled-state","Cannot go when disabled."));this._cancelGo(),this.notifyChange("state"),this.emit("go");var t=!1,o=function(){e.notifyChange("state"),e._goingHome=null,t=!0},i=this.callGoTo({target:this.viewpoint}).catch(function(){}).then(o);return t||(this._goingHome=i,this.notifyChange("state")),i},t.prototype.cancelGo=function(){this._cancelGo()},t.prototype._cancelGo=function(){var e=this._goingHome;e&&e.cancel(),this._goingHome=null},i([l.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),i([l.property()],t.prototype,"view",null),i([l.property({type:n})],t.prototype,"viewpoint",null),i([l.property()],t.prototype,"go",null),i([l.property()],t.prototype,"cancelGo",null),t=i([l.subclass("esri.widgets.Home.HomeViewModel")],t)}(l.declared(r,c,a))});