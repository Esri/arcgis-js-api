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

define(["dojo/dom-class","esri/dijit/geoenrichment/utils/ColorUtil","../../themes/BackgroundThemeUtil"],function(e,o,r){var n={};return n.setUpDDPanelBackgroundColor=function(n){if(n.infographicJson){var t=n.viewModel.getStaticInfographicDefaultStyles(n.theme),a=n.viewModel.getDocumentDefaultStyles(n.theme);[n.infographicJson.style.backgroundColor,t&&t.backgroundColor,a.backgroundColor].some(function(r){if(r&&!o.isTransparent(r))return n.node.style.backgroundColor=r,e.remove(n.node,"playerThemeDark playerThemeLight"),e.add(n.node,o.isLightColor(r)?"playerThemeLight":"playerThemeDark"),!0})||r.applyBackgroundImageFromSettings(n.node,a.backgroundImage)}},n});