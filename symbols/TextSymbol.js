// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Color","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./Font","./Symbol"],function(t,o,e,r,n,i,p,l,s,y){return function(t){function o(o,e,r){var n=t.call(this,o)||this;return n.backgroundColor=null,n.borderLineColor=null,n.borderLineSize=null,n.font=new s,n.horizontalAlignment="center",n.kerning=!0,n.haloColor=null,n.haloSize=null,n.rightToLeft=null,n.rotated=!1,n.text="",n.type="text",n.verticalAlignment=null,n.xoffset=0,n.yoffset=0,n.angle=0,n.width=null,n}e(o,t),y=o,o.prototype.normalizeCtorArgs=function(t,o,e){if(t&&"string"!=typeof t)return t;var r={};return t&&(r.text=t),o&&(r.font=o),e&&(r.color=e),r},o.prototype.clone=function(){return new y({angle:this.angle,backgroundColor:i.clone(this.backgroundColor),borderLineColor:i.clone(this.borderLineColor),borderLineSize:this.borderLineSize,color:i.clone(this.color),font:this.font&&this.font.clone(),haloColor:i.clone(this.haloColor),haloSize:this.haloSize,horizontalAlignment:this.horizontalAlignment,kerning:this.kerning,rightToLeft:this.rightToLeft,rotated:this.rotated,text:this.text,verticalAlignment:this.verticalAlignment,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset})};var y;return r([l.property({type:n,json:{write:!0}})],o.prototype,"backgroundColor",void 0),r([l.property({type:n,json:{write:!0}})],o.prototype,"borderLineColor",void 0),r([l.property({type:Number,json:{write:!0}})],o.prototype,"borderLineSize",void 0),r([l.property({type:s,json:{write:!0}})],o.prototype,"font",void 0),r([l.property({type:["left","right","center","justify"],json:{write:!0}})],o.prototype,"horizontalAlignment",void 0),r([l.property({type:Boolean,json:{write:!0}})],o.prototype,"kerning",void 0),r([l.property({type:n,json:{write:!0}})],o.prototype,"haloColor",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],o.prototype,"haloSize",void 0),r([l.property({type:Boolean,json:{write:!0}})],o.prototype,"rightToLeft",void 0),r([l.property({type:Boolean,json:{write:!0}})],o.prototype,"rotated",void 0),r([l.property({type:String,json:{write:!0}})],o.prototype,"text",void 0),r([l.property({type:String,readOnly:!0})],o.prototype,"type",void 0),r([l.property({type:["baseline","top","middle","bottom"],json:{write:!0}})],o.prototype,"verticalAlignment",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],o.prototype,"xoffset",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],o.prototype,"yoffset",void 0),r([l.property({type:Number,json:{read:function(t){return t&&-1*t},write:function(t,o){return o.angle=t&&-1*t}}})],o.prototype,"angle",void 0),r([l.property({type:Number,json:{write:!0}})],o.prototype,"width",void 0),o=y=r([l.subclass("esri.symbols.TextSymbol")],o)}(l.declared(y))});