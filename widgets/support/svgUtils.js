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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/has","../../core/promiseUtils","../../core/string"],function(e,t,r,n,i){function o(){return!(7===r("trident"))}function d(t){i.startsWith(t,u)||(t=""+u+t);var r=e.toUrl(s),n="#"+t;return o()?""+r+n:n}Object.defineProperty(t,"__esModule",{value:!0});var s="./symbol-defs.svg",c="esri-widget__symbol-defs",u="esri-icon-";t.href=d,function(){o()||document.getElementById(c)||n.create(function(t){return e(["dojo/text!"+s],t)}).then(function(e){var t=document.body,r=t.firstChild,n=document.createElement("div");n.id=c,n.innerHTML=e,r?t.insertBefore(n,r):t.appendChild(n)})}()});