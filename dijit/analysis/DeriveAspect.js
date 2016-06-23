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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/DeriveAspect.html"],function(e,i,t,s,n,a,l,r,d,o,c,j){var p=e([s,n,a,l,r,o],{declaredClass:"esri.dijit.analysis.DeriveAspect",templateString:j,widgetsInTemplate:!0,inputLayer:null,toolName:"DeriveAspect",helpFileName:"DeriveAspect",toolNlsName:c.deriveAspectTool,_getRasterFunction:function(){return"Aspect"},_getRasterArguments:function(){return{}}});return t("extend-esri")&&i.setObject("dijit.analysis.DeriveAspect",p,d),p});