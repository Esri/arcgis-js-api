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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../core/urlUtils","./MarkerSymbol"],function(e,t,r,i,n,o){var s={width:12,height:12,angle:0,xoffset:0,yoffset:0},a=e(o,{declaredClass:"esri.symbols.PictureMarkerSymbol",properties:{color:{json:{write:!1}},type:"picture-marker-symbol",url:{dependsOn:["source"],json:{read:!1},get:function(){return this.source?this.source.url:void 0},set:function(e){var t;e&&0===e.indexOf("data:")?(t=e.substring(5,e.indexOf(";")),this.source={url:e,contentType:t,imageData:e.substring(13+t.length)}):this.source={url:e}}},source:{json:{read:{source:["imageData","url"],reader:function(e,t,r){var i=n.read(t.url,r);return t.imageData?{url:i,contentType:t.contentType,imageData:t.imageData}:{url:i}}},write:function(e,t,r,i){e.imageData&&(t.imageData=e.imageData),e.contentType&&(t.contentType=e.contentType),e.url&&(t.url=n.write(e.url,i))}}},height:{json:{read:{source:["height","size"],reader:function(e,t){return t.size||e}},write:!0},cast:i.toPt},width:{json:{read:{source:["width","size"],reader:function(e,t){return t.size||e}},write:!0},cast:i.toPt},size:{json:{write:!1}}},getDefaults:function(){return t.mixin(this.inherited(arguments),s)},normalizeCtorArgs:function(e,t,r){if(e&&"string"!=typeof e&&null==e.imageData)return e;var n={};return e&&(n.url=e),null!=t&&(n.width=i.toPt(t)),null!=r&&(n.height=i.toPt(r)),n},clone:function(){return new a({angle:this.angle,height:this.height,source:r.clone(this.source),width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});return a.defaultProps=s,a});