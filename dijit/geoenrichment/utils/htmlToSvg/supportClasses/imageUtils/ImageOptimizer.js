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

define(["dojo/when","dojo/promise/all","../../../ImageUtil"],function(e,n,t){function i(e){return e.length}var a={},r=/["']data:image.*?["']/gi,o={analyze:function(e,n){function t(e){var n={text:e,images:(e.match(r)||[]).map(function(e){return e.replace(/["']/g,"")}),size:i(e),totalImagesSize:0,noImageSize:0,newText:"",newSize:0},t=0,f=e;return n.images.forEach(function(e){t+=i(e),f=f.replace(e,"")}),n.totalImagesSize=t,n.noImageSize=i(f),a+=n.size,o+=n.noImageSize,u+=n.totalImagesSize,n}var a=0,o=0,u=0,f=e.map(t),c=1;return a>n&&(c=Math.sqrt((n-o)/u)),{infos:f,factor:c,sumSize:a}}};return a.optimizeSize=function(a,r){function u(e){return c++,f.infos.forEach(function(e){e.newText=e.text,e.newSize=e.size}),n(f.infos.map(function(a){return n(a.images.map(function(n){return t.scaleImage(n,{factor:f.factor*e}).then(function(e){a.newText=a.newText.replace(n,e),a.newSize=i(a.newText)})})).then(function(){return a.newText})})).then(function(n){var t=0;return f.infos.forEach(function(e){t+=e.newSize}),r>=t?(console.log("SVG string has been optimized "+f.sumSize/1e6+" => "+t/1e6+" Mb with "+c+" iteration(s)."),n):u(e-.1)})}if(!r)return e(a);var f=o.analyze(a,r);if(f.factor>=1)return e(a);var c=0;return u(.9)},a});