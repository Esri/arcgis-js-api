// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","dojox/xml/parser"],(function(t,r,e){return function(){function t(t){if(t)for(var r in t)this[r]=t[r]}return t.parse=function(t,r){for(var a=e.parse(t).getElementsByTagName("snippet"),n=/\$[a-zA-Z][a-zA-Z0-9]*(?:\([^\(\)]*\))?[ \t]*/,i=/[\$\s]+/g,o=/\(([^\(\)]*)\)/,p=0;p<a.length;p++){for(var f=a[p].getAttribute("name"),u=a[p].textContent;;){var c=u.match(n);if(null==c)break;var s=c[0].replace(i,""),l=s.match(o),v=void 0;l&&(v=l[1].split(",").map((function(t){return t.trim()})));var m=s.replace(o,""),h=r._instantiate(m,v);u=u.replace(c[0],h)}r[f]=u}},t.prototype._instantiate=function(t,r){var e=this[t];for(r||(r=[]);;){var a=e.match(/\$(\d+)/);if(null==a)break;var n=r[parseInt(a[1],10)];e=e.replace(a[0],n)}return e},t}()}));