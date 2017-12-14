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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/when","dojo/promise/all","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","../_Logger"],function(e,n,t,i,r){function a(e){return e.length}var o={},u=/["']data:image.*?["']/gi,c={analyze:function(n,t){function r(e){var n={text:e,images:(e.match(u)||[]).map(function(e){return e.replace(/["']/g,"")}),size:a(e),totalImagesSize:0,noImageSize:0,newText:"",newSize:0},t=0,i=e;return n.images.forEach(function(e){t+=a(e),i=i.replace(e,"")}),n.totalImagesSize=t,n.noImageSize=a(i),o+=n.size,c+=n.noImageSize,f+=n.totalImagesSize,n}var o=0,c=0,f=0,s=[];return e(i.executeFunctions(n.map(function(e){return function(){var n=r(e);s.push(n)}}),0),function(){var e=1;return o>t&&(e=Math.sqrt((t-c)/f)),{infos:s,factor:e,sumSize:o}})}},f=.9,s=.1;return o.optimizeSize=function(i,o){return o?e(c.analyze(i,o),function(u){function c(e){m++,u.infos.forEach(function(e){e.newText=e.text,e.newSize=e.size});var i;return n(u.infos.map(function(r){return n(r.images.map(function(n){return i=!0,t.scaleImage(n,{factor:u.factor*e}).then(function(e){r.newText=r.newText.replace(n,e),r.newSize=a(r.newText)})})).then(function(){return r.newText})})).then(function(n){var t=0;return u.infos.forEach(function(e){t+=e.newSize}),i?o>=t?(r.log("SVG string has been optimized "+u.sumSize/1e6+" => "+t/1e6+" Mb with "+m+" iteration(s)."),n):c(e-s):(r.log("SVG can't be optimized."),n)})}if(u.factor>=1)return e(i);var m=0;return c(f)}):e(i)},o});