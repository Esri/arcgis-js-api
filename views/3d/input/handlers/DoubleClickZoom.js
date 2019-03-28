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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/screenUtils","../../state/controllers/global/ZoomStepController","../../state/controllers/local/ZoomStepController","../../../input/InputHandler","../../../input/handlers/support"],function(e,t,o,r,n,l,i,a){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,o){var r=e.call(this,!0)||this;return r.view=t,r.registerIncoming("double-click",o,function(e){return r.handleDoubleClick(e)}),r}return o(t,e),t.prototype.handleDoubleClick=function(e){var t=e.data;if(a.eventMatchesPointerAction(t,"primary")){var o=this.view.state.isGlobal?new n.ZoomStepController(this.view,"animation"):new l.ZoomStepController(this.view,"animation");this.view.state.switchCameraController(o),o.zoomStep(Math.log(.5)/Math.log(.6),r.createScreenPointArray(t.x,t.y)),e.stopPropagation()}},t}(i.InputHandler);t.DoubleClickZoom=s});