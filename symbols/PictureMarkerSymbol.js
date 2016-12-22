// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../core/urlUtils","./MarkerSymbol"],function(e,t,r,i,n,a){var o={width:12,height:12,angle:0,xoffset:0,yoffset:0},s=e(a,{declaredClass:"esri.symbols.PictureMarkerSymbol",properties:{color:{json:{writable:!1}},type:"picture-marker-symbol",url:{dependsOn:["source"],json:{readable:!1},get:function(){return this.source?this.source.url:void 0},set:function(e){var t;e&&0===e.indexOf("data:")?(t=e.substring(5,e.indexOf(";")),this.source={url:e,contentType:t,imageData:e.substring(13+t.length)}):this.source={url:e}}},source:{json:{readFrom:["imageData","url"],read:function(e,t,r){var i=n.read(t.url,r);return t.imageData?{url:i,contentType:t.contentType,imageData:t.imageData}:{url:i}},write:function(e,t,r){e.imageData&&(t.imageData=e.imageData),e.contentType&&(t.contentType=e.contentType),e.url&&(t.url=n.write(e.url,r))}}},height:{json:{readFrom:["height","size"],read:function(e,t){return t.size||e},writable:!0},cast:i.toPt},width:{json:{readFrom:["width","size"],read:function(e,t){return t.size||e},writable:!0},cast:i.toPt},size:{json:{writable:!1}}},getDefaults:function(){return t.mixin(this.inherited(arguments),o)},normalizeCtorArgs:function(e,t,r){if(e&&"string"!=typeof e&&null==e.imageData)return e;var n={};return e&&(n.url=e),null!=t&&(n.width=i.toPt(t)),null!=r&&(n.height=i.toPt(r)),n},clone:function(){return new s({angle:this.angle,height:this.height,source:r.clone(this.source),width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});return s.defaultProps=o,s});