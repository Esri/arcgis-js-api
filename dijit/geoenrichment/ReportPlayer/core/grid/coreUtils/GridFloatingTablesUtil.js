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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct"],(function(e,i){var o={renderFloatingTables:function(i,t,a,n){var d=n?i.backgroundFloatingTablesNode:i.foregroundFloatingTablesNode;if(d&&(d.innerHTML=""),!t)return null;var r={class:"esriGEAbsoluteStretched adjustableGrid_floatingTablesSection"};return r.initialWidth=i.getAllowedWidth(),r.initialHeight=i.getHeight(),r.json=t,r.viewModel=i.viewModel,r.theme=i.theme,r.parentWidget=i,r.currentFeatureIndex=i.currentFeatureIndex,r.initialViewMode=i.getViewMode(),r.initialSpecificViewMode=i.getSpecificViewMode(),e.mixin(r,a),i.viewModel.layoutBuilder.createElement("section",r,o._provideNode(i,n))},_provideNode:function(e,o){return o?e.backgroundFloatingTablesNode=e.backgroundFloatingTablesNode||i.create("div",{class:"adjustableGridFloatingTablesNode"},e.mainNode,"before"):e.foregroundFloatingTablesNode=e.foregroundFloatingTablesNode||i.create("div",{class:"adjustableGridFloatingTablesNode"},e.mainNode,"after")}};return o}));