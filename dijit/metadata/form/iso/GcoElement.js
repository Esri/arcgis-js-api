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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../Element","../../../../kernel"],(function(e,t,n,i,r){var o=e([i],{showHeader:!1,postCreate:function(){this.inherited(arguments)},resolveMinOccurs:function(){return this.parentElement?this.parentElement.resolveMinOccurs():this.minOccurs},toggleContent:function(e){this.parentElement?this.parentElement.toggleContent(e):this.inherited(arguments)}});return n("extend-esri")&&t.setObject("dijit.metadata.form.iso.GeoElement",o,r),o}));