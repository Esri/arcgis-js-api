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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["../dom-style","../ElementBuilder","../StyleParser","esri/dijit/geoenrichment/utils/SVGUtil"],(function(t,e,r,i){function u(t){return Math.round(100*t)/100}return{drawSVG:function(s,l,n){var a=t.toPixelValue(s,s.getAttribute("x")),b=t.toPixelValue(s,s.getAttribute("y")),o=u(a+l.box.x),y=u(b+l.box.y);s.setAttribute("x","0px"),s.setAttribute("y","0px");var x=s.getAttribute("style")||"";if(x){s.setAttribute("style","");var d=r.parseStyleString(x);d.width&&s.setAttribute("width",d.width),d.height&&s.setAttribute("height",d.height)}var g,h=i.getOuterHTML(s);(o||y)&&(g=e.buildElement("g",{transform:"translate("+o+" "+y+")"},h));var A=e.buildElement("g",{opacity:l.style.opacity,clipParams:n,transform:l.style.transform},g||h);return s.setAttribute("x",a+"px"),s.setAttribute("y",b+"px"),s.setAttribute("style",x),A}}}));