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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/number","dojo/i18n!dojo/cldr/nls/number"],function(e,r){var n=function(e,r){return e-r},t={_reNumber:/^-?(\d+)(\.(\d+))?$/i,getDigits:function(e){var r=String(e),n=r.match(t._reNumber),l={integer:0,fractional:0};if(n&&n[1])l.integer=n[1].split("").length,l.fractional=n[3]?n[3].split("").length:0;else if(r.toLowerCase().indexOf("e")>-1){var i,a,o=r.split("e"),u=o[0],g=o[1];u&&g&&(u=Number(u),g=Number(g),a=g>0,a||(g=Math.abs(g)),i=t.getDigits(u),a?(i.integer+=g,g>i.fractional?i.fractional=0:i.fractional-=g):(i.fractional+=g,g>i.integer?i.integer=1:i.integer-=g),l=i)}return l},getFixedNumbers:function(e,r){var n,t;return n=Number(e.toFixed(r)),e>n?t=n+1/Math.pow(10,r):(t=n,n-=1/Math.pow(10,r)),n=Number(n.toFixed(r)),t=Number(t.toFixed(r)),[n,t]},getPctChange:function(e,r,n,t){var l,i,a,o={prev:null,next:null};return null!=n&&(l=e-n,i=r-n,a=i-l,o.prev=Math.floor(Math.abs(100*a/l))),null!=t&&(l=t-e,i=t-r,a=i-l,o.next=Math.floor(Math.abs(100*a/l))),o},round:function(e,r){var l,i,a,o,u,g,s,c,f,d,h,m=e.slice(0),p=r&&null!=r.tolerance?r.tolerance:2,b=r&&r.indexes,x=r&&null!=r.strictBounds?r.strictBounds:!1;if(b)b.sort(n);else for(b=[],c=0;c<m.length;c++)b.push(c);for(c=0;c<b.length;c++)if(h=b[c],l=m[h],i=0===h?null:m[h-1],a=h===m.length-1?null:m[h+1],o=t.getDigits(l),u=o.fractional){for(f=0,d=!1;u>=f&&!d;)s=t.getFixedNumbers(l,f),g=x&&0===c?s[1]:s[0],d=t.hasMinimalChange(l,g,i,a,p),f++;d&&(m[h]=g)}return m},hasMinimalChange:function(e,r,n,l,i){var a,o,u,g=t.getPctChange(e,r,n,l);return a=null==g.prev||g.prev<=i,o=null==g.next||g.next<=i,u=a&&o||g.prev+g.next<=2*i},_reAllZeros:new RegExp("\\"+r.decimal+"0+$","g"),_reSomeZeros:new RegExp("(\\d)0*$","g"),format:function(r,n){n=n||{places:20,round:-1};var l=e.format(r,n);return l&&(l=l.replace(t._reSomeZeros,"$1").replace(t._reAllZeros,"")),l}};return t});