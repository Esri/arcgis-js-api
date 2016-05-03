// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../../../processors/SpatialIndex","../../../../geometry/SpatialReference","../../../../geometry/support/webMercatorUtils"],function(e,t,i,a,r){function n(e){return e.wkid===a.WGS84.wkid}var s=function(){function e(){this.spatialIndex=new i,this.spatialIndexNumGraphics=0,this.spatialIndexNumPendingQueries=0,this.layerView=null,this.layer=null,this.viewSR=null,this.graphicsCore=null}return e.prototype.initialize=function(e,t,i,a){this.layerView=e,this.layer=t,this.viewSR=i,this.graphicsCore=a},e.prototype.destroy=function(){this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null),this.viewSR=null,this.layerView=null,this.graphicsCore=null},e.prototype.numNodesUpdating=function(){return 0},e.prototype.isUpdating=function(){return this.spatialIndexNumPendingQueries>0},e.prototype.hasGraphics=function(){return this.spatialIndexNumGraphics>0},e.prototype.intersects=function(e,t,i){var a=this;this.hasGraphics()&&(this.spatialIndexNumPendingQueries++,this.spatialIndex.intersects(e,void 0,void 0,!0).then(function(e){a.spatialIndexNumPendingQueries--,i(e.results,e.results.length),a.layerView._evaluateUpdatingState()}))},e.prototype.shouldAddToSpatialIndex=function(e,t,i){return i||t.mustAlignToTerrain()},e.prototype.addGraphicsToSpatialIndex=function(e){if(this.layerView.loadedGraphics)for(var t=this.layerView.loadedGraphics.toArray(),i=t.length,a=0;i>a;a++){var r=t[a],n=this.graphicsCore.getGraphics3DGraphicById(r.id);n&&!n.addedToSpatialIndex&&this.shouldAddToSpatialIndex(r,n,e)&&this.addGraphicToSpatialIndex(r,n)}},e.prototype.addGraphicToSpatialIndex=function(e,t){var i=e.geometry.spatialReference,a=this.viewSR,s={id:e.id,geometry:null};if(i.equals(a))s.geometry=e.geometry.toJSON();else{var o=void 0;if(n(i)&&a.isWebMercator)o=r.geographicToWebMercator(e.geometry);else{if(!i.isWebMercator||!n(a))return console.warn("Cannot convert graphic geometry to map spatial reference, elevation and scale updates are disabled"),!1;o=r.webMercatorToGeographic(e.geometry)}s.geometry=o.toJSON()}return this.spatialIndexNumGraphics++,this.spatialIndex.runProcess([s],this.layer.id),t.addedToSpatialIndex=!0,!0},e}();return s});