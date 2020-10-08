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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./FillSymbol","./support/urlUtils"],(function(t,e,o,r,i,s,p,l){"use strict";return function(t){function e(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];var r=t.apply(this,e)||this;return r.type="picture-fill",r.url=null,r.xscale=1,r.yscale=1,r.width=12,r.height=12,r.xoffset=0,r.yoffset=0,r.source=null,r}var p;return o.__extends(e,t),p=e,e.prototype.normalizeCtorArgs=function(t,e,o,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;var s={};return t&&(s.url=t),e&&(s.outline=e),null!=o&&(s.width=i.toPt(o)),null!=r&&(s.height=i.toPt(r)),s},e.prototype.clone=function(){var t=new p({color:r.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",r.clone(this.source)),t},e.prototype.hash=function(){return t.prototype.hash.call(this)+"."+this.color.hash()+"."+this.height+"."+this.url+"."+this.width+"."+this.xoffset+"."+this.xscale+"."+this.yoffset+"."+this.yscale},o.__decorate([s.enumeration({esriPFS:"picture-fill"},{readOnly:!0})],e.prototype,"type",void 0),o.__decorate([s.property(l.urlPropertyDefinition)],e.prototype,"url",void 0),o.__decorate([s.property({type:Number,json:{write:!0}})],e.prototype,"xscale",void 0),o.__decorate([s.property({type:Number,json:{write:!0}})],e.prototype,"yscale",void 0),o.__decorate([s.property({type:Number,cast:i.toPt,json:{write:!0}})],e.prototype,"width",void 0),o.__decorate([s.property({type:Number,cast:i.toPt,json:{write:!0}})],e.prototype,"height",void 0),o.__decorate([s.property({type:Number,cast:i.toPt,json:{write:!0}})],e.prototype,"xoffset",void 0),o.__decorate([s.property({type:Number,cast:i.toPt,json:{write:!0}})],e.prototype,"yoffset",void 0),o.__decorate([s.property(l.sourcePropertyDefinition)],e.prototype,"source",void 0),e=p=o.__decorate([s.subclass("esri.symbols.PictureFillSymbol")],e)}(p)}));