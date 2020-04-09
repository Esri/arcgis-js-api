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

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","./ImageUtil","./UrlUtil"],(function(t,e,n,r){var a=/^data:/i,i={_infoCache:{},getImageInfo:function(r,a,o){var u=o&&o.sizeLimit||1e5;return i._infoCache[r]||(i._infoCache[r]=n.imageFromUrl(r,o).then((function(t){var e=n.imageToDataURL(t),a={dataUrl:e,contentType:n.getContentType(e),width:t.width,height:t.height};return setTimeout((function(){i._infoCache[r]=a})),a}))),e(i._infoCache[r],(function(n){return n=t.mixin({},n),a&&(n.filename=a&&a.replace(/\.\w+$/,".png").toLowerCase()),function(n){return e(i._processDataUrl(n,u),(function(r){if(r&&r.dataUrl){var a=t.mixin({},n);return a.dataUrl=r.dataUrl,a.width*=r.factor,a.height*=r.factor,e(a)}return e(n)}))}(n)}))},ensureDataUrlForRemoveImage:function(t,e){return!t||a.test(t)?t:i.getRemoteImageDataUrl(t,e)},getRemoteImageDataUrl:function(t,n){var a=n&&n.sizeLimit||1e5,o=r.getProxyUrl();function u(n,r){return i.getImageInfo(n?o+"?"+t:t,null,{crossOrigin:r}).then((function(t){return e(i._processDataUrl(t,a),(function(t){return t&&t.dataUrl||t}))}))}function c(){return console.log("Failed to get data for URL: "+t),t}return u(!1,"anonymous").otherwise((function(){return u(!1,null)})).otherwise((function(){return o?u(!0,"anonymous"):c()})).otherwise((function(){return u(!0,null)})).otherwise(c)},_processDataUrl:function(t,r){var a=Math.max(t.width,t.height);if(a<=r)return t.dataUrl;var i=r/a;return e(n.scaleImage(t.dataUrl,{factor:i}),(function(t){return{dataUrl:t,factor:i}}))}};return i}));