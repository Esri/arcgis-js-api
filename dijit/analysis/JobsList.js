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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/date/locale","dojo/has","dojo/json","dojo/on","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dojo/_base/fx","dojo/fx/easing","dojo/Evented","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/ConfirmDialog","dojox/mvc/at","dgrid1/OnDemandGrid","dgrid1/Tree","dgrid1/Editor","dgrid1/Keyboard","dgrid1/Selection","dgrid1/Selector","dgrid1/extensions/ColumnResizer","dgrid1/extensions/DijitRegistry","../../kernel","../../lang","./_Widget","./utils","./JobsViewModel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/JobsList.html"],(function(i,t,o,e,s,n,d,r,a,l,c,j,m,h,u,b,f,g,p,_,x,y,T,M,C,L,w,J,v,S,B,N,D,k,E,F,R,W,H,I,O,P,q,V,z,A,G,K,Q,U,X,Y,Z,$){var ii=U.createSubclass([T,M,C,L],{declaredClass:"esri.dijit.analysis.JobsList",templateString:$,widgetsInTemplate:!0,i18n:null,toolName:"JobsList",helpFileName:"AnalysisEnvironments",viewModelType:Y,cssClass:{primaryButton:"btn calcite blue",button:"btn calcite",tableRow:"esriHelpPopup"},constructor:function(i,t){this._pbConnects=[],i.containerNode&&(this.container=i.containerNode),this.cssClass=o.mixin({},this.cssClass)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.i18n={},o.mixin(this.i18n,Z.common),this._initModelWatchers()},postCreate:function(){this.inherited(arguments),this.buildJobsList()},startup:function(){},buildJobsList:function(){e.forEach(this.viewModel.jobs,(function(i){var t=u.create("tr",{class:this.cssClass.tableRow},this._analysisJobTBody),e=u.create("td",{innerHTML:"<a href='#'>"+i.toolName+"</a>"},t);u.create("td",{innerHTML:this._formatTimeStamp(i.timestamp)},t),c(e,"click",o.hitch(this,this._openTool,i))}),this)},_initModelWatchers:function(){this.own(this.viewModel.watch("jobs",o.hitch(this,this.buildJobsList)))},_openTool:function(i){this.viewModel.set("currentJob",i)},_formatTimeStamp:function(i){return r.format(new Date(i),{formatLength:"medium"})}});return a("extend-esri")&&o.setObject("dijit.analysis.JobsList",ii,K),ii}));