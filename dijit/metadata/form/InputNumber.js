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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./InputText","dojo/i18n!../nls/i18nBase","../../../kernel"],function(e,n,i,t,s,r){var u=e([t],{_isGxeInputNumber:!0,hint:s.hints.number,integerOnly:!1,minValue:null,maxValue:null,minValueIsExclusive:!1,maxValueIsExclusive:!1,small:!0,postCreate:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.integerOnly&&this.hint===s.hints.number&&(this.hint=s.hints.integer)}});return i("extend-esri")&&n.setObject("dijit.metadata.form.InputNumber",u,r),u});