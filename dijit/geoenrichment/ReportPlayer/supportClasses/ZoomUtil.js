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

define(["dojo/i18n!esri/nls/jsapi"],function(e){var l={};return e=e.geoenrichment.dijit.ReportPlayer.PlayerToolbar,l.FIT_PAGE="fitPage",l.FIT_PAGE_WIDTH="fitPageWidth",l.FIT_PAGE_HEIGHT="fitPageHeight",l.getOptions=function(){return[{value:l.FIT_PAGE,label:e.fitPage},{value:l.FIT_PAGE_WIDTH,label:e.fitPageWidth},{value:l.FIT_PAGE_HEIGHT,label:e.fitPageHeight},{value:0,label:"",isCustomBig:!0},{value:150,label:"150%"},{value:125,label:"125%"},{value:100,label:"100%"},{value:90,label:"90%"},{value:80,label:"80%"},{value:70,label:"70%"},{value:60,label:"60%"},{value:50,label:"50%"},{value:0,label:"",isCustomSmall:!0}]},l.getClosestZoomAndUpdateOptions=function(e,l){var a=l.filter(function(e){return e.isCustomBig})[0],u=l.filter(function(e){return e.isCustomSmall})[0];if(a.value=0,a.hidden=!0,u.value=0,u.hidden=!0,e<50)return u.value=e,u.label=Math.round(e)+"%",u.hidden=!1,u.value;if(e>150)return a.value=e,a.label=Math.round(e)+"%",a.hidden=!1,a.value;var t=[];return l.forEach(function(l){"number"==typeof l.value&&t.push({value:l.value,score:e<l.value?e/l.value:l.value/e})}),t.sort(function(e,l){return l.score-e.score}),t[0].value},l});