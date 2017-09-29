// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","../core/supportClasses/map/MapBuilder"],function(e,a){return e(null,{_mapBuilder:null,postCreate:function(){this.inherited(arguments),this._mapBuilder=new a},collectMaps:function(e){return e&&e.allAreas?this._mapBuilder.collectAllAreasMaps():this._mapBuilder.collectAreaMaps(this.getCurrentAnalysisAreaIndex())},_resetMapBuilder:function(){this._mapBuilder.reset()},_updateMapPortalUrl:function(){this._mapBuilder.setArcgisUrl(this._reportData&&this._reportData.config.portalUrl)},_setFallbackMapImageInfos:function(e){this._mapBuilder.setFallbackMapImageInfos(e)},_createMap:function(e,a){var t=this._reportData.analysisAreas[this.getCurrentAnalysisAreaIndex()],r=[t.feature];return t.additionalFeatures&&(r=r.concat(t.additionalFeatures)),this._mapBuilder.createMap(e,{webMapId:a&&a.webMapId,features:r,areaIndex:this.getCurrentAnalysisAreaIndex(),defaultBasemapId:this._getDefaultBasemapId()||a.defaultBasemapId})},_getDefaultBasemapId:function(){return null}})});