// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define([],(function(){return{compress:function(e,r){var n=[],o=JSON.stringify(e),t=o.length;o=r?r(o):o;for(var c=unescape(encodeURIComponent(o)),s=0;c;){var a=h(c);s+=a[0].length,n.push(a[0]),c=a[1]}function h(e){for(var r,n,o={},t=(e+"").split(""),c=[],s=t[0],a=256,h=1;h<t.length;h++)if(null!=o["_"+s+(r=t[h])])s+=r;else if(c.push(s.length>1?o["_"+s]:s.charCodeAt(0)),o["_"+s+r]=a,s=r,++a>55e3){n=e.substr(h+1);break}c.push(s.length>1?o["_"+s]:s.charCodeAt(0));for(h=0;h<c.length;h++)c[h]=String.fromCharCode(c[h]);return[c.join(""),n]}return{method:"lzw",compression:Number((s/t).toFixed(2)),src:n}},decompress:function(e){var r="";return e.src.forEach((function(e){for(var n,o={},t=(e+"").split(""),c=t[0],s=c,a=[c],h=256,i=1;i<t.length;i++){var p=t[i].charCodeAt(0);n=p<256?t[i]:o["_"+p]?o["_"+p]:s+c,a.push(n),c=n.charAt(0),o["_"+h]=s+c,h++,s=n}r+=a.join("")})),JSON.parse(decodeURIComponent(escape(r)))},getDecompressMinified:function(){return'function decompress(r){var e="";return r.src.forEach(function(r){for(var o,c={},n=(r+"").split(""),a=n[0],t=a,s=[a],p=256,h=1;h<n.length;h++){var d=n[h].charCodeAt(0);o=d<256?n[h]:c["_"+d]?c["_"+d]:t+a,s.push(o),a=o.charAt(0),c["_"+p]=t+a,p++,t=o}e+=s.join("")}),JSON.parse(decodeURIComponent(escape(e)))}'}}}));