// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","dojo/dom-construct","dojo/when"],function(e,t,a,r){var n={base64DataToDataURL:function(e,t){if(/^data:image/.test(e))return e;if(!t){var a=atob(e.substr(0,16));t=n.getImageContentType(a)}return t=t||"image/png","data:"+t+";base64,"+e},getImageContentType:function(e){return"ÿØÿ"==e.substr(0,3)&&"JFIF"==e.substr(6,4)?"image/jpeg":"PNG\r\n\n"==e.substr(0,8)?"image/png":"GIF89a"==e.substr(0,6)||"GIF87a"==e.substr(0,6)?"image/gif":void 0},base64DataFromDataURL:function(e){return 0==e.indexOf("data:")&&(e=e.substr(e.indexOf(",")+1)),e},getBase64DataIndex:function(e){var t=0==e.indexOf("data:")?e.indexOf(";base64,"):-1;return t>0?t+8:0},getContentType:function(e){var t=n.getBase64DataIndex(e);return t?e.substring(5,t-8):null},checkBase64FileSize:function(e,t){return n.getBase64FileSize(e)<=t},getBase64FileSize:function(e){return.75*e.length},imageToDataURL:function(e,t){t=t||{};var a=document.createElement("canvas"),r=a.getContext("2d");a.width=t.width||e.width,a.height=t.height||e.height;var n=t.opacity;null!=n&&!isNaN(n)&&n>=0&&1>n&&(r.globalAlpha=+n,t.format="image/png");var i=t.pos;return i?r.drawImage(e,i.x||0,i.y||0):r.drawImage(e,0,0,a.width,a.height),a.toDataURL(t.format)},imageFromUrl:function(e){var r=new t,n=new Image;return 0!==e.indexOf("data:")&&n.setAttribute("crossOrigin","anonymous"),n.onload=function(){n.width&&n.height?r.resolve(n):r.reject(new Error("Error of reading an image from URL.")),a.destroy(n)},n.onerror=function(e){r.reject(e),a.destroy(n)},n.src=require.toUrl(e),r.promise},scaleImage:function(e,t){if("string"==typeof e)var a=n.base64DataToDataURL(e),i=n.getContentType(a),o=n.imageFromUrl(a);return r(o||e).then(function(e){var a=1,r=e.width,o=e.height;if(t.factor)a=t.factor;else if(t.maxDim){var g=Math.max(r,o);a=t.maxDim/g}else if(t.imageDim){var m=t.imageDim.w,s=t.imageDim.h;t.imageDim.preserveRatio?(a=Math.min(m/r,s/o),t.imageDim.reduceOnly&&a>1&&(a=1)):t.imageDim.reduceOnly?(r=Math.min(r,m),o=Math.min(o,s)):(r=m,o=s)}return n.imageToDataURL(e,{width:r*a,height:o*a,format:t.format||i,opacity:t.opacity})})}};return n});