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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil","../../themes/BackgroundThemeUtil"],function(e,o,n){var t={};return t.setUpDDPanelBackgroundColor=function(t){if(t.infographicJson){var r=t.viewModel.getStaticInfographicDefaultStyles(t.theme),i=t.viewModel.getDocumentDefaultStyles(t.theme);[t.infographicJson.style.backgroundColor,r&&r.backgroundColor,i.backgroundColor].some(function(n){if(n&&!o.isTransparent(n))return e.set(t.node,"backgroundColor",n),!0})||n.applyBackgroundImageFromSettings(t.node,i.backgroundImage)}},t});