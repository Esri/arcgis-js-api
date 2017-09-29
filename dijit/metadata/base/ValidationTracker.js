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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dijit/_WidgetBase","../../../kernel"],function(a,i,e,t,n,r){var o=a([n],{documentTitle:null,hadValidationErrors:!1,ignoreErrors:!1,isSaveAsDraft:!1,validationPane:null,postCreate:function(){this.inherited(arguments)},handleValidationError:function(a,i,e){this.ignoreErrors||(this.isSaveAsDraft?a.isDocumentTitle&&(this.hadValidationErrors=!0,this.validationPane.addWarning(i,e)):(this.hadValidationErrors=!0,this.validationPane.addWarning(i,e)))},whenComplete:function(){this.validationPane&&this.validationPane.whenComplete()}});return t("extend-esri")&&i.setObject("dijit.metadata.base.ValidationTracker",o,r),o});