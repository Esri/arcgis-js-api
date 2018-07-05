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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/has","./Templated","dojo/text!./templates/TabButton.html","../../../kernel"],function(t,e,n,o,i,a,l){var d=t([i],{label:null,templateString:a,postCreate:function(){this.inherited(arguments)},_onClick:function(){this.onClick(this)},onClick:function(t){},setLabel:function(t){void 0===t&&(t=null),this.label=t,this.setI18nNodeText(this.labelNode,t)}});return o("extend-esri")&&e.setObject("dijit.metadata.base.TabButton",d,l),d});