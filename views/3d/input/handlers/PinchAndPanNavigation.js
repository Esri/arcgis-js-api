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

define(["require","exports","tslib","../../state/controllers/global/PinchAndPanController","../../state/controllers/local/PinchAndPanController","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,n,r,i,o,a){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e,n,r){var i=t.call(this,!0)||this;return i.view=e,i.pointerAction=n,i.lastEndTimestamp=0,i.lastTimestamp=0,i.registerIncoming("drag",r,(function(t){return i.handleDrag(t)})),i}return n.__extends(e,t),e.prototype.handleDrag=function(t){if("mouse"!==t.data.pointerType||a.eventMatchesMousePointerAction(t.data,this.pointerAction)){var e=t.timestamp-this.lastEndTimestamp,n=this.momentum&&this.momentum.active&&e<40;switch(t.data.action){case"start":case"update":if(n)break;this.controller&&this.controller.active?t.data.timestamp-this.lastTimestamp>2&&(this.controller.update(t.data),this.lastTimestamp=t.timestamp):this.startController(t);break;case"end":case"removed":this.endController(t,!0);break;case"added":this.endController(t,!1),this.startController(t)}t.stopPropagation()}},e.prototype.endController=function(t,e){if(this.controller&&this.controller.active){this.lastEndTimestamp=t.timestamp;var n=this.controller.end(t.data);e&&n&&(this.momentum=n,this.view.state.switchCameraController(this.momentum))}this.controller=null},e.prototype.startController=function(t){this.controller=this.createController(),this.view.state.switchCameraController(this.controller),this.controller.begin(t.data),this.lastTimestamp=t.timestamp},e.prototype.createController=function(){return this.view.state.isGlobal?new r.PinchAndPanController({view:this.view}):new i.PinchAndPanController({view:this.view})},e}(o.InputHandler);e.PinchAndPanNavigation=s}));