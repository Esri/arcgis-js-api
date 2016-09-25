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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/MonitorVegetation.html"],function(e,n,t,i,d,s,a,o,l,r,u,h,I,p){var x=e([s,a,o,l,r,h],{declaredClass:"esri.dijit.analysis.MonitorVegetationTool",templateString:p,widgetsInTemplate:!0,inputLayer:null,bandindexes:"1 2",indexType:1,nirBandIndex:1,redBandIndex:2,store:null,ids:0,toolName:"MonitorVegetationTool",helpFileName:"MonitorVegetation",toolNlsName:I.monitorVegetationTool,_getRasterFunction:function(){return"BandArithmetic"},_getRasterArguments:function(){var e=this.get("nirBandIndex"),n=this.get("redBandIndex"),t=this.get("indexType"),i=e+" "+n;8==t||5==t?i="1 2 3 4 5 6":2==t?i=i+" "+this._l.get("value"):6==t?i=i+" "+this._a.get("value")+" "+this._b.get("value"):3==t&&(i=i+" "+this._a.get("value")+" "+this._b.get("value")+" "+this._x.get("value"));var d={Method:t,BandIndexes:i};return d},_setDefaultInputs:function(){this._indexTypeInput.addOption([{value:5,label:this.i18n.GEMI},{value:7,label:this.i18n.GVITM},{value:4,label:this.i18n.MSAVI},{value:1,label:this.i18n.NDVI},{value:6,label:this.i18n.PVI},{value:2,label:this.i18n.SAVI},{value:8,label:this.i18n.Sultan},{value:3,label:this.i18n.TSAVI}]),this.nirBandIndex&&this._nirBandIndexInput.set("value",this.nirBandIndex),this.redBandIndex&&this._redBandIndexInput.set("value",this.redBandIndex),this.indexType&&this._indexTypeInput.set("value",this.indexType)},_handleIndexTypeChange:function(e){d.set(this._soilLine,"display",3==e||6==e?"block":"none"),d.set(this._greenVegetativeCover,"display",2==e?"block":"none"),d.set(this._adjustmentFactor,"display",3==e?"block":"none")},_handleOptionsBtnClick:function(){i.contains(this._optionsDiv,"disabled")||(i.contains(this._optionsDiv,"optionsClose")?(i.remove(this._optionsDiv,"optionsClose"),i.add(this._optionsDiv,"optionsOpen")):i.contains(this._optionsDiv,"optionsOpen")&&(i.remove(this._optionsDiv,"optionsOpen"),i.add(this._optionsDiv,"optionsClose")))},_setIndexTypeAttr:function(e){this.indexType=e},_getIndexTypeAttr:function(){return this._indexTypeInput&&this._indexTypeInput.get("value")&&(this.indexType=this._indexTypeInput.get("value")),this.indexType},_setNirBandIndexAttr:function(e){this.nirBandIndex=e},_getNirBandIndexAttr:function(){return this._nirBandIndexInput&&this._nirBandIndexInput.get("value")&&(this.nirBandIndex=this._nirBandIndexInput.get("value")),this.nirBandIndex},_setRedBandIndexAttr:function(e){this.redBandIndex=e},_getRedBandIndexAttr:function(){return this._redBandIndexInput&&this._redBandIndexInput.get("value")&&(this.redBandIndex=this._redBandIndexInput.get("value")),this.redBandIndex},_setBandIndexesAttr:function(e){this.bandIndexes=e},_getBandIndexesAttr:function(){return this._bandIndexesInput&&this._bandIndexesInput.get("value")&&(this.bandIndexes=this._bandIndexesInput.get("value")),this.bandIndexes}});return t("extend-esri")&&n.setObject("dijit.analysis.MonitorVegetationTool",x,u),x});