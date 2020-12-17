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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","dojo/_base/kernel","moment/moment"],(function(e,n,r,a){Object.defineProperty(n,"__esModule",{value:!0});var t={ar:1,"ar-dz":1,"ar-kw":1,"ar-ly":1,"ar-ma":1,"ar-sa":1,"ar-tn":1,bs:1,ca:1,cs:1,da:1,de:1,"de-at":1,"de-ch":1,el:1,"en-au":1,"en-ca":1,"en-gb":1,"en-ie":1,"en-il":1,"en-in":1,"en-nz":1,"en-sg":1,es:1,"es-do":1,"es-mx":1,"es-us":1,et:1,fi:1,fr:1,"fr-ca":1,"fr-ch":1,he:1,hr:1,hu:1,id:1,it:1,"it-ch":1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,"nl-be":1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,sk:1,sl:1,sr:1,"sr-cyrl":1,sv:1,th:1,tr:1,uk:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-mo":1,"zh-tw":1};n.load=function(e,n,l){var i=r.locale,o=i in t;if(!o){var s=i.split("-");s.length>1&&s[0]in t&&(i=s[0],o=!0)}o?n(["moment/locale/"+i],(function(){l(a)})):l(a)}}));