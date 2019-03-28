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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","dojo/dom-construct","esri/dijit/geoenrichment/when"],function(e,t,a){var i={base64DataToDataURL:function(e,t){if(/^data:image/.test(e))return e;if(!t){var a=atob(e.substr(0,16));t=i.getImageContentType(a)}return"data:"+(t=t||"image/png")+";base64,"+e},getImageContentType:function(e){return"ÿØÿ"==e.substr(0,3)&&"JFIF"==e.substr(6,4)?"image/jpeg":"PNG\r\n\n"==e.substr(0,8)?"image/png":"GIF89a"==e.substr(0,6)||"GIF87a"==e.substr(0,6)?"image/gif":void 0},base64DataFromDataURL:function(e){return 0==e.indexOf("data:")&&(e=e.substr(e.indexOf(",")+1)),e},getBase64DataIndex:function(e){var t=0==e.indexOf("data:")?e.indexOf(";base64,"):-1;return t>0?t+8:0},getContentType:function(e){var t=i.getBase64DataIndex(e);return t?e.substring(5,t-8):null},checkBase64FileSize:function(e,t){return i.getBase64FileSize(e)<=t},getBase64FileSize:function(e){return.75*e.length},imageToDataURL:function(e,t){t=t||{};var a=document.createElement("canvas"),i=a.getContext("2d");a.width=t.width||e.width,a.height=t.height||e.height;var r=t.opacity;null!=r&&!isNaN(r)&&r>=0&&r<1&&(i.globalAlpha=+r,t.format="image/png");var n=t.pos;return n?i.drawImage(e,n.x||0,n.y||0):i.drawImage(e,0,0,a.width,a.height),a.toDataURL(t.format)},imageFromUrl:function(a){var i=new e,r=new Image;return 0!==a.indexOf("data:")&&r.setAttribute("crossOrigin","anonymous"),r.onload=function(){r.width&&r.height?i.resolve(r):i.reject(new Error("Error of reading an image from URL.")),t.destroy(r)},r.onerror=function(e){i.reject(e),t.destroy(r)},r.src=require.toUrl(a),i.promise},scaleImage:function(e,t){if("string"==typeof e)var r=i.base64DataToDataURL(e),n=i.getContentType(r),o=i.imageFromUrl(r);return a(o||e).then(function(e){var a=1,r=e.width,o=e.height;if(t.factor)a=t.factor;else if(t.maxDim){var g=Math.max(r,o);a=t.maxDim/g}else if(t.imageDim){var m=t.imageDim.w,s=t.imageDim.h;t.imageDim.preserveRatio?(a=Math.min(m/r,s/o),t.imageDim.reduceOnly&&a>1&&(a=1)):t.imageDim.reduceOnly?(r=Math.min(r,m),o=Math.min(o,s)):(r=m,o=s)}return i.imageToDataURL(e,{width:r*a,height:o*a,format:t.format||n,opacity:t.opacity})})}};return i});