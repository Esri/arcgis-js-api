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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["../core/declare","../core/lang","../core/screenUtils","./FillSymbol","./support/urlUtils"],function(t,e,i,s,o){var l={xscale:1,yscale:1,xoffset:0,yoffset:0,width:12,height:12},r=t(s,{declaredClass:"esri.symbols.PictureFillSymbol",properties:{type:"picture-fill",url:o.urlPropertyDefinition,xscale:{value:1,json:{write:!0}},yscale:{value:1,json:{write:!0}},width:{value:12,cast:i.toPt,json:{write:!0}},height:{value:12,cast:i.toPt,json:{write:!0}},xoffset:{value:0,cast:i.toPt,json:{write:!0}},yoffset:{value:0,cast:i.toPt,json:{write:!0}},source:o.sourcePropertyDefinition},getDefaults:function(){return e.mixin(this.inherited(arguments),l)},normalizeCtorArgs:function(t,e,s,o){if(t&&"string"!=typeof t&&null==t.imageData)return t;var l={};return t&&(l.url=t),e&&(l.outline=e),null!=s&&(l.width=i.toPt(s)),null!=o&&(l.height=i.toPt(o)),l},clone:function(){var t=new r({color:e.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",e.clone(this.source)),t}});return r.defaultProps=l,r});