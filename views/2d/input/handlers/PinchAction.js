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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(t,e,n,i){var a=function(t){function e(e){var n=t.call(this,"esri.views.2d.input.handlers.PinchZoom",!0)||this;return n.view=e,n.registerIncoming("drag",function(t){return n._handleDrag(t)}),n}return n(e,t),e.prototype._handleDrag=function(t){var e=t.data;if(!(e.pointers.length<2)&&this.view.constraints.rotationEnabled){var n=e.currentState,i=n.angle,a=n.radius,r=n.center,o=e.previousState,s=o.radius,c=o.angle;switch(e.action){case"start":this.view.navigation.begin();break;case"update":if(s){var u=a/s,d=180*(i-c)/Math.PI;this.view.navigation.zoom.pinchRotateZoom(this.view,r,u,d)}break;case"end":this.view.navigation.end()}t.stopPropagation()}},e}(i.InputHandler);e.PinchRotateAndZoom=a});