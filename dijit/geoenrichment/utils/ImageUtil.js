// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./UrlUtil"],(function(e,t,a){var r={base64DataToDataURL:function(e,t){if(/^data:image/.test(e))return e;if(!t){var a=atob(e.substr(0,16));t=r.getImageContentType(a)}return"data:"+(t=t||"image/png")+";base64,"+e},getImageContentType:function(e){return"ÿØÿ"===e.substr(0,3)&&"JFIF"===e.substr(6,4)?"image/jpeg":"PNG\r\n\n"===e.substr(0,8)?"image/png":"GIF89a"===e.substr(0,6)||"GIF87a"===e.substr(0,6)?"image/gif":void 0},base64DataFromDataURL:function(e){return 0==e.indexOf("data:")&&(e=e.substr(e.indexOf(",")+1)),e},getBase64DataIndex:function(e){var t=0==e.indexOf("data:")?e.indexOf(";base64,"):-1;return t>0?t+8:0},getContentType:function(e){var t=r.getBase64DataIndex(e);return t?e.substring(5,t-8):null},checkBase64FileSize:function(e,t){return r.getBase64FileSize(e)<=t},getBase64FileSize:function(e){return.75*e.length},imageToDataURL:function(e,t){t=t||{};var a=document.createElement("canvas"),r=a.getContext("2d");a.width=t.width||e.width,a.height=t.height||e.height;var i=t.opacity;null!=i&&!isNaN(i)&&i>=0&&i<1&&(r.globalAlpha=+i,t.format="image/png");var n=t.pos;return n?r.drawImage(e,n.x||0,n.y||0):r.drawImage(e,0,0,a.width,a.height),a.toDataURL(t.format)},imageFromUrl:function(t,r){var i=new e,n=new Image,o=function(){n.onload=n.onerror=null},g=function(e){r&&r.ignoreError?i.resolve(null):i.reject(e)};return 0!==t.indexOf("data:")&&r&&r.crossOrigin&&n.setAttribute("crossOrigin",r.crossOrigin),n.onload=function(){n.width&&n.height?i.resolve(n):g(new Error("Error of reading an image from URL.")),o()},n.onerror=function(e){g(e),o()},t=require.toUrl(t),/^http:/i.test(t)&&/^https/i.test(window.location.protocol)&&(t=a.toHttpsUrl(t)),n.src=t,i.promise},scaleImage:function(e,a){if("string"==typeof e)var i=r.base64DataToDataURL(e),n=r.getContentType(i),o=r.imageFromUrl(i);return t(o||e).then((function(e){var t=1,i=e.width,o=e.height;if(a.factor)t=a.factor;else if(a.maxDim){var g=Math.max(i,o);t=a.maxDim/g}else if(a.imageDim){var s=a.imageDim.w,m=a.imageDim.h;a.imageDim.preserveRatio?(t=Math.min(s/i,m/o),a.imageDim.reduceOnly&&t>1&&(t=1)):a.imageDim.reduceOnly?(i=Math.min(i,s),o=Math.min(o,m)):(i=s,o=m)}return r.imageToDataURL(e,{width:i*t,height:o*t,format:a.format||n,opacity:a.opacity})}))},getImageViewType:function(e,t){if(t>=1e3){var a=e/t;return Math.abs(a-2)<=.025?"360":a>2?"pano":null}return null}};return r}));