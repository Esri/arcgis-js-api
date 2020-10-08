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

define(["require","exports","tslib","../../core/accessorSupport/decorators"],(function(e,r,t,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ScaleRangeLayer=void 0,r.ScaleRangeLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.minScale=0,r.maxScale=0,r}return t.__extends(r,e),Object.defineProperty(r.prototype,"scaleRangeId",{get:function(){return this.minScale+","+this.maxScale},enumerable:!1,configurable:!0}),t.__decorate([a.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minScale",void 0),t.__decorate([a.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxScale",void 0),t.__decorate([a.property({readOnly:!0,dependsOn:["minScale","maxScale"]})],r.prototype,"scaleRangeId",null),r=t.__decorate([a.subclass("esri.layers.mixins.ScaleRangeLayer")],r)}(e)}}));