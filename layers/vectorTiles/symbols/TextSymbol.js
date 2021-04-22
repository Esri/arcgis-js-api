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

define(["../core/declare","../core/lang","../core/screenUtils","../Color","./Symbol","./Font"],(function(e,t,o,n,r,i){var l={text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:{},angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},s=e(r,{declaredClass:"esri.symbols.TextSymbol",properties:{backgroundColor:{type:n,json:{write:!0}},borderLineColor:{type:n,json:{write:!0}},borderLineSize:{type:Number,json:{write:!0}},color:{},font:{type:i,json:{write:!0}},horizontalAlignment:{value:"center",json:{write:!0}},kerning:{value:!0,json:{write:!0}},haloColor:{type:n,json:{write:!0}},haloSize:{type:Number,cast:o.toPt,json:{write:!0}},rightToLeft:{json:{write:!0}},rotated:{value:!1,json:{write:!0}},text:{type:String,json:{write:!0}},type:"text",verticalAlignment:{type:String,json:{write:!0}},xoffset:{value:0,type:Number,cast:o.toPt,json:{write:!0}},yoffset:{value:0,type:Number,cast:o.toPt,json:{write:!0}},angle:{type:Number,value:0,json:{read:function(e){return e&&-1*e},write:function(e,t){t.angle=e&&-1*e}}},width:{json:{write:!0}}},getDefaults:function(){return t.mixin(this.inherited(arguments),l)},normalizeCtorArgs:function(e,t,o){if(e&&"string"!=typeof e)return e;var n={};return e&&(n.text=e),t&&(n.font=t),o&&(n.color=o),n},clone:function(){return new s({angle:this.angle,backgroundColor:t.clone(this.backgroundColor),borderLineColor:t.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:t.clone(this.color),font:this.font&&this.font.clone(),haloColor:t.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});return t.mixin(s,{ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"}),s.defaultProps=l,s}));