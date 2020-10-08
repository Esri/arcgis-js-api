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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],(function(e,o,r,t,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ColorModulation=void 0;var i=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.field=null,o.minValue=0,o.maxValue=255,o}var t;return r.__extends(o,e),t=o,o.prototype.clone=function(){return new t({field:this.field,minValue:this.minValue,maxValue:this.maxValue})},r.__decorate([l.property({type:String,json:{write:!0}})],o.prototype,"field",void 0),r.__decorate([l.property({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"minValue",void 0),r.__decorate([l.property({type:Number,nonNullable:!0,json:{write:!0}})],o.prototype,"maxValue",void 0),o=t=r.__decorate([l.subclass("esri.renderers.support.pointCloud.ColorModulation")],o)}(t.JSONSupport);o.ColorModulation=i,o.default=i}));