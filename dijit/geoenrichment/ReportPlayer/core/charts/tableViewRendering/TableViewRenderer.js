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

define(["dojo/_base/declare","dijit/Destroyable","../../supportClasses/TableUtil"],function(e,t,i){var a={IS_PERCENT_RE:/_P$/i,buildSectionJsonFromSeriesItems:function(e,t,a,s){var o=this,l=1===e.length,n=e.map(function(e){return e.points.map(function(i){return{name:i.fieldName,alias:i.label,fieldCategory:l?"":e.label,hasVariable:!0,variableID:i.calculator.substr(i.calculator.lastIndexOf(".")+1),fullName:i.calculator.substr(i.calculator.indexOf("/")+1),statefulName:i.calculator,decimals:t.dataLabelsDecimals||0,showPercent:o.IS_PERCENT_RE.test(i.fieldName),useThousandsSeparator:!0}})});return i.createDetailsSectionForFieldInfoGroups(n,{width:a,height:s})}};return e(t,{_tableSection:null,renderTableForChart:function(e){if(this._destroyTable(),e.seriesItems&&e.seriesItems.length){var t={};t["class"]="chartContainer_tableSection",t.initialWidth=e.width,t.json=a.buildSectionJsonFromSeriesItems(e.seriesItems,e.visualProperties,e.width,e.height),t.viewModel=e.viewModel,t.themeContext=e.themeContext,t.theme=e.theme,t.tableClass="chartContainerChartTable",t.hasFixedLayout=!1,this._provideParamsForTableSection(t,e),this._tableSection=e.viewModel.layoutBuilder.createElement("section",t,e.tableNode),this._tableSection.setResizedHeight(e.height),this._tableSection.setViewMode(this._viewMode||"previewValues")}},_provideParamsForTableSection:function(e,t){},_viewMode:null,setViewMode:function(e){this._viewMode=e,this._tableSection&&this._tableSection.setViewMode(e)},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy(),this._tableSection=null},destroy:function(){this._destroyTable(),this.inherited(arguments)}})});