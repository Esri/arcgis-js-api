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

define(["dojo/_base/lang","dojo/dom-construct"],function(e,r){var n={};return n.renderBackground=function(e,r,t){return n._renderSection(e,r,t,!0)},n.renderForeground=function(e,r,t){return n._renderSection(e,r,t,!1)},n._renderSection=function(n,t,i,o){if(r.empty(o?n.backgroundNode:n.foregroundNode),!t)return null;var d={};d.class="esriGEAbsoluteStretched "+(o?"adjustableGrid_backgroundSection":"adjustableGrid_foregroundSection"),d.initialWidth=n.getAllowedWidth(),d.json=t,d.viewModel=n.viewModel,d.theme=n.theme,d.hasFixedLayout=!1,d.parentWidget=n,d.currentFeatureIndex=n.currentFeatureIndex,d.initialViewMode=n.getViewMode(),d.initialSpecificViewMode=n.getSpecificViewMode(),e.mixin(d,i);var u=n.viewModel.layoutBuilder.createElement("section",d,o?n.backgroundNode:n.foregroundNode);return u.setResizedHeight(n.getHeight()),u},n});