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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,o,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.AuthoringInfoClassBreakInfo=void 0;var a=function(e){function r(r){var o=e.call(this,r)||this;return o.minValue=0,o.maxValue=0,o}var t;return o.__extends(r,e),t=r,r.prototype.clone=function(){return new t({minValue:this.minValue,maxValue:this.maxValue})},o.__decorate([n.property({type:Number,json:{write:!0}})],r.prototype,"minValue",void 0),o.__decorate([n.property({type:Number,json:{write:!0}})],r.prototype,"maxValue",void 0),r=t=o.__decorate([n.subclass("esri.renderer.support.AuthoringInfoClassBreakInfo")],r)}(t.JSONSupport);r.AuthoringInfoClassBreakInfo=a,r.default=a}));