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

define([],function(){var e={};return e.processFieldInfoTagAttributes=function(e){e&&!e.m&&(e.decimals||e.symbol||e.thousands)&&(e.m={showCurrency:"currency"===e.symbol,showPercent:"percent"===e.symbol,useThousandsSeparator:!1!==e.thousands,decimals:Number(e.decimals)||0})},e.buildFormatStringFromFieldInfo=function(e){if(e&&"esriFieldTypeString"!==e.type){if(e.format)return e.format;var r=e.decimals,s=e.showCurrency,n=e.showPercent,o=!!e.useThousandsSeparator,t="";if(s&&(t+="\\$"),o&&(t+="#,#"),t+="0",r>0)for(t+=".";r--;)t+="0";return!s&&n&&(t+="\\%"),t}},e.setFieldInfoFormat=function(e,r){r&&"object"==typeof r?(e.showCurrency=r.showCurrency,e.showPercent=r.showPercent,e.useThousandsSeparator=!!r.useThousandsSeparator,e.decimals=Number(r.decimals)||0):"string"==typeof r&&(e.showCurrency=-1!==r.indexOf("$"),e.showPercent=-1!==r.indexOf("%"),e.useThousandsSeparator=-1!==r.indexOf("#,#"),e.decimals=0,-1!==r.indexOf("0.")&&(e.decimals=r.split("0").length-2))},e});