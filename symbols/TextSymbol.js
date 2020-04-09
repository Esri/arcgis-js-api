// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Color","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./Font","./Symbol"],(function(t,o,e,r,i,n,p,l,s,h){return function(t){function o(o,e,r){var i=t.call(this,o)||this;return i.backgroundColor=null,i.borderLineColor=null,i.borderLineSize=null,i.font=new s,i.horizontalAlignment="center",i.kerning=!0,i.haloColor=null,i.haloSize=null,i.rightToLeft=null,i.rotated=!1,i.text="",i.type="text",i.verticalAlignment=null,i.xoffset=0,i.yoffset=0,i.angle=0,i.width=null,i.lineWidth=192,i.lineHeight=1,i}var h;return e(o,t),h=o,o.prototype.normalizeCtorArgs=function(t,o,e){if(t&&"string"!=typeof t)return t;var r={};return t&&(r.text=t),o&&(r.font=o),e&&(r.color=e),r},o.prototype.writeLineWidth=function(t,o,e,r){r&&"string"!=typeof r?r.origin:o[e]=t},o.prototype.castLineWidth=function(t){return p.toPt(t)},o.prototype.writeLineHeight=function(t,o,e,r){r&&"string"!=typeof r?r.origin:o[e]=t},o.prototype.clone=function(){return new h({angle:this.angle,backgroundColor:n.clone(this.backgroundColor),borderLineColor:n.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:n.clone(this.color),font:this.font&&this.font.clone(),haloColor:n.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,lineHeight:this.lineHeight,lineWidth:this.lineWidth,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})},o.prototype.hash=function(){return(this.backgroundColor&&this.backgroundColor.hash())+"."+this.borderLineColor+"."+this.borderLineSize+"."+this.color.hash()+"."+(this.font&&this.font.hash())+"."+(this.haloColor&&this.haloColor.hash())+"."+this.haloSize+"."+this.horizontalAlignment+"."+this.kerning+"."+this.rightToLeft+"."+this.rotated+"."+this.text+"."+this.verticalAlignment+"."+this.width+"."+this.xoffset+"."+this.yoffset+"."+this.lineHeight+"."+this.lineWidth+"."+this.angle},r([l.property({type:i,json:{write:!0}})],o.prototype,"backgroundColor",void 0),r([l.property({type:i,json:{write:!0}})],o.prototype,"borderLineColor",void 0),r([l.property({type:Number,json:{write:!0}})],o.prototype,"borderLineSize",void 0),r([l.property({type:s,json:{write:!0}})],o.prototype,"font",void 0),r([l.property({type:["left","right","center","justify"],json:{write:!0}})],o.prototype,"horizontalAlignment",void 0),r([l.property({type:Boolean,json:{write:!0}})],o.prototype,"kerning",void 0),r([l.property({type:i,json:{write:!0}})],o.prototype,"haloColor",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],o.prototype,"haloSize",void 0),r([l.property({type:Boolean,json:{write:!0}})],o.prototype,"rightToLeft",void 0),r([l.property({type:Boolean,json:{write:!0}})],o.prototype,"rotated",void 0),r([l.property({type:String,json:{write:!0}})],o.prototype,"text",void 0),r([l.property({type:String,readOnly:!0})],o.prototype,"type",void 0),r([l.property({type:["baseline","top","middle","bottom"],json:{write:!0}})],o.prototype,"verticalAlignment",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],o.prototype,"xoffset",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],o.prototype,"yoffset",void 0),r([l.property({type:Number,json:{read:function(t){return t&&-1*t},write:function(t,o){return o.angle=t&&-1*t}}})],o.prototype,"angle",void 0),r([l.property({type:Number,json:{write:!0}})],o.prototype,"width",void 0),r([l.property({type:Number})],o.prototype,"lineWidth",void 0),r([l.writer("lineWidth")],o.prototype,"writeLineWidth",null),r([l.cast("lineWidth")],o.prototype,"castLineWidth",null),r([l.property({type:Number})],o.prototype,"lineHeight",void 0),r([l.writer("lineHeight")],o.prototype,"writeLineHeight",null),o=h=r([l.subclass("esri.symbols.TextSymbol")],o)}(l.declared(h))}));