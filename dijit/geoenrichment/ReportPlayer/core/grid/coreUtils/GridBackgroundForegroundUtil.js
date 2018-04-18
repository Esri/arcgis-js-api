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

define(["dojo/_base/lang","dojo/dom-construct"],function(e,o){var r={};return r.renderBackground=function(e,o,t){return r._renderSection(e,o,t,!0)},r.renderForeground=function(e,o,t){return r._renderSection(e,o,t,!1)},r._renderSection=function(r,t,n,d){if(o.empty(d?r.backgroundNode:r.foregroundNode),!t)return null;var i={};i.class="esriGEAbsoluteStretched "+(d?"adjustableGrid_backgroundSection":"adjustableGrid_foregroundSection"),i.initialWidth=r.getAllowedWidth(),i.json=t,i.viewModel=r.viewModel,i.theme=r.theme,i.hasFixedLayout=!1,i.parentWidget=r,e.mixin(i,n);var u=r.viewModel.layoutBuilder.createElement("section",i,d?r.backgroundNode:r.foregroundNode);return u.setResizedHeight(r.getHeight()),u.setViewMode(r.getViewMode(),r.getSpecificViewMode()),u},r});