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

define(["dojo/_base/declare","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","esri/dijit/geoenrichment/OnDemandSelect","./supportClasses/FilterUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../templates/sectionDynamicSettings/MethodFilter.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,l,i,s,n,a,o,h,u,d){return e([l,i],{templateString:u,nls:d=d.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,selectRangePlaceholder:null,rangesSelect:null,methodsSelect:null,methodInput:null,setRanges:function(e){this.rangesSelect||this._createFilterControls(),e=e||[],this.rangesSelect.set("options",e.map((function(e){return{value:e.fieldName,label:e.label}}))),this.rangesSelect.set("value",null),o[e.length>1?"show":"hide"](this.rangesSelectDiv)},setFilter:function(e){this.methodsSelect||this._createFilterControls(),e?(this.rangesSelect.set("value",e.fieldName||this.rangesSelect.get("value")),this.methodsSelect.set("value",e.method===a.RANGE?null:e.method),this.methodInput.set("value",e.numElements||""),this._updateMethodInputAvailability()):this._clearMethod()},_createFilterControls:function(){var e=this;this.rangesSelect=new n({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectTallList",placeHolder:this.selectRangePlaceholder||d.selectRange,options:[],onChange:function(){e._onSelectValueChanged()}}).placeAt(this.rangesSelectDiv),this.own(this.rangesSelect),this.methodsSelect=new n({listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectTallList",placeHolder:d.selectMethod,options:[{value:a.TOP_N,label:d.topN},{value:a.BOTTOM_N,label:d.bottomN},{value:a.ABOVE_AVERAGE,label:d.aboveAverage},{value:a.BELOW_AVERAGE,label:d.belowAverage}],onChange:function(){e._onSelectValueChanged()}}).placeAt(this.methodsSelectDiv),this.own(this.methodsSelect),this.methodInput=(new s).placeAt(this.methodInputDiv),this.own(this.methodInput),t(this.methodInput.textbox,"keyup",(function(){e._applyFilter()}))},_onSelectValueChanged:function(){this.methodInput.get("value")||this.methodInput.set("value",3),this._updateMethodInputAvailability(),this._applyFilter()},_applyFilter:function(){var e=this.rangesSelect.get("value");if(!(this.rangesSelect.get("options").length>1)||e){var t=this.methodsSelect.get("value");if(t){var l=Number(this.methodInput.get("value")||0);(t!==a.TOP_N&&t!==a.BOTTOM_N||l)&&this.onFilterChanged({method:t,fieldName:e,numElements:l})}}},_clearMethod:function(){this.methodsSelect.set("value",null),this.methodInput.set("value",""),this._updateMethodInputAvailability()},_updateMethodInputAvailability:function(){o[this.methodsSelect.get("value")===a.TOP_N||this.methodsSelect.get("value")===a.BOTTOM_N?"show":"hide"](this.methodInputDiv)},onFilterChanged:function(e){},isMouseOver:function(e){return h.isMouseOver(this.domNode)||this.rangesSelect&&this.rangesSelect.isMouseOver()||this.methodsSelect&&this.methodsSelect.isMouseOver()}})}));