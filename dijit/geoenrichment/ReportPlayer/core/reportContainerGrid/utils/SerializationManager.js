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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","esri/dijit/geoenrichment/when","../../supportClasses/DocumentOptions","../../supportClasses/templateJsonUtils/PageJsonUtil","../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil","../../themes/ReportThemes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],(function(e,t,i,n,s,o,r,a,d,l){return e(null,{_wizard:null,_pendingJsonObj:null,constructor:function(e){this._wizard=e},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var e=this._pendingJsonObj;return this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),n(this.fromJson(e),function(){!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}.bind(this))}},_canApplyJson:function(){return d.isNodeInLayout(this._wizard.domNode)},fromJson:function(e,o){if((o=o||{}).progressCallback=o.progressCallback||function(){},e=e&&e.sectionsTables&&e.sectionsTables.length?e:this.getEmptyPageJson(),!this._canApplyJson())return this._pendingJsonObj=e,void i.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),e.documentOptions&&r.adjustDocumentOptions(e),e.theme&&e.theme.id!==a.GRAPHIC?this._wizard.theme=e.theme:this._wizard.theme=null,this._wizard.documentOptions=t.mixin(s.getDefaultDocumentOptions(),e.documentOptions),this._wizard.updateLayout();var d=this;if(!o.renderSync){(new Date).getTime();var u=[],c=new l,h=0;return e.sectionsTables.forEach((function(t){c.add((function(){var i=(new Date).getTime(),s=d._wizard.createGridFromSectionTableJson(t);return n(s.getRenderPromise(),(function(){h+=1/e.sectionsTables.length,o.progressCallback(h),u.push((new Date).getTime()-i)}))}),{delayBefore:0,delayAfter:0})})),c.getPromise().then((function(){}))}e.sectionsTables.forEach((function(e){d._wizard.createGridFromSectionTableJson(e)}))},getEmptyPageJson:function(e){return o.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:e?this._wizard.toJson():null})},toJson:function(e){var i={};return i.documentOptions=t.clone(this._wizard.documentOptions||{}),e&&void 0!==e.pageIndex?i.sectionsTables=[this._wizard.getGrids()[e.pageIndex].toJson()]:i.sectionsTables=this._wizard.getGrids().map((function(e){return e.toJson()})),(this._wizard.theme&&this._wizard.theme.id)!==a.GRAPHIC&&(i.theme=this._wizard.theme||this._wizard.viewModel.getCurrentTheme()),i}})}));