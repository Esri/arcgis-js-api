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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],(function(e,r,t,o,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.RasterDataSource=void 0;var s=function(e){function r(r){var t=e.call(this,r)||this;return t.type="raster",t}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){var e=this.workspaceId,r=this.dataSourceName;return new o({workspaceId:e,dataSourceName:r})},t.__decorate([a.enumeration({raster:"raster"})],r.prototype,"type",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"dataSourceName",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"workspaceId",void 0),r=o=t.__decorate([a.subclass("esri.layers.support.source.RasterDataSource")],r)}(o.JSONSupport);r.RasterDataSource=s}));