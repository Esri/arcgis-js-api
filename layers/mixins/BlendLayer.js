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

define(["require","exports","tslib","../../core/accessorSupport/decorators"],(function(e,r,t,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.BlendLayer=void 0,r.BlendLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.blendMode="normal",r.effect=null,r}return t.__extends(r,e),t.__decorate([o.property({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],r.prototype,"blendMode",void 0),t.__decorate([o.property({type:String})],r.prototype,"effect",void 0),r=t.__decorate([o.subclass("esri.layers.mixins.BlendLayer")],r)}(e)}}));