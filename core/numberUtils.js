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

define(["dojo/number","dojo/i18n!dojo/cldr/nls/number"],function(n,e){function r(n,e){return n-e}function t(n,e){var r,t;return r=Number(n.toFixed(e)),n>r?t=r+1/Math.pow(10,e):(t=r,r-=1/Math.pow(10,e)),r=Number(r.toFixed(e)),t=Number(t.toFixed(e)),[r,t]}function i(n,e,r,t,i){var o,l,u,c=a.percentChange(n,e,r,t);return o=null==c.previous||c.previous<=i,l=null==c.next||c.next<=i,u=o&&l||c.previous+c.next<=2*i}var o=/^-?(\d+)(\.(\d+))?$/i,l=new RegExp("\\"+e.decimal+"0+$","g"),u=new RegExp("(\\d)0*$","g"),a={numDigits:function(n){var e=String(n),r=e.match(o),t={integer:0,fractional:0};if(r&&r[1])t.integer=r[1].split("").length,t.fractional=r[3]?r[3].split("").length:0;else if(e.toLowerCase().indexOf("e")>-1){var i,l,u=e.split("e"),c=u[0],f=u[1];c&&f&&(c=Number(c),f=Number(f),l=f>0,l||(f=Math.abs(f)),i=a.numDigits(c),l?(i.integer+=f,f>i.fractional?i.fractional=0:i.fractional-=f):(i.fractional+=f,f>i.integer?i.integer=1:i.integer-=f),t=i)}return t},percentChange:function(n,e,r,t){var i,o,l,u={previous:null,next:null};return null!=r&&(i=n-r,o=e-r,l=o-i,u.previous=Math.floor(Math.abs(100*l/i))),null!=t&&(i=t-n,o=t-e,l=o-i,u.next=Math.floor(Math.abs(100*l/i))),u},round:function(n,e){var o,l,u,c,f,s,g,d,p,h,m,v=n.slice(0),x=e&&null!=e.tolerance?e.tolerance:2,b=e&&e.indexes,M=e&&null!=e.strictBounds?e.strictBounds:!1;if(b)b.sort(r);else for(b=[],d=0;d<v.length;d++)b.push(d);for(d=0;d<b.length;d++)if(m=b[d],o=v[m],l=0===m?null:v[m-1],u=m===v.length-1?null:v[m+1],c=a.numDigits(o),f=c.fractional){for(p=0,h=!1;f>=p&&!h;)g=t(o,p),s=M&&0===d?g[1]:g[0],h=i(o,s,l,u,x),p++;h&&(v[m]=s)}return v},format:function(e,r){r=r||{places:20,round:-1};var t=n.format(e,r);return t&&(t=t.replace(u,"$1").replace(l,"")),t}};return a});