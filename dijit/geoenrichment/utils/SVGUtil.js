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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/sniff","dojo/dom-construct"],function(e,t){var r,n={},i=e("ie")||e("trident");return n.getOuterHTML=function(e){if(n.fixSVG(e),e.outerHTML)return e.outerHTML;var i=e.parentNode;r=r||t.create("div",null,document.body);var o=e.nextSibling;i&&i.removeChild(e),r.appendChild(e);var s=e.parentNode.innerHTML;return r.removeChild(e),o?o.parentNode.insertBefore(e,o):i&&i.appendChild(e),s=s.replace(/preserveAspectRatio="none meet"/g,'preserveAspectRatio="none"'),s=s.replace(/preserveAspectRatio='none meet'/g,"preserveAspectRatio='none'")},n.fixSVG=function(e){function t(e,n){if(e&&(e.hasAttribute&&e.hasAttribute("xlink:href")&&(r=!0),"svg"===e.nodeName.toLowerCase()&&n(e),e.childNodes))for(var i=0,o=e.childNodes.length;i<o;i++)t(e.childNodes[i],n)}var r=!1,n=["xmlns","xmlns:xlink","xlink:href","version"];t(e,function(e){if(n.forEach(function(t){for(;e.hasAttribute(t);)e.removeAttribute(t)}),e.hasAttribute("preserveAspectRatio")){"none meet"===e.getAttribute("preserveAspectRatio")&&(e.removeAttribute("preserveAspectRatio"),e.setAttribute("preserveAspectRatio","none"))}}),e.hasAttribute("xmlns")||i||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!r||e.hasAttribute("xmlns:xlink")||i||e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),e.setAttribute("version","1.1")},n});