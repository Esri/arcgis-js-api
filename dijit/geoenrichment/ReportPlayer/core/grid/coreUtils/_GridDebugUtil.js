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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/when","../../../_devConfig"],function(e,r){var t={},n=0;return t.refreshStart=function(e){if(r.table.printGridRefresh){var n=t._getGridInfo(e,!0);console.log("AdjustableGrid.js "+n.key+" => refresh => start")}},t.refreshEnd=function(n){r.table.printGridRefresh&&e(n.getRenderPromise(),function(){var e=t._getGridInfo(n,!1);console.log("AdjustableGrid.js "+e.key+" => refresh => end ("+e.refreshTime+" ms)")})},t._getGridInfo=function(e,r){var t;if(e.isReportContainerPageGird)t="Page grid";else{for(var i=[],d=e.parentWidget;d&&(i.push(d),!d.isReportContainerPageGird);)d=d.parentWidget;for(var a=i[i.length-1].getFieldCells().indexOf(i[i.length-2]),o=i.length,g="",f=0;f<o;f++)g+=">";void 0===e._debugId&&(e._debugId=n++),t="panel "+a+" "+g+"("+e._debugId+")"}var s;return r?e._degubStartTime=(new Date).getTime():s=(new Date).getTime()-e._degubStartTime,{key:t,refreshTime:s}},t});