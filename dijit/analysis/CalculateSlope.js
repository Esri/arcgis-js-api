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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CalculateSlope.html"],function(t,e,a,i,l,o,n,s,r,c,u,d){var p=t([i,l,o,n,s,c],{declaredClass:"esri.dijit.analysis.CalculateSlope",templateString:d,widgetsInTemplate:!0,inputLayer:null,zFactor:1,toolName:"CalculateSlope",helpFileName:"CalculateSlope",toolNlsName:u.calculateSlopeTool,_getRasterFunction:function(){return"Slope"},_getRasterArguments:function(){var t=this.get("zFactor");return{zFactor:t}},_setDefaultInputs:function(){this.zFactor&&this._zFactorInput.set("value",this.zFactor)},_setZFactorAttr:function(t){this.zFactor=t},_getZFactorAttr:function(){return this._zFactorInput&&this._zFactorInput.get("value")&&(this.zFactor=this._zFactorInput.get("value")),this.zFactor}});return a("extend-esri")&&e.setObject("dijit.analysis.CalculateSlope",p,r),p});