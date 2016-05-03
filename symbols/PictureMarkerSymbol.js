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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../core/urlUtils","./MarkerSymbol"],function(e,t,r,i,n,s){var o={width:12,height:12,angle:0,xoffset:0,yoffset:0},u=e(s,{declaredClass:"esri.symbols.PictureMarkerSymbol",type:"picture-marker-symbol",classMetadata:{properties:{url:{dependsOn:["source"]}},reader:{exclude:["contentType","imageData","size","url","color"],add:["source"]}},getDefaults:function(){return t.mixin(this.inherited(arguments),o)},normalizeCtorArgs:function(e,t,r){if(e&&"string"!=typeof e&&null==e.imageData)return e;var n={};return e&&(n.url=e),null!=t&&(n.width=i.toPt(t)),null!=r&&(n.height=i.toPt(r)),n},_urlGetter:function(){return this.source?this.source.url:void 0},_urlSetter:function(e){var t;return e&&0===e.indexOf("data:")?(t=e.substring(5,e.indexOf(";")),this.source={url:e,contentType:t,imageData:e.substring(13+t.length)}):this.source={url:e},e},_sourceReader:function(e,t){return t.imageData?{url:t.url,contentType:t.contentType,imageData:t.imageData}:{url:t.url}},_heightReader:function(e,t){return t.size||e},_heightSetter:i.toPt,_widthReader:function(e,t){return t.size||e},_widthSetter:i.toPt,toJSON:function(){var e=this.source,i=this.url,s=e&&e.imageData,o=e&&e.contentType;!t.isString(i)||0!==i.indexOf("/")&&0!==i.indexOf("//")&&0!==i.indexOf("./")&&0!==i.indexOf("../")||(i=n.getAbsoluteUrl(i));var u=r.fixJson(t.mixin(this.inherited(arguments),{url:i,imageData:s,contentType:o,width:this.width,height:this.height}));return delete u.color,delete u.size,u},clone:function(){return new u({angle:this.angle,height:this.height,source:r.clone(this.source),width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});return u.defaultProps=o,u});