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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../InputText","dojo/i18n!../../nls/i18nBase","../../../../kernel"],(function(e,i,t,n,l,s){var r=e([n],{_isFgdcInputTime:!0,hint:l.hints.fgdcTime,small:!0,postCreate:function(){this.inherited(arguments)},getXmlValue:function(){var e=this.inherited(arguments);return"string"==typeof e&&null!==e&&(e=(e=e.replace(/:/g,"")).replace(/\./g,"")),e},importValue:function(e,t){var n,l,s,r=null,d=[],h="",f="";if("string"!=typeof t||null===t)this.inherited(arguments);else if(-1!==t.indexOf("T"))this.inherited(arguments);else if(-1!==t.indexOf(":"))this.inherited(arguments);else if(-1!==t.indexOf("."))this.inherited(arguments);else if(-1!==(r=i.trim(t)).indexOf("+")?(d=r.split("+"),f="+"):-1!==r.indexOf("-")?(d=r.split("-"),f="-"):-1!==r.indexOf("Z")?(f="Z",(d=r.split("Z"))[1]=""):(d[0]=r,d[1]=""),2!==d.length)this.inherited(arguments);else{for(s=d[0],n=0;n<s.length;n++)2===h.length?h+=":":5===h.length?h+=":":8===h.length&&(h+="."),h+=s[n];for(s=d[1],n=0;n<s.length;n++)3===f.length&&(f+=":"),f+=s[n];l=h+f,this.setInputValue(l)}}});return t("extend-esri")&&i.setObject("dijit.metadata.form.fgdc.InputTime",r,s),r}));
