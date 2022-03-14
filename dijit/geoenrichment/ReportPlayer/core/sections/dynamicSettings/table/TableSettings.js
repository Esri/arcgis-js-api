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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/TriStateItem","esri/dijit/geoenrichment/OnDemandSelect","../../../charts/utils/ChartTypes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/TableSettings.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,s,n,l,o,a,c,r){return e([t,i],{templateString:c,nls:r=r.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder.TableSettings,viewTypesSelect:null,sourceSelect:null,altOrientationCheckbox:null,postCreate:function(){var e=this;this.viewTypesSelect=new n({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList",onChange:function(t){e._updateView(),e._updateSourceSelect(),e._emitEvent()}}).placeAt(this.viewTypesSelectDiv),this.own(this.viewTypesSelect),this.sourceSelect=new n({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList",onChange:function(t){e._emitEvent()}}).placeAt(this.sourceSelectDiv),this.own(this.sourceSelect)},_chartViewOptions:null,setChartViewOptions:function(e){var t=this;this._chartViewOptions=e;var i=[{value:"table",label:r.table}],n=e.chartTypes.filter((function(e){return!l.isSingleSeries(e)})),a=e.chartTypes.filter((function(e){return l.isSingleSeries(e)}));n.length&&(i.push({isSeparator:!0}),n.forEach((function(e){i.push({value:e,label:r["chartType_"+e]})}))),a.length&&(i.push({isSeparator:!0}),a.forEach((function(e){i.push({value:e,label:r["chartType_"+e]})}))),this.viewTypesSelect.set("options",i),this.viewTypesSelect.set("value",e.chartType||"table"),this.altOrientationCheckbox||(this.altOrientationLabel.innerHTML="&nbsp;"+(e.takeSeriesFromRows?r.seriesInColumns:r.seriesInRows),this.altOrientationCheckbox=new s(this.altOrientationLabel),this.altOrientationCheckbox.onClick=function(){t._updateSourceSelect(),t._emitEvent()}),o[e.supportsAltOrientation?"show":"hide"](this.altOrientationBlock)},_emitEvent:function(){var e=this.viewTypesSelect.get("value");"table"===e?this.onChartToTable():this.onTableToChart({chartType:e,altOrientation:this.altOrientationCheckbox.get("checked"),sourceId:this.sourceSelect.get("value")})},onTableToChart:function(e){},onChartToTable:function(){},setVisualState:function(e){var t=e&&e.chartViewInfo||{};this.viewTypesSelect.set("value",t.chartType||"table"),this.altOrientationCheckbox.set("checked",t.altOrientation),this._updateSourceSelect(),this.sourceSelect.set("value",t.sourceId||null),this._updateView()},_updateSourceSelect:function(){var e=this._chartViewOptions||{},t=l.isSingleSeries(this.viewTypesSelect.get("value"));if(t){var i=e.takeSeriesFromRows;this.altOrientationCheckbox.get("checked")&&(i=!i),this.sourceLabel.innerHTML=i?r.row:r.column;var s=i?e.rowInfos:e.columnInfos;this.sourceSelect.set("options",s.map((function(e,t){return{label:e.label,value:t}}))),this.sourceSelect.set("value",this.sourceSelect.get("options")[0].value)}else this.sourceSelect.set("options",[]);o[t&&this.sourceSelect.get("options").length>1?"show":"hide"](this.sourceBlock)},_updateView:function(){o["table"===this.viewTypesSelect.get("value")?"hide":"show"](this.chartViewDiv)},isMouseOver:function(e){return a.isMouseOver(this.domNode)||this.viewTypesSelect&&this.viewTypesSelect.isMouseOver()||this.sourceSelect&&this.sourceSelect.isMouseOver()}})}));