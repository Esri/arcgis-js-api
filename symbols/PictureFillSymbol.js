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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../core/urlUtils","./FillSymbol"],function(e,t,i,r,o,s){var a={xscale:1,yscale:1,xoffset:0,yoffset:0,width:12,height:12},l=e(s,{declaredClass:"esri.symbols.PictureFillSymbol",properties:{type:"picture-fill-symbol",url:{dependsOn:["source"],json:{readable:!1},get:function(){return this.source?this.source.url:void 0},set:function(e){var t;e&&0===e.indexOf("data:")?(t=e.substring(5,e.indexOf(";")),this.source={url:e,contentType:t,imageData:e.substring(13+t.length)}):this.source={url:e}}},xscale:{value:1,json:{writable:!0}},yscale:{value:1,json:{writable:!0}},width:{value:12,cast:r.toPt,json:{writable:!0}},height:{value:12,cast:r.toPt,json:{writable:!0}},xoffset:{value:0,cast:r.toPt,json:{writable:!0}},yoffset:{value:0,cast:r.toPt,json:{writable:!0}},source:{json:{readFrom:["imageData","url"],read:function(e,t,i){var r=o.read(t.url,i);return t.imageData?{url:r,contentType:t.contentType,imageData:t.imageData}:{url:r}},write:function(e,t,i){e.imageData&&(t.imageData=e.imageData),e.contentType&&(t.contentType=e.contentType),e.url&&(t.url=o.write(e.url,i))}}}},getDefaults:function(){return t.mixin(this.inherited(arguments),a)},normalizeCtorArgs:function(e,t,i,o){if(e&&"string"!=typeof e&&null==e.imageData)return e;var s={};return e&&(s.url=e),t&&(s.outline=t),null!=i&&(s.width=r.toPt(i)),null!=o&&(s.height=r.toPt(o)),s},clone:function(){return new l({color:i.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),source:i.clone(this.source),width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale})}});return l.defaultProps=a,l});