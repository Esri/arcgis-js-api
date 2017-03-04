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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../core/urlUtils","./FillSymbol"],function(e,t,i,r,s,o){var n={xscale:1,yscale:1,xoffset:0,yoffset:0,width:12,height:12},a=e(o,{declaredClass:"esri.symbols.PictureFillSymbol",properties:{type:"picture-fill-symbol",url:{dependsOn:["source"],json:{read:!1},get:function(){return this.source?this.source.url:void 0},set:function(e){var t;e&&0===e.indexOf("data:")?(t=e.substring(5,e.indexOf(";")),this.source={url:e,contentType:t,imageData:e.substring(13+t.length)}):this.source={url:e}}},xscale:{value:1,json:{write:!0}},yscale:{value:1,json:{write:!0}},width:{value:12,cast:r.toPt,json:{write:!0}},height:{value:12,cast:r.toPt,json:{write:!0}},xoffset:{value:0,cast:r.toPt,json:{write:!0}},yoffset:{value:0,cast:r.toPt,json:{write:!0}},source:{json:{read:{source:["imageData","url"],reader:function(e,t,i){var r=s.read(t.url,i);return t.imageData?{url:r,contentType:t.contentType,imageData:t.imageData}:{url:r}}},write:function(e,t,i,r){e.imageData&&(t.imageData=e.imageData),e.contentType&&(t.contentType=e.contentType),e.url&&(t.url=s.write(e.url,r))}}}},getDefaults:function(){return t.mixin(this.inherited(arguments),n)},normalizeCtorArgs:function(e,t,i,s){if(e&&"string"!=typeof e&&null==e.imageData)return e;var o={};return e&&(o.url=e),t&&(o.outline=t),null!=i&&(o.width=r.toPt(i)),null!=s&&(o.height=r.toPt(s)),o},clone:function(){return new a({color:i.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),source:i.clone(this.source),width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale})}});return a.defaultProps=n,a});