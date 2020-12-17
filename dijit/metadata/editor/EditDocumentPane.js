// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","../base/Templated","dojo/text!./templates/EditDocumentPane.html","../../../kernel"],(function(e,t,s,o,n,a,d){var i=e([n],{gxeDocument:null,templateString:a,postCreate:function(){this.inherited(arguments)},hideMessage:function(){this.messageNode.innerHTML="",s.set(this.messageNode,"display","none")},showMessage:function(e){this.setNodeText(this.messageNode,e),s.set(this.messageNode,"display","")}});return o("extend-esri")&&t.setObject("dijit.metadata.editor.EditDocumentPane",i,d),i}));