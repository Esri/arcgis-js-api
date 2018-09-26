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

define(["dojo/_base/lang","dojo/dom-construct"],function(e,i){var t={};return t.renderFloatingTables=function(t,n,o,a){var d=a?t.backgroundFloatingTablesNode:t.foregroundFloatingTablesNode;if(i.empty(d),!n)return null;var r={};r.class="esriGEAbsoluteStretched adjustableGrid_floatingTablesSection",r.initialWidth=t.getAllowedWidth(),r.json=n,r.viewModel=t.viewModel,r.theme=t.theme,r.hasFixedLayout=!1,r.parentWidget=t,r.currentFeatureIndex=t.currentFeatureIndex,r.initialViewMode=t.getViewMode(),r.initialSpecificViewMode=t.getSpecificViewMode(),e.mixin(r,o);var l=t.viewModel.layoutBuilder.createElement("section",r,d);return l.setResizedHeight(t.getHeight()),l},t});