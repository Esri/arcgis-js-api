// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/Destroyable","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes"],(function(e,t,i,n){return e(t,{currentFeatureIndex:null,_textSection:null,renderTexts:function(e){this._destroyTexts();var t=e.visualProperties.floatingTexts;if(t&&t.length){var o={class:"chartContainer_textSection"};o.initialWidth=e.chartW,o.initialHeight=e.chartH,o.json={type:i.DETAILS,stack:t},o.viewModel=e.viewModel,o.theme=e.theme,o.tableClass="chartContainerTextTable",o.parentWidget=e.parentWidget,o.currentFeatureIndex=this.currentFeatureIndex,o.initialViewMode=this._viewMode||n.EDIT,o.initialSpecificViewMode={richText:n.PREVIEW_VALUES,variable:n.PREVIEW_VALUES},this._provideParamsForTextSection(o,e),this._textSection=e.viewModel.layoutBuilder.createElement("section",o,e.textNode)}},_provideParamsForTextSection:function(e,t){},_viewMode:null,setViewMode:function(e){this._viewMode!==e&&(this._viewMode=e,this._textSection&&this._textSection.setViewMode(e))},_destroyTexts:function(){this._textSection&&this._textSection.destroy(),this._textSection=null},destroy:function(){this._destroyTexts(),this.inherited(arguments)}})}));