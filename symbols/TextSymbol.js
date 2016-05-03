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

define(["../core/declare","dojo/_base/lang","../core/lang","../core/screenUtils","./Symbol","./Font"],function(t,e,o,i,n,r){var l={ALIGN_START:"start",ALIGN_MIDDLE:"middle",ALIGN_END:"end",DECORATION_NONE:"none",DECORATION_UNDERLINE:"underline",DECORATION_OVERLINE:"overline",DECORATION_LINETHROUGH:"line-through"},s={x:0,y:0,text:"",rotated:!1,kerning:!0,color:[0,0,0,1],font:{},angle:0,xoffset:0,yoffset:0,horizontalAlignment:"center"},h=t(n,{declaredClass:"esri.symbols.TextSymbol",classMetadata:{properties:{font:{type:r}}},getDefaults:function(){return e.mixin(this.inherited(arguments),s)},normalizeCtorArgs:function(t,e,o){if(t&&"string"!=typeof t)return t;var i={};return t&&(i.text=t),e&&(i.font=e),o&&(i.color=o),i},_fontReader:r.fromJSON,_haloSizeSetter:i.toPt,type:"text-symbol",xoffset:0,_xoffsetSetter:i.toPt,yoffset:0,_yoffsetSetter:i.toPt,angle:0,_angleReader:function(t){return t&&-1*t},toJSON:function(){return o.fixJson(e.mixin(this.inherited(arguments),{backgroundColor:this.backgroundColor,borderLineColor:this.borderLineColor,borderLineSize:this.borderLineSize,haloSize:this.haloSize,haloColor:this.haloColor,verticalAlignment:this.verticalAlignment,horizontalAlignment:this.horizontalAlignment,rightToLeft:this.rightToLeft,width:this.width,angle:this.angle&&-1*this.angle,xoffset:this.xoffset,yoffset:this.yoffset,text:this.text,rotated:this.rotated,kerning:this.kerning,font:this.font&&this.font.toJSON()}))},clone:function(){return new h({angle:this.angle,backgroundColor:o.clone(this.backgroundColor),borderLineColor:o.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:o.clone(this.color),font:this.font&&this.font.clone(),haloColor:o.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})}});return e.mixin(h,l),h.defaultProps=s,h});