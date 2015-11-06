// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dijit/popup"],function(e){var n={bindSliderAndTextBox:function(e,n){e.on("change",function(e){n.set("value",e,!1)}),n.on("change",function(n){var i,t,o,a;return isNaN(n)?void this.set("value",e.get("value"),!1):(t=this.get("constraints"),o=t.min,a=t.max,i=n>a?a:o>n?o:n,this.set("value",i,!1),void e.set("value",i,!1))})},silentlyUpdateIntermediateChangingValueWidget:function(e,n){e.intermediateChanges=!1,e.set("value",n,!1),e.intermediateChanges=!0},ensureEnabledChildSelection:function(e){var n,i,t=e.selectedChildWidget;if(t.disabled){n=e.getChildren(),i=n.length;for(var o=0;i>o;o++)if(!n[o].disabled){e.selectChild(n[o]);break}}},enable:function(e){e.set("disabled",!1)},disable:function(e){e.set("disabled",!0)},popUp:function(n,i){var t,o;t=n.on("styling-commit",function(){t.remove(),o.remove(),e.close(n)}),o=n.on("styling-stop",function(){t.remove(),o.remove(),e.close(n)}),e.open({popup:n,around:i,orient:["above"]})}};return n});