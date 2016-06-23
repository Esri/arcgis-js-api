// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../form/InputDate"],function(t,e,n,i,a){var s=t([a],{_serializationValue:null,postCreate:function(){this.inherited(arguments)},connectXNode:function(t,e){this.inherited(arguments),e||"/metadata/Esri/CreaDate"===t.gxePath&&this.setInputValue(this.formatDate(t.gxeDocument.datestamp))},getXmlValue:function(){return"/metadata/Esri/ModDate"===this.parentXNode.gxePath?(this.parentXNode.gxeDocument.datestamp=new Date,this.formatDate(this.parentXNode.gxeDocument.datestamp)):this.inherited(arguments)},importValue:function(t,n){var i,a=null,s=[];"string"!=typeof n||null===n?this.inherited(arguments):-1!==n.indexOf("T")?this.inherited(arguments):-1!==n.indexOf("Z")?this.inherited(arguments):-1!==n.indexOf("-")?this.inherited(arguments):(a=e.trim(n),8===a.length?(s[0]=a.substring(0,4),s[1]=a.substring(4,6),s[2]=a.substring(6,8),i=s[0]+"-"+s[1]+"-"+s[2],this.setInputValue(i)):6===a.length?(s[0]=a.substring(0,4),s[1]=a.substring(4,6),i=s[0]+"-"+s[1],this.setInputValue(i)):this.inherited(arguments))}});return n("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.InputDate",s,i),s});