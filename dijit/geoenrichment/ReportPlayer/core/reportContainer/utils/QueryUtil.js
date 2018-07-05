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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ArrayUtil"],function(e){var t={getReportElements:function(e,t){for(var n=[],r=0;r<e.stackContainer.children.length;r++){var o=e.stackContainer.children[r];e.getElementParams(o,"isReportElement")&&n.push(o)}return t?n.filter(function(n){var r=e.getElementSection(n);return r&&!!r[t]}):n},collectFieldInfos:function(e,n){var r=[];return t.getReportElements(e,"collectFieldInfos").some(function(t){var o=e.getElementSection(t),i=o.collectFieldInfos(n);i&&(r=r.concat(i))}),r},findLastContentElementBeforeFooter:function(e){var n;return t.getReportElements(e).forEach(function(t){var r=e.getElementSection(t);!r||r.isEmpty()||r.isPageFooter()||(n=t)}),n},getSectionPositionInfo:function(e,n){var r,o=0;return t.getReportElements(e).some(function(t){if(e.getElementSection(t)===n)return r=t,!0;o++}),{reportElement:r,index:r?o:-1}},getElementIndex:function(e,n){return t.getReportElements(e).indexOf(n)},getReportElementBySectionIndex:function(e,n){return t.getReportElements(e)[n]},getSectionsByType:function(e,n){var r=t.getReportElements(e,"getSectionType"),o=[];return r.forEach(function(t){var r=e.getElementSection(t);r&&r.getSectionType()===n&&o.push(r)}),o},getSectionsByTypes:function(n,r){var o=[];return r.forEach(function(e){o=o.concat(t.getSectionsByType(n,e))}),e.removeDuplicates(o)},getReportElementTable:function(e,t){var n=e.getElementSection(t);return n&&n.getLastTable&&n.getLastTable()},getReportElementByTable:function(e,n){var r;return t.getReportElements(e).some(function(o){if(t.getReportElementTable(e,o)===n)return r=o,!0}),r},getTableAbove:function(e,n){var r,o;return t.getReportElements(e).some(function(i){if(t.getReportElementTable(e,i)===n)return o=t.getReportElementTable(e,r),!0;r=i}),o}};return t});