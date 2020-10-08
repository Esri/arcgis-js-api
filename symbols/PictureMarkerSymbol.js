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

define(["require","exports","tslib","../core/lang","../core/screenUtils","../core/accessorSupport/decorators","./MarkerSymbol","./support/urlUtils"],(function(t,e,r,o,i,s,n,p){"use strict";return function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=t.apply(this,e)||this;return o.color=null,o.type="picture-marker",o.url=null,o.source=null,o.height=12,o.width=12,o.size=null,o}var n;return r.__extends(e,t),n=e,e.prototype.normalizeCtorArgs=function(t,e,r){if(t&&"string"!=typeof t&&null==t.imageData)return t;var o={};return t&&(o.url=t),null!=e&&(o.width=i.toPt(e)),null!=r&&(o.height=i.toPt(r)),o},e.prototype.readHeight=function(t,e){return e.size||t},e.prototype.readWidth=function(t,e){return e.size||t},e.prototype.clone=function(){var t=new n({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return t._set("source",o.clone(this.source)),t},e.prototype.hash=function(){return t.prototype.hash.call(this)+"."+this.height+"."+this.url+"."+this.width},r.__decorate([s.property({json:{write:!1}})],e.prototype,"color",void 0),r.__decorate([s.enumeration({esriPMS:"picture-marker"},{readOnly:!0})],e.prototype,"type",void 0),r.__decorate([s.property(p.urlPropertyDefinition)],e.prototype,"url",void 0),r.__decorate([s.property(p.sourcePropertyDefinition)],e.prototype,"source",void 0),r.__decorate([s.property({type:Number,cast:i.toPt,json:{write:!0}})],e.prototype,"height",void 0),r.__decorate([s.reader("height",["height","size"])],e.prototype,"readHeight",null),r.__decorate([s.property({type:Number,cast:i.toPt,json:{write:!0}})],e.prototype,"width",void 0),r.__decorate([s.property({json:{write:!1}})],e.prototype,"size",void 0),e=n=r.__decorate([s.subclass("esri.symbols.PictureMarkerSymbol")],e)}(n)}));