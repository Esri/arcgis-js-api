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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/requireUtils"],function(e,t,n,r){function o(){var e=7===n("trident");return!e}function d(t){var n=e.toUrl(u),r="#"+t;return o()?""+n+r:r}function i(){if(!o()){var t=document.getElementById(f);t||r.when(e,["dojo/text!"+u,"dojo/domReady!"]).then(function(e){var t=e[0],n=document.body,r=n.firstChild,o=document.createElement("div");o.id=f,o.innerHTML=t,r?n.insertBefore(o,r):n.appendChild(o)})}}Object.defineProperty(t,"__esModule",{value:!0});var u="./symbol-defs.svg",f="esri-widget__symbol-defs";t.href=d,i()});