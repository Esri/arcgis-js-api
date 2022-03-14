// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../form/InputDate"],(function(t,e,i,n,a){var s=t([a],{_serializationValue:null,postCreate:function(){this.inherited(arguments)},connectXNode:function(t,e){this.inherited(arguments),e||"/metadata/Esri/CreaDate"===t.gxePath&&this.setInputValue(this.formatDate(t.gxeDocument.datestamp))},getXmlValue:function(){return"/metadata/Esri/ModDate"===this.parentXNode.gxePath?(this.parentXNode.gxeDocument.datestamp=new Date,this.formatDate(this.parentXNode.gxeDocument.datestamp)):this.inherited(arguments)},importValue:function(t,i){var n,a=null,s=[];"string"!=typeof i||null===i?this.inherited(arguments):-1!==i.indexOf("T")?this.inherited(arguments):-1!==i.indexOf("Z")?this.inherited(arguments):-1!==i.indexOf("-")?this.inherited(arguments):8===(a=e.trim(i)).length?(s[0]=a.substring(0,4),s[1]=a.substring(4,6),s[2]=a.substring(6,8),n=s[0]+"-"+s[1]+"-"+s[2],this.setInputValue(n)):6===a.length?(s[0]=a.substring(0,4),s[1]=a.substring(4,6),n=s[0]+"-"+s[1],this.setInputValue(n)):this.inherited(arguments)}});return i("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.InputDate",s,n),s}));