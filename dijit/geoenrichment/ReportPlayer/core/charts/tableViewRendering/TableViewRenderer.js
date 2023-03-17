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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dijit/Destroyable","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/ReportPlayer/config","../../supportClasses/tableJson/TableJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../../sections/sectionUtils/SectionJsonUtil","../utils/builder/utils/ChartDataUtil","../utils/ChartTypes","../../grid/coreUtils/GridDataUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,a,o,n,l,r,s,u,c,d){d=d.geoenrichment.dijit.ReportPlayer.ChartContainer;var f=/_P$/i,h=function(e,i,l,h,m,b,g,v){if(l=l.map((function(e){return(e=t.mixin({},e)).data=e.data.slice(),e.data.sort((function(e,t){return e.unsortedIndex-t.unsortedIndex})),e})),i&&u.isColumnBarLike(e)){var w=[];l[0].data.forEach((function(e,i){w.push({name:e.name,data:l.map((function(e){var a=e.data[i];return t.mixin({},a,{name:e.name})}))})})),l=w}var S=-1,C=-1,_=-1,y=-1,p=l[0].data.length+1,A=p;v.showTotalsBelow&&(S=p++),v.showAvgBelow&&(C=p++);var V=l.length+1,T=V;v.showTotalsAfter&&(_=V++),v.showAvgAfter&&(y=V++);var M=g/p-2,B=n.createTable({numColumns:V,numRows:p,width:b,height:g,processTableCell:function(e,t){e.style.fields[t].verticalAlign="middle",e.style.fields[t].horizontalPadding=5,e.style.fields[t].fontSize=Math.round(Math.min(M,15-4*p/50))}});var F=l[0]&&l[0].data[0];function x(e,t,i){var a,n,r=l[e-1]&&l[e-1].data[t-1],u=r||F,c=u&&u.point.fieldInfo&&f.test(u.point.fieldInfo.name);(r&&r.isUnavailableData&&(a=0,n=o.tables.showUnavailableData?d.unavailableDataShort:""),a=void 0!==i?i:r&&r.originalValue,n=void 0!==n?n:void 0!==a?s.formatNumber(a,h,c):"",r&&n&&r.isBenchmarked&&!r.isUnavailableData)&&(n=s.formatNumber(r.unbenchmarkedValue,h,c)+" ("+(a>0?"+":"")+n+")");return{dataPoint:r,value:a||0,formattedValue:n||""}}var j={cache:{},totalsBelow:{},avgsBelow:{},totalsAfter:{},avgsAfter:{}};function D(e,t){return t+";"+e}B.rows.forEach((function(e,t){B.columns.forEach((function(e,i){j.cache[D(i,t)]=x(i,t)}))}));for(var P=0;P<A;P++){j.totalsAfter[P]=0;for(var U=0;U<T;U++)j.totalsAfter[P]+=j.cache[D(U,P)].value;j.avgsAfter[P]=j.totalsAfter[P]/(T-1)}for(U=0;U<T;U++){j.totalsBelow[U]=0;for(P=0;P<A;P++)j.totalsBelow[U]+=j.cache[D(U,P)].value;j.avgsBelow[U]=j.totalsBelow[U]/(A-1)}return B.rows.forEach((function(e,t){B.columns.forEach((function(o,n){if(0!==t)if(0!==n){var r;if(n===_)r=x(n,t,j.totalsAfter[t]);else if(n===y)r=x(n,t,j.avgsAfter[t]);else if(t===S)r=x(n,t,j.totalsBelow[n]);else if(t===C)r=x(n,t,j.avgsBelow[n]);else if(r=j.cache[D(n,t)],h.conditionalStyling&&r.dataPoint.fill){var s=e.style.fields[o.field]=e.style.fields[o.field]||{};s.overrideStyle=void 0,s.backgroundColor=a.toCSSColor(r.dataPoint.fill),s.color=a.toCSSColor(a.getContrastColor(s.backgroundColor))}c.setNumericDataValue(r.value,e,o.field),e[o.field]=r.formattedValue}else e[o.field]=function(e){if(0!==e)return e===S?d.total:e===C?d.average:l[0].data[e-1].name||""}(t);else e[o.field]=function(e){if(0===e)return h.xAxis&&h.xAxis.title||"";function t(){return l[e-1].name||""}return 1===e?m?i||l.length>2?t():d.thisArea:l.length>1?t():h.yAxis&&h.yAxis.title||"":e===_?d.total:e===y?d.average:t()}(n)}))})),{sectionJson:r.wrapInDetailsSectionJson(B),numberFormatFunction:function(e,t){return x(t.column.index,t.row.index,e).formattedValue}}};return e(i,{_tableSection:null,_sorting:null,renderTableForChart:function(e){var t=this;if(this._destroyTable(),e.chartSeries&&e.chartSeries.length){var i={class:"chartContainer_tableSection"};i.initialWidth=e.width,i.initialHeight=e.height;var a=h(e.chartType,e.isMultiFeatureChart,e.chartSeries,e.visualProperties,e.hasComparison,e.width,e.height,e.tableViewInfo);i.json=a.sectionJson;var o=e.viewModel.getDocumentDefaultStyles(e.theme);o.backgroundImage&&o.backgroundImage.data&&(i.json.style={backgroundColor:o.backgroundColor}),e.showAnimation||(a.numberFormatFunction=null),i.viewModel=e.viewModel,i.theme=e.theme,i.tableClass="chartContainerChartTable",i.parentWidget=e.parentWidget,i.initialViewMode=this._viewMode||l.PREVIEW_VALUES,i.tableParams={enableNumberAnimation:e.showAnimation,_postCreateFieldCell:function(e){if(a.numberFormatFunction){var t=a.numberFormatFunction;e.setNumberValue(c.getNumericCellValue(e),(function(i){return t(i,e)}),!0),setTimeout((function(){a.numberFormatFunction=null}))}},onSortingChanged:function(e){t._sorting=e}},this._tableSection=e.viewModel.layoutBuilder.createElement("section",i,e.tableNode),this._tableSection.getTrueTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(e){this._viewMode!==e&&(this._viewMode=e,this._tableSection&&this._tableSection.setViewMode(e))},getVisualState:function(){return{type:"tableViewRenderer",tableSection:this._tableSection&&this._tableSection.getVisualState()}},setVisualState:function(e){return e&&e.tableSection&&this._tableSection&&this._tableSection.setVisualState(e.tableSection)},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy(),this._tableSection=null},destroy:function(){this._destroyTable(),this.inherited(arguments)}})}));