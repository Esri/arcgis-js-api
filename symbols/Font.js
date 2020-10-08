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

define(["require","exports","tslib","../core/JSONSupport","../core/screenUtils","../core/accessorSupport/decorators"],(function(t,e,o,r,i,n){"use strict";return function(t){function e(e){var o=t.call(this,e)||this;return o.decoration="none",o.family="sans-serif",o.size=9,o.style="normal",o.weight="normal",o}var r;return o.__extends(e,t),r=e,e.prototype.castSize=function(t){return i.toPt(t)},e.prototype.clone=function(){return new r({decoration:this.decoration,family:this.family,size:this.size,style:this.style,weight:this.weight})},e.prototype.hash=function(){return this.decoration+"."+this.family+"."+this.size+"."+this.style+"."+this.weight},o.__decorate([n.property({type:["underline","line-through","none"],json:{default:"none",write:!0}})],e.prototype,"decoration",void 0),o.__decorate([n.property({type:String,json:{write:!0}})],e.prototype,"family",void 0),o.__decorate([n.property({type:Number,json:{write:{overridePolicy:function(t,e,o){return{enabled:!o||!o.textSymbol3D}}}}})],e.prototype,"size",void 0),o.__decorate([n.cast("size")],e.prototype,"castSize",null),o.__decorate([n.property({type:["normal","italic","oblique"],json:{default:"normal",write:!0}})],e.prototype,"style",void 0),o.__decorate([n.property({type:["normal","bold","bolder","lighter"],json:{default:"normal",write:!0}})],e.prototype,"weight",void 0),e=r=o.__decorate([n.subclass("esri.symbols.Font")],e)}(r.JSONSupport)}));