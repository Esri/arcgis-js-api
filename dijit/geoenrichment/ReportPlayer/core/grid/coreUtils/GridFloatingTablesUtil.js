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

define(["dojo/_base/lang","dojo/dom-construct"],function(e,t){var i={};return i.renderFloatingTables=function(i,o,d){if(t.empty(i.floatingTablesNode),!o)return null;var l={};l.class="esriGEAbsoluteStretched adjustableGrid_floatingTablesSection",l.initialWidth=i.getAllowedWidth(),l.json=o,l.viewModel=i.viewModel,l.theme=i.theme,l.hasFixedLayout=!1,l.parentWidget=i,e.mixin(l,d);var n=i.viewModel.layoutBuilder.createElement("section",l,i.floatingTablesNode);return n.setResizedHeight(i.getHeight()),n.setViewMode(i.getViewMode(),i.getSpecificViewMode()),n},i});