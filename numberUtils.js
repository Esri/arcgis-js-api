// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/has","dojo/number","dojo/i18n!dojo/cldr/nls/number","./kernel"],(function(e,r,n,t){var l=function(e,r){return e-r},i={_reNumber:/^-?(\d+)(\.(\d+))?$/i,getDigits:function(e){var r=String(e),n=r.match(i._reNumber),t={integer:0,fractional:0};if(n&&n[1])t.integer=n[1].split("").length,t.fractional=n[3]?n[3].split("").length:0;else if(r.toLowerCase().indexOf("e")>-1){var l,o,a=r.split("e"),u=a[0],s=a[1];u&&s&&(u=Number(u),(o=(s=Number(s))>0)||(s=Math.abs(s)),l=i.getDigits(u),o?(l.integer+=s,s>l.fractional?l.fractional=0:l.fractional-=s):(l.fractional+=s,s>l.integer?l.integer=1:l.integer-=s),t=l)}return t},getFixedNumbers:function(e,r){var n,t;return(n=Number(e.toFixed(r)))<e?t=n+1/Math.pow(10,r):(t=n,n-=1/Math.pow(10,r)),[n=Number(n.toFixed(r)),t=Number(t.toFixed(r))]},getPctChange:function(e,r,n,t){var l,i,o={prev:null,next:null};return null!=n&&(i=r-n-(l=e-n),o.prev=Math.floor(Math.abs(100*i/l))),null!=t&&(i=t-r-(l=t-e),o.next=Math.floor(Math.abs(100*i/l))),o},round:function(e,r){var n,t,o,a,u,s,g,c,f,d,h=e.slice(0),m=r&&null!=r.tolerance?r.tolerance:2,p=r&&r.indexes,b=!(!r||null==r.strictBounds)&&r.strictBounds;if(p)p.sort(l);else for(p=[],g=0;g<h.length;g++)p.push(g);for(g=0;g<p.length;g++)if(n=h[d=p[g]],t=0===d?null:h[d-1],o=d===h.length-1?null:h[d+1],a=i.getDigits(n).fractional){for(c=0,f=!1;c<=a&&!f;)s=i.getFixedNumbers(n,c),u=b&&0===g?s[1]:s[0],f=i.hasMinimalChange(n,u,t,o,m),c++;f&&(h[d]=u)}return h},hasMinimalChange:function(e,r,n,t,l){var o,a,u=i.getPctChange(e,r,n,t);return o=null==u.prev||u.prev<=l,a=null==u.next||u.next<=l,o&&a||u.prev+u.next<=2*l},_reAllZeros:new RegExp("\\"+n.decimal+"0+$","g"),_reSomeZeros:new RegExp("(\\d)0*$","g"),format:function(e,n){n=n||{places:20,round:-1};var t=r.format(e,n);return t&&(t=t.replace(i._reSomeZeros,"$1").replace(i._reAllZeros,"")),t}};return e("extend-esri")&&(t.numberUtils=i),i}));