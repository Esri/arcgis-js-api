// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","./QueryUtil","../../supportClasses/DocumentOptions","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ReportTemplateTypes"],(function(t,i,n,e,s,o,r,a){return t(null,{_wizard:null,_pendingJsonObj:null,constructor:function(t){this._wizard=t},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj&&this._pendingJsonObj.sections&&this._pendingJsonObj.sections.length){var t=this._pendingJsonObj;this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this.fromJson(t),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return o.isNodeInLayout(this._wizard.domNode)},fromJson:function(t){if(t=t||{sections:[]},!this._canApplyJson())return this._pendingJsonObj=t,void n.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,n.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),this._wizard.documentOptions=i.mixin(s.getDefaultDocumentOptions(),t.documentOptions),n.set(this._wizard.stackContainer,"backgroundColor",this._wizard.documentOptions.backgroundColor||this._wizard.viewModel.getDocumentDefaultStyles(this._wizard.theme).backgroundColor),this._wizard.updateLayout();var e=this._wizard.viewModel.dynamicReportInfo;if(e&&e.analysisAreas.length>1){var o={documentOptions:t.documentOptions,sections:[]};if(e.reportObject.type===a.MULTICOLUMN)t.sections.forEach((function(t){if((s=t).type===r.DETAILS&&s.stack&&s.stack.some((function(t){return"table"===t.id&&(!t.attributes||!t.attributes.dynamicColumns&&!t.attributes.dynamicRows)})))for(var n=0;n<e.analysisAreas.length;n++)0!==n&&(t=i.clone(t)),t.currentFeatureIndex=n,o.sections.push(t);else o.sections.push(t);var s}));else for(var c=t.sections,d=0;d<e.analysisAreas.length;d++)0!==d&&(c=i.clone(c)),c.forEach((function(t){t.currentFeatureIndex=d})),o.sections=o.sections.concat(c);t=o}var u=this;t.sections.forEach((function(t){u.addSectionFromJson(t)}))},addSectionFromJson:function(t,i,n,e){var s=this._isPageBreakSection(t)?"pageBreak":t.type===r.EMPTY?"empty":"custom";return this._wizard.addSection(s,{json:t},i,n,e)},_isPageBreakSection:function(t){return t.stack&&1===t.stack.length&&"pageBreak"===t.stack[0].id},toJson:function(t){var n={};n.documentOptions=i.clone(this._wizard.documentOptions||{}),n.sections=[];var s=this;return e.getReportElements(this._wizard).forEach((function(i){var e=s._wizard.getElementSection(i);!e||!t&&e.isEmpty()||n.sections.push(e.toJson())})),n}})}));
