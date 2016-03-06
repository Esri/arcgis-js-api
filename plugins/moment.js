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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","exports","dojo/_base/kernel","moment/moment"],function(e,n,a,t){function r(e,n,r){var i=a.locale;"zh-hk"===i&&(i="zh-tw");var l=i in o;if(!l){var c=i.split("-");c.length>1&&c[0]in o&&(i=c[0],l=!0)}l?n(["moment/locale/"+i],function(){r(t)}):r(t)}var o={ar:1,"ar-ma":1,"ar-sa":1,"ar-tn":1,cs:1,da:1,de:1,"de-at":1,el:1,"en-au":1,"en-ca":1,"en-gb":1,"en-ie":1,"en-nz":1,es:1,et:1,fi:1,fr:1,"fr-ca":1,"fr-ch":1,he:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-tw":1};n.load=r});