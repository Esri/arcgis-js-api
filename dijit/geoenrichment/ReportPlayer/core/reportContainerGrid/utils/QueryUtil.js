// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/dom-geometry"],(function(e){var n={getLayoutCells:function(e,n){var t=(n=n||{}).sectionFuncName,o=n.floatingCells,r=n.topFirst,i=n.visibleOnly,u=[];return(i?e.getShownGrids():e.getGrids()).forEach((function(e){var n=e.getCells({floatingCells:o,topFirst:r});n&&(u=u.concat(n))})),t?u.filter((function(e){return!t||e&&e.content&&e.content[t]})):u},findFirstEmptyLayoutCell:function(e){return n.getLayoutCells(e,{sectionFuncName:"isEmpty"}).some((function(e){if(e.content.isEmpty())return t=e,!0})),t;var t},getFloatingTables:function(e,n){var t=[];return("number"==typeof n?[e.getGrids()[n]]:e.getGrids()).forEach((function(e){e.foregroundFloatingTablesSection&&(t=t.concat(e.foregroundFloatingTablesSection.getTables())),e.backgroundFloatingTablesSection&&(t=t.concat(e.backgroundFloatingTablesSection.getTables()))})),t},getSectionIndex:function(e,n){var t,o=0;return e.getGrids().some((function(e){return e.getCells().some((function(e){if(e===n)return t=!0,!0;o++}))})),t&&o},getLayoutCellBySectionIndex:function(e,n){var t,o=0;return e.getGrids().some((function(e){return e.getCells().some((function(e){if(o===n)return t=e,!0;o++}))})),t},screenToPageCoords:function(n,t,o,r){var i=n.getGrids()[n.getCurrentViewedPageIndex()];if(!i)return null;var u=e.position(i.domNode),a={x:t-u.x,y:o-u.y};if(r&&!r.returnInScreenCoordinates){var c=n.getZoomInfo().scale;a.x/=c,a.y/=c}return a}};return n}));