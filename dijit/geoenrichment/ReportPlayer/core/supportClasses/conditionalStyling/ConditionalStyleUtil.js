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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/PageUnitsConverter"],function(e){var r={},t={FontSize:"fontSize",FontColor:"fontColor",FontFamily:"fontFamily",ForeColor:"color",BackColor:"backgroundColor"},n={};for(var o in t)n[t[o]]=o;r.getConditionalStyle=function(e,t){var n=r.getMatchedCase(e,t);return n?r.styleFromSetters(n.setters):null},r.getMatchedCase=function(e,t){if(null!==e&&""!==e&&(e=Number(e),t&&!isNaN(e))){var n;return t.cases.some(function(t){if(r._checkValueMatchesCase(e,t))return n=t,!0}),n}},r._checkValueMatchesCase=function(e,r){function t(e,r,t){switch(r){case"=":return e===t;case"<":return e<t;case">":return e>t;case"<=":return e<=t;case">=":return e>=t}return!1}return r.compareInfos.length&&r.compareInfos.every(function(r){return t(e,r.operator,Number(r.value))})},r.styleFromSetters=function(r){if(!r)return null;var n={};return r.forEach(function(e){t[e.property]&&(n[t[e.property]]=e.value),"IsBold"===e.property&&(n.fontWeight="True"===e.value?"bold":"normal"),"IsItalic"===e.property&&(n.fontStyle="True"===e.value?"italic":"normal"),"IsUnderlined"===e.property&&(n.textDecoration="True"===e.value?"underline":"none")}),e.ptToPxObj(n),n},r.settersFromStyle=function(r){var t=[],r=e.pxToPtObj(r,!0);for(var o in r){var a=n[o],u=r[o];!a||"string"!=typeof u&&isNaN(u)||t.push({property:a,value:u}),"fontWeight"===o?t.push({property:"IsBold",value:"bold"===u?"True":"False"}):"fontStyle"===o?t.push({property:"IsItalic",value:"italic"===u?"True":"False"}):"textDecoration"===o&&t.push({property:"IsUnderlined",value:"underline"===u?"True":"False"})}return t},r.processImageJsonForTrigger=function(e,t,n){var o=r.getMatchedCase(t,n);o||n.cases.some(function(e){if("default"===e.compareInfos[0].value)return o=e,!0}),o&&(e.fileName=o.setters[0].value)},r.getStatistics=function(e){function r(e){return e>-1e12&&e<1e12}var t,n=1/0,o=-1/0;return e&&e.cases.forEach(function(e){e.compareInfos&&e.compareInfos.forEach(function(e){var r=Number(e.value);isNaN(r)||(n=Math.min(n,r),o=Math.max(o,r),t=!0)})}),t&&r(n)&&r(o)?{min:n,max:o}:null};var a=/\.png$/i;return r.collectImageFileNames=function(e){var r=[];return e&&e.cases&&e.cases.forEach(function(e){e.setters&&e.setters.forEach(function(e){"Source"===e.property&&a.test(e.value)&&r.push(e.value)})}),r},r});