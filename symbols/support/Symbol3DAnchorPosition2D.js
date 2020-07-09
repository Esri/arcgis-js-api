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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators"],(function(e,o,r,t,s){Object.defineProperty(o,"__esModule",{value:!0});var n=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.x=0,o.y=0,o}var t;return r.__extends(o,e),t=o,o.prototype.clone=function(){return new t({x:this.x,y:this.y})},r.__decorate([s.property({type:Number})],o.prototype,"x",void 0),r.__decorate([s.property({type:Number})],o.prototype,"y",void 0),o=t=r.__decorate([s.subclass("esri.symbols.support.Symbol3DAnchorPosition2D")],o)}(t);o.Symbol3DAnchorPosition2D=n,o.default=n}));