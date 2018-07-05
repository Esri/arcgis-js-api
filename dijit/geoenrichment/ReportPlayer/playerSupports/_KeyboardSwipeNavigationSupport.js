// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/keys","dojox/gesture/swipe","../ReportPlayerState","esri/dijit/geoenrichment/utils/MouseUtil"],function(e,i,o,t,n,s){return e(null,{_initKeyboardSwipeNavigation:function(){var e=this;if(this.allowKeyboardNavigation)this.own(i(window,"keyup",function(i){var t=e.getCurrentReportContainer();t&&s.isMouseOver(e.domNode)&&(i.keyCode===o.RIGHT_ARROW?t.showNextSlide():i.keyCode===o.LEFT_ARROW&&t.showPreviousSlide())}));else if(this.allowSwipeNavigation){var r=!0,a=0;this.own(i(document.body,t,function(i){var o=e.getCurrentReportContainer();r&&o&&(a+=i.dx,Math.abs(a)>10&&(r=!1,setTimeout(function(){r=!0},200),o[a<0?"showNextSlide":"showPreviousSlide"](),a=0),setTimeout(function(){a=0},100))}))}this.showCloseButton&&this.own(i(window,"keyup",function(e){this.getWaitingPromise()||n.isViewingDataDrillingZoom||e.keyCode===o.ESCAPE&&this._onClose()}.bind(this)))}})});