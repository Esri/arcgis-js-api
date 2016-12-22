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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(t,n,e,i){var r=function(t){function n(n){var e=this;t.call(this,"esri.views.2d.input.handlers.PinchZoom",!0),this.view=n,this.registerIncoming("drag",function(t){return e._handleDrag(t)})}return e(n,t),n.prototype._handleDrag=function(t){var n=t.data;if(!(n.pointers.length<2)){var e=n.currentState,i=e.center,r=e.radius,o=n.previousState,a=o.radius,s=r-a,u=e.angle;this.view.navigation.zoom.pinchRotateZoom(this.view,i,s,u),t.stopPropagation()}},n}(i.InputHandler);n.PinchRotateAndZoom=r});