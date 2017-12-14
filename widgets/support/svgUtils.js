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

define(["require","exports","dojo/has","../../core/requireUtils","../../core/lang"],function(e,t,r,n,o){function i(){var e=7===r("trident");return!e}function d(t){o.startsWith(t,f)||(t=""+f+t);var r=e.toUrl(u),n="#"+t;return i()?""+r+n:n}function s(){if(!i()){var t=document.getElementById(c);t||n.when(e,["dojo/text!"+u,"dojo/domReady!"]).then(function(e){var t=e[0],r=document.body,n=r.firstChild,o=document.createElement("div");o.id=c,o.innerHTML=t,n?r.insertBefore(o,n):r.appendChild(o)})}}Object.defineProperty(t,"__esModule",{value:!0});var u="./symbol-defs.svg",c="esri-widget__symbol-defs",f="esri-icon-";t.href=d,s()});