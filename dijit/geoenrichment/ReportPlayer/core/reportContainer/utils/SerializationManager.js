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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","./QueryUtil","../../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ReportTemplateTypes"],(function(t,n,e,o,i,s,r,a){return t(null,{_reportContainer:null,_pendingJsonObj:null,constructor:function(t){this._reportContainer=t},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj&&this._pendingJsonObj.sections&&this._pendingJsonObj.sections.length){var t=this._pendingJsonObj;this._pendingJsonObj=null,e.set(this._reportContainer.domNode,"visibility","visible"),this.fromJson(t),!this._pendingJsonObj&&this._reportContainer.onPendingDataApplied()}},_canApplyJson:function(){return s.isNodeInLayout(this._reportContainer.domNode)},fromJson:function(t){if(t=t||{sections:[]},!this._canApplyJson())return this._pendingJsonObj=t,void e.set(this._reportContainer.domNode,"visibility","hidden");this._pendingJsonObj=null,e.set(this._reportContainer.domNode,"visibility","visible"),this._reportContainer.clear(),this._reportContainer.documentOptions=n.mixin(i.getDefaultDocumentOptions(),t.documentOptions),e.set(this._reportContainer.stackContainer,"backgroundColor",this._reportContainer.documentOptions.backgroundColor||this._reportContainer.viewModel.getDocumentDefaultStyles(this._reportContainer.theme).backgroundColor),this._reportContainer.updateLayout();var o=this._reportContainer.viewModel.dynamicReportInfo;if(o&&o.analysisAreas.length>1){var s={documentOptions:t.documentOptions,sections:[]};if(o.reportObject.type===a.MULTICOLUMN)t.sections.forEach((function(t){if((i=t).type===r.DETAILS&&i.stack&&i.stack.some((function(t){return"table"===t.id&&(!t.attributes||!t.attributes.dynamicColumns&&!t.attributes.dynamicRows)})))for(var e=0;e<o.analysisAreas.length;e++)0!==e&&(t=n.clone(t)),t.currentFeatureIndex=e,s.sections.push(t);else s.sections.push(t);var i}));else for(var c=t.sections,p=0;p<o.analysisAreas.length;p++)0!==p&&(c=n.clone(c)),c.forEach((function(t){t.currentFeatureIndex=p})),s.sections=s.sections.concat(c);t=s}var u=this;t.sections.forEach((function(t){u.addSectionFromJson(t)}))},addSectionFromJson:function(t,n,e,o){var i=this._isPageBreakSection(t)?"pageBreak":t.type===r.EMPTY?"empty":"custom";return this._reportContainer.addSection(i,{json:t},n,e,o)},_isPageBreakSection:function(t){return t.stack&&1===t.stack.length&&"pageBreak"===t.stack[0].id},toJson:function(t){var e={};e.documentOptions=n.clone(this._reportContainer.documentOptions||{}),e.sections=[];var i=this;return o.getReportElements(this._reportContainer).forEach((function(n){var o=i._reportContainer.getElementSection(n);!o||!t&&o.isEmpty()||e.sections.push(o.toJson())})),e}})}));