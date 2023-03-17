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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./ItemTypes","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CalculateSlope.html"],(function(t,e,a,i,n,l,o,s,r,u,c,p,d){var _=t([i,n,l,o,s,c],{declaredClass:"esri.dijit.analysis.CalculateSlope",templateString:d,widgetsInTemplate:!0,browseType:[u.IS],hasCustomCheck:!0,customCheckFailureMessage:p.customCheckFailureMessage.singleBand,inputLayer:null,zFactor:1,toolName:"CalculateSlope",helpFileName:"CalculateSlope",toolNlsName:p.calculateSlopeTool,classMaxValues:[1.72,3.43,5.71,8.53,11.3,14.04,16.7,21.8,30.96,45,90],colorValues:[[250,239,229,255],[241,213,184,255],[232,194,150,255],[223,179,127,255],[215,166,106,255],[206,153,86,255],[198,141,67,255],[182,126,53,255],[149,105,43,255],[117,83,34,255],[84,60,25,255]],labels:["<= 1.72","<= 3.43","<= 5.71","<= 8.53","<= 11.3","<= 14.04","<= 16.7","<= 21.8","<= 30.96","<= 45","<= 90"],_getRasterFunction:function(){return"Slope"},_getRasterArguments:function(){return{zFactor:this.get("zFactor")}},_getOutputItemProperties:function(){return this._getDefaultOutputItemProperties(1,"Slope","RSP_BilinearInterpolation")},_getDefaultRenderingRule:function(t){},_setDefaultInputs:function(){this.zFactor&&this._zFactorInput.set("value",this.zFactor)},_setZFactorAttr:function(t){this.zFactor=t},_getZFactorAttr:function(){return this._zFactorInput&&this._zFactorInput.get("value")&&(this.zFactor=this._zFactorInput.get("value")),this.zFactor},isValidInputLayer:function(t){return t.bandCount&&1===t.bandCount}});return a("extend-esri")&&e.setObject("dijit.analysis.CalculateSlope",_,r),_}));