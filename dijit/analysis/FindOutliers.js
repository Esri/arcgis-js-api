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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dojo/_base/fx","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/form/NumberTextBox","dijit/form/TimeTextBox","dijit/form/DateTextBox","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","../../kernel","../../lang","./AnalysisBase","./FindHotSpots","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../PopupTemplate","../../layers/FeatureLayer","../../graphic","./utils","./CreditEstimator","dojo/i18n!../../nls/jsapi","dojo/text!./templates/FindOutliers.html"],function(i,e,t,o,n,s,r,a,d,l,m,u,h,j,c,g,f,p,_,b,x,y,S,C,T,F,L,B,N,O,v,z,M,P,H,k,A,w,I,D,R,q,W,E,G,J,U,V,K,Q,X,Y,Z,$,ii){var ei=e([G],{declaredClass:"esri.dijit.analysis.FindOutliers",templateString:ii,widgetsInTemplate:!0,toolName:"FindOutliers",helpFileName:"FindOutliers",resultParameter:"outliersResultLayer",constructor:function(i,e){this._pbConnects=[],i.containerNode&&(this.container=i.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,$.findOutliersTool)},postCreate:function(){this.inherited(arguments),console.log(this.domNode),this.showGeoAnalyticsParams||(u.set(this._optimizeLabelNo,"innerHTML",this.i18n.fourLabel),u.set(this._outputNumLabel,"innerHTML",this.i18n.fiveLabel))},startup:function(){this.inherited(arguments)},_updateAnalysisLayerUI:function(i){this.inherited(arguments)},_buildJobParams:function(){var i=this.inherited(arguments);return i.permutations=this.get("permutations"),i},_handleSaveBtnClick:function(){this.inherited(arguments)},_handleShowCreditsClick:function(i){this.inherited(arguments)},_handleAggAreaSelectChange:function(i){this.inherited(arguments)},_handleOptimizeSliderChange:function(i){var e="Speed";1===this._optimizeSlider.get("value")?e="Speed":5===this._optimizeSlider.get("value")?e="Balance":9===this._optimizeSlider.get("value")&&(e="Precision"),this.set("permutations",e)},_handleFieldChange:function(i){this.inherited(arguments)}});return a("extend-esri")&&t.setObject("dijit.analysis.FindOutliers",ei,q),ei});