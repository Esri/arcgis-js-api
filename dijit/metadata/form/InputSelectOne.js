// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-style","dojo/has","../base/InputBase","../base/OptionsMixin","dojo/text!./templates/InputSelectOne.html","../../../kernel"],(function(e,t,n,i,o,s,l,r,a,d){var c=e([l,r],{allInline:!1,_wasValueSet:!1,templateString:a,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.initializeOptions())},connectXNode:function(e,t){this.inherited(arguments);var n=e.value;t&&!e.fixed||null!=n&&this.setInputValue(n);try{this.allInline&&!t&&e.containerNode&&e.elementHeader&&e.elementHeader.labelNode?(o.set(e.containerNode,"display","inline-block"),o.set(e.elementHeader.domNode,"display","inline-block"),o.set(e.elementHeader.labelNode,"display","inline-block"),o.set(this.domNode,"display","inline-block")):this.allInline&&!t&&e.containerNode&&e.headerNode&&e.labelNode?(o.set(e.containerNode,"display","inline-block"),o.set(e.headerNode,"display","inline-block"),o.set(e.labelNode,"display","inline-block"),o.set(this.domNode,"display","inline-block")):this.allInline&&!t&&e.containerNode&&e.labelNode&&(o.set(e.containerNode,"display","inline-block"),o.set(e.labelNode,"display","inline-block"),o.set(this.domNode,"display","inline-block"))}catch(e){}},filterOptions:function(e){var t=null;if(!this.parentXNode)return e;if(!this.parentXNode.optionsFilter)return this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.documentType&&(t=this.parentXNode.gxeDocument.documentType),t.filterOptions&&"function"==typeof t.filterOptions?t.filterOptions(this.parentXNode,this.parentXNode.gxeDocument,e):e;var i=this.parentXNode.optionsFilter.split(",");return n.filter(e,(function(e){return n.some(i,(function(t){return e.value===t}))}))},getDisplayValue:function(){if(this.parentXNode&&this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly&&!this._wasValueSet)return null;var e=this.focusNode,t=this._getSelectedOption();return t&&!t.xtnIsOther?e.options[e.selectedIndex].label:t&&t.xtnIsOther?this.otherNode.value:null},getInputValue:function(){if(this.parentXNode&&this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly&&!this._wasValueSet)return null;var e=this.focusNode,t=this._getSelectedOption();return t&&!t.xtnIsOther?e.options[e.selectedIndex].value:t&&t.xtnIsOther?this.otherNode.value:null},initializeOptions:function(){this.fetchOptionWidgets().then(t.hitch(this,(function(e){var t=this.filterOptions(e);this.populateOptions(t)})),t.hitch(this,(function(e){console.error(e)})),t.hitch(this,(function(e){})))},_getSelectedOption:function(){if(!this.focusNode)return null;var e=this.focusNode.selectedIndex;return-1!==e?this.focusNode.options[e]:null},_onChange:function(e){var t=this._getSelectedOption();t&&t.xtnIsOther?o.set(this.otherNode,"display",""):o.set(this.otherNode,"display","none"),this.emitInteractionOccurred()},_onOtherChange:function(e){this.emitInteractionOccurred()},_onOtherKeyup:function(e){this.emitInteractionOccurred()},populateOptions:function(e){var t=this.focusNode.options,o=!1;n.forEach(e,(function(e){var n=null,i=!1,s=!1;!o&&e.selected&&(o=i=s=!0);try{n=new Option(e.label,e.value,i,s),e.isOther&&(n.xtnIsOther=!0),t.add(n)}catch(e){console.error(e)}}));var s=this.containerNode;this.destroyDescendants(!1),setTimeout((function(){i.destroy(s)}),5e3)},setInputValue:function(e){this._wasValueSet=!0,void 0===e&&(e=null);var t=-1,i=-1;n.some(this.focusNode.options,(function(n,o){if(n.xtnIsOther)i=o;else if(n.value===e)return t=o,!0})),-1===t&&-1!==i?(this.focusNode.selectedIndex=i,this.otherNode.value=e,o.set(this.otherNode,"display","")):-1!==t?(this.focusNode.selectedIndex=t,o.set(this.otherNode,"display","none")):o.set(this.otherNode,"display","none"),this.applyViewOnly()}});return s("extend-esri")&&t.setObject("dijit.metadata.form.InputSelectOne",c,d),c}));