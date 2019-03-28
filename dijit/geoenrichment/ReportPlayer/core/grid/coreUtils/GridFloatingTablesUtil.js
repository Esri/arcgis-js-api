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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct"],function(e,o){var i={};return i.renderFloatingTables=function(t,a,d,n){var r=n?t.backgroundFloatingTablesNode:t.foregroundFloatingTablesNode;if(r&&o.empty(r),!a)return null;var l={};l.class="esriGEAbsoluteStretched adjustableGrid_floatingTablesSection",l.initialWidth=t.getAllowedWidth(),l.json=a,l.viewModel=t.viewModel,l.theme=t.theme,l.parentWidget=t,l.currentFeatureIndex=t.currentFeatureIndex,l.initialViewMode=t.getViewMode(),l.initialSpecificViewMode=t.getSpecificViewMode(),e.mixin(l,d);var s=t.viewModel.layoutBuilder.createElement("section",l,i._provideNode(t,n));return s.setHeight(t.getHeight()),s},i._provideNode=function(e,i){return i?e.backgroundFloatingTablesNode=e.backgroundFloatingTablesNode||o.create("div",{class:"adjustableGridFloatingTablesNode"},e.mainNode,"before"):e.foregroundFloatingTablesNode=e.foregroundFloatingTablesNode||o.create("div",{class:"adjustableGridFloatingTablesNode"},e.mainNode,"after")},i});