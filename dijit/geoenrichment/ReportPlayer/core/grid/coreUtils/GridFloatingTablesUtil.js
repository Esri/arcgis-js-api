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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct"],(function(e,i){var o={renderFloatingTables:function(t,a,d,n){var r=n?t.backgroundFloatingTablesNode:t.foregroundFloatingTablesNode;if(r&&i.empty(r),!a)return null;var l={class:"esriGEAbsoluteStretched adjustableGrid_floatingTablesSection"};return l.initialWidth=t.getAllowedWidth(),l.initialHeight=t.getHeight(),l.json=a,l.viewModel=t.viewModel,l.theme=t.theme,l.parentWidget=t,l.currentFeatureIndex=t.currentFeatureIndex,l.initialViewMode=t.getViewMode(),l.initialSpecificViewMode=t.getSpecificViewMode(),e.mixin(l,d),t.viewModel.layoutBuilder.createElement("section",l,o._provideNode(t,n))},_provideNode:function(e,o){return o?e.backgroundFloatingTablesNode=e.backgroundFloatingTablesNode||i.create("div",{class:"adjustableGridFloatingTablesNode"},e.mainNode,"before"):e.foregroundFloatingTablesNode=e.foregroundFloatingTablesNode||i.create("div",{class:"adjustableGridFloatingTablesNode"},e.mainNode,"after")}};return o}));