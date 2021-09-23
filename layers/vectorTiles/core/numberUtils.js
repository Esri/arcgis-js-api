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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/number","dojo/i18n!dojo/cldr/nls/number"],(function(n,e){var r=/^-?(\d+)(\.(\d+))?$/i,t=new RegExp("\\"+e.decimal+"0+$","g"),i=new RegExp("(\\d)0*$","g");function o(n,e){return n-e}function l(n,e){var r,t;return(r=Number(n.toFixed(e)))<n?t=r+1/Math.pow(10,e):(t=r,r-=1/Math.pow(10,e)),[r=Number(r.toFixed(e)),t=Number(t.toFixed(e))]}function u(n,e,r,t,i){var o,l,u=a.percentChange(n,e,r,t);return o=null==u.previous||u.previous<=i,l=null==u.next||u.next<=i,o&&l||u.previous+u.next<=2*i}var a={numDigits:function(n){var e=String(n),t=e.match(r),i={integer:0,fractional:0};if(t&&t[1])i.integer=t[1].split("").length,i.fractional=t[3]?t[3].split("").length:0;else if(e.toLowerCase().indexOf("e")>-1){var o,l,u=e.split("e"),c=u[0],f=u[1];c&&f&&(c=Number(c),(l=(f=Number(f))>0)||(f=Math.abs(f)),o=a.numDigits(c),l?(o.integer+=f,f>o.fractional?o.fractional=0:o.fractional-=f):(o.fractional+=f,f>o.integer?o.integer=1:o.integer-=f),i=o)}return i},percentChange:function(n,e,r,t){var i,o,l={previous:null,next:null};return null!=r&&(o=e-r-(i=n-r),l.previous=Math.floor(Math.abs(100*o/i))),null!=t&&(o=t-e-(i=t-n),l.next=Math.floor(Math.abs(100*o/i))),l},round:function(n,e){var r,t,i,c,f,s,g,d,p,h,m=n.slice(0),v=e&&null!=e.tolerance?e.tolerance:2,x=e&&e.indexes,b=!(!e||null==e.strictBounds)&&e.strictBounds;if(x)x.sort(o);else for(x=[],g=0;g<m.length;g++)x.push(g);for(g=0;g<x.length;g++)if(r=m[h=x[g]],t=0===h?null:m[h-1],i=h===m.length-1?null:m[h+1],c=a.numDigits(r).fractional){for(d=0,p=!1;d<=c&&!p;)s=l(r,d),p=u(r,f=b&&0===g?s[1]:s[0],t,i,v),d++;p&&(m[h]=f)}return m},format:function(e,r){r=r||{places:20,round:-1};var o=n.format(e,r);return o&&(o=o.replace(i,"$1").replace(t,"")),o}};return a}));