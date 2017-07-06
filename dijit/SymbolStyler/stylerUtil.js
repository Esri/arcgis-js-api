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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dijit/popup","dojo/number"],function(e,n){var t={bindSliderAndTextBox:function(e,t){e.on("change",function(e){t.set("value",e,!1)}),t.on("change",function(t){var i,o,a,s;return"string"==typeof t&&(t=n.parse(t)),isNaN(t)?void this.set("value",e.get("value"),!1):(o=this.get("constraints"),a=o.min,s=o.max,i=t>s?s:a>t?a:t,this.set("value",i,!1),void e.set("value",i,!1))})},silentlyUpdateIntermediateChangingValueWidget:function(e,n){e.intermediateChanges=!1,e.set("value",n,!1),e.intermediateChanges=!0},ensureEnabledChildSelection:function(e){var n,t,i=e.selectedChildWidget||{};if(i.disabled){n=e.getChildren(),t=n.length;for(var o=0;t>o;o++)if(!n[o].disabled){e.selectChild(n[o]);break}}},enable:function(e){e.set("disabled",!1)},disable:function(e){e.set("disabled",!0)},popUp:function(n,t){var i,o;i=n.on("styling-commit",function(){i.remove(),o.remove(),e.close(n)}),o=n.on("styling-stop",function(){i.remove(),o.remove(),e.close(n)}),e.open({popup:n,around:t,orient:["above"]})}};return t});