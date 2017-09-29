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

define(["dojo/_base/lang","dojo/when","./ImageUtil","./UrlUtil"],function(t,r,n,e){var a={_infoCache:{},getImageInfo:function(e,i,o){function u(){return i&&i.replace(/\.\w+$/,".png").toLowerCase()}function f(n){return r(a._processDataUrl(n,c),function(e){if(e&&e.dataUrl){var a=t.mixin({},n);return a.dataUrl=e.dataUrl,a.width*=e.factor,a.height*=e.factor,r(a)}return r(n)})}var c=o&&o.sizeLimit||1e5,l=a._infoCache[e];if(l){var g=t.mixin({},l);return i&&(g.filename=u()),f(g)}return n.imageFromUrl(e).then(function(t){var r=n.imageToDataURL(t),o={dataUrl:r,contentType:n.getContentType(r),width:t.width,height:t.height};return i&&(o.filename=u()),a._infoCache[e]=o,f(o)})},getRemoteImageDataUrl:function(t,n){function i(r){var n=t;if(r){var i=e.getProxyUrl();i&&(n=i+"?"+n)}return a.getImageInfo(n)}function o(t){return r(a._processDataUrl(t,u),function(t){return t&&t.dataUrl||t})}var u=n&&n.sizeLimit||1e5;return r(i(!1),function(t){return o(t)},function(){return r(i(!0),function(t){return o(t)},function(){return t})})},_processDataUrl:function(t,e){var a=Math.max(t.width,t.height);if(e>=a)return t.dataUrl;var i=e/a;return r(n.scaleImage(t.dataUrl,{factor:i}),function(t){return{dataUrl:t,factor:i}})}};return a});