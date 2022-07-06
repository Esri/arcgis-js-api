// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/DomUtil"],(function(e){var n={getPanelInfoByNode:function(i,t){var a={panelIndex:-1,panelScale:void 0};return i.isReportContainerStackAll?(i.getInnerContainers().some((function(e){var i=n.getPanelInfoByNode(e,t);if(-1!==i.panelIndex)return a=i,!0})),a):(i.infographicPage.getSections().some((function(n,o){if(e.isChildOf(t,n.domNode))return a.panelIndex=o,a.panelScale=i.infographicPage.getPanelScaleAt(o),!0})),a)}};return n}));