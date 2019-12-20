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

define(["esri/dijit/geoenrichment/when","../../../_devConfig"],function(e,r){var t={},i=0;return t.refreshStart=function(e){if(r.table.printGridRefresh){var i=t._getGridInfo(e,!0);console.log("AdjustableGrid.js "+i.key+" => refresh => start")}},t.refreshEnd=function(i){r.table.printGridRefresh&&e(i.getRenderPromise(),function(){var e=t._getGridInfo(i,!1);console.log("AdjustableGrid.js "+e.key+" => refresh => end ("+e.refreshTime+" ms)")})},t._getGridInfo=function(e,r){var t;if(e.isReportContainerPageGrid)t="Page grid";else{for(var n=[],d=e.parentWidget;d&&(n.push(d),!d.isReportContainerPageGrid);)d=d.parentWidget;for(var a=n[n.length-1].getFieldCells().indexOf(n[n.length-2]),g=n.length,o="",f=0;f<g;f++)o+=">";void 0===e._debugId&&(e._debugId=i++),t="panel "+a+" "+o+"("+e._debugId+")"}var s;return r?e._degubStartTime=(new Date).getTime():s=(new Date).getTime()-e._degubStartTime,{key:t,refreshTime:s}},t});