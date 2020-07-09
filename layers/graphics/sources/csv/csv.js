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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib"],(function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var t=/^\s*"([\S\s]*)"\s*$/,u=/""/g,a=[","," ",";","|","\t"];function s(e,r){for(var n={},t=e.length,u=0;u<t;u++)n[e[u]]=r[u];return n}function i(e,r,t){var u,a,s;return n.__generator(this,(function(n){switch(n.label){case 0:u=0,n.label=1;case 1:return u<=e.length?(a=e.indexOf(r,u),s=e.substring(u,a>-1?a:void 0),u+=s.length+1,t&&!s.trim()?[3,3]:[4,s]):[3,4];case 2:n.sent(),n.label=3;case 3:return[3,1];case 4:return[2]}}))}function l(e,r){return i(e,r,!1)}function c(e){var r=0,n=0;for(n=e.indexOf('"',n);n>=0;)r++,n=e.indexOf('"',n+1);return r}r.readRows=function(e){return i(e,"\n",!0)},r.readRowParts=l,r.inferDelimiter=function(e){for(var r=e.trim(),n=0,t="",u=0,s=a;u<s.length;u++){var i=s[u],l=r.split(i).length;l>n&&(n=l,t=i)}return""===t?null:t},r.parseRows=function(e,r,a){var i,o,f,d,h,v,b,g,p,x;return n.__generator(this,(function(n){switch(n.label){case 0:i="",o="",f=0,d=[],n.label=1;case 1:if(h=e.next(),v=h.value,h.done)return[2];b=l(v,a);e:for(;g=b.next(),p=g.value,!g.done;)if(i+=o+p,o="",(f+=c(p))%2==0){if(f>0){if(!(x=t.exec(i)))return d=[],i="",f=0,[3,1];d.push(x[1].replace(u,'"'))}else d.push(i);i="",f=0}else o=a;return 0!==f?[3,3]:[4,s(r,d)];case 2:return n.sent(),d=[],[3,4];case 3:o="\n",n.label=4;case 4:return[3,1];case 5:return[2]}}))}}));