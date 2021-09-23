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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","esri/dijit/geoenrichment/when","../../supportClasses/DocumentOptions","../../supportClasses/templateJsonUtils/PageJsonUtil","../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil","../../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],(function(t,e,i,n,o,s,r,a,d,l){return t(null,{_wizard:null,_pendingJsonObj:null,constructor:function(t){this._wizard=t},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var t=this._pendingJsonObj;return this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),n(this.fromJson(t),function(){!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}.bind(this))}},_canApplyJson:function(){return d.isNodeInLayout(this._wizard.domNode)},fromJson:function(t,s){if((s=s||{}).progressCallback=s.progressCallback||function(){},t=t&&t.sectionsTables&&t.sectionsTables.length?t:this.getEmptyPageJson(),!this._canApplyJson())return this._pendingJsonObj=t,void i.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),t.documentOptions&&r.adjustDocumentOptions(t),t.theme&&t.theme.id!==a.GRAPHIC?this._wizard.theme=t.theme:this._wizard.theme=null,this._wizard.documentOptions=e.mixin(o.getDefaultDocumentOptions(),t.documentOptions),this._wizard.tooltipInfo=t.tooltipInfo;var d=this;if(!s.renderSync){(new Date).getTime();var c=new l,h=0;return t.sectionsTables.forEach((function(e){c.add((function(){(new Date).getTime();var i=d._wizard.createGridFromSectionTableJson(e);return n(i.getRenderPromise(),(function(){h+=1/t.sectionsTables.length,s.progressCallback(h)}))}),{delayBefore:0,delayAfter:0})})),c.getPromise().then((function(){}))}t.sectionsTables.forEach((function(t){d._wizard.createGridFromSectionTableJson(t)}))},getEmptyPageJson:function(t){return s.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:t?this._wizard.toJson():null})},toJson:function(t){var i={};return i.documentOptions=e.clone(this._wizard.documentOptions||{}),t&&void 0!==t.pageIndex?i.sectionsTables=[this._wizard.getGrids()[t.pageIndex].toJson()]:i.sectionsTables=this._wizard.getGrids().map((function(t){return t.toJson()})),(this._wizard.theme&&this._wizard.theme.id)!==a.GRAPHIC&&(i.theme=this._wizard.theme||this._wizard.viewModel.getTheme()),i.tooltipInfo=this._wizard.tooltipInfo,i}})}));