// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/has","dojo/number","dojo/i18n!dojo/cldr/nls/number","./kernel"],function(e,r,n,t){var l=function(e,r){return e-r},a={_reNumber:/^-?(\d+)(\.(\d+))?$/i,getDigits:function(e){var r=String(e),n=r.match(a._reNumber),t={integer:0,fractional:0};if(n&&n[1])t.integer=n[1].split("").length,t.fractional=n[3]?n[3].split("").length:0;else if(r.toLowerCase().indexOf("e")>-1){var l,i,o=r.split("e"),u=o[0],g=o[1];u&&g&&(u=Number(u),g=Number(g),i=g>0,i||(g=Math.abs(g)),l=a.getDigits(u),i?(l.integer+=g,g>l.fractional?l.fractional=0:l.fractional-=g):(l.fractional+=g,g>l.integer?l.integer=1:l.integer-=g),t=l)}return t},getFixedNumbers:function(e,r){var n,t;return n=Number(e.toFixed(r)),t=e>n?n+1/Math.pow(10,r):n-1/Math.pow(10,r),[n,t]},getPctChange:function(e,r,n,t){var l,a,i,o={prev:null,next:null};return null!=n&&(l=e-n,a=r-n,i=a-l,o.prev=Math.floor(Math.abs(100*i/l))),null!=t&&(l=t-e,a=t-r,i=a-l,o.next=Math.floor(Math.abs(100*i/l))),o},round:function(e,r){var n,t,i,o,u,g,s,f,c,h,d,m=e.slice(0),p=r&&null!=r.tolerance?r.tolerance:2,b=r&&r.indexes;if(b)b.sort(l);else for(b=[],f=0;f<m.length;f++)b.push(f);for(f=0;f<b.length;f++)if(d=b[f],n=m[d],t=0===d?null:m[d-1],i=d===m.length-1?null:m[d+1],o=a.getDigits(n),u=o.fractional){for(c=0,h=!1;u>=c&&!h;)s=a.getFixedNumbers(n,c),g=s[0],h=a.hasMinimalChange(n,g,t,i,p),c++;h&&(m[d]=g)}return m},hasMinimalChange:function(e,r,n,t,l){var i,o,u,g=a.getPctChange(e,r,n,t);return i=null==g.prev||g.prev<=l,o=null==g.next||g.next<=l,u=i&&o||g.prev+g.next<=2*l},_reAllZeros:new RegExp("\\"+n.decimal+"0+$","g"),_reSomeZeros:new RegExp("(\\d)0*$","g"),format:function(e,n){n=n||{places:20,round:-1};var t=r.format(e,n);return t&&(t=t.replace(a._reSomeZeros,"$1").replace(a._reAllZeros,"")),t}};return e("extend-esri")&&(t.numberUtils=a),a});