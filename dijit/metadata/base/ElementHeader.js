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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../../kernel","./Templated","./LabelMixin","dojo/text!./templates/ElementHeader.html"],function(e,t,l,n,a,o,i,d,s,r){var b=e([d,s],{label:null,parentElement:null,templateString:r,postCreate:function(){this.inherited(arguments)},initialize:function(e){this.parentElement=e,n.place(this.domNode,e.containerNode,"before"),l.add(e.domNode,"single gxeIndent"),this.label=e.getLabelString();var t=0===e.minOccurs,a=e.preferOpen,o=this.labelNode,i=e.containerNode;!e.noToggle&&t?this.initializeLabel(this.label,t,a,o,i):(this.labelNode.innerHTML=this.label,t?l.add(this.labelNode,"gxeOptionalLabel"):l.add(this.labelNode,"gxeMandatoryLabel"))},whenOptionalContentToggled:function(e){this.parentElement._isOptionallyOff=e}});return o("extend-esri")&&t.setObject("dijit.metadata.base.ElementHeader",b,i),b});