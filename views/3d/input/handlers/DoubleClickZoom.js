// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(e,t,i,n,o){var r=function(e){function t(t,i){var n=this;e.call(this,"esri.views.3d.input.handlers.DoubleClickZoom",!0),this.view=t,this.registerIncoming("double-click",i,function(e){return n._handleDoubleClick(e)})}return i(t,e),t.prototype._handleDoubleClick=function(e){var t=e.data;o.eventMatchesPointerType(t["native"],"primary")&&(this.view.navigation.zoom.stepScreen(Math.log(.5)/Math.log(.6),[t.x,this.view.height-t.y]),e.stopPropagation())},t}(n.InputHandler);t.DoubleClickZoom=r});