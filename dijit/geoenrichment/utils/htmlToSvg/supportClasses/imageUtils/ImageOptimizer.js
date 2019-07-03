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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],function(e,n,t,i){function r(e){return e.length}var o={},a=/["']data:image.*?["']/gi,u={analyze:function(n,t){function o(e){var n={text:e,images:(e.match(a)||[]).map(function(e){return e.replace(/["']/g,"")}),size:r(e),totalImagesSize:0,noImageSize:0,newText:"",newSize:0},t=0,i=e;return n.images.forEach(function(e){t+=r(e),i=i.replace(e,"")}),n.totalImagesSize=t,n.noImageSize=r(i),u+=n.size,c+=n.noImageSize,s+=n.totalImagesSize,n}var u=0,c=0,s=0,f=[];return e(i.executeFunctions(n.map(function(e){return function(){var n=o(e);f.push(n)}}),0),function(){var e=1;return u>t&&(e=Math.sqrt((t-c)/s)),{infos:f,factor:e,sumSize:u}})}};return o.optimizeSize=function(i,o){return o?e(u.analyze(i,o),function(a){function u(e){c++,a.infos.forEach(function(e){e.newText=e.text,e.newSize=e.size});var i;return n(a.infos.map(function(o){return n(o.images.map(function(n){return i=!0,t.scaleImage(n,{factor:a.factor*e}).then(function(e){o.newText=o.newText.replace(n,e),o.newSize=r(o.newText)})})).then(function(){return o.newText})})).then(function(n){var t=0;return a.infos.forEach(function(e){t+=e.newSize}),i?t<=o?(console.log("SVG string has been optimized "+a.sumSize/1e6+" => "+t/1e6+" Mb with "+c+" iteration(s)."),n):u(e-.1):(console.log("SVG can't be optimized."),n)})}if(a.factor>=1)return e(i);var c=0;return u(.9)}):e(i)},o});