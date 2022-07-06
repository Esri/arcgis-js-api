// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/PageUnitsConverter","esri/dijit/geoenrichment/utils/SortUtil"],(function(e,t){var r={getConditionalStyle:function(e,t,n){var o=r.getMatchedCase(e,t,n);return o?r.styleFromSetters(o.setters):null},getMatchedCase:function(e,t,n){var o;if(null!==e&&""!==e&&(e=Number(e),t&&!isNaN(e)))return t.cases.some((function(t){if(r._checkValueMatchesCase(e,t,n))return o=t,!0})),o}};r._checkValueMatchesCase=function(e,t,r){return t.compareInfos&&t.compareInfos.length&&t.compareInfos.every((function(t){return function(e,t,n){switch(n=r?(e=+e,r(+n)):n,t){case"=":return e===n;case"<":return e<n;case">":return e>n;case"<=":return e<=n;case">=":return e>=n}return!1}(e,t.operator,Number(t.value))}))};var n={FontSize:"fontSize",FontColor:"fontColor",FontFamily:"fontFamily",ForeColor:"color",BackColor:"backgroundColor"},o={};for(var a in n)o[n[a]]=a;r.styleFromSetters=function(t){if(!t)return null;var r={};return t.forEach((function(e){n[e.property]&&(r[n[e.property]]=e.value),"IsBold"===e.property&&(r.fontWeight="True"===e.value?"bold":"normal"),"IsItalic"===e.property&&(r.fontStyle="True"===e.value?"italic":"normal"),"IsUnderlined"===e.property&&(r.textDecoration="True"===e.value?"underline":"none")})),e.ptToPxObj(r),r},r.settersFromStyle=function(t){var r=[];t=e.pxToPtObj(t,!0);for(var n in t){var a=o[n],i=t[n];!a||"string"!=typeof i&&isNaN(i)||r.push({property:a,value:i}),"fontWeight"===n?r.push({property:"IsBold",value:"bold"===i?"True":"False"}):"fontStyle"===n?r.push({property:"IsItalic",value:"italic"===i?"True":"False"}):"textDecoration"===n&&r.push({property:"IsUnderlined",value:"underline"===i?"True":"False"})}return r},r.getConditionalFileName=function(e,t,n){function o(e){var r;return t.cases.some((function(t){return t.isDefault===e&&(r=t,!0)})),r}var a="first-non-default"===e?o(!1):r.getMatchedCase(e,t,n);return(a=a||o(!0))?a.setters[0].value:null};var i=/\.png$/i;return r.collectImageFileNames=function(e){var t=[];return e&&e.cases&&e.cases.forEach((function(e){e.setters&&e.setters.forEach((function(e){"Source"===e.property&&i.test(e.value)&&t.push(e.value)}))})),t},r.isSupportedStyleCalcMethod=function(e){return"percentInGroup"===e||"aboveAverage"===e||"belowAverage"===e||"indexDescOrder"===e},r.getConditionalStylesOrFileNamesForGroup=function(e,n,o){for(var a,i=n.map((function(e,t){return{value:e,index:t}})),u=[],l=0;l<i.length;l++)u.push(void 0);if(i.length){var c=e.calcMethod;if(i=i.filter((function(e){return"number"==typeof e.value&&!isNaN(e.value)})),c&&(i=i.sort((function(e,r){return t.compareNumeric(e.value,r.value,"indexDescOrder"===c)}))),i.length)if(c)if("percentInGroup"===c){var s=i[0].value,f=i[i.length-1].value;a={min:s,max:f},i.forEach((function(t){var n=function(e,t,r){return(r-e)/(t-e||.001)*100}(s,f,t.value);u[t.index]=o?r.getConditionalFileName(n,e):r.getConditionalStyle(n,e)}))}else if("indexDescOrder"===c){a={min:null,max:null,numElements:i.length};var v=function(e){return e>=0?e:i.length+e};i.forEach((function(t,n){u[t.index]=o?r.getConditionalFileName(n,e,v):r.getConditionalStyle(n,e,v)}))}else{var p=function(){var e=0;return i.forEach((function(t){e+=t.value})),e/i.length};if("aboveAverage"===c){var d=p();i=i.filter((function(e){return e.value>d}))}else{if("belowAverage"!==c)return{styles:u};d=p();i=i.filter((function(e){return e.value<d}))}i.forEach((function(t){u[t.index]=o?r.getConditionalFileName("first-non-default",e):r.styleFromSetters(e.cases[0].setters)}))}else i.forEach((function(t){u[t.index]=o?r.getConditionalFileName(t.value,e):r.getConditionalStyle(t.value,e)}))}return{styles:u,stats:a}},r.conditionalValueFromPercentInGroup=function(e,t,r){return e+r/100*(t-e)},r.getStatistics=function(e){var t,r,n,o=1/0,a=-1/0;function i(e){return e>-1e12&&e<1e12}return e&&(e.calcMethod&&"percentInGroup"!==e.calcMethod?(o=0,a=100,t=!0):e.cases.forEach((function(e){e.compareInfos&&e.compareInfos.forEach((function(e){var i=Number(e.value);isNaN(i)||(i<o&&(o=i,r="<"===e.operator||"<="===e.operator),i>a&&(a=i,n=">"===e.operator||">="===e.operator),t=!0)}))}))),t&&i(o)&&i(a)?{calcMethod:e.calcMethod,min:o,max:a,canFallBelowMin:r,canFallAboveMax:n}:null},r}));