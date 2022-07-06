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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./ItemTypes","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/DeriveAspect.html"],(function(e,t,i,s,n,a,r,o,l,u,d,c,p){var m=e([s,n,a,r,o,d],{declaredClass:"esri.dijit.analysis.DeriveAspect",templateString:p,widgetsInTemplate:!0,inputLayer:null,browseType:[u.IS],hasCustomCheck:!0,customCheckFailureMessage:c.customCheckFailureMessage.singleBand,toolName:"DeriveAspect",helpFileName:"DeriveAspect",toolNlsName:c.deriveAspectTool,classMaxValues:[-1,22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,360],colorValues:[[175,175,175,255],[235,49,49,255],[251,180,38,255],[251,251,51,255],[104,239,37,255],[120,255,233,255],[46,199,244,255],[26,124,244,255],[199,43,245,255],[235,49,49,255]],labels:["Flat (-1)","North (0-22.5)","Northeast (22.5-67.5)","East (67.5-112.5)","Southeast (112.5-157.5)","South (157.5-202.5)","Southwest (202.5-247.5)","West (247.5-292.5)","Northwest (292.5-337.5)","North (337.5-360)"],_getRasterFunction:function(){return"Aspect"},_getRasterArguments:function(){return{}},_getOutputItemProperties:function(){return this._getDefaultOutputItemProperties()},_getDefaultRenderingRule:function(e){},isValidInputLayer:function(e){return e.bandCount&&1===e.bandCount}});return i("extend-esri")&&t.setObject("dijit.analysis.DeriveAspect",m,l),m}));