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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/has","../../../../../kernel","../../../base/InputBase","dojo/text!./templates/InputCheckBox.html","dojo/i18n!../../../nls/i18nArcGIS"],function(e,t,n,i,a,s,l){var u=e([s],{templateString:l,allInline:!0,checkedAttr:"",serializeIfFalse:!1,falseValue:"False",trueValue:"True",label:"",postCreate:function(){this.inherited(arguments)},connectXNode:function(){this.inherited(arguments)},getInputValue:function(){return this.checkBoxNode&&this.checkBoxNode.checked?this.trueValue:this.falseValue},getXmlValue:function(){var e=this.inherited(arguments);return null===e||this.serializeIfFalse||e!==this.falseValue?e:null},importValue:function(e,t){if("undefined"!=typeof t&&null!==t&&t.toLowerCase){var n=t.toLowerCase();"true"===n||"1"===n?t=this.trueValue:("false"===n||"0"===n)&&(t=this.falseValue)}this.setInputValue(t)},_onClick:function(){this.emitInteractionOccurred()},setInputValue:function(e){"undefined"==typeof e&&(e=null),null!==e&&e===this.trueValue?n.set(this.checkBoxNode,"checked",!0):n.set(this.checkBoxNode,"checked",!1),this.focusNode.value=e,this.emitInteractionOccurred(),this.applyViewOnly()}});return i("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputCheckBox",u,a),u});