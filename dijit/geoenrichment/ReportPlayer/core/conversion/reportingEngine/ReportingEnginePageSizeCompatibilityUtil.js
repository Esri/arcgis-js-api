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

define(["../../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/PageUnitsConverter"],function(r,e){var t={},n={a4:1,letter:1};return t.tryGetStandardPageSize=function(t,n){function i(r){var e="portrait"==n?0:1,t="portrait"==n?1:0;return r[e]==a&&r[t]==S}if(r.SIZE_TYPE_TO_DIM_HASH[t])return t;var o,u=t.split("x"),a=e.convert(Number(u[0]),"pt","mm",0),S=e.convert(Number(u[1]),"pt","mm",0);for(var _ in r.PAPER_SIZES){var f=r.PAPER_SIZES[_];if(1==_.length){if(f.some(function(r,e){return i(r)?(o=_+e,!0):void 0}))break}else if(i(f)){o=_;break}}return o||t},t.getReportingEnginePageSize=function(e,t){if(n[e])return e;var i=r.SIZE_TYPE_TO_DIM_HASH[e]&&r.SIZE_TYPE_TO_DIM_HASH[e][t];return i?r.combineCustomSizeString(i.w,i.h):e},t});