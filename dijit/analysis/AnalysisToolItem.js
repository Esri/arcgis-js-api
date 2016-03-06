// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/event","dojo/has","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/dom-style","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/Tooltip","../../kernel","dojo/i18n!../../nls/jsapi","dojo/text!./templates/AnalysisToolItem.html"],function(o,t,i,s,e,l,n,a,c,h,r,d,p,m,_,C,u,g,T){var j=t([d,p,m,_,r],{declaredClass:"esri.dijit.analysis.AnalysisToolItem",templateString:T,widgetsInTemplate:!0,i18n:null,_helpIconNode:null,_toolIcon:null,_toolIconClass:null,_toolNameLabel:null,toolName:null,helpTopic:null,helpFileName:"Analysis",constructor:function(o){this._defaulCSSClass={root:"toolContainer",toolContent:"esriLeadingMargin5 toolContent",helpLink:"helpIcon esriFloatTrailing esriTrailingMargin2",comingSoonLabel:"esriLeadingMargin5 comingSoonIcon",comingSoonContent:"esriLeadingMargin2",toolNameLabel:"toolLabel",toolDesc:"toolDesc",toolTip:"analysisTooltip"},this.cssClass=i.mixin({},this._defaulCSSClass),o.toolIcon&&(this._toolIconClass=o.toolIcon),o.name&&(this.toolName=o.name,this.helpTopic=o.helpTopic)},postCreate:function(){this.inherited(arguments),this._toolNameLabel.innerHTML=this.toolName,n.add(this._toolIcon,this._toolIconClass),c.set(this._helpIconNode,"esriHelpTopic",this.helpTopic),this.set("showComingSoonLabel",!1),this.description&&(this._toolDesc.innerHTML=this.description),this.tooltip&&!l("esri-mobile")&&(this._tooltip=new C({connectId:[this._toolCtr],label:"<div class='"+this.cssClass.toolTip+"'>"+this.tooltip+"</div>",showDelay:this.toolTipShowDelay?this.toolTipShowDelay:100}))},postMixInProperties:function(){this.inherited(arguments),this.i18n={},i.mixin(this.i18n,g.common),i.mixin(this.i18n,g.analysisTools)},_handleToolNameClick:function(){this.emit("tool-select",this)},_handleToolIconClick:function(o){e.stop(o),this.emit("tool-select",this)},_setShowComingSoonLabelAttr:function(o){h.set(this.optionsDiv,"display",o===!0?"block":"none"),n.toggle(this._toolCtr,"esriToolContainerDisabled",o),n.toggle(this._toolNameLabel,"esriTransparentNode",o),n.toggle(this._toolIcon,"esriTransparentNode",o),h.set(this._toolNameLabel,"cursor",o===!0?"default":"pointer"),h.set(this._toolCtr,"cursor",o===!0?"default":"pointer")},_setCssClassAttr:function(o){this.cssClass=i.mixin(this.cssClass,o),this._toolCtr&&(n.replace(this._toolCtr,this.cssClass.root),n.replace(this._toolContent,this.cssClass.toolContent),n.replace(this._helpIconNode,this.cssClass.helpLink),n.replace(this._toolNameLabel,this.cssClass.toolNameLabel),n.replace(this._toolDesc,this.cssClass.toolDesc))},_setDescriptionAttr:function(o){this._set("description",o)}});return l("extend-esri")&&i.setObject("dijit.analysis.AnalysisToolItem",j,u),j});