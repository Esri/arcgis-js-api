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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/i18n!esri/nls/jsapi"],(function(e){var l={};return e=e.geoenrichment.dijit.ReportPlayer.PlayerToolbar,l.FIT_PAGE="fitPage",l.FIT_PAGE_WIDTH="fitPageWidth",l.FIT_PAGE_HEIGHT="fitPageHeight",l.getOptions=function(){var a=[{value:l.FIT_PAGE,label:e.fitPage},{value:l.FIT_PAGE_WIDTH,label:e.fitPageWidth},{value:l.FIT_PAGE_HEIGHT,label:e.fitPageHeight}];return[{value:400,label:"400%"},{value:200,label:"200%"},{value:150,label:"150%"},{value:125,label:"125%"},{value:100,label:"100%"},{value:90,label:"90%"},{value:80,label:"80%"},{value:70,label:"70%"},{value:60,label:"60%"},{value:50,label:"50%"}].forEach((function(e){a.push({isCustom:!0,value:-1,label:""}),a.push(e)})),a.push({isCustom:!0,value:-1,label:""}),a},l.getClosestZoomAndUpdateOptions=function(e,l){l.forEach((function(e){e.isCustom&&(e.value=-1,e.hidden=!0)}));var a=[];l.forEach((function(l){l.isCustom||"number"!=typeof l.value||a.push({option:l,value:l.value,score:e<l.value?e/l.value:l.value/e})})),a.sort((function(e,l){return l.score-e.score}));var u=a[0];if(1===u.score)return u.value;var t=l.indexOf(u.option),i=l[t+(e>u.value?-1:1)];return i.value=e,i.label=Math.round(e)+"%",i.hidden=!1,i.value},l}));