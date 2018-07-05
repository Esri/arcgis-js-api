// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/has","./nextTick","./now","./promiseUtils"],function(e,n,t,r,i,l){function o(e){return e?l.create(function(n){u.push(e),a.set(e,n),1===u.length&&r(c)},function(){u[u.indexOf(e)]=null,a.delete(e)}):l.reject(new TypeError("callback is not a function"))}function c(){var e=0===u.length;if(!e){for(var n=i();!e&&i()-n<f;){var t=u[s];if(t){if(!0===t()){var l=a.get(t);u[s]=null,a.delete(t),l()}s=(s+1)%u.length}else u.splice(s,1),e=0===u.length,e?s=0:s%=u.length}e||r(c)}}var f=t("host-browser")?6:200,u=[],a=new Map,s=0;return o});