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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","../grid/coreUtils/GridDataUtil"],function(t,e){return t(null,{_queryElementsById:function(t,e){return this._getStackElements(e).filter(function(e){return e.stackId===t})},getStackElements:function(t){return this._getStackElements(t)},containsElement:function(t){return-1!==this._stackElements.indexOf(t)},_getStackElements:function(t){return t?this._stackElements.slice().reverse():this._stackElements},getTables:function(t){return this._queryElementsById("table",t)},getFirstTable:function(){return this.getTables()[0]},getTopMostTable:function(){return this.getTables(!0)[0]},getLastTable:function(){var t=this.getTables();return t[t.length-1]},getDataTables:function(){return this.isDataSection()?this.getTables():[]},hasNonEmptyTables:function(){return this.getTables().some(function(t){return t.columns.length>0&&t.store.data.length>0})},hasTablesThatFitHeight:function(){return this.getTables().some(function(t){return t.needScaleToFitHeight()})},hasMultiFeatureTables:function(){return this.getTables().some(function(t){return t.isMultiFeatureTable()})},hasImages:function(){return!!this.getImages().length},getImages:function(t){return this._queryElementsById("img",t)},getMovableElements:function(){return this._stackElements.filter(function(t){return"table"===t.stackId||"img"===t.stackId})},hasPageBreak:function(){return!!this._queryElementsById("pageBreak").length},collectFieldInfos:function(t){var e=[];return this.getTables().forEach(function(n){e=e.concat(n.collectFieldInfos(t))}),e},hasChart:function(){var t=0;return this.getTables().forEach(function(n){n.getFieldCells().forEach(function(n){e.isChartCell(n)&&t++})}),t},getChartJson:function(){var t=this.getFirstTable();return t&&t.getChartJson()},hasInfographic:function(t){var e=this.getInfographicWithTable();return e?t&&e.type!==t?!1:!0:!1},getInfographic:function(){var t=this.getInfographicWithTable();return t&&t.infographic},getInfographicWithTable:function(){var t,n;return this.getTables().some(function(r){return r.getFieldCells().some(function(i){return e.isInfographicCell(i)?(t=i.content,n=r,!0):void 0})}),t?{infographic:t,table:n,type:t.getType()}:null},getInfographicJson:function(){var t=this.getFirstTable();return t&&t.getInfographicJson()},hasOnlyImage:function(){return 1===this._stackElements.length&&this._queryElementsById("img").length}})});