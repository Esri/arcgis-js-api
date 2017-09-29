// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/Destroyable","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(e,t,i){return e(t,{_textSection:null,renderTexts:function(e){this._destroyTexts();var t=e.visualProperties.floatingTexts;if(t&&t.length){var o={};o["class"]="chartContainer_textSection",o.initialWidth=e.chartW,o.json={type:i.DETAILS,stack:t},o.viewModel=e.viewModel,o.themeContext=e.themeContext,o.theme=e.theme,o.tableClass="chartContainerTextTable",o.hasFixedLayout=!1,this._provideParamsForTextSection(o,e),this._textSection=e.viewModel.layoutBuilder.createElement("section",o,e.textNode),this._textSection.setResizedHeight(e.chartH),this._textSection.setViewMode(this._viewMode||"edit",{richText:"previewValues",variable:"previewValues"})}},_provideParamsForTextSection:function(e,t){},_viewMode:null,setViewMode:function(e){this._viewMode=e,this._textSection&&this._textSection.setViewMode(e)},_destroyTexts:function(){this._textSection&&this._textSection.destroy(),this._textSection=null},destroy:function(){this._destroyTexts(),this.inherited(arguments)}})});