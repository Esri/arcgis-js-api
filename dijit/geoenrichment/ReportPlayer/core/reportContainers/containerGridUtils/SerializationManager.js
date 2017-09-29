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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","../../supportClasses/DocumentOptions","../../supportClasses/templateJsonUtils/FieldInfoBuilder","../../supportClasses/templateJsonUtils/PageJsonUtil","../../supportClasses/templateJsonUtils/TemplateJsonModificationUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(n,i,t,o,s,e,d,r){var a=n(null,{_wizard:null,_pendingJsonObj:null,constructor:function(n){this._wizard=n},notifyShown:function(){if(this._canApplyJson()&&this._pendingJsonObj){var n=this._pendingJsonObj;this._pendingJsonObj=null,t.set(this._wizard.domNode,"visibility","visible"),this.fromJson(n),!this._pendingJsonObj&&this._wizard.onPendingDataApplied()}},_canApplyJson:function(){return r.isNodeInLayout(this._wizard.domNode)},fromJson:function(n){if(this._wizard.removeFieldInfoSelection(),n=n&&n.sectionsTables&&n.sectionsTables.length?n:this.getEmptyPageJson(),!this._canApplyJson())return this._pendingJsonObj=n,void t.set(this._wizard.domNode,"visibility","hidden");this._pendingJsonObj=null,t.set(this._wizard.domNode,"visibility","visible"),this._wizard.clear(),n.documentOptions&&d.adjustDocumentOptions(n),this._wizard.documentOptions=i.mixin(o.getDefaultDocumentOptions(),n.documentOptions),this._wizard.updateLayout();var s=this;n.sectionsTables.forEach(function(n){s._wizard.createGridFromSectionTableJson(n)})},getEmptyPageJson:function(n){return e.getGraphicReportEmptyPageJson({numRows:3,numColumns:2,documentOptions:this._wizard.documentOptions,jsonToCopy:n?this._wizard.toJson():null})},addSectionFromJson:function(n,i){return i.parentGrid?(i.parentGrid.insertFieldInfoToCell(i,s.createFieldInfoFromSection(n)),i.content):void 0},toJson:function(){var n={};return n.documentOptions=i.mixin({},this._wizard.documentOptions),n.sectionsTables=this._wizard.grids.map(function(n){return n.toJson()}),n}});return a});