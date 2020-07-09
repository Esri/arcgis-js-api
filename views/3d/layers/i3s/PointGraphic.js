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

define(["require","exports","tslib","../../../../Graphic","../../../../core/accessorSupport/decorators"],(function(t,e,o,r,i){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(e){return t.call(this,e)||this}var r;return o.__extends(e,t),r=e,e.prototype.clone=function(){return new r(this.cloneProperties())},e.prototype.cloneProperties=function(){var e=this.pointCloudMetadata;return o.__assign(o.__assign({},t.prototype.cloneProperties.call(this)),{pointCloudMetadata:e})},o.__decorate([i.property({constructOnly:!0})],e.prototype,"pointCloudMetadata",void 0),e=r=o.__decorate([i.subclass("esri.views.3d.layers.i3s.PointGraphic")],e)}(r);e.PointGraphic=n}));