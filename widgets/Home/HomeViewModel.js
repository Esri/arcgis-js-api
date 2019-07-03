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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../Viewpoint","../../core/Accessor","../../core/Error","../../core/Evented","../../core/promiseUtils","../../core/accessorSupport/decorators","../support/GoTo"],function(e,t,o,r,n,i,l,p,s,c,a,u,g){return function(e){function t(t){var o=e.call(this,t)||this;return o._initialViewpoint=null,o._goingHomeController=null,o.go=o.go.bind(o),o}return o(t,e),t.prototype.destroy=function(){this._cancelGo(),this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?this._goingHomeController?"going-home":"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){var t=this;this._initialViewpoint=null,e&&e.when().then(function(){t._initialViewpoint=e.viewpoint.clone(),t.notifyChange("viewpoint")}),this._set("view",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{get:function(){return this._get("viewpoint")||this._initialViewpoint},set:function(e){this._set("viewpoint",e)},enumerable:!0,configurable:!0}),t.prototype.go=function(){return i(this,void 0,void 0,function(){var e,t;return n(this,function(o){switch(o.label){case 0:if(!this.get("view.ready"))throw new s("home:disabled-state","Cannot go when disabled.");this._cancelGo(),this.emit("go"),e=a.createAbortController(),this._goingHomeController=e,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.callGoTo({target:this.viewpoint,options:{signal:e.signal}})];case 2:return o.sent(),[3,4];case 3:return t=o.sent(),[3,4];case 4:return this._goingHomeController=null,[2]}})})},t.prototype.cancelGo=function(){this._cancelGo()},t.prototype._cancelGo=function(){var e=this._goingHomeController;e&&e.abort(),this._goingHomeController=null},r([u.property()],t.prototype,"_goingHomeController",void 0),r([u.property({dependsOn:["_goingHomeController","view.ready"],readOnly:!0})],t.prototype,"state",null),r([u.property()],t.prototype,"view",null),r([u.property({type:l})],t.prototype,"viewpoint",null),r([u.property()],t.prototype,"go",null),r([u.property()],t.prototype,"cancelGo",null),t=r([u.subclass("esri.widgets.Home.HomeViewModel")],t)}(u.declared(p,c,g))});