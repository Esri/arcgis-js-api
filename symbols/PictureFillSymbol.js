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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../core/urlUtils","./FillSymbol"],function(t,e,i,s,r,o){var n={xscale:1,yscale:1,xoffset:0,yoffset:0,width:12,height:12},l=t(o,{declaredClass:"esri.symbols.PictureFillSymbol",type:"picture-fill-symbol",classMetadata:{properties:{url:{dependsOn:["source"]}},reader:{exclude:["contentType","imageData","size","url"],add:["source"]}},getDefaults:function(){return e.mixin(this.inherited(arguments),n)},normalizeCtorArgs:function(t,e,i,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;var o={};return t&&(o.url=t),e&&(o.outline=e),null!=i&&(o.width=s.toPt(i)),null!=r&&(o.height=s.toPt(r)),o},_widthSetter:s.toPt,_heightSetter:s.toPt,xoffset:0,_xoffsetSetter:s.toPt,yoffset:0,_yoffsetSetter:s.toPt,_urlGetter:function(){return this.source?this.source.url:void 0},_urlSetter:function(t){var e;return t&&0===t.indexOf("data:")?(e=t.substring(5,t.indexOf(";")),this.source={url:t,contentType:e,imageData:t.substring(13+e.length)}):this.source={url:t},t},_sourceReader:function(t,e){return e.imageData?{url:e.url,contentType:e.contentType,imageData:e.imageData}:{url:e.url}},toJSON:function(){var t=this.source,s=this.url,o=t&&t.imageData,n=t&&t.contentType;!e.isString(s)||0!==s.indexOf("/")&&0!==s.indexOf("//")&&0!==s.indexOf("./")&&0!==s.indexOf("../")||(s=r.getAbsoluteUrl(s));var l=i.fixJson(e.mixin(this.inherited(arguments),{url:s,imageData:o,contentType:n,width:this.width,height:this.height,xoffset:this.xoffset,yoffset:this.yoffset,xscale:this.xscale,yscale:this.yscale}));return l},clone:function(){return new l({color:i.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),source:i.clone(this.source),width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale})}});return l.defaultProps=n,l});