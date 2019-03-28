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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dijit/registry","dojo/has","../../../kernel","dijit/_WidgetBase","./etc/docUtil"],function(t,e,n,i,o,r,u,a,d){var s=t([a],{parentXNode:null,_isConditional:!0,postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(t){t||(t={inputWidget:this}),this.emit("interaction-occurred",t)},ensureFocus:function(){if(d.ensureVisibility(this.parentXNode),this.focusNode&&this.focusNode.focus)try{this.focusNode.focus()}catch(t){}},findElement:function(t,e){e=e||this.getRootDomNode();var n=i("[data-gxe-path='"+t+"']",e);return n&&1===n.length?o.byNode(n[0]):null},findInputValue:function(t,e){var n=this.findInputWidget(t,e);return n?n.getInputValue():null},findInputWidget:function(t,e){e=e||this.getRootDomNode();var n,r=i("[data-gxe-path='"+t+"']",e);return r&&1===r.length&&(n=o.byNode(r[0]))?n.inputWidget:null},forActiveXNodes:function(t,e,r,u){e=e||this.getRootDomNode();var a=t.split(","),d=this;r&&"function"==typeof r&&n.some(a,function(t){var a=i("[data-gxe-path='"+t+"']",e);return n.some(a,function(t){var e=o.byNode(t);if(!d.isXNodeOff(e))return u?r.call(u,e):r(e)})})},getRootDomNode:function(){return this.parentXNode.gxeDocument.rootElement.domNode},isXNodeInputEmpty:function(t){if(t&&t.inputWidget){var n=t.inputWidget.getInputValue();if(null===n)return!0;if("string"==typeof n)return 0===e.trim(n).length;if(e.isArray(n))return 0===e.length}return!1},isXNodeOff:function(t){for(var e=t;e;){if(e._isOptionallyOff)return!0;e=e.getParent()}return!1},newStatus:function(t){var n={isValid:!0,message:""};return t&&e.mixin(n,t),n},track:function(t,e){!t.isValid&&e&&e.handleValidationError(this.parentXNode,t.message,this)},validateConditionals:function(t){}});return r("extend-esri")&&e.setObject("dijit.metadata.base.Conditional",s,u),s});