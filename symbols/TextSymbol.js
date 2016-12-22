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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","../Color","./Symbol","./Font"],function(e,t,o,n,r,i,l){var a={ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"},s={x:0,y:0,text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:{},angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},h=e(i,{declaredClass:"esri.symbols.TextSymbol",properties:{backgroundColor:{type:r,json:{writable:!0}},borderLineColor:{type:r,json:{writable:!0}},borderLineSize:{type:Number,json:{writable:!0}},color:{},font:{type:l,json:{writable:!0}},horizontalAlignment:{value:"center",json:{writable:!0}},kerning:{value:!0,json:{writable:!0}},haloColor:{type:r,json:{writable:!0}},haloSize:{type:Number,cast:n.toPt,json:{writable:!0}},rightToLeft:{json:{writable:!0}},rotated:{value:!1,json:{writable:!0}},text:{type:String,json:{writable:!0}},type:"text-symbol",verticalAlignment:{type:String,json:{writable:!0}},xoffset:{value:0,type:Number,cast:n.toPt,json:{writable:!0}},yoffset:{value:0,type:Number,cast:n.toPt,json:{writable:!0}},angle:{type:Number,value:0,json:{read:function(e){return e&&-1*e},write:function(e,t){t.angle=e&&-1*e}}},width:{json:{writable:!0}}},getDefaults:function(){return t.mixin(this.inherited(arguments),s)},normalizeCtorArgs:function(e,t,o){if(e&&"string"!=typeof e)return e;var n={};return e&&(n.text=e),t&&(n.font=t),o&&(n.color=o),n},clone:function(){return new h({angle:this.angle,backgroundColor:o.clone(this.backgroundColor),borderLineColor:o.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:o.clone(this.color),font:this.font&&this.font.clone(),haloColor:o.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});return t.mixin(h,a),h.defaultProps=s,h});