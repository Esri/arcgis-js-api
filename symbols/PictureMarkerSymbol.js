// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./MarkerSymbol","./support/urlUtils"],function(t,e,r,o,i,p,n,s,u){return function(t){function e(e,r,o){var i=t.call(this,e)||this;return i.color=null,i.type="picture-marker",i.url=null,i.source=null,i.height=12,i.width=12,i.size=null,i}r(e,t),s=e,e.prototype.normalizeCtorArgs=function(t,e,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;var o={};return t&&(o.url=t),null!=e&&(o.width=p.toPt(e)),null!=r&&(o.height=p.toPt(r)),o},e.prototype.readHeight=function(t,e){return e.size||t},e.prototype.readWidth=function(t,e){return e.size||t},e.prototype.clone=function(){var t=new s({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return t._set("source",i.clone(this.source)),t};var s;return o([n.property({json:{write:!1}})],e.prototype,"color",void 0),o([n.enumeration.serializable()({esriPMS:"picture-marker"})],e.prototype,"type",void 0),o([n.property(u.urlPropertyDefinition)],e.prototype,"url",void 0),o([n.property(u.sourcePropertyDefinition)],e.prototype,"source",void 0),o([n.property({type:Number,cast:p.toPt,json:{write:!0}})],e.prototype,"height",void 0),o([n.reader("height",["height","size"])],e.prototype,"readHeight",null),o([n.property({type:Number,cast:p.toPt,json:{write:!0}})],e.prototype,"width",void 0),o([n.property({json:{write:!1}})],e.prototype,"size",void 0),e=s=o([n.subclass("esri.symbols.PictureMarkerSymbol")],e)}(n.declared(s))});