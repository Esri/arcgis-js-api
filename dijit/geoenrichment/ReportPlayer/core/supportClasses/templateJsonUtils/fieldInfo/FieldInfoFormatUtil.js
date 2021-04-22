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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/countryConfig","esri/dijit/geoenrichment/utils/ObjectUtil","../../../grid/coreUtils/GridDataUtil","dojo/i18n!esri/nls/jsapi"],(function(e,r,i,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var t={processFieldInfoTagAttributes:function(e){var r=(e=e||{}).m?s(e.m,{}):{showCurrency:"currency"===e.symbol,showPercent:"percent"===e.symbol,useThousandsSeparator:!1!==e.thousands,decimals:Number(e.decimals)||0};return e.m=r},buildFormatStringFromFieldInfo:function(e){if(e&&i.isNumericVariableFieldCell(e))return t.buildFormatStringFromObject(e)},buildFormatStringFromObject:function(e){if(e){var r=e.decimals,i=e.showCurrency,n=e.showPercent,t="";if(i&&(t+="\\$"),!!e.useThousandsSeparator&&(t+="#,#"),t+="0",r>0)for(t+=".";r--;)t+="0";return!i&&n&&(t+="\\%"),e.isCompact?t+="c":e.unitPrefix&&(t+=e.unitPrefixSymbol?"("+e.unitPrefix+";"+e.unitPrefixSymbol+")":"("+e.unitPrefix+")"),t}},setFieldInfoFormat:function(e,r){r&&"object"==typeof r?(e.showCurrency=r.showCurrency,e.showPercent=r.showPercent,e.useThousandsSeparator=!!r.useThousandsSeparator,e.decimals=Number(r.decimals)||0,e.isCompact=r.isCompact,e.unitPrefix=r.unitPrefix,e.unitPrefixSymbol=r.unitPrefixSymbol):"string"==typeof r&&s(r,e)}},o=/\((.+?)\)/;function s(e,r){if(r.showCurrency=-1!==e.indexOf("$"),r.showPercent=-1!==e.indexOf("%"),r.useThousandsSeparator=-1!==e.indexOf("#,#"),r.decimals=0,-1!==e.indexOf("0.")&&(r.decimals=e.split("0").length-2),r.unitPrefix=void 0,r.unitPrefixSymbol=void 0,-1!==e.indexOf("(")){var i=e.match(o)[1];if(-1!==i.indexOf(";")){var n=i.split(";");r.unitPrefix=n[0],r.unitPrefixSymbol=n[1]}else r.unitPrefix=i}return r.isCompact=!r.unitPrefix&&-1!==e.indexOf("c")||void 0,r}return t.formatNumber=function(e,i,o){if(i.isMissing)return n.missingVariable;var s=r.formatNumber(e,{places:i.decimals||0,noSeparator:!i.useThousandsSeparator,preserveTrailingZeroes:!0});return t.providePercentCurrencySymbols(s,i,o)},t.providePercentCurrencySymbols=function(r,i,n){if(!r)return r;if(i.showCurrency){var t=!1;return"-"===r.charAt(0)&&(t=!0,r=r.substr(1)),n&&n.placePercentCurrencyInFront?t?"-"+e.getCurrencySymbol()+r:e.getCurrencySymbol()+r:e.getCurrencyFormat().split(";")[t?1:0].replace("0",r)}return i.showPercent&&(n&&n.placePercentCurrencyInFront?r="%"+r:r+="%"),r},t}));