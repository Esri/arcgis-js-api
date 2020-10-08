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

define(["require","exports"],(function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.parse=void 0;function e(t,n){for(var e,r=String.fromCharCode.apply(null,t.subarray(0,Math.min(300,t.length))).split("\n"),a=Math.min(r.length,7),i={},o=0,s=0;s<a;s++)if(r[s].length<4)o=o+r[s].length+1;else if("content"===r[s].slice(0,7).toLowerCase()){if(o=o+r[s].length+1,-1===r[s].indexOf(":"))continue;var l=r[s].substring(0,r[s].indexOf(":")).trim(),c=r[s].substring(r[s].indexOf(":")+1).trim();switch(l.toLowerCase()){case"content-type":i.contentType=c;break;case"content-description":i.contentDescription=c;break;case"content-transfer-encoding":i.contentTransferEncoding=c;break;case"content-id":i.contentID=c;break;case"content-disposition":i.contentDisposition=c;break;case"content-location":i.contentLocation=c}}else{if(i.contentDisposition&&r[s].length>=4&&(null===(e=i.contentType)||void 0===e?void 0:e.toLowerCase().indexOf("image"))>-1){var u=new ArrayBuffer(t.length-o);new Uint8Array(u).set(t.subarray(o,t.length)),i.contentData=u;break}if((""===n.start||i.contentID===n.start)&&i.contentType){if(i.contentType.indexOf("text")>-1){i.contentData=String.fromCharCode.apply(null,t.subarray(o,t.length));break}i.contentData=t.subarray(o,t.length)}}return i}n.parse=function(t){var n=function(t){var n,e=null===(n=t.getHeader("Content-Type"))||void 0===n?void 0:n.split(";"),r=null==e?void 0:e[0];if("multipart/related"!==r&&"multipart/mixed"!==r)return null;for(var a={boundary:"",start:"",type:""},i=1;i<e.length;i++){var o=e[i].split("=");a[o[0].trim()]=o[1].trim().slice(1,o[1].length-1)}return a}(t);return n?{isMultipart:!0,data:function(t,n){for(var r="--"+n.boundary,a=[],i=0;i<r.length;i++)a.push(r.charCodeAt(i));var o=[],s="\n--"+n.boundary+"--";for(i=0;i<s.length;i++)o.push(s.charCodeAt(i));var l=[10],c=[13,10],u=[],f=a.length,d=new Uint8Array(t),h=Math.min(1e4,d.length-f),p=0,g=0;for(i=0;i<h;i++){for(g=0;g<f&&d[i+g]===a[g];g++);g===f&&(p&&u.push(e(d.subarray(p,i),n)),d[(i+=f-1)+1]===l[0]?i+=1:d[i+1]===c[0]&&d[i+2]===c[1]&&(i+=2),p=i+1)}var y=o.length;for(i=d.length-y-10;i<d.length-y;i++){for(g=0;g<y&&d[i+g]===o[g];g++);if(g===y){u.push(e(d.subarray(p,i),n));break}}return u}(t.data,n)}:{isMultipart:!1,data:null}}}));