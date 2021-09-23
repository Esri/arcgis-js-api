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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../base/Templated","../base/ValidationMessage","dojo/text!./templates/ValidationPane.html","../../../kernel"],(function(e,t,i,o,d,n,a,s,r,l,c){var h=e([s],{editor:null,templateString:l,postCreate:function(){this.inherited(arguments)},_addChild:function(e,t,i){var o=d.create("div",{},this.containerNode);new r({message:e,inputWidget:t,isValid:i,validationPane:this},o)},addWarning:function(e,t){this._addChild(e,t),this._toggleClear(!0),this._toggleVisibility(!0),this.editor&&this.editor.editDocumentPane&&o.add(this.editor.editDocumentPane.domNode,"gxeRepairMode")},clearMessages:function(){i.forEach(this.getChildren(),(function(e){e._isGxeValidationMessage&&e.destroyRecursive(!1)})),this._toggleClear(!1),this._toggleVisibility(!1);try{this.containerNode.scrollTop=0}catch(e){}},_onClearClick:function(e){this.clearMessages()},_toggleClear:function(e){var t=this.clearNode,i=this.promptNode;e?(n.set(t,"display","inline-block"),n.set(i,"display","inline-block")):(n.set(t,"display","none"),n.set(i,"display","none"))},_toggleVisibility:function(e){var t=this.domNode;e?n.set(t,"display","block"):n.set(t,"display","none"),this.editor&&this.editor.editDocumentPane&&(o.remove(this.editor.editDocumentPane.domNode,"gxeRepairMode"),this.editor.resizeDocument(this.editor.editDocumentPane))},whenComplete:function(){this.editor&&this.editor.editDocumentPane&&o.contains(this.editor.editDocumentPane.domNode,"gxeRepairMode")&&this.editor.resizeDocument(this.editor.editDocumentPane)}});return a("extend-esri")&&t.setObject("dijit.metadata.editor.ValidationPane",h,c),h}));