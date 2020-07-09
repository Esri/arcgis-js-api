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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","../../../_devConfig"],(function(e,r){var t={},i=0;return t.refreshStart=function(e){if(r.table.printGridRefresh){var i=t._getGridInfo(e,!0);console.log("AdjustableGrid.js "+i.key+" => refresh => start")}},t.refreshEnd=function(i){r.table.printGridRefresh&&e(i.getRenderPromise(),(function(){var e=t._getGridInfo(i,!1);console.log("AdjustableGrid.js "+e.key+" => refresh => end ("+e.refreshTime+" ms)")}))},t._getGridInfo=function(e,r){var t,n;if(e.isReportContainerPageGrid)t="Page grid";else{for(var d=[],g=e.parentWidget;g&&(d.push(g),!g.isReportContainerPageGrid);)g=g.parentWidget;for(var a=d[d.length-1].getFieldCells().indexOf(d[d.length-2]),o=d.length,f="",s=0;s<o;s++)f+=">";void 0===e._debugId&&(e._debugId=i++),t="panel "+a+" "+f+"("+e._debugId+")"}return r?e._degubStartTime=(new Date).getTime():n=(new Date).getTime()-e._degubStartTime,{key:t,refreshTime:n}},t}));