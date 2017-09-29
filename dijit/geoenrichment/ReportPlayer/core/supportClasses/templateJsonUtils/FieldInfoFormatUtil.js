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

define([],function(){var e={};return e.buildFormatStringFromFieldInfo=function(e){if(e.format)return e.format;var r=e.decimals,o=e.showCurrency,s=e.showPercent,n=void 0!==e.useThousandsSeparator?e.useThousandsSeparator:!0,a="";if(o&&(a+="\\$"),n&&(a+="#,#"),a+="0",r>0)for(a+=".";r--;)a+="0";return!o&&s&&(a+="\\%"),a},e.setFieldInfoFormat=function(e,r){"object"==typeof r?(e.showCurrency=r.showCurrency,e.showPercent=r.showPercent,e.useThousandsSeparator=void 0!==r.useThousandsSeparator?r.useThousandsSeparator:!0,e.decimals=Number(r.decimals)||0):(e.showCurrency=-1!==r.indexOf("$"),e.showPercent=-1!==r.indexOf("%"),e.useThousandsSeparator=-1!==r.indexOf("#,#"),e.decimals=0,-1!==r.indexOf("0.")&&(e.decimals=r.split("0").length-2))},e});