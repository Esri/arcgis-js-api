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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Collection","../../../core/Evented","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","./Flow"],function(e,t,o,r,n,i,l,p,c,a,s){"use strict";var u=i.ofType(s);return function(e){function t(t){var o=e.call(this,t)||this;return o._handles=new p,o.flows=new u,o}return o(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([c.on(this,"flows","change",function(t){e._updateFlowDirection(t),e.notifyChange("activeFlow"),e.notifyChange("parentFlow")})])},t.prototype.destroy=function(){this._handles.destroy()},Object.defineProperty(t.prototype,"activeFlow",{get:function(){var e=this.flows,t=e.length-1;return e.getItemAt(t)||null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parentFlow",{get:function(){var e=this.flows,t=e.length-2;return e.getItemAt(t)||null},enumerable:!0,configurable:!0}),t.prototype.triggerMenuAction=function(e){e&&this.emit("trigger-menu-action",{action:e})},t.prototype.triggerFormAction=function(e){e&&this.emit("trigger-form-action",{action:e})},t.prototype._updateFlowDirection=function(e){var t=e.added.length>=e.removed.length?"advancing":"retreating";this._set("flowDirection",t)},r([a.property({dependsOn:["flows"],readOnly:!0})],t.prototype,"activeFlow",null),r([a.property({readOnly:!0})],t.prototype,"flowDirection",void 0),r([a.property({type:u})],t.prototype,"flows",void 0),r([a.property({dependsOn:["flows"],readOnly:!0})],t.prototype,"parentFlow",null),r([a.property()],t.prototype,"triggerMenuAction",null),r([a.property()],t.prototype,"triggerFormAction",null),t=r([a.subclass("esri.widgets.FlowManager.FlowManagerViewModel")],t)}(a.declared(n,l))});