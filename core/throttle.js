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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function n(e,t,n,r){var u=null,o=1e3;"number"==typeof t?(o=t,r=n):(u=t,o=n);var a,i=0,f=function(){i=0,e.apply(r,a)},c=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];u&&u.apply(r,e),a=e,o?i||(i=setTimeout(f,o)):f()};return c.remove=function(){i&&(clearTimeout(i),i=0)},c.forceUpdate=function(){i&&(clearTimeout(i),f())},c.hasPendingUpdates=function(){return!!i},c}Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=n,t["default"]=n});