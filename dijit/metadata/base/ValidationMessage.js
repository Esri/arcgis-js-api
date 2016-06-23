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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/dom-class","dojo/has","dojo/window","./Templated","dojo/text!./templates/ValidationMessage.html","../../../kernel"],function(e,t,i,n,s,o,a,d,r,c){var u=e([d],{_isGxeValidationMessage:!0,message:null,inputWidget:null,isValid:!1,templateString:r,validationPane:null,postCreate:function(){this.inherited(arguments);var e=this;this._updateIcon(this.isValid),this.inputWidget&&this.own(this.inputWidget.on("interaction-occurred",function(){e._isDeleted()||(e.inputWidget._isConditional?e._checkConditional():e._check())})),this.own(n.subscribe("gxe/optional-content-toggled",function(t){try{var i=e.inputWidget&&e.inputWidget.parentXNode;if(i&&t&&t.src&&!e._isDeleted()){var n=e.inputWidget.parentXNode;t.src._isGxeElement?n.isLineageDescendant(t.src)&&e._setOff(e._isXNodeOff(n)):t.src._isGxeMultiplicityHeader&&e._setOff(e._isXNodeOff(n))}}catch(s){console.error(s)}})),this.own(n.subscribe("gxe/tab-activated",function(t){try{var i=e.inputWidget&&e.inputWidget.parentXNode;if(i&&t&&t.tabs&&t.tabs._isGxeElementChoice&&!e._isDeleted()){var n=e.inputWidget.parentXNode;e._setOff(e._isXNodeOff(n))}}catch(s){console.error(s)}})),this.own(n.subscribe("gxe/after-xnode-destroyed",function(t){try{var i=e.inputWidget&&e.inputWidget.parentXNode;if(i&&t&&t.xnode&&!e._isDeleted()){var n=e.inputWidget.parentXNode;n.isLineageDescendant(t.xnode)&&s.add(e.messageNode,"gxeDeleted")}}catch(o){console.error(o)}}))},_check:function(){if(this.inputWidget&&this.inputWidget.parentXNode){var e=this.inputWidget.parentXNode.validateValue();this._updateIcon(e.isValid),this.setNodeText(this.messageNode,e.message)}},_checkConditional:function(){if(this.inputWidget&&this.inputWidget.validateConditionals){var e=this.inputWidget.validateConditionals();this._updateIcon(e.isValid),this.setNodeText(this.messageNode,e.message)}},_ensureInputFocus:function(){var e=this.messageNode;this.inputWidget&&this.inputWidget.ensureFocus&&(s.contains(e,"gxeDeleted")||s.contains(e,"gxeOff")||this.inputWidget.ensureFocus(),this._scrollOnClick())},_isDeleted:function(){return s.contains(this.messageNode,"gxeDeleted")},_isXNodeOff:function(e){for(var t=e;t;){if(t._isOptionallyOff)return!0;t=t.getParent()}return!1},_onIconClick:function(){this._ensureInputFocus()},_onMessageClick:function(){this._ensureInputFocus()},_scrollOnClick:function(){if(this.validationPane){var e=!1,t=!1,n=null,o=null;i.forEach(this.validationPane.getChildren(),function(i){var a=i.domNode;i===this?(e=!0,s.add(a,"current")):i._isGxeValidationMessage&&(e?(o||(o=a),s.contains(a,"current")&&e&&(t=!0)):n=a,s.remove(a,"current"))},this),t&&n?a.scrollIntoView(n):o&&a.scrollIntoView(o)}},_setOff:function(e){e?s.add(this.messageNode,"gxeOff"):s.remove(this.messageNode,"gxeOff")},_updateIcon:function(e){var t=this.iconNode;e?(s.remove(t,"gxeIconWarning"),s.add(t,"gxeIconSuccess")):(s.remove(t,"gxeIconSuccess"),s.add(t,"gxeIconWarning"))}});return o("extend-esri")&&t.setObject("dijit.metadata.base.ValidationMessage",u,c),u});