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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../kernel","../base/XNode","dojo/text!./templates/Element.html","../base/ElementHeader","../base/MultiplicityHeader","../base/OptionalLabel","../base/etc/viewOnlyUtil","./InputText"],function(t,e,i,n,s,l,o,a,d,h,r,c,u,g,p,m){var b=t([h],{_isGxeElement:!0,elementHeader:null,multiplicityHeader:null,templateString:r,label:null,target:null,minOccurs:1,maxOccurs:1,matchTopNode:null,preferOpen:!1,showHeader:!0,trackMultiplicity:!0,useTabs:!0,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.buildPath(),this.gxeDocument&&this.gxeDocument.beforeInitializeElement(this),this.initializeElement(),this.gxeDocument&&this.gxeDocument.afterInitializeElement(this),this.noIndent&&s.remove(this.domNode,"gxeIndent"),this._publishStarted(),this.inherited(arguments))},connectInputWidget:function(t){var e,i=this.gxeDocument&&this.gxeDocument.isViewOnly,n=this.findInputWidget();!n&&t&&0===this.getChildren().length&&(e=l.create("div",{},this.containerNode),n=new m({},e)),n&&(this.inputWidget=n,n.parentXNode=this,n.connectXNode(this,i))},findAttributes:function(){var t=[];return this._findAttributes(this,t),t},_findAttributes:function(t,e){var n=!0;t._isGxeElement?n=t===this:t._isGxeAttribute&&(n=!1,e.push(t)),n&&i.forEach(t.getChildren(),function(t){this._findAttributes(t,e)},this)},initializeElement:function(){var t;this.getLabelString();var e=this.gxeDocument&&this.gxeDocument.isViewOnly,i=this.findInputWidget();"unbounded"!==this.maxOccurs&&this.maxOccurs<=1?this.trackMultiplicity=!1:i&&i._supportsMultipleValues&&(this.trackMultiplicity=!1),this.showHeader&&this.trackMultiplicity?(this.multiplicityHeader=t=new u({label:this.getLabelString(),target:this.target,minOccurs:this.minOccurs,maxOccurs:this.maxOccurs,preferOpen:this.preferOpen,showHeader:this.showHeader,useTabs:this.useTabs}),t.initialize(this),this.notApplicable&&(t.domNode.style.display="none"),this.connectInputWidget(!0),e&&this.multiplicityHeader.tools&&(this.multiplicityHeader.tools.domNode.style.display="none")):this.showHeader?this._initStandardHeader():this.connectInputWidget(!0)},_initStandardHeader:function(){var t=0===this.minOccurs,i=!this.noToggle,n=this.preferOpen,o=this.getLabelString(),a="";this.labelNode=l.create("div",{},this.domNode,"first"),s.add(this.domNode,"single gxeIndent"),s.add(this.labelNode,"gxeElementHeader"),i&&t?(this._contentIsOptional=t,this._isOptionallyOff=!1,n?(a='checked="checked"',this.toggleContent(!0,!0)):this.toggleContent(!1,!0),this.labelWidget=new g({label:o,checkedAttr:a,onClick:e.hitch(this,function(t){this.toggleContent(t,!0)})},this.labelNode),s.add(this.labelWidget.domNode,"gxeElementHeader"),this.connectInputWidget(!0)):(this.labelNode.innerHTML=o,t?s.add(this.labelNode,"gxeOptionalLabel"):s.add(this.labelNode,"gxeMandatoryLabel"),this.connectInputWidget(!0))},toggleContent:function(t,e){if(!this.hide)if(this.elementHeader&&this.elementHeader.toggleContent)this.elementHeader.toggleContent(t);else if(this.multiplicityHeader&&this.multiplicityHeader.toggleContent)this.multiplicityHeader.toggleContent(t);else if(this._contentIsOptional&&(t?o.set(this.containerNode,"display","block"):o.set(this.containerNode,"display","none"),this._contentIsOptional)){this._isOptionallyOff=!t,!e&&this.labelWidget&&this.labelWidget.setChecked&&this.labelWidget.setChecked(t);try{n.publish("gxe/optional-content-toggled",{src:this,isOptionallyOff:!t})}catch(t){console.error(t)}}}});return a("extend-esri")&&e.setObject("dijit.metadata.form.Element",b,d),b});