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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../InputDate","dojo/i18n!../../nls/i18nBase","../../../../kernel"],function(t,e,i,n,s,r){var u=t([n],{_isFgdcInputDate:!0,hint:s.hints.fgdcDate,postCreate:function(){this.inherited(arguments)},getXmlValue:function(){var t=this.inherited(arguments);return"string"==typeof t&&null!==t&&(t=t.replace(/-/g,"")),t},importValue:function(t,i){var n,s=null,r=[];"string"!=typeof i||null===i?this.inherited(arguments):-1!==i.indexOf("T")?this.inherited(arguments):-1!==i.indexOf("Z")?this.inherited(arguments):-1!==i.indexOf("-")?this.inherited(arguments):(s=e.trim(i),8===s.length?(r[0]=s.substring(0,4),r[1]=s.substring(4,6),r[2]=s.substring(6,8),n=r[0]+"-"+r[1]+"-"+r[2],this.setInputValue(n)):6===s.length?(r[0]=s.substring(0,4),r[1]=s.substring(4,6),n=r[0]+"-"+r[1],this.setInputValue(n)):this.inherited(arguments))}});return i("extend-esri")&&e.setObject("dijit.metadata.form.fgdc.InputDate",u,r),u});