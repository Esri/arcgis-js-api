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

define(["require","exports","tslib","../../core/accessorSupport/decorators"],(function(e,r,t,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CustomParametersMixin=void 0,r.CustomParametersMixin=function(e){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),t.__decorate([s.property({json:{write:!0,origins:{"web-scene":{write:!1}}}})],r.prototype,"customParameters",void 0),r=t.__decorate([s.subclass("esri.layers.mixins.CustomParametersMixin")],r)}(e)}}));