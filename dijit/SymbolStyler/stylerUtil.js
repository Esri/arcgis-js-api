// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dijit/popup","dojo/number"],(function(e,n){return{bindSliderAndTextBox:function(e,t){e.on("change",(function(e){t.set("value",e,!1)})),t.on("change",(function(t){var i,o,a,s;"string"==typeof t&&(t=n.parse(t)),isNaN(t)?this.set("value",e.get("value"),!1):(a=(o=this.get("constraints")).min,i=t>(s=o.max)?s:t<a?a:t,this.set("value",i,!1),e.set("value",i,!1))}))},silentlyUpdateIntermediateChangingValueWidget:function(e,n){e.intermediateChanges=!1,e.set("value",n,!1),e.intermediateChanges=!0},ensureEnabledChildSelection:function(e){var n,t;if((e.selectedChildWidget||{}).disabled){t=(n=e.getChildren()).length;for(var i=0;i<t;i++)if(!n[i].disabled){e.selectChild(n[i]);break}}},enable:function(e){e.set("disabled",!1)},disable:function(e){e.set("disabled",!0)},popUp:function(n,t){var i,o;i=n.on("styling-commit",(function(){i.remove(),o.remove(),e.close(n)})),o=n.on("styling-stop",(function(){i.remove(),o.remove(),e.close(n)})),e.open({popup:n,around:t,orient:["above"]})}}}));