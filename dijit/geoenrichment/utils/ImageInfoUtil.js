// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","./CacheUtil","./ImageUtil","./UrlUtil"],(function(t,e,r,n,a){var i=/^data:/i,o={getImageInfo:function(a,i,u){var l=u&&u.sizeLimit||1e5,c=r.get("ImageInfoUtil"),f=a+(u&&u.crossOrigin||"");return c[f]||(c[f]=n.imageFromUrl(a,u).then((function(t){var e=n.imageToDataURL(t),r={dataUrl:e,contentType:n.getContentType(e),width:t.width,height:t.height};return setTimeout((function(){c[f]=r})),r}))),e(c[f],(function(r){return r=t.mixin({},r),i&&(r.filename=i&&i.replace(/\.\w+$/,".png").toLowerCase()),function(r){return e(o._processDataUrl(r,l),(function(n){if(n&&n.dataUrl){var a=t.mixin({},r);return a.dataUrl=n.dataUrl,a.width*=n.factor,a.height*=n.factor,e(a)}return e(r)}))}(r)}))},ensureDataUrlForRemoveImage:function(t,e){return!t||i.test(t)?t:o.getRemoteImageDataUrl(t,e)},getRemoteImageDataUrl:function(t,r){if(!t)return t;var n=r&&r.sizeLimit||1e5,i=a.getProxyUrl();function u(r,a){return o.getImageInfo(r?i+"?"+t:t,null,{crossOrigin:a}).then((function(t){return e(o._processDataUrl(t,n),(function(t){return t&&t.dataUrl||t}))}))}function l(){return console.log("Failed to get data for URL: "+t),t}return u(!1,"anonymous").otherwise((function(){return u(!1,null)})).otherwise((function(){return i?u(!0,"anonymous"):l()})).otherwise((function(){return u(!0,null)})).otherwise(l)},_processDataUrl:function(t,r){var a=Math.max(t.width,t.height);if(a<=r)return t.dataUrl;var i=r/a;return e(n.scaleImage(t.dataUrl,{factor:i}),(function(t){return{dataUrl:t,factor:i}}))}};return o}));