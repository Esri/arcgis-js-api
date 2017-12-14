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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support","../../state/helpers/PickingHelper","../../state/controllers/global/PinchAndPanController","../../state/controllers/local/PinchAndPanController"],function(t,e,n,i,r,a,o,s){Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(e,n,i){var r=t.call(this,!0)||this;return r.view=e,r.pointerType=n,r.lastEndTimestamp=0,r.pickingHelper=new a.PickingHelper(e),r.registerIncoming("drag",i,function(t){return r.handleDrag(t)}),r}return n(e,t),e.prototype.handleDrag=function(t){var e=t.data.pointers[0].startEvent["native"];if("mouse"!==e.pointerType||r.eventMatchesMousePointerType(e,this.pointerType)){var n=t.timestamp-this.lastEndTimestamp,i=40,a=this.momentum&&this.momentum.active&&i>n;switch(t.data.action){case"start":case"update":if(a)break;if(this.controller&&this.controller.active){var l=(t.data.currentState.timestamp-t.data.previousState.timestamp)/1e3;if(.002>l)break;this.controller.update(t.data.pointers,t.data.currentState,t.timestamp)}else this.view.state.isGlobal?this.controller=new o.PinchAndPanController(this.view,this.pickingHelper):this.controller=new s.PinchAndPanController(this.view,this.pickingHelper),this.view.state.switchCameraController(this.controller),this.controller.begin(t.data.pointers,t.data.currentState,t.timestamp);break;case"end":this.controller&&this.controller.active&&(this.lastEndTimestamp=t.timestamp,this.momentum=this.controller.end(),this.momentum&&this.view.state.switchCameraController(this.momentum),this.controller=null)}t.stopPropagation()}},e}(i.InputHandler);e.PinchAndPanNavigation=l});