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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/DeriveAspect.html"],function(e,t,i,s,n,r,a,l,o,d,p,u){var c=e([s,n,r,a,l,d],{declaredClass:"esri.dijit.analysis.DeriveAspect",templateString:u,widgetsInTemplate:!0,inputLayer:null,toolName:"DeriveAspect",helpFileName:"DeriveAspect",toolNlsName:p.deriveAspectTool,_getRasterFunction:function(){return"Aspect"},_getRasterArguments:function(){return{}},_getOutputItemProperties:function(){return this._getDefaultOutputItemProperties()}});return i("extend-esri")&&t.setObject("dijit.analysis.DeriveAspect",c,o),c});