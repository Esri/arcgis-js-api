// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/awaiterHelper","../core/tsSupport/generatorHelper","../core/iteratorUtils","./locale","@dojo/framework/shim/Promise"],function(e,r,t,n,a,o){function s(r){return void 0===r&&(r=o.getLocale()),t(this,void 0,void 0,function(){var t,a,o;return n(this,function(n){switch(n.label){case 0:return[4,new Promise(function(r,t){e(["moment/moment"],r,t)})];case 1:return t=n.sent(),a=l.has(r),a||(o=r.split("-"),o.length>1&&l.has(o[0])&&(r=o[0],a=!0)),a?[4,new Promise(function(t,n){e(["moment/locale/"+r],t,n)})]:[3,3];case 2:return n.sent(),[3,4];case 3:r="en",n.label=4;case 4:return r!==t.locale()&&t.locale(r),[2,t]}})})}Object.defineProperty(r,"__esModule",{value:!0});var l=a.createSetFromValues(["ar","ar-dz","ar-kw","ar-ly","ar-ma","ar-sa","ar-tn","bs","ca","cs","da","de","de-at","de-ch","el","en-au","en-ca","en-gb","en-ie","en-il","en-nz","es","es-do","es-us","et","fi","fr","fr-ca","fr-ch","he","hr","hu","id","it","it-ch","ja","ko","lt","lv","nb","nl","nl-be","pl","pt","pt-br","ro","ru","sl","sr","sr-cyrl","sv","th","tr","uk","vi","zh-cn","zh-hk","zh-tw"]);r.loadMoment=s});