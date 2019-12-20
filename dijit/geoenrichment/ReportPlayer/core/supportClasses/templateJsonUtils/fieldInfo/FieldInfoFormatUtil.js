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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/countryConfig","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],function(e,r,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var t={};return t.processFieldInfoTagAttributes=function(e){e&&!e.m&&(e.decimals||e.symbol||e.thousands)&&(e.m={showCurrency:"currency"===e.symbol,showPercent:"percent"===e.symbol,useThousandsSeparator:!1!==e.thousands,decimals:Number(e.decimals)||0})},t.buildFormatStringFromFieldInfo=function(e){if(e&&"esriFieldTypeString"!==e.type){if(e.format)return e.format;var r=e.decimals,n=e.showCurrency,t=e.showPercent,o=!!e.useThousandsSeparator,s="";if(n&&(s+="\\$"),o&&(s+="#,#"),s+="0",r>0)for(s+=".";r--;)s+="0";return!n&&t&&(s+="\\%"),s}},t.setFieldInfoFormat=function(e,r){r&&"object"==typeof r?(e.showCurrency=r.showCurrency,e.showPercent=r.showPercent,e.useThousandsSeparator=!!r.useThousandsSeparator,e.decimals=Number(r.decimals)||0):"string"==typeof r&&(e.showCurrency=-1!==r.indexOf("$"),e.showPercent=-1!==r.indexOf("%"),e.useThousandsSeparator=-1!==r.indexOf("#,#"),e.decimals=0,-1!==r.indexOf("0.")&&(e.decimals=r.split("0").length-2))},t.formatNumber=function(e,o,s){if(o.isMissing)return n.missingVariable;var i=r.formatNumber(e,{places:o.decimals||0,noSeparator:!o.useThousandsSeparator,preserveTrailingZeroes:!0});return t.providePercentCurrencySymbols(i,o,s)},t.providePercentCurrencySymbols=function(r,n,t){if(!r)return r;if(n.showCurrency){var o=!1;return"-"===r.charAt(0)&&(o=!0,r=r.substr(1)),t&&t.placePercentCurrencyInFront?o?"-"+e.getCurrencySymbol()+r:e.getCurrencySymbol()+r:e.getCurrencyFormat().split(";")[o?1:0].replace("0",r)}return n.showPercent&&(t&&t.placePercentCurrencyInFront?r="%"+r:r+="%"),r},t});