// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct"],(function(e,r){var d={renderBackground:function(e,r,o){return d._renderSection(e,r,o,!0)},renderForeground:function(e,r,o){return d._renderSection(e,r,o,!1)},_renderSection:function(r,o,n,i){var t=i?r.backgroundNode:r.foregroundNode;if(t&&(t.innerHTML=""),!o)return null;var u={};return u.class="esriGEAbsoluteStretched "+(i?"adjustableGrid_backgroundSection":"adjustableGrid_foregroundSection"),u.initialWidth=r.getAllowedWidth(),u.initialHeight=r.getHeight(),u.json=o,u.viewModel=r.viewModel,u.theme=r.theme,u.parentWidget=r,u.currentFeatureIndex=r.currentFeatureIndex,u.initialViewMode=r.getViewMode(),u.initialSpecificViewMode=r.getSpecificViewMode(),e.mixin(u,n),r.viewModel.layoutBuilder.createElement("section",u,d._provideNode(r,i))},_provideNode:function(e,d){return d?e.backgroundNode=e.backgroundNode||r.create("div",{class:"adjustableGridBackgroundNode"},e.domNode,"first"):e.foregroundNode=e.foregroundNode||r.create("div",{class:"adjustableGridForegroundNode"},e.domNode)}};return d}));