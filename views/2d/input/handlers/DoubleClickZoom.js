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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(e,i,t,n,o){var r=function(e){function i(i,t){var n=this;e.call(this,"esri.views.2d.input.handlers.DoubleClickZoom",!0),this.view=i,this.registerIncoming("double-click",t,function(e){return n._handleDoubleClick(e,t)})}return t(i,e),i.prototype._handleDoubleClick=function(e,i){if(o.eventMatchesPointerType(e.data["native"],"primary")){var t=i?.5:2;this.view.navigation.zoom.stepScreen(this.view,e,t),e.stopPropagation()}},i}(n.InputHandler);i.DoubleClickZoom=r});