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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../dom-style","../ElementBuilder","../StyleParser","esri/dijit/geoenrichment/utils/SVGUtil"],(function(t,e,i,r){function u(t){return Math.round(100*t)/100}return{drawSVG:function(s,l,n){var a=t.toPixelValue(s,s.getAttribute("x")),b=t.toPixelValue(s,s.getAttribute("y"));s.setAttribute("x",u(a+l.box.x)+"px"),s.setAttribute("y",u(b+l.box.y)+"px");var o=s.getAttribute("style")||"";if(o){s.setAttribute("style","");var y=i.parseStyleString(o);y.width&&s.setAttribute("width",y.width),y.height&&s.setAttribute("height",y.height)}var x=e.buildElement("g",{opacity:l.style.opacity,clipParams:n,transform:l.style.transform},r.getOuterHTML(s));return s.setAttribute("x",a+"px"),s.setAttribute("y",b+"px"),s.setAttribute("style",o),x}}}));