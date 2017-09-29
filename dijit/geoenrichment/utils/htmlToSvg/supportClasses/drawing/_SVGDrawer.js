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

define(["dojo/dom-construct","dojo/dom-style","dojo/sniff","../ElementBuilder","../StyleParser"],function(e,t,r,i,n){function o(e){return Math.round(100*e)/100}var d={_svgTempParentNode:null,drawSVG:function(a,u,l){function s(){if(a.outerHTML)return a.outerHTML;if(a.parentNode){var t=a.parentNode;d._svgTempParentNode=d._svgTempParentNode||e.create("div",null,document.body);var i=a.nextSibling;a.parentNode.removeChild(a),d._svgTempParentNode.appendChild(a),(r("ie")||r("trident"))&&a.removeAttribute("xmlns");var n=a.parentNode.innerHTML;return n=n.replace('"none meet"','"none"'),d._svgTempParentNode.removeChild(a),i?i.parentNode.insertBefore(a,i):t.appendChild(a),n}}var p=t.toPixelValue(a,a.getAttribute("x")),b=t.toPixelValue(a,a.getAttribute("y"));a.setAttribute("x",o(p+u.box.x)+"px"),a.setAttribute("y",o(b+u.box.y)+"px");var v=a.getAttribute("style")||"";if(v){a.setAttribute("style","");var m=n.parseStyleString(v);m.width&&a.setAttribute("width",m.width),m.height&&a.setAttribute("height",m.height)}var g=i.buildElement("g",{opacity:u.style.opacity,clipParams:l},s());return a.setAttribute("x",p+"px"),a.setAttribute("y",b+"px"),a.setAttribute("style",v),g}};return d});