// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/has","../base/Templated","dojo/text!./templates/Section.html","../../../kernel"],function(e,t,i,o,n,d,l,s,a){var r=e([l],{templateString:s,_isGxeSection:!0,label:null,showHeader:!0,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.initializeSection(),this.inherited(arguments))},getLabelString:function(){var e=this.label;return"undefined"!=typeof e&&null!=e?e:null},initializeSection:function(){this.showHeader?this.setLabel(this.getLabelString()):this.headerNode&&(n.destroy(this.headerNode),this.headerNode=null,this.labelNode=null)},setLabel:function(e){this.labelNode||(this.labelNode=n.create("div",{},this.domNode,"first")),this.labelNode&&("undefined"==typeof e&&(e=null),this.label=e,this.setI18nNodeText(this.labelNode,e),null!==e&&o.add(this.domNode,"gxeIndent"))}});return d("extend-esri")&&t.setObject("dijit.metadata.form.Section",r,a),r});