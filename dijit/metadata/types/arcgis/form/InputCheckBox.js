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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/has","../../../../../kernel","../../../base/InputBase","dojo/text!./templates/InputCheckBox.html","dojo/i18n!../../../nls/i18nArcGIS"],function(e,t,i,n,l,a,s,o){var u=e([a],{templateString:s,allInline:!0,checkedAttr:"",serializeIfFalse:!1,falseValue:"False",trueValue:"True",label:"",postCreate:function(){this.inherited(arguments)},connectXNode:function(e,t){this.inherited(arguments)},getInputValue:function(){return this.checkBoxNode&&this.checkBoxNode.checked?this.trueValue:this.falseValue},getXmlValue:function(){var e=this.inherited(arguments);return null===e||this.serializeIfFalse||e!==this.falseValue?e:null},importValue:function(e,t){if(void 0!==t&&null!==t&&t.toLowerCase){var i=t.toLowerCase();"true"===i||"1"===i?t=this.trueValue:"false"!==i&&"0"!==i||(t=this.falseValue)}this.setInputValue(t)},_onClick:function(e){this.emitInteractionOccurred()},setInputValue:function(e){void 0===e&&(e=null),null!==e&&e===this.trueValue?i.set(this.checkBoxNode,"checked",!0):i.set(this.checkBoxNode,"checked",!1),this.focusNode.value=e,this.emitInteractionOccurred(),this.applyViewOnly()}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputCheckBox",u,l),u});