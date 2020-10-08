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

define(["require","exports","tslib","../../Viewpoint","../../core/Error","../../core/Evented","../../core/promiseUtils","../../core/accessorSupport/decorators","../support/GoTo"],(function(e,t,o,n,i,r,l,s,p){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o._initialViewpoint=null,o._goingHomeController=null,o.go=o.go.bind(o),o}return o.__extends(t,e),t.prototype.destroy=function(){this._cancelGo(),this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?this._goingHomeController?"going-home":"ready":"disabled"},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){var t=this;this._initialViewpoint=null,this._set("view",e),e&&e.when().then((function(){t.view===e&&(t._initialViewpoint=e.viewpoint.clone(),t.notifyChange("viewpoint"))}))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"viewpoint",{get:function(){return this._get("viewpoint")||this._initialViewpoint},set:function(e){this._set("viewpoint",e)},enumerable:!1,configurable:!0}),t.prototype.go=function(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:if(!this.get("view.ready"))throw new i("home:disabled-state","Cannot go when disabled.");this._cancelGo(),this.emit("go"),e=l.createAbortController(),this._goingHomeController=e,t.label=1;case 1:return t.trys.push([1,4,,5]),[4,this.view.when()];case 2:return t.sent(),[4,this.callGoTo({target:this.viewpoint,options:{signal:e.signal}})];case 3:return t.sent(),[3,5];case 4:return t.sent(),[3,5];case 5:return this._goingHomeController=null,[2]}}))}))},t.prototype.cancelGo=function(){this._cancelGo()},t.prototype._cancelGo=function(){var e=this._goingHomeController;e&&e.abort(),this._goingHomeController=null},o.__decorate([s.property()],t.prototype,"_goingHomeController",void 0),o.__decorate([s.property({dependsOn:["_goingHomeController","view.ready"],readOnly:!0})],t.prototype,"state",null),o.__decorate([s.property()],t.prototype,"view",null),o.__decorate([s.property({type:n})],t.prototype,"viewpoint",null),o.__decorate([s.property()],t.prototype,"go",null),o.__decorate([s.property()],t.prototype,"cancelGo",null),t=o.__decorate([s.subclass("esri.widgets.Home.HomeViewModel")],t)}(p.GoToMixin(r.EventedAccessor))}));