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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/when","../../supportClasses/DocumentOptions","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../supportClasses/templateJsonUtils/PageJsonUtil","../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil","../../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],function(e,t,i,n,o,s,r,a,d,l,h){var u=e(null,{_wizard:null,_pendingJsonObj:null,constructor:function(e){this._wizard=e},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var e=this._pendingJsonObj;this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),this.fromJson(e),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return l.isNodeInLayout(this._wizard.domNode)},fromJson:function(e,s){if(s=s||{},s.progressCallback=s.progressCallback||function(){},e=e&&e.sectionsTables&&e.sectionsTables.length?e:this.getEmptyPageJson(),!this._canApplyJson())return this._pendingJsonObj=e,void i.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),e.documentOptions&&a.adjustDocumentOptions(e),e.theme&&e.theme.id!==d.GRAPHIC?(this._wizard.themeContext=e.theme.id,this._wizard.theme=e.theme):(this._wizard.themeContext=null,this._wizard.theme=null),this._wizard.documentOptions=t.mixin(o.getDefaultDocumentOptions(),e.documentOptions),this._wizard.updateLayout();var r=this;if(!s.renderSync){var l=(new Date).getTime(),u=[],c=new h,m=0;return e.sectionsTables.forEach(function(t){c.add(function(){var i=(new Date).getTime(),o=r._wizard.createGridFromSectionTableJson(t);return n(o.getRenderPromise(),function(){m+=1/e.sectionsTables.length,s.progressCallback(m),u.push((new Date).getTime()-i)})},{delayBefore:0,delayAfter:0})}),c.getPromise().then(function(){console.log("ReportContainer.js BUILD PAGES => "+((new Date).getTime()-l)+" => "+u.join("; "))})}e.sectionsTables.forEach(function(e){r._wizard.createGridFromSectionTableJson(e)})},getEmptyPageJson:function(e){return r.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:e?this._wizard.toJson():null})},addSectionFromJson:function(e,t){return t.parentGrid?(t.parentGrid.insertFieldInfoToCell(t,s.createFieldInfoFromSection(e)),t.content):void 0},toJson:function(e){var i={};i.documentOptions=t.clone(this._wizard.documentOptions||{}),e&&void 0!==e.pageIndex?i.sectionsTables=[this._wizard.getGrids()[e.pageIndex].toJson()]:i.sectionsTables=this._wizard.getGrids().map(function(e){return e.toJson()});var n=this._wizard.theme&&this._wizard.theme.id||this._wizard.themeContext;return n!==d.GRAPHIC&&(i.theme=this._wizard.theme||this._wizard.viewModel.getCurrentTheme(this._wizard.themeContext)),i}});return u});