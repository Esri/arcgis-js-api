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

define(["require","exports","../../../../core/maybe"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e){this.resourceFactory=e,this._resources=null,this._hidden=!1,this._attached=!1}return e.prototype.destroy=function(){this._destroyResources()},Object.defineProperty(e.prototype,"resources",{get:function(){return t.isSome(this._resources)?this._resources.external:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hidden",{get:function(){return this._hidden},set:function(e){e!==this._hidden&&(this._hidden=e,this._syncGeometriesToRenderer())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"attached",{get:function(){return this._attached},set:function(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())},enumerable:!0,configurable:!0}),e.prototype.recreate=function(){this.attached&&this._createResources()},e.prototype.recreateGeometry=function(){this.resourceFactory.recreateGeometry?t.isNone(this._resources)||(this.ensureRenderGeometriesRemoved(),this.resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()},e.prototype._createOrDestroyResources=function(){this._attached?t.isNone(this._resources)&&this._createResources():this._destroyResources()},e.prototype._createResources=function(){this._destroyResources();var e=this.resourceFactory.createResources();this._resources={layerView:{view:this.resourceFactory.view,notifyGraphicUpdate:function(){},watch:function(){return{remove:function(){}}}},external:e,geometriesAdded:!1},this._syncGeometriesToRenderer()},e.prototype._destroyResources=function(){t.isNone(this._resources)||(this.ensureRenderGeometriesRemoved(),this._resources=null)},e.prototype._syncGeometriesToRenderer=function(){this._hidden?this.ensureRenderGeometriesRemoved():this._hidden||this.ensureRenderGeometriesAdded()},e.prototype.ensureRenderGeometriesRemoved=function(){t.isNone(this._resources)||this._resources.geometriesAdded&&(this.resourceFactory.view.basemapTerrain.overlayManager.renderer.removeGeometries(this._resources.external.geometries,this._resources.layerView,2),this._resources.geometriesAdded=!1)},e.prototype.ensureRenderGeometriesAdded=function(){t.isNone(this._resources)||(this._resources.geometriesAdded||(this.resourceFactory.view.basemapTerrain.overlayManager.renderer.addGeometries(this._resources.external.geometries,this._resources.layerView,2),this._resources.geometriesAdded=!0))},e}();r.DrapedVisualElementResources=s}));