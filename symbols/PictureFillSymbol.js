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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./FillSymbol","./support/urlUtils"],function(t,e,o,r,i,s,p,l,n,u){return function(t){function e(e,o,r,i){var s=t.call(this,e)||this;return s.type="picture-fill",s.url=null,s.xscale=1,s.yscale=1,s.width=12,s.height=12,s.xoffset=0,s.yoffset=0,s.source=null,s}o(e,t),i=e,e.prototype.normalizeCtorArgs=function(t,e,o,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;var i={};return t&&(i.url=t),e&&(i.outline=e),null!=o&&(i.width=p.toPt(o)),null!=r&&(i.height=p.toPt(r)),i},e.prototype.clone=function(){var t=new i({color:s.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});return t._set("source",s.clone(this.source)),t};var i;return r([l.enumeration.serializable()({esriPFS:"picture-fill"})],e.prototype,"type",void 0),r([l.property(u.urlPropertyDefinition)],e.prototype,"url",void 0),r([l.property({type:Number,json:{write:!0}})],e.prototype,"xscale",void 0),r([l.property({type:Number,json:{write:!0}})],e.prototype,"yscale",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],e.prototype,"width",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],e.prototype,"height",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],e.prototype,"xoffset",void 0),r([l.property({type:Number,cast:p.toPt,json:{write:!0}})],e.prototype,"yoffset",void 0),r([l.property(u.sourcePropertyDefinition)],e.prototype,"source",void 0),e=i=r([l.subclass("esri.symbols.PictureFillSymbol")],e)}(l.declared(n))});