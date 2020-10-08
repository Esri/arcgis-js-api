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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],(function(e,r,o,t,p,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MapLayerSource=void 0;var s=function(e){function r(r){var o=e.call(this,r)||this;return o.type="map-layer",o}var t;return o.__extends(r,e),t=r,r.prototype.clone=function(){var e=this.mapLayerId,r=this.gdbVersion;return new t({mapLayerId:e,gdbVersion:r})},o.__decorate([p.enumeration({mapLayer:"map-layer"})],r.prototype,"type",void 0),o.__decorate([p.property({type:a.Integer,json:{write:!0}})],r.prototype,"mapLayerId",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],r.prototype,"gdbVersion",void 0),r=t=o.__decorate([p.subclass("esri.layers.support.source.MapLayerSource")],r)}(t.JSONSupport);r.MapLayerSource=s}));