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

define(["dojo/dom-geometry","dojo/dom-style"],function(r,n){var o={measureNode:function(o){function t(t){var e=n.get(o,"transform");if(e&&"none"!=e){var s=r.position(o),a=n.get(o,"transformOrigin");n.set(o,"transformOrigin",-t.x+"px "+-t.y+"px");var i=r.position(o);n.set(o,"transformOrigin",a);var f=s.x+s.w/2,m=s.y+s.h/2,g=i.x+i.w/2,u=i.y+i.h/2,v=g-f,y=u-m;return"translate("+-v+" "+-y+") "+e}}var e=n.get(o,"transform");e&&"none"!=e&&(o.style.transform="none",o.style.webkitTransform="none");var s=r.position(o);return e&&"none"!=e&&n.set(o,"transform",e),{box:s,transform:t(s)}}};return o});