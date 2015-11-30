// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/has","dojo/dom-class","dojo/dom-attr","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/AnalysisToolItem.html"],function(o,t,e,i,l,n,s,a,c,d,h,r,m,p,u,_){var T=t([d,h,r,m],{declaredClass:"esri.dijit.analysis.AnalysisToolItem",templateString:_,widgetsInTemplate:!0,i18n:null,_helpIconNode:null,_toolIcon:null,_toolIconClass:null,_toolNameLabel:null,toolName:null,helpTopic:null,helpFileName:"Analysis",constructor:function(o){o.toolIcon&&(this._toolIconClass=o.toolIcon),o.name&&(this.toolName=o.name,this.helpTopic=o.helpTopic)},postCreate:function(){this.inherited(arguments),this._toolNameLabel.innerHTML=this.toolName,s.add(this._toolIcon,this._toolIconClass),a.set(this._helpIconNode,"esriHelpTopic",this.helpTopic),this.set("showComingSoonLabel",!0)},postMixInProperties:function(){this.inherited(arguments),this.i18n={},e.mixin(this.i18n,u.common),e.mixin(this.i18n,u.analysisTools)},_handleToolNameClick:function(){this.onToolSelect(this)},_handleToolIconClick:function(o){l.stop(o),this.onToolSelect(this)},_setShowComingSoonLabelAttr:function(o){c.set(this.optionsDiv,"display",o===!0?"block":"none"),s.toggle(this._toolCtr,"esriToolContainerDisabled",o),s.toggle(this._toolNameLabel,"esriTransparentNode",o),s.toggle(this._toolIcon,"esriTransparentNode",o),c.set(this._toolNameLabel,"cursor",o===!0?"default":"pointer"),c.set(this._toolCtr,"cursor",o===!0?"default":"pointer")},onToolSelect:function(){}});return n("extend-esri")&&e.setObject("dijit.analysis.AnalysisToolItem",T,p),T});