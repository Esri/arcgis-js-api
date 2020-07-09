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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/PageUnitsConverter"],(function(e){var r={},t={FontSize:"fontSize",FontColor:"fontColor",FontFamily:"fontFamily",ForeColor:"color",BackColor:"backgroundColor"},o={};for(var n in t)o[t[n]]=n;r.getConditionalStyle=function(e,t){var o=r.getMatchedCase(e,t);return o?r.styleFromSetters(o.setters):null},r.getMatchedCase=function(e,t){var o;if(null!==e&&""!==e&&(e=Number(e),t&&!isNaN(e)))return t.cases.some((function(t){if(r._checkValueMatchesCase(e,t))return o=t,!0})),o},r._checkValueMatchesCase=function(e,r){return r.compareInfos.length&&r.compareInfos.every((function(r){return function(e,r,t){switch(r){case"=":return e===t;case"<":return e<t;case">":return e>t;case"<=":return e<=t;case">=":return e>=t}return!1}(e,r.operator,Number(r.value))}))},r.styleFromSetters=function(r){if(!r)return null;var o={};return r.forEach((function(e){t[e.property]&&(o[t[e.property]]=e.value),"IsBold"===e.property&&(o.fontWeight="True"===e.value?"bold":"normal"),"IsItalic"===e.property&&(o.fontStyle="True"===e.value?"italic":"normal"),"IsUnderlined"===e.property&&(o.textDecoration="True"===e.value?"underline":"none")})),e.ptToPxObj(o),o},r.settersFromStyle=function(r){var t=[];r=e.pxToPtObj(r,!0);for(var n in r){var a=o[n],u=r[n];!a||"string"!=typeof u&&isNaN(u)||t.push({property:a,value:u}),"fontWeight"===n?t.push({property:"IsBold",value:"bold"===u?"True":"False"}):"fontStyle"===n?t.push({property:"IsItalic",value:"italic"===u?"True":"False"}):"textDecoration"===n&&t.push({property:"IsUnderlined",value:"underline"===u?"True":"False"})}return t},r.processImageJsonForTrigger=function(e,t,o){var n=r.getMatchedCase(t,o);n||o.cases.some((function(e){if("default"===e.compareInfos[0].value)return n=e,!0})),n&&(e.fileName=n.setters[0].value)},r.getStatistics=function(e){var r,t,o,n=1/0,a=-1/0;function u(e){return e>-1e12&&e<1e12}return e&&e.cases.forEach((function(e){e.compareInfos&&e.compareInfos.forEach((function(e){var u=Number(e.value);isNaN(u)||(u<n&&(n=u,t="<"===e.operator||"<="===e.operator),u>a&&(a=u,o=">"===e.operator||">="===e.operator),r=!0)}))})),r&&u(n)&&u(a)?{min:n,max:a,canFallBelowMin:t,canFallAboveMax:o}:null};var a=/\.png$/i;return r.collectImageFileNames=function(e){var r=[];return e&&e.cases&&e.cases.forEach((function(e){e.setters&&e.setters.forEach((function(e){"Source"===e.property&&a.test(e.value)&&r.push(e.value)}))})),r},r}));