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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../Attribute","../../../../kernel"],function(e,t,a,i,r){var d=e([i],{fixed:!0,hide:!0,minOccurs:1,showHeader:!1,target:"codeSpace",value:"ISOTC211/19115",postCreate:function(){this.inherited(arguments)}});return a("extend-esri")&&t.setObject("dijit.metadata.form.iso.CodeSpaceAttribute",d,r),d});