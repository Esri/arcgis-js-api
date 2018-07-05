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

define(["dojo/dom-geometry"],function(e){var n={getLayoutCells:function(e,n){var t=n&&n.sectionFuncName,o=n&&n.floatingCells,r=[];return e.getGrids().forEach(function(e){var n=e.getFieldCells({floatingCells:o});n&&(r=r.concat(n))}),t?r.filter(function(e){return!t||e&&e.content&&e.content[t]}):r},findFirstEmptyLayoutCell:function(e){return function(){var t;return n.getLayoutCells(e,{sectionFuncName:"isEmpty"}).some(function(e){if(e.content.isEmpty())return t=e,!0}),t}()},getFocusedLayoutCell:function(e){var n=[];return e.getGrids().forEach(function(e){var t=e.getSelectedCells();t&&(n=n.concat(t))}),n[0]},hasFocusedChild:function(e){return e.getGrids().some(function(e){var n=e&&e.getSelectedCells();return n&&!!n.length})},collectFieldInfos:function(e,t){var o=[];return n.getLayoutCells(e,{sectionFuncName:"collectFieldInfos",floatingCells:!0}).some(function(e){var n=e.content.collectFieldInfos(t);n&&(o=o.concat(n))}),o},getSectionIndex:function(e,n){var t,o=0;return e.getGrids().some(function(e){return e.getFieldCells().some(function(e){if(e===n)return t=!0,!0;o++})}),t&&o},getLayoutCellBySectionIndex:function(e,n){var t,o=0;return e.getGrids().some(function(e){return e.getFieldCells().some(function(e){if(o===n)return t=e,!0;o++})}),t},screenToPageCoords:function(n,t,o,r){r=r||{};var i;return n.getGrids().some(function(c){var u=e.position(c.domNode);if(u.y<o&&u.y+u.h>o){if(i={x:t-u.x,y:o-u.y},!r.returnInScreenCoordinates){var l=n.getZoomInfo().scale;i.x/=l,i.y/=l}return!0}}),i}};return n});