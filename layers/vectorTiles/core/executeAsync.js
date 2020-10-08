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

define(["require","exports","dojo/has","./nextTick","./now","./promiseUtils"],(function(e,n,t,r,i,l){var o=t("host-browser")?6:200,c=[],f=new Map,u=0;function a(){var e=0===c.length;if(!e){for(var n=i();!e&&i()-n<o;){var t=c[u];if(t){if(!0===t()){var l=f.get(t);c[u]=null,f.delete(t),l()}u=(u+1)%c.length}else c.splice(u,1),(e=0===c.length)?u=0:u%=c.length}e||r(a)}}return function(e){return e?l.create((function(n){c.push(e),f.set(e,n),1===c.length&&r(a)}),(function(){c[c.indexOf(e)]=null,f.delete(e)})):l.reject(new TypeError("callback is not a function"))}}));