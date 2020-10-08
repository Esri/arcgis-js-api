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

define(["require","exports","tslib","../../core/Accessor","../../core/Logger","../../core/accessorSupport/decorators","../../support/groundUtils"],(function(r,e,o,t,n,u,i){"use strict";var a=n.getLogger("GroundElevationProvider");return function(r){function e(e){var o=r.call(this,e)||this;return o.ground="world-elevation",o.numSamplesForPreview=30,o.numSamplesPerChunk=200,o}return o.__extends(e,r),e.prototype.castGround=function(r){var e=i.ensureType(r);return e||(a.error("GroundElevationProvider.ground may not be set to null or undefined"),this._get("ground"))},e.prototype.queryElevation=function(r,e){return o.__awaiter(this,void 0,void 0,(function(){var t,n;return o.__generator(this,(function(o){if(t=this.castGround(this.ground),"elevation"!==(n=t.layers.getItemAt(0)).type)throw new Error("Could not find elevation layer to query");return[2,n.queryElevation(r,e)]}))}))},o.__decorate([u.property({nonNullable:!0})],e.prototype,"ground",void 0),o.__decorate([u.cast("ground")],e.prototype,"castGround",null),e=o.__decorate([u.subclass("esri.widgets.ElevationProfile.GroundElevationProvider")],e)}(t)}));