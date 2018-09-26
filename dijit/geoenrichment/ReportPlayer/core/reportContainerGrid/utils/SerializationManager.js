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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/when","../../supportClasses/DocumentOptions","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/templateJsonUtils/PageJsonUtil","../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil","../../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],function(e,t,n,i,s,o,r,a,d,l,u){return e(null,{_wizard:null,_pendingJsonObj:null,constructor:function(e){this._wizard=e},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var e=this._pendingJsonObj;return this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),i(this.fromJson(e),function(){!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}.bind(this))}},_canApplyJson:function(){return l.isNodeInLayout(this._wizard.domNode)},fromJson:function(e,o){if(o=o||{},o.progressCallback=o.progressCallback||function(){},e=e&&e.sectionsTables&&e.sectionsTables.length?e:this.getEmptyPageJson(),!this._canApplyJson())return this._pendingJsonObj=e,void n.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),e.documentOptions&&a.adjustDocumentOptions(e),e.theme&&e.theme.id!==d.GRAPHIC?this._wizard.theme=e.theme:this._wizard.theme=null,this._wizard.documentOptions=t.mixin(s.getDefaultDocumentOptions(),e.documentOptions),this._wizard.updateLayout();var r=this;if(!o.renderSync){var l=((new Date).getTime(),[]),c=new u,h=0;return e.sectionsTables.forEach(function(t){c.add(function(){var n=(new Date).getTime(),s=r._wizard.createGridFromSectionTableJson(t);return i(s.getRenderPromise(),function(){h+=1/e.sectionsTables.length,o.progressCallback(h),l.push((new Date).getTime()-n)})},{delayBefore:0,delayAfter:0})}),c.getPromise().then(function(){})}e.sectionsTables.forEach(function(e){r._wizard.createGridFromSectionTableJson(e)})},getEmptyPageJson:function(e){return r.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:e?this._wizard.toJson():null})},addSectionFromJson:function(e,t){if(t.parentGrid)return t.parentGrid.insertFieldInfoToCell(t,o.createFieldInfoFromSection(e)),t.content},toJson:function(e){var n={};return n.documentOptions=t.clone(this._wizard.documentOptions||{}),e&&void 0!==e.pageIndex?n.sectionsTables=[this._wizard.getGrids()[e.pageIndex].toJson()]:n.sectionsTables=this._wizard.getGrids().map(function(e){return e.toJson()}),(this._wizard.theme&&this._wizard.theme.id)!==d.GRAPHIC&&(n.theme=this._wizard.theme||this._wizard.viewModel.getCurrentTheme()),n}})});