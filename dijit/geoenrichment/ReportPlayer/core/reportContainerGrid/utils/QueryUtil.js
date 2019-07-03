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

define(["dojo/dom-geometry","../../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil"],function(e,t){var n={getLayoutCells:function(e,t){t=t||{};var n=t.sectionFuncName,o=t.floatingCells,r=t.topFirst,i=t.visibleOnly,u=[];return(i?e.getShownGrids():e.getGrids()).forEach(function(e){var t=e.getFieldCells({floatingCells:o,topFirst:r});t&&(u=u.concat(t))}),n?u.filter(function(e){return!n||e&&e.content&&e.content[n]}):u},findFirstEmptyLayoutCell:function(e){return function(){var t;return n.getLayoutCells(e,{sectionFuncName:"isEmpty"}).some(function(e){if(e.content.isEmpty())return t=e,!0}),t}()},getFloatingTables:function(e,t){var n=[];return("number"==typeof t?[e.getGrids()[t]]:e.getGrids()).forEach(function(e){e.foregroundFloatingTablesSection&&(n=n.concat(e.foregroundFloatingTablesSection.getTables())),e.backgroundFloatingTablesSection&&(n=n.concat(e.backgroundFloatingTablesSection.getTables()))}),n},getFocusedLayoutCell:function(e){var t=[];return e.getGrids().forEach(function(e){var n=e.getSelectedCells();n&&(t=t.concat(n))}),t[0]},hasFocusedChild:function(e){return e.getGrids().some(function(e){var t=e&&e.getSelectedCells();return t&&!!t.length})},collectFieldInfosJson:function(e){var n=[];return t.processTemplateFieldInfos(e.toJson(),function(e){n.push(e)}),n},getSectionIndex:function(e,t){var n,o=0;return e.getGrids().some(function(e){return e.getFieldCells().some(function(e){if(e===t)return n=!0,!0;o++})}),n&&o},getLayoutCellBySectionIndex:function(e,t){var n,o=0;return e.getGrids().some(function(e){return e.getFieldCells().some(function(e){if(o===t)return n=e,!0;o++})}),n},screenToPageCoords:function(t,n,o,r){var i=t.getGrids()[t.getCurrentViewedPageIndex()];if(!i)return null;var u=e.position(i.domNode),l={x:n-u.x,y:o-u.y};if(r&&!r.returnInScreenCoordinates){var s=t.getZoomInfo().scale;l.x/=s,l.y/=s}return l}};return n});