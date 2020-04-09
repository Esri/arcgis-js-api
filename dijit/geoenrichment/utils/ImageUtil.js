// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./UrlUtil"],(function(e,t,a){var i={base64DataToDataURL:function(e,t){if(/^data:image/.test(e))return e;if(!t){var a=atob(e.substr(0,16));t=i.getImageContentType(a)}return"data:"+(t=t||"image/png")+";base64,"+e},getImageContentType:function(e){return"ÿØÿ"===e.substr(0,3)&&"JFIF"===e.substr(6,4)?"image/jpeg":"PNG\r\n\n"===e.substr(0,8)?"image/png":"GIF89a"===e.substr(0,6)||"GIF87a"===e.substr(0,6)?"image/gif":void 0},base64DataFromDataURL:function(e){return 0==e.indexOf("data:")&&(e=e.substr(e.indexOf(",")+1)),e},getBase64DataIndex:function(e){var t=0==e.indexOf("data:")?e.indexOf(";base64,"):-1;return t>0?t+8:0},getContentType:function(e){var t=i.getBase64DataIndex(e);return t?e.substring(5,t-8):null},checkBase64FileSize:function(e,t){return i.getBase64FileSize(e)<=t},getBase64FileSize:function(e){return.75*e.length},imageToDataURL:function(e,t){t=t||{};var a=document.createElement("canvas"),i=a.getContext("2d");a.width=t.width||e.width,a.height=t.height||e.height;var r=t.opacity;null!=r&&!isNaN(r)&&r>=0&&r<1&&(i.globalAlpha=+r,t.format="image/png");var n=t.pos;return n?i.drawImage(e,n.x||0,n.y||0):i.drawImage(e,0,0,a.width,a.height),a.toDataURL(t.format)},imageFromUrl:function(t,i){var r=new e,n=new Image,o=function(){n.onload=n.onerror=null},g=function(e){i&&i.ignoreError?r.resolve(null):r.reject(e)};return 0!==t.indexOf("data:")&&i&&i.crossOrigin&&n.setAttribute("crossOrigin",i.crossOrigin),n.onload=function(){n.width&&n.height?r.resolve(n):g(new Error("Error of reading an image from URL.")),o()},n.onerror=function(e){g(e),o()},t=require.toUrl(t),/^http:/i.test(t)&&/^https/i.test(window.location.protocol)&&(t=a.toHttpsUrl(t)),n.src=t,r.promise},scaleImage:function(e,a){if("string"==typeof e)var r=i.base64DataToDataURL(e),n=i.getContentType(r),o=i.imageFromUrl(r);return t(o||e).then((function(e){var t=1,r=e.width,o=e.height;if(a.factor)t=a.factor;else if(a.maxDim){var g=Math.max(r,o);t=a.maxDim/g}else if(a.imageDim){var s=a.imageDim.w,m=a.imageDim.h;a.imageDim.preserveRatio?(t=Math.min(s/r,m/o),a.imageDim.reduceOnly&&t>1&&(t=1)):a.imageDim.reduceOnly?(r=Math.min(r,s),o=Math.min(o,m)):(r=s,o=m)}return i.imageToDataURL(e,{width:r*t,height:o*t,format:a.format||n,opacity:a.opacity})}))}};return i}));