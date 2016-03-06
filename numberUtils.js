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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/has","dojo/number","dojo/i18n!dojo/cldr/nls/number","./kernel"],function(e,r,n,t){var l=function(e,r){return e-r},i={_reNumber:/^-?(\d+)(\.(\d+))?$/i,getDigits:function(e){var r=String(e),n=r.match(i._reNumber),t={integer:0,fractional:0};if(n&&n[1])t.integer=n[1].split("").length,t.fractional=n[3]?n[3].split("").length:0;else if(r.toLowerCase().indexOf("e")>-1){var l,o,a=r.split("e"),u=a[0],s=a[1];u&&s&&(u=Number(u),s=Number(s),o=s>0,o||(s=Math.abs(s)),l=i.getDigits(u),o?(l.integer+=s,s>l.fractional?l.fractional=0:l.fractional-=s):(l.fractional+=s,s>l.integer?l.integer=1:l.integer-=s),t=l)}return t},getFixedNumbers:function(e,r){var n,t;return n=Number(e.toFixed(r)),e>n?t=n+1/Math.pow(10,r):(t=n,n-=1/Math.pow(10,r)),n=Number(n.toFixed(r)),t=Number(t.toFixed(r)),[n,t]},getPctChange:function(e,r,n,t){var l,i,o,a={prev:null,next:null};return null!=n&&(l=e-n,i=r-n,o=i-l,a.prev=Math.floor(Math.abs(100*o/l))),null!=t&&(l=t-e,i=t-r,o=i-l,a.next=Math.floor(Math.abs(100*o/l))),a},round:function(e,r){var n,t,o,a,u,s,g,c,f,d,h,m=e.slice(0),p=r&&null!=r.tolerance?r.tolerance:2,b=r&&r.indexes,x=r&&null!=r.strictBounds?r.strictBounds:!1;if(b)b.sort(l);else for(b=[],c=0;c<m.length;c++)b.push(c);for(c=0;c<b.length;c++)if(h=b[c],n=m[h],t=0===h?null:m[h-1],o=h===m.length-1?null:m[h+1],a=i.getDigits(n),u=a.fractional){for(f=0,d=!1;u>=f&&!d;)g=i.getFixedNumbers(n,f),s=x&&0===c?g[1]:g[0],d=i.hasMinimalChange(n,s,t,o,p),f++;d&&(m[h]=s)}return m},hasMinimalChange:function(e,r,n,t,l){var o,a,u,s=i.getPctChange(e,r,n,t);return o=null==s.prev||s.prev<=l,a=null==s.next||s.next<=l,u=o&&a||s.prev+s.next<=2*l},_reAllZeros:new RegExp("\\"+n.decimal+"0+$","g"),_reSomeZeros:new RegExp("(\\d)0*$","g"),format:function(e,n){n=n||{places:20,round:-1};var t=r.format(e,n);return t&&(t=t.replace(i._reSomeZeros,"$1").replace(i._reAllZeros,"")),t}};return e("extend-esri")&&(t.numberUtils=i),i});