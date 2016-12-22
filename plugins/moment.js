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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/kernel","moment/moment"],function(e,n,r,a){function t(e,n,t){var o=r.locale,i=o in l;if(!i){var c=o.split("-");c.length>1&&c[0]in l&&(o=c[0],i=!0)}i?n(["moment/locale/"+o],function(){t(a)}):t(a)}var l={ar:1,"ar-ly":1,"ar-ma":1,"ar-sa":1,"ar-tn":1,bs:1,cs:1,da:1,de:1,"de-at":1,el:1,"en-au":1,"en-ca":1,"en-gb":1,"en-ie":1,"en-nz":1,es:1,"es-do":1,et:1,fi:1,fr:1,"fr-ca":1,"fr-ch":1,he:1,hr:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,sr:1,"sr-cyrl":1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1};n.load=t});