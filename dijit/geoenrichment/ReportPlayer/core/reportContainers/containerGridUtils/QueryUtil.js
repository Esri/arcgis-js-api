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

define([],function(){var e={getLayoutCells:function(e,t){var n=[];return e.grids.forEach(function(e){var t=e.getFieldCells();t&&(n=n.concat(t))}),t?n.filter(function(e){return!t||e&&e.content&&e.content[t]}):n},canInsertElementInCell:function(e){return!!this.getCellWithSelectedTableCells(e)},canCreateChartFromSelected:function(e){return!!this.getCellWithSelectedTableCells(e,!0)},getCellWithSelectedTableCells:function(e,t){var n;return this.getLayoutCells(e,"hasSelectedCells").some(function(e){return e.content.hasSelectedCells(t)?(n=e,!0):void 0}),n},findFirstEmptyLayoutCell:function(e,t){function n(){var t;return r.getLayoutCells(e,"isEmpty").some(function(e){return e.content.isEmpty()?(t=e,!0):void 0}),t}var l,r=this,o=n();return!o&&t&&(e.addEmptyPageGrid(),o=n(),l=!0),{cell:o,pageAdded:l}},getFocusedLayoutCell:function(e){var t=[];return e.grids.forEach(function(e){var n=e.getFocusedCells();n&&(t=t.concat(n))}),t[0]},hasFocusedChild:function(e){return e.grids.some(function(e){var t=e&&e.getFocusedCells();return t&&!!t.length})},collectFieldInfos:function(e,t){var n=[];return this.getLayoutCells(e,"collectFieldInfos").some(function(e){var l=e.content.collectFieldInfos(t);l&&(n=n.concat(l))}),n},getSectionIndex:function(e,t){var n,l=0;return e.grids.some(function(e){return e.getFieldCells().some(function(e){return e===t?(n=!0,!0):void l++})}),n&&l},getLayoutCellBySectionIndex:function(e,t){var n,l=0;return e.grids.some(function(e){return e.getFieldCells().some(function(e){return l==t?(n=e,!0):void l++})}),n}};return e});