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

define(["require","exports","dojo/number"],function(e,t,n){function i(e,t){e.on("change",function(e){t.set("value",e,!1)}),t.on("change",function(t){if("string"==typeof t&&(t=n.parse(t)),isNaN(t))return void this.set("value",e.get("value"),!1);var i=this.get("constraints"),a=i.min,s=i.max,d=t>s?s:a>t?a:t;this.set("value",d,!1),e.set("value",d,!1)})}function a(e,t){e.intermediateChanges=!1,e.set("value",t,!1),e.intermediateChanges=!0}function s(e){var t=e.selectedChildWidget;if(t.disabled)for(var n=e.getChildren(),i=0;i<n.length;i++)if(!n[i].disabled){e.selectChild(n[i],!1);break}}function d(e){e.set("disabled",!1)}function l(e){e.set("disabled",!0)}function r(e){return e&&e.declaredClass}function o(e,t){r(e)?e.set("disabled",t):e.disabled=t}function u(e){var t=e.minimum,n=e.maximum;e.textBox.set("constraints",{min:t,max:n}),e.slider.set({minimum:t,maximum:n,discreteValues:Math.round(n)-Math.round(t)+1})}t.bindSliderAndTextBox=i,t.silentlyUpdateIntermediateChangingValueWidget=a,t.ensureEnabledChildSelection=s,t.enable=d,t.disable=l,t.toggleControl=o,t.updateSliderAndTextBoxConstraints=u});