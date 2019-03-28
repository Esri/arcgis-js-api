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

define(["dojo/_base/lang","dojo/dom-construct"],function(e,r){var d={};return d.renderBackground=function(e,r,o){return d._renderSection(e,r,o,!0)},d.renderForeground=function(e,r,o){return d._renderSection(e,r,o,!1)},d._renderSection=function(o,n,t,i){var u=i?o.backgroundNode:o.foregroundNode;if(u&&r.empty(u),!n)return null;var a={};a.class="esriGEAbsoluteStretched "+(i?"adjustableGrid_backgroundSection":"adjustableGrid_foregroundSection"),a.initialWidth=o.getAllowedWidth(),a.json=n,a.viewModel=o.viewModel,a.theme=o.theme,a.parentWidget=o,a.currentFeatureIndex=o.currentFeatureIndex,a.initialViewMode=o.getViewMode(),a.initialSpecificViewMode=o.getSpecificViewMode(),e.mixin(a,t);var c=o.viewModel.layoutBuilder.createElement("section",a,d._provideNode(o,i));return c.setHeight(o.getHeight()),c},d._provideNode=function(e,d){return d?e.backgroundNode=e.backgroundNode||r.create("div",{class:"adjustableGridBackgroundNode"},e.domNode,"first"):e.foregroundNode=e.foregroundNode||r.create("div",{class:"adjustableGridForegroundNode"},e.domNode)},d});