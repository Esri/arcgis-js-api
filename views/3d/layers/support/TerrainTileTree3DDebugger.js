// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/accessorSupport/decorators","../../../../geometry/support/aaBoundingRect","./TileTree3DDebugger"],function(e,r,t,i,a,n,s){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){function r(r){var t=e.call(this,r)||this;return t.enablePolygons=!1,t}return i(r,e),r.prototype.update=function(){var e=this;if(this.clear(),this.enabled){var r=this.view.basemapTerrain.getRenderedTiles();this._update(r,function(r){return n.toExtent(r.extent,e.view.basemapTerrain.spatialReference)},{})}},r=t([a.subclass("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],r)}(a.declared(s.TileTree3DDebugger));r.TerrainTileTree3DDebugger=o});