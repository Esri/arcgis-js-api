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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../InputText","dojo/i18n!../../nls/i18nBase","../../../../kernel"],function(e,t,i,n,s,r){var l=e([n],{_isFgdcInputTime:!0,hint:s.hints.fgdcTime,small:!0,postCreate:function(){this.inherited(arguments)},getXmlValue:function(){var e=this.inherited(arguments);return"string"==typeof e&&null!==e&&(e=e.replace(/:/g,""),e=e.replace(/\./g,"")),e},importValue:function(e,i){var n,s,r,l=null,a=[],d="",h="";if("string"!=typeof i||null===i)this.inherited(arguments);else if(-1!==i.indexOf("T"))this.inherited(arguments);else if(-1!==i.indexOf(":"))this.inherited(arguments);else if(-1!==i.indexOf("."))this.inherited(arguments);else if(l=t.trim(i),-1!==l.indexOf("+")?(a=l.split("+"),h="+"):-1!==l.indexOf("-")?(a=l.split("-"),h="-"):-1!==l.indexOf("Z")?(a=l.split("Z"),h="Z",a[1]=""):(a[0]=l,a[1]=""),2!==a.length)this.inherited(arguments);else{for(r=a[0],n=0;n<r.length;n++)2===d.length?d+=":":5===d.length?d+=":":8===d.length&&(d+="."),d+=r[n];for(r=a[1],n=0;n<r.length;n++)3===h.length&&(h+=":"),h+=r[n];s=d+h,this.setInputValue(s)}}});return i("extend-esri")&&t.setObject("dijit.metadata.form.fgdc.InputTime",l,r),l});