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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/dom-construct","../dom-style","dojo/sniff","../ElementBuilder","../StyleParser","esri/dijit/geoenrichment/utils/SVGUtil"],function(t,e,r,i,u,s){function n(t){return Math.round(100*t)/100}return{_svgTempParentNode:null,drawSVG:function(t,r,l){var o=e.toPixelValue(t,t.getAttribute("x")),a=e.toPixelValue(t,t.getAttribute("y"));t.setAttribute("x",n(o+r.box.x)+"px"),t.setAttribute("y",n(a+r.box.y)+"px");var b=t.getAttribute("style")||"";if(b){t.setAttribute("style","");var d=u.parseStyleString(b);d.width&&t.setAttribute("width",d.width),d.height&&t.setAttribute("height",d.height)}var y=i.buildElement("g",{opacity:r.style.opacity,clipParams:l,transform:r.style.transform},s.getOuterHTML(t));return t.setAttribute("x",o+"px"),t.setAttribute("y",a+"px"),t.setAttribute("style",b),y}}});