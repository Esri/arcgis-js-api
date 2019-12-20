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

define(["require","exports","../../../../core/maybe","../graphics/Graphics3DVerticalScale","./FeatureTileFetcher3D","./featureTileQuery3D"],function(e,r,t,i,a,n){Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function e(e){this.memoryCache=null,this._capabilities=null;var r=e.layerView.layer;this.layerView=e.layerView,this.objectIdField=r.objectIdField,this.returnZ=e.returnZ,this.returnM=e.returnM,this.verticalScale=new i({sourceSpatialReference:r.spatialReference,destSpatialReference:this.layerView.view.spatialReference}),this.query=n.createFeatureTileQuery3D(r);var t=this.layerView.view.resourceController;"hasService"in r&&r.hasService&&t&&(this.memoryCache=t.memoryController.getMemCache(r.uid))}return e.prototype.destroy=function(){t.isSome(this.memoryCache)&&this.memoryCache.destroy()},e.prototype.createQuery=function(){var e=this.layerView.layer.createQuery();return e.outFields=this.layerView.availableFields,e.returnZ=this.returnZ,e.returnM=this.returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e},Object.defineProperty(e.prototype,"viewingMode",{get:function(){return this.layerView.view.viewingMode},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tilingScheme",{get:function(){return this.layerView.view.featureTiles.tilingScheme},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scheduler",{get:function(){var e=this.layerView.view.resourceController;return e?e.scheduler:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"geometryType",{get:function(){return this.layerView.layer.geometryType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullExtent",{get:function(){return this.layerView.layer.fullExtent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tileMaxRecordCount",{get:function(){return this.layerView.layer.capabilities.query.tileMaxRecordCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxRecordCount",{get:function(){return this.layerView.layer.capabilities.query.maxRecordCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"capabilities",{get:function(){return t.isSome(this._capabilities)?this._capabilities:(this._capabilities=a.contextCapabilitiesFromLayer(this.layerView.layer),this._capabilities)},enumerable:!0,configurable:!0}),e.prototype.logFetchError=function(e,r){e.error("#fetchTile()",this.layerView.layer,r&&r.message?r.message:r)},e.prototype.adjustVerticalScale=function(e){return this.verticalScale.adjust(e)},e}();r.FeatureTileFetcher3DLayerViewContext=l});