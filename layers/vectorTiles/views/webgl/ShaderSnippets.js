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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojox/xml/parser"],function(t,r,e){var a=function(){function t(t){if(t)for(var r in t)this[r]=t[r]}return t.parse=function(t,r){for(var a=e.parse(t),n=a.getElementsByTagName("snippet"),i=/\$[a-zA-Z][a-zA-Z0-9]*(?:\([^\(\)]*\))?[ \t]*/,o=/[\$\s]+/g,p=/\(([^\(\)]*)\)/,f=0;f<n.length;f++){for(var u=n[f].getAttribute("name"),c=n[f].textContent;;){var s=c.match(i);if(null==s)break;var l=s[0].replace(o,""),v=l.match(p),m=void 0;v&&(m=v[1].split(",").map(function(t){return t.trim()}));var h=l.replace(p,""),g=r._instantiate(h,m);c=c.replace(s[0],g)}r[u]=c}},t.prototype._instantiate=function(t,r){var e=this[t];for(r||(r=[]);;){var a=e.match(/\$(\d+)/);if(null==a)break;var n=parseInt(a[1],10),i=r[n];e=e.replace(a[0],i)}return e},t}();return a});