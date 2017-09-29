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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./MarkerSymbol","./support/urlUtils"],function(e,t,r,i,o,s){var n={width:12,height:12,angle:0,xoffset:0,yoffset:0},u=e(o,{declaredClass:"esri.symbols.PictureMarkerSymbol",properties:{color:{json:{write:!1}},type:"picture-marker",url:s.urlPropertyDefinition,source:s.sourcePropertyDefinition,height:{json:{read:{source:["height","size"],reader:function(e,t){return t.size||e}},write:!0},cast:i.toPt},width:{json:{read:{source:["width","size"],reader:function(e,t){return t.size||e}},write:!0},cast:i.toPt},size:{json:{write:!1}}},getDefaults:function(){return t.mixin(this.inherited(arguments),n)},normalizeCtorArgs:function(e,t,r){if(e&&"string"!=typeof e&&null==e.imageData)return e;var o={};return e&&(o.url=e),null!=t&&(o.width=i.toPt(t)),null!=r&&(o.height=i.toPt(r)),o},clone:function(){var e=new u({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return e._set("source",r.clone(this.source)),e}});return u.defaultProps=n,u});