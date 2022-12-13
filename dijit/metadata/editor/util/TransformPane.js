// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/has","../../base/Templated","dojo/text!./templates/TransformPane.html","dojo/i18n!../../nls/i18nBase","../../../../kernel"],(function(e,t,i,o,n,s,a,d,l){var c=e([s],{editor:null,dialogBroker:null,documentTypes:null,prompt:null,templateString:a,postCreate:function(){this.inherited(arguments),this._initialize()},onSelect:function(e){},_addDocType:function(e){var i=o.create("div",{},this.typesNode),n=o.create("div",{class:"gxeClickableText gxeLine",onclick:t.hitch(this,(function(){this._selectDocType(e)}))},i);this.setI18nNodeText(n,e.caption)},_initialize:function(){null!==this.prompt&&(this.setI18nNodeText(this.promptNode,this.prompt),this.promptNode.style.display="");var e=this.documentTypes;i.forEach(e,(function(e){this._addDocType(e)}),this)},_selectDocType:function(e){this.onSelect(e)}});return n("extend-esri")&&t.setObject("dijit.metadata.editor.util.TransformPane",c,l),c}));