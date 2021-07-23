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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["exports"],(function(e){"use strict";var t=0;function r(e,r,a){var i=a||"AriaLabelID_"+t++;return r.id=i,Array.isArray(e)?e.forEach((function(e){e.setAttribute("aria-labelledby",i)})):e.setAttribute("aria-labelledby",i),i}e.setId=function(e,r){var a=r||"AriaLabelID_"+t++;return e.id=a,a},e.setLabeledBy=r,e.setLabeledByToFocusNode=function(e,t,a){var i=e.focusNode;if(!i)return null;var n=t&&t.getAttribute("id");return n=r(i,t,n||a),e.sliderHandleMax&&r(e.sliderHandleMax,t,n),n},e.setLabelToFocusNode=function(e,t){var r=e.focusNode;return r?(r.setAttribute("aria-label",t),e.sliderHandleMax&&e.sliderHandleMax&&e.sliderHandleMax.setAttribute("aria-label",t),t):null},e.registerButton=function(e,t,r){e&&(e.setAttribute("tabindex","0"),r&&e.setAttribute("aria-label",r),e.addEventListener("keydown",(function(e){13===e.keyCode&&t()})))}}));