// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojox/xml/parser","./Util"],function(t,r,e,n){return function(){function t(t){var r=n.VertexAttrConstants;for(var e in r)this[r[e]]=n.VertexAttrConstants[e];if(t)for(var a in t)this[a]=t[a]}return t.prototype._parse=function(t){for(var r=e.parse(t),a=r.getElementsByTagName("snippet"),s=/\$[a-zA-Z0-9_]+[ \t]*/,i=/[\$\s]+/g,o=0;o<a.length;o++){var f=a[o].getAttribute("name");n.assert(null==this[f]);for(var l=a[o].textContent;;){var p=l.match(s);if(null==p)break;var u=p[0].replace(i,""),v=this[u];n.assert(void 0!==v),l=l.replace(p[0],v)}this[f]=l}},t}()});