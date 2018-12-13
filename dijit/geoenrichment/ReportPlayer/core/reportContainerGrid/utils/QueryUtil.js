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

define(["dojo/dom-geometry"],function(e){var t={getLayoutCells:function(e,t){var n=t&&t.sectionFuncName,o=t&&t.floatingCells,r=t&&t.topFirst,i=[];return e.getGrids().forEach(function(e){var t=e.getFieldCells({floatingCells:o,topFirst:r});t&&(i=i.concat(t))}),n?i.filter(function(e){return!n||e&&e.content&&e.content[n]}):i},findFirstEmptyLayoutCell:function(e){return function(){var n;return t.getLayoutCells(e,{sectionFuncName:"isEmpty"}).some(function(e){if(e.content.isEmpty())return n=e,!0}),n}()},getFloatingTables:function(e,t){var n=[];return("number"==typeof t?[e.getGrids()[t]]:e.getGrids()).forEach(function(e){e.foregroundFloatingTablesSection&&(n=n.concat(e.foregroundFloatingTablesSection.getTables())),e.backgroundFloatingTablesSection&&(n=n.concat(e.backgroundFloatingTablesSection.getTables()))}),n},getFocusedLayoutCell:function(e){var t=[];return e.getGrids().forEach(function(e){var n=e.getSelectedCells();n&&(t=t.concat(n))}),t[0]},hasFocusedChild:function(e){return e.getGrids().some(function(e){var t=e&&e.getSelectedCells();return t&&!!t.length})},collectFieldInfos:function(e,n){var o=[];return t.getLayoutCells(e,{sectionFuncName:"collectFieldInfos",floatingCells:!0}).some(function(e){var t=e.content.collectFieldInfos(n);t&&(o=o.concat(t))}),o},getSectionIndex:function(e,t){var n,o=0;return e.getGrids().some(function(e){return e.getFieldCells().some(function(e){if(e===t)return n=!0,!0;o++})}),n&&o},getLayoutCellBySectionIndex:function(e,t){var n,o=0;return e.getGrids().some(function(e){return e.getFieldCells().some(function(e){if(o===t)return n=e,!0;o++})}),n},screenToPageCoords:function(t,n,o,r){var i=t.getGrids()[t.getCurrentViewedPageIndex()];if(!i)return null;var c=e.position(i.domNode),l={x:n-c.x,y:o-c.y};if(r&&!r.returnInScreenCoordinates){var u=t.getZoomInfo().scale;l.x/=u,l.y/=u}return l}};return t});