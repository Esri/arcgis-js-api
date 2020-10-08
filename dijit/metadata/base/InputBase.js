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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/has","./etc/docUtil","./Templated","../../../kernel"],(function(t,e,i,o,n,s,a,u,d,h,l){var r=t([h],{_isGxeInput:!0,_supportsMultipleValues:!1,parentXNode:null,autoSetAriaLabel:!0,hint:null,postCreate:function(){this.inherited(arguments)},applyHint:function(){var t=this.hint;this.hintNode&&null!=t&&this.parentXNode&&this.parentXNode.gxeDocument&&!this.parentXNode.gxeDocument.isViewOnly&&0!==(t=e.trim(t)).length&&(this.setNodeText(this.hintNode,t),s.add(this.hintNode,"populated"))},applyViewOnly:function(){if(this.viewOnlyNode&&this.parentXNode&&this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly){var t=this.getDisplayValue();null!=t&&(t.push&&1===t.length&&(t=t[0]),t.push?(this.viewOnlyNode.innerHTML="",i.forEach(t,(function(t){var e=a.create("div",{class:"gxeParagraph"},this.viewOnlyNode);this.setNodeText(e,t)}),this),s.add(this.viewOnlyNode,"populated")):(this.setNodeText(this.viewOnlyNode,t),s.add(this.viewOnlyNode,"populated")))}},connectXNode:function(t,e){if(e?this.focusNode&&(this.focusNode.disabled=!0):this.applyHint(),this.focusNode&&t&&t.fixed&&(this.focusNode.disabled=!0),t&&t.gxePath&&(this.focusNode?n.set(this.focusNode,"data-gxe-for",t.gxePath):n.set(this.domNode,"data-gxe-for",t.gxePath)),this.autoSetAriaLabel&&this.focusNode&&t){var i=t.getLabelString();"string"==typeof i&&i.length>0&&"No Target"!==i&&this.focusNode.setAttribute("aria-label",i)}},emitInteractionOccurred:function(t){t||(t={inputWidget:this}),this.emit("interaction-occurred",t),this.parentXNode&&null!==this.parentXNode.gxePath&&o.publish("gxe/interaction-occurred",t)},ensureFocus:function(){if(d.ensureVisibility(this),this.focusNode&&this.focusNode.focus)try{this.focusNode.focus()}catch(t){}},getDisplayValue:function(){return this.getInputValue()},getInputValue:function(){return null},getXmlValue:function(){return this.getInputValue()},importValue:function(t,e){this.setInputValue(e)},importValues:function(t,e){},setInputValue:function(t){}});return u("extend-esri")&&e.setObject("dijit.metadata.base.InputBase",r,l),r}));