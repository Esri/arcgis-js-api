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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/dom-construct"],function(e){var n={_tempNode:e.create("div",null,document.body),replaceTextWithSpans:function(d){function r(e){function d(e){var n=!1;return-1!=e.indexOf("&nbsp;")&&(e=e.split("&nbsp;").map(function(e){return e?(n=!0,"<span>"+e+"</span>"):e}).join("&nbsp;")),n&&(e=e.replace(/((&nbsp;)+)/g,"<span>$1</span>")),e}function r(){var d;return e.parentNode?d=e.parentNode.innerHTML:(n._tempNode.appendChild(e),d=e.parentNode.innerHTML,n._tempNode.removeChild(e)),d||""}var i=r();return i.trim()?d(i):""}if(d.childNodes.length<2&&"TD"!=d.nodeName){if(1==d.childNodes.length){var i=d.childNodes[0];if("#text"==i.nodeName){var o=r(i);o&&d.innerHTML!=o&&(d.innerHTML=o)}}}else{for(var t=[];d.childNodes.length;)t.push(d.removeChild(d.childNodes[0]));t.forEach(function(n){if("#text"==n.nodeName){var i=r(n);if(i){var o=e.create("span",{innerHTML:i});if(1==o.childNodes.length)e.place(o,d);else for(;o.childNodes.length;)d.appendChild(o.removeChild(o.childNodes[0]))}}else e.place(n,d)})}}};return n});