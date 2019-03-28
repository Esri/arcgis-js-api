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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","../grid/coreUtils/GridDataUtil"],function(t,e){return t(null,{_queryElementsById:function(t,e){return this._getStackElements(e).filter(function(e){return e.stackId===t})},getStackElements:function(t){return this._getStackElements(t)},containsElement:function(t){return-1!==this._stackElements.indexOf(t)},_getStackElements:function(t){return t?this._stackElements.slice().reverse():this._stackElements},getTables:function(t){return this._queryElementsById("table",t)},getFirstTable:function(){return this.getTables()[0]},getTopMostTable:function(){return this.getTables(!0)[0]},getLastTable:function(){var t=this.getTables();return t[t.length-1]},getDataTables:function(){return this.isDataSection()?this.getTables():[]},hasNonEmptyTables:function(){return this.getTables().some(function(t){return t.columns.length>0&&t.store.data.length>0})},hasTablesThatFitHeight:function(){return this.getTables().some(function(t){return t.needScaleToFitHeight()})},hasMultiFeatureTables:function(){return this.getTables().some(function(t){return t.isMultiFeatureTable()})},hasLocatorTables:function(){return this.getTables().some(function(t){return t.isLocatorTable&&t.isLocatorTable()})},hasLocatorHeaderTables:function(){return this.getTables().some(function(t){return t.isLocatorHeaderTable&&t.isLocatorHeaderTable()})},hasLocatorFooterTables:function(){return this.getTables().some(function(t){return t.isLocatorFooterTable&&t.isLocatorFooterTable()})},hasSummarizeTables:function(){return this.getTables().some(function(t){return t.isSummarizeTable&&t.isSummarizeTable()})},hasImages:function(){return!!this.getImages().length},getImages:function(t){return this.viewModel.isGraphicStyle?this.getTables(t).filter(function(t){return this.isImageTable(t)},this).map(function(t){return t.getFirstCell().content}):this._queryElementsById("img",t)},hasOnlyImage:function(){return 1===this._stackElements.length&&this.getImages().length},hasMapImages:function(){return!!this.getMapImages().length},getMapImages:function(t){return this.viewModel.isGraphicStyle?this.getTables(t).filter(function(t){return this.isMapImageTable(t)},this).map(function(t){return t.getFirstCell().content}):this._queryElementsById("img",t).filter(function(t){return t.isMapImage()})},hasChart:function(){var t=0;return this.getTables().forEach(function(n){n.getFieldCells().forEach(function(n){e.isChartCell(n)&&t++})}),t},getChart:function(){var t;return this.getTables().some(function(n){n.getFieldCells().some(function(n){if(e.isChartCell(n))return t=n.content,!0})}),t},getChartJson:function(){var t;return this.getTables().some(function(e){if(t=e.getChartJson())return!0}),t},hasSingleInfographic:function(t){return 1===this.getTables().length&&this.getTables()[0].isSingleCelledTable()&&this.hasInfographic(t)},getInfographicType:function(){var t=this.getInfographicWithTable();return t&&t.type},hasInfographic:function(t){var n=0;return this.getTables().forEach(function(i){return i.getFieldCells().forEach(function(i){!e.isInfographicCell(i)||t&&i.content.getType()!==t||n++})}),n},getInfographic:function(){var t=this.getInfographicWithTable();return t&&t.infographic},getInfographicWithTable:function(){var t,n;return this.getTables().some(function(i){return i.getFieldCells().some(function(r){if(e.isInfographicCell(r))return t=r.content,n=i,!0})}),t?{infographic:t,table:n,type:t.getType()}:null},getInfographicJson:function(){var t;return this.getTables().some(function(e){if(t=e.getInfographicJson())return!0}),t},getMovableElements:function(){return this._stackElements.filter(function(t){return"table"===t.stackId||"img"===t.stackId})},hasPageBreak:function(){return!!this._queryElementsById("pageBreak").length},collectFieldInfos:function(t){var e=[];return this.getTables().forEach(function(n){e=e.concat(n.collectFieldInfos(t))}),e}})});