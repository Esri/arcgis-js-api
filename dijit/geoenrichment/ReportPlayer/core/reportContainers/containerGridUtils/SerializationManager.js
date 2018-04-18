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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/when","../../supportClasses/DocumentOptions","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/templateJsonUtils/PageJsonUtil","../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil","../../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],function(e,t,n,i,o,s,r,a,d,l,c){return e(null,{_wizard:null,_pendingJsonObj:null,constructor:function(e){this._wizard=e},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var e=this._pendingJsonObj;this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this.fromJson(e),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return l.isNodeInLayout(this._wizard.domNode)},fromJson:function(e,s){if(s=s||{},s.progressCallback=s.progressCallback||function(){},e=e&&e.sectionsTables&&e.sectionsTables.length?e:this.getEmptyPageJson(),!this._canApplyJson())return this._pendingJsonObj=e,void n.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),e.documentOptions&&a.adjustDocumentOptions(e),e.theme&&e.theme.id!==d.GRAPHIC?this._wizard.theme=e.theme:this._wizard.theme=null,this._wizard.documentOptions=t.mixin(o.getDefaultDocumentOptions(),e.documentOptions),this._wizard.updateLayout();var r=this;if(!s.renderSync){var l=(new Date).getTime(),u=[],h=new c,p=0;return e.sectionsTables.forEach(function(t){h.add(function(){var n=(new Date).getTime(),o=r._wizard.createGridFromSectionTableJson(t);return i(o.getRenderPromise(),function(){p+=1/e.sectionsTables.length,s.progressCallback(p),u.push((new Date).getTime()-n)})},{delayBefore:0,delayAfter:0})}),h.getPromise().then(function(){console.log("ReportContainer.js BUILD PAGES => "+((new Date).getTime()-l)+" => "+u.join("; "))})}e.sectionsTables.forEach(function(e){r._wizard.createGridFromSectionTableJson(e)})},getEmptyPageJson:function(e){return r.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:e?this._wizard.toJson():null})},addSectionFromJson:function(e,t){if(t.parentGrid)return t.parentGrid.insertFieldInfoToCell(t,s.createFieldInfoFromSection(e)),t.content},toJson:function(e){var n={};return n.documentOptions=t.clone(this._wizard.documentOptions||{}),e&&void 0!==e.pageIndex?n.sectionsTables=[this._wizard.getGrids()[e.pageIndex].toJson()]:n.sectionsTables=this._wizard.getGrids().map(function(e){return e.toJson()}),(this._wizard.theme&&this._wizard.theme.id)!==d.GRAPHIC&&(n.theme=this._wizard.theme||this._wizard.viewModel.getCurrentTheme()),n}})});