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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/lang","../../core/promiseUtils"],function(e,t,n,r,o){function i(){return!(7===n("trident"))}function d(t){r.startsWith(t,u)||(t=""+u+t);var n=e.toUrl(s),o="#"+t;return i()?""+n+o:o}Object.defineProperty(t,"__esModule",{value:!0});var s="./symbol-defs.svg",c="esri-widget__symbol-defs",u="esri-icon-";t.href=d,function(){i()||document.getElementById(c)||o.create(function(t){return e(["dojo/text!"+s,"dojo/domReady!"],t)}).then(function(e){var t=document.body,n=t.firstChild,r=document.createElement("div");r.id=c,r.innerHTML=e,n?t.insertBefore(r,n):t.appendChild(r)})}()});