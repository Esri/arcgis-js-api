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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/has","../../../../../kernel","../../../form/InputSelectOne","../../../form/Option","dojo/i18n!../../../nls/i18nArcGIS"],function(e,t,a,l,n,s,i,r){var u=e([s],{allInline:!0,serializeIfFalse:!1,falseLabel:r.booleanOptions._false,trueLabel:r.booleanOptions._true,falseValue:"False",trueValue:"True",postCreate:function(){this.inherited(arguments)},fetchOptionWidgets:function(){var e=new a,t=[];return t.push(new i({label:this.falseLabel,value:this.falseValue})),t.push(new i({label:this.trueLabel,value:this.trueValue})),e.resolve(t),e},getXmlValue:function(){var e=this.inherited(arguments);return null===e||this.serializeIfFalse||e!==this.falseValue?e:null},importValue:function(e,t){if("undefined"!=typeof t&&null!==t&&t.toLowerCase){var a=t.toLowerCase();"true"===a||"1"===a?t=this.trueValue:("false"===a||"0"===a)&&(t=this.falseValue)}this.setInputValue(t)}});return l("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputSelectBoolean",u,n),u});