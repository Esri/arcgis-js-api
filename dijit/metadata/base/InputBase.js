// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/has","./etc/docUtil","./Templated","../../../kernel"],function(e,t,i,o,n,s,d,u,a,h,l){var c=e([h],{_isGxeInput:!0,_supportsMultipleValues:!1,parentXNode:null,hint:null,postCreate:function(){this.inherited(arguments)},applyHint:function(){var e=this.hint;this.hintNode&&"undefined"!=typeof e&&null!==e&&this.parentXNode&&this.parentXNode.gxeDocument&&!this.parentXNode.gxeDocument.isViewOnly&&(e=t.trim(e),0!==e.length&&(this.setNodeText(this.hintNode,e),s.add(this.hintNode,"populated")))},applyViewOnly:function(){if(this.viewOnlyNode&&this.parentXNode&&this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly){var e=this.getDisplayValue();"undefined"!=typeof e&&null!==e&&(e.push&&1===e.length&&(e=e[0]),e.push?(this.viewOnlyNode.innerHTML="",i.forEach(e,function(e){var t=d.create("div",{"class":"gxeParagraph"},this.viewOnlyNode);this.setNodeText(t,e)},this),s.add(this.viewOnlyNode,"populated")):(this.setNodeText(this.viewOnlyNode,e),s.add(this.viewOnlyNode,"populated")))}},connectXNode:function(e,t){t?this.focusNode&&(this.focusNode.disabled=!0):this.applyHint(),this.focusNode&&e&&e.fixed&&(this.focusNode.disabled=!0),e&&e.gxePath&&(this.focusNode?n.set(this.focusNode,"data-gxe-for",e.gxePath):n.set(this.domNode,"data-gxe-for",e.gxePath))},emitInteractionOccurred:function(e){e||(e={inputWidget:this}),this.emit("interaction-occurred",e),this.parentXNode&&null!==this.parentXNode.gxePath&&o.publish("gxe/interaction-occurred",e)},ensureFocus:function(){if(a.ensureVisibility(this),this.focusNode&&this.focusNode.focus)try{this.focusNode.focus()}catch(e){}},getDisplayValue:function(){return this.getInputValue()},getInputValue:function(){return null},getXmlValue:function(){return this.getInputValue()},importValue:function(e,t){this.setInputValue(t)},importValues:function(){},setInputValue:function(){}});return u("extend-esri")&&t.setObject("dijit.metadata.base.InputBase",c,l),c});