// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/has","../../../../../kernel","../../../form/InputSelectOne","../../../form/Option","dojo/i18n!../../../nls/i18nArcGIS"],function(e,l,t,a,s,n,i,r){var o=e([n],{allInline:!0,serializeIfFalse:!1,falseLabel:r.booleanOptions._false,trueLabel:r.booleanOptions._true,falseValue:"False",trueValue:"True",postCreate:function(){this.inherited(arguments)},fetchOptionWidgets:function(){var e=new t,l=[];return l.push(new i({label:this.falseLabel,value:this.falseValue})),l.push(new i({label:this.trueLabel,value:this.trueValue})),e.resolve(l),e},getXmlValue:function(){var e=this.inherited(arguments);return null===e||this.serializeIfFalse||e!==this.falseValue?e:null},importValue:function(e,l){if(void 0!==l&&null!==l&&l.toLowerCase){var t=l.toLowerCase();"true"===t||"1"===t?l=this.trueValue:"false"!==t&&"0"!==t||(l=this.falseValue)}this.setInputValue(l)}});return a("extend-esri")&&l.setObject("dijit.metadata.types.arcgis.form.InputSelectBoolean",o,s),o});