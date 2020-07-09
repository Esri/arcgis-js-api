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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../Color","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators"],(function(e,o,r,t,n,l,p){return function(e){function o(o){var r=e.call(this,o)||this;return r.placement="begin-end",r.type="line-marker",r.style="arrow",r}var n;return r.__extends(o,e),n=o,o.prototype.writeType=function(e,o,r,t){"web-map"===(null==t?void 0:t.origin)||(o[r]=e)},o.prototype.writeStyle=function(e,o,r,t){"web-map"===(null==t?void 0:t.origin)?o[r]="arrow":o[r]=e},Object.defineProperty(o.prototype,"color",{set:function(e){this._set("color",e)},enumerable:!0,configurable:!0}),o.prototype.readColor=function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},o.prototype.writeColor=function(e,o,r,t){"web-map"===(null==t?void 0:t.origin)||(o[r]=e)},o.prototype.clone=function(){return new n({color:l.clone(this.color),placement:this.placement,style:this.style})},o.prototype.hash=function(){var e;return this.placement+"."+(null===(e=this.color)||void 0===e?void 0:e.hash())+"."+this.style},r.__decorate([p.property({type:["begin","end","begin-end"],json:{default:"begin-end",write:!0}})],o.prototype,"placement",void 0),r.__decorate([p.property({type:String,readOnly:!0})],o.prototype,"type",void 0),r.__decorate([p.writer("type")],o.prototype,"writeType",null),r.__decorate([p.property({type:["arrow","circle","square","diamond","cross","x"]})],o.prototype,"style",void 0),r.__decorate([p.writer("style")],o.prototype,"writeStyle",null),r.__decorate([p.property({type:t,value:null,json:{write:{allowNull:!0}}})],o.prototype,"color",null),r.__decorate([p.reader("color")],o.prototype,"readColor",null),r.__decorate([p.writer("color")],o.prototype,"writeColor",null),o=n=r.__decorate([p.subclass("esri.symbols.LineSymbolMarker")],o)}(n.JSONSupport)}));