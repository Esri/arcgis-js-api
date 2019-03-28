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

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","./ImageUtil","./UrlUtil"],function(t,n,r,e){var a={_infoCache:{},getImageInfo:function(e,i,o){var u=o&&o.sizeLimit||1e5;return a._infoCache[e]||(a._infoCache[e]=r.imageFromUrl(e).then(function(t){var n=r.imageToDataURL(t),i={dataUrl:n,contentType:r.getContentType(n),width:t.width,height:t.height};return setTimeout(function(){a._infoCache[e]=i}),i})),n(a._infoCache[e],function(r){return r=t.mixin({},r),i&&(r.filename=function(){return i&&i.replace(/\.\w+$/,".png").toLowerCase()}()),function(r){return n(a._processDataUrl(r,u),function(e){if(e&&e.dataUrl){var a=t.mixin({},r);return a.dataUrl=e.dataUrl,a.width*=e.factor,a.height*=e.factor,n(a)}return n(r)})}(r)})},getRemoteImageDataUrl:function(t,r){function i(n){var r=t;if(n){var i=e.getProxyUrl();i&&(r=i+"?"+r)}return a.getImageInfo(r)}function o(t){return n(a._processDataUrl(t,u),function(t){return t&&t.dataUrl||t})}var u=r&&r.sizeLimit||1e5;return n(i(!1),function(t){return o(t)},function(){return n(i(!0),function(t){return o(t)},function(){return t})})},_processDataUrl:function(t,e){var a=Math.max(t.width,t.height);if(a<=e)return t.dataUrl;var i=e/a;return n(r.scaleImage(t.dataUrl,{factor:i}),function(t){return{dataUrl:t,factor:i}})}};return a});