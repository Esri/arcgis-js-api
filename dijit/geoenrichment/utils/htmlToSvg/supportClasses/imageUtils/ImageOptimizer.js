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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],(function(e,n,t,i){var r={},o=/["']data:image.*?["']/gi;function a(e){return e.length}var u=function(n,t){var r=0,u=0,c=0;var s=[];return e(i.executeFunctions(n.map((function(e){return function(){var n=function(e){var n={text:e,images:(e.match(o)||[]).map((function(e){return e.replace(/["']/g,"")})),size:a(e),totalImagesSize:0,noImageSize:0,newText:"",newSize:0},t=0,i=e;return n.images.forEach((function(e){t+=a(e),i=i.replace(e,"")})),n.totalImagesSize=t,n.noImageSize=a(i),r+=n.size,u+=n.noImageSize,c+=n.totalImagesSize,n}(e);s.push(n)}})),0),(function(){var e=1;return r>t&&(e=Math.sqrt((t-u)/c)),{infos:s,factor:e,sumSize:r}}))};return r.optimizeSize=function(i,r){return r?e(u(i,r),(function(o){if(o.factor>=1)return e(i);var u=0;return function e(i){var c;return u++,o.infos.forEach((function(e){e.newText=e.text,e.newSize=e.size})),n(o.infos.map((function(e){return n(e.images.map((function(n){return c=!0,t.scaleImage(n,{factor:o.factor*i}).then((function(t){e.newText=e.newText.replace(n,t),e.newSize=a(e.newText)}))}))).then((function(){return e.newText}))}))).then((function(n){var t=0;return o.infos.forEach((function(e){t+=e.newSize})),c?t<=r?(console.log("SVG string has been optimized "+o.sumSize/1e6+" => "+t/1e6+" Mb with "+u+" iteration(s)."),n):e(i-.1):(console.log("SVG can't be optimized."),n)}))}(.9)})):e(i)},r}));