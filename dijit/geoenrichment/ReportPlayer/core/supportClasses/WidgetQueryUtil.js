// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define([],(function(){var n={checkParentWidgets:function(n,t,r){for(var e=!1;n&&(e=t(n)||e,!r||!e);)n=n.parentWidget;return e},isDataDrillingView:function(t){return n.checkParentWidgets(t,(function(n){return n.isDataDrillingView}),!0)},getReportContainerGrid:function(t){return n.findParentWidget(t,(function(n){return n.isReportContainerGrid&&!n.isTempAddContainer}))},findParentWidget:function(t,r){var e;return n.checkParentWidgets(t,(function(n){if(r(n))return e=n,!0}),!0),e}};return n}));