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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","../base/Templated","dojo/text!./templates/XmlPane.html","dojo/i18n!../nls/i18nBase","../../../kernel"],function(e,t,s,i,l,n,a,o){var d=e([l],{templateString:n,xmlString:null,xmlTitle:null,postCreate:function(){this.inherited(arguments)},setXml:function(e,i){void 0===e?e=null:null!==e&&(e=t.trim(e),0===e.length&&(e=null)),null===e?(s.set(this.textAreaNode,"display","none"),this.setNodeText(this.messageNode,a.editor.noMetadata),s.set(this.messageNode,"display","")):(this.messageNode.innerHTML="",s.set(this.messageNode,"display","none"),s.set(this.textAreaNode,"display","")),this.xmlString=e,this.xmlTitle=i,this.textAreaNode.value=e}});return i("extend-esri")&&t.setObject("dijit.metadata.editor.XmlPane",d,o),d});