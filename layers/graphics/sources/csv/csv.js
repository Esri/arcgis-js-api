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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib"],(function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parseRows=r.inferDelimiter=r.readRowParts=r.readRows=void 0;var t=/^\s*"([\S\s]*)"\s*$/,s=/""/g,a=[","," ",";","|","\t"];function i(e,r){for(var n={},t=e.length,s=0;s<t;s++)n[e[s]]=r[s];return n}function u(e,r,t){var s,a,i;return n.__generator(this,(function(n){switch(n.label){case 0:s=0,n.label=1;case 1:return s<=e.length?(a=e.indexOf(r,s),i=e.substring(s,a>-1?a:void 0),s+=i.length+1,t&&!i.trim()?[3,3]:[4,i]):[3,4];case 2:n.sent(),n.label=3;case 3:return[3,1];case 4:return[2]}}))}function l(e,r){return u(e,r,!1)}function o(e){var r=0,n=0;for(n=e.indexOf('"',n);n>=0;)r++,n=e.indexOf('"',n+1);return r}r.readRows=function(e){return u(e,"\n",!0)},r.readRowParts=l,r.inferDelimiter=function(e){for(var r=e.trim(),n=0,t="",s=0,i=a;s<i.length;s++){var u=i[s],l=r.split(u).length;l>n&&(n=l,t=u)}return""===t?null:t},r.parseRows=function(e,r,a){var u,c,f,d,v,h,b,g,p,w;return n.__generator(this,(function(n){switch(n.label){case 0:u="",c="",f=0,d=[],n.label=1;case 1:if(v=e.next(),h=v.value,v.done)return[2];b=l(h,a);e:for(;g=b.next(),p=g.value,!g.done;)if(u+=c+p,c="",(f+=o(p))%2==0){if(f>0){if(!(w=t.exec(u)))return d=[],u="",f=0,[3,1];d.push(w[1].replace(s,'"'))}else d.push(u);u="",f=0}else c=a;return 0!==f?[3,3]:[4,i(r,d)];case 2:return n.sent(),d=[],[3,4];case 3:c="\n",n.label=4;case 4:return[3,1];case 5:return[2]}}))}}));