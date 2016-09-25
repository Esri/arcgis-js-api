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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../kernel","../base/XNode","dojo/text!./templates/Attribute.html","./InputText"],function(t,e,i,n,o,s,d,a,r,h,l){var u=t(r,{_isGxeAttribute:!0,_isOptionallyOff:!1,templateString:h,label:null,target:null,fixed:!1,minOccurs:0,maxOccurs:1,noIndent:!1,showHeader:!0,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.buildPath(),this.gxeDocument&&this.gxeDocument.beforeInitializeAttribute(this),this.initializeAttribute(),this.gxeDocument&&this.gxeDocument.afterInitializeAttribute(this),this._publishStarted(),this.inherited(arguments))},connectInputWidget:function(t){var e,i=this.gxeDocument&&this.gxeDocument.isViewOnly,n=this.findInputWidget();!n&&t&&(e=o.create("div",{},this.containerNode),n=new l({},e)),n&&(this.inputWidget=n,n.parentXNode=this,n.connectXNode(this,i))},initializeAttribute:function(){this.getLabelString();var t=0===this.minOccurs;this.showHeader?(this.labelNode=o.create("div",{},this.domNode,"first"),this.labelNode.innerHTML=this.getLabelString(),t?n.add(this.labelNode,"gxeOptionalLabel"):n.add(this.labelNode,"gxeMandatoryLabel"),this.noIndent&&n.remove(this.domNode,"gxeIndent")):(n.remove(this.domNode,"gxeIndent"),this.headerNode&&(o.destroy(this.headerNode),this.headerNode=null,this.labelNode=null)),this.hide||s.set(this.containerNode,"display","block"),this.connectInputWidget(!0)}});return d("extend-esri")&&e.setObject("dijit.metadata.form.Attribute",u,a),u});