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

define([],function(){var e={getReportElements:function(e,t){for(var n=[],r=0;r<e.stackContainer.children.length;r++){var o=e.stackContainer.children[r];e.getElementParams(o,"isReportElement")&&n.push(o)}return t?n.filter(function(n){var r=e.getElementSection(n);return r&&!!r[t]}):n},collectFieldInfos:function(t,n){var r=[];return e.getReportElements(t,"collectFieldInfos").some(function(e){var o=t.getElementSection(e),l=o.collectFieldInfos(n);l&&(r=r.concat(l))}),r},canInsertElementInCell:function(t){return!!e.getElementWithSelectedTableCells(t)},canCreateChartFromSelected:function(t){return!!e.getElementWithSelectedTableCells(t,!0)},getElementWithSelectedTableCells:function(t,n){var r;return e.getReportElements(t,"hasSelectedCells").some(function(e){var o=t.getElementSection(e);return o.hasSelectedCells(n)?(r=e,!0):void 0}),r},findLastContentElementBeforeFooter:function(t){var n;return e.getReportElements(t).forEach(function(e){var r=t.getElementSection(e);!r||r.isEmpty()||r.isPageFooter()||(n=e)}),n},getSectionPositionInfo:function(t,n){var r,o=0;return e.getReportElements(t).some(function(e){var l=t.getElementSection(e);return l===n?(r=e,!0):void o++}),{reportElement:r,index:r&&o}},getElementIndex:function(t,n){return e.getReportElements(t).indexOf(n)},getReportElementBySectionIndex:function(t,n){return e.getReportElements(t)[n]},getSectionsByType:function(t,n){var r=e.getReportElements(t,"getSectionType"),o=[];return r.forEach(function(e){var r=t.getElementSection(e);r&&r.getSectionType()==n&&o.push(r)}),o},getReportElementTable:function(e,t){var n=e.getElementSection(t);return n&&n.getLastTable&&n.getLastTable()},getReportElementByTable:function(t,n){var r;return e.getReportElements(t).some(function(o){return e.getReportElementTable(t,o)===n?(r=o,!0):void 0}),r},getTableAbove:function(t,n){var r,o;return e.getReportElements(t).some(function(l){return e.getReportElementTable(t,l)===n?(o=e.getReportElementTable(t,r),!0):void(r=l)}),o}};return e});