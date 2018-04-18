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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style","dojo/sniff","../ElementBuilder","../StyleParser","esri/dijit/geoenrichment/utils/SVGUtil"],function(t,e,r,i,u,s){function o(t){return Math.round(100*t)/100}return{_svgTempParentNode:null,drawSVG:function(t,r,n){var l=e.toPixelValue(t,t.getAttribute("x")),a=e.toPixelValue(t,t.getAttribute("y"));t.setAttribute("x",o(l+r.box.x)+"px"),t.setAttribute("y",o(a+r.box.y)+"px");var d=t.getAttribute("style")||"";if(d){t.setAttribute("style","");var b=u.parseStyleString(d);b.width&&t.setAttribute("width",b.width),b.height&&t.setAttribute("height",b.height)}var y=i.buildElement("g",{opacity:r.style.opacity,clipParams:n,transform:r.style.transform},s.getOuterHTML(t));return t.setAttribute("x",l+"px"),t.setAttribute("y",a+"px"),t.setAttribute("style",d),y}}});