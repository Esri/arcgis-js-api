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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/date/locale","dojo/date","dojo/date/stamp","../../../../kernel"],(function(e,t,a,r,o,d,n){var m={formatDate:function(e){return r.format(e,{datePattern:"yyyy-MM-dd",selector:"date"})},formatDateTime:function(e){var t=r.format(e,{datePattern:"yyyy-MM-dd",selector:"date"}),a=r.format(e,{timePattern:"HH:mm:ss.SSS",selector:"time"}),o=r.format(e,{timePattern:"ZZZZ",selector:"time"});return t+"T"+a+(o=o.replace("GMT",""))}};return a("extend-esri")&&e.setObject("dijit.metadata.base.etc.dateUtil",m,n),m}));