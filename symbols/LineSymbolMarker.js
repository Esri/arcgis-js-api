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

define(["require","exports","tslib","../Color","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators"],(function(e,r,o,t,n,l,i){"use strict";return function(e){function r(r){var o=e.call(this,r)||this;return o.placement="begin-end",o.type="line-marker",o.style="arrow",o}var n;return o.__extends(r,e),n=r,r.prototype.writeStyle=function(e,r,o,t){"web-map"===(null==t?void 0:t.origin)?r[o]="arrow":r[o]=e},Object.defineProperty(r.prototype,"color",{set:function(e){this._set("color",e)},enumerable:!1,configurable:!0}),r.prototype.readColor=function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},r.prototype.writeColor=function(e,r,o,t){"web-map"===(null==t?void 0:t.origin)||(r[o]=e)},r.prototype.clone=function(){return new n({color:l.clone(this.color),placement:this.placement,style:this.style})},r.prototype.hash=function(){var e;return this.placement+"."+(null===(e=this.color)||void 0===e?void 0:e.hash())+"."+this.style},o.__decorate([i.property({type:["begin","end","begin-end"],json:{default:"begin-end",write:!0}})],r.prototype,"placement",void 0),o.__decorate([i.enumeration({"line-marker":"line-marker"},{readOnly:!0}),i.property({json:{origins:{"web-map":{write:!1}}}})],r.prototype,"type",void 0),o.__decorate([i.property({type:["arrow","circle","square","diamond","cross","x"]})],r.prototype,"style",void 0),o.__decorate([i.writer("style")],r.prototype,"writeStyle",null),o.__decorate([i.property({type:t,value:null,json:{write:{allowNull:!0}}})],r.prototype,"color",null),o.__decorate([i.reader("color")],r.prototype,"readColor",null),o.__decorate([i.writer("color")],r.prototype,"writeColor",null),r=n=o.__decorate([i.subclass("esri.symbols.LineSymbolMarker")],r)}(n.JSONSupport)}));