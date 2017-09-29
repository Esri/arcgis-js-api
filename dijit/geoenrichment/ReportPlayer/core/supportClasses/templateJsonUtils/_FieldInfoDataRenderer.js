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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["../conditionalStyling/ConditionalStyleUtil"],function(a){var e={getValueFromFieldData:function(t,r){r=r||{};var n,i=r.formatValue!==!1,l=e.getFieldDataValue(t,r.fieldData,r.featureIndex);if(void 0===l||"number"==typeof l&&isNaN(l)||"NaN"==l||"null"==l)return console.log(t.name+" Error: can't calculate value"),i?"N/A":NaN;var o=Number(l);if(""!==l&&!isNaN(o)){if(!i)return o;t.triggerJson&&(n=a.getConditionalStyle(o,t.triggerJson));var u=o.toFixed(t.decimals||0);if(t.useThousandsSeparator){var d=u.indexOf("."),f=d>0?u.substr(d):"";u=d>0?u.substr(0,d):u;for(var s=u.length,v=0;s--;)v++,v>3&&(v=1,f=","+f),f=u[s]+f;u=f}return n?{label:u,conditionalStyle:n,numberValue:o}:u}return i?l:NaN},getFieldDataValue:function(a,e,t){function r(a){var r=e.metadata[a],n=e.featureData[t]||e.featureData[0];return void 0!==r?r:n&&n[a]}t=Number(t),t=isNaN(t)?0:t;var n=a.name?r(a.name.toUpperCase()):void 0;return void 0===n&&a.variableID&&(n=r(a.variableID.toUpperCase())),n}};return e});