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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","./QueryUtil","../../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ReportTemplateTypes"],function(t,n,i,e,s,o,r,a){return t(null,{_wizard:null,_pendingJsonObj:null,constructor:function(t){this._wizard=t},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj&&this._pendingJsonObj.sections&&this._pendingJsonObj.sections.length){var t=this._pendingJsonObj;this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),this.fromJson(t),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return o.isNodeInLayout(this._wizard.domNode)},fromJson:function(t){if(t=t||{sections:[]},!this._canApplyJson())return this._pendingJsonObj=t,void i.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,i.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),this._wizard.documentOptions=n.mixin(s.getDefaultDocumentOptions(),t.documentOptions),i.set(this._wizard.stackContainer,"backgroundColor",this._wizard.documentOptions.backgroundColor||this._wizard.viewModel.getDocumentDefaultStyles(this._wizard.theme).backgroundColor),this._wizard.updateLayout();var e=this._wizard.viewModel.dynamicReportInfo;if(e&&e.analysisAreas.length>1){var o={documentOptions:t.documentOptions,sections:[]};if(e.reportType===a.MULTICOLUMN)t.sections.forEach(function(t){if(function(t){return t.type===r.DETAILS&&t.stack&&t.stack.some(function(t){return"table"===t.id&&(!t.attributes||!t.attributes.dynamicColumns&&!t.attributes.dynamicRows)})}(t))for(var i=0;i<e.analysisAreas.length;i++)0!==i&&(t=n.clone(t)),t.currentFeatureIndex=i,o.sections.push(t);else o.sections.push(t)});else for(var c=t.sections,d=0;d<e.analysisAreas.length;d++)0!==d&&(c=n.clone(c)),c.forEach(function(t){t.currentFeatureIndex=d}),o.sections=o.sections.concat(c);t=o}var u=this;t.sections.forEach(function(t){u.addSectionFromJson(t)})},addSectionFromJson:function(t,n,i,e){var s=this._isPageBreakSection(t)?"pageBreak":t.type===r.EMPTY?"empty":"custom";return this._wizard.addSection(s,{json:t},n,i,e)},_isPageBreakSection:function(t){return t.stack&&1===t.stack.length&&"pageBreak"===t.stack[0].id},toJson:function(t){var i={};i.documentOptions=n.clone(this._wizard.documentOptions||{}),i.sections=[];var s=this;return e.getReportElements(this._wizard).forEach(function(n){var e=s._wizard.getElementSection(n);!e||!t&&e.isEmpty()||i.sections.push(e.toJson())}),i}})});