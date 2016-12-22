// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Util","dojox/xml/parser"],function(t,e,r,n){var a=function(){function t(){var t=r.VertexAttrConstants;for(var e in t)this[t[e]]=r.VertexAttrConstants[e]}return t.prototype._parse=function(t){for(var e=n.parse(t),a=e.getElementsByTagName("snippet"),s=/\$[a-zA-Z0-9]+[ \t]*/,o=/[\$\s]+/g,i=0;i<a.length;i++){var l=a[i].getAttribute("name");r.assert(null==this[l]);for(var p=a[i].textContent,u=void 0;null!==(u=p.match(s));){var v=u[0].replace(o,""),f=this[v];r.assert(void 0!==f),p=p.replace(u[0],f)}this[l]=p}},t}();return a});