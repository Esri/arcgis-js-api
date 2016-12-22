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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../../../processors/SpatialIndex","../../../../geometry/SpatialReference","../../../../geometry/support/webMercatorUtils"],function(e,t,i,r,a,n){function s(e){return e.wkid===a.WGS84.wkid}var o=function(){function e(){var e=this;this.spatialIndex=new r,this.spatialIndexNumGraphics=0,this.spatialIndexNumPendingQueries=0,this.layerView=null,this.layer=null,this.viewSR=null,this.graphicsCore=null,this._readyDfd=new i;var t=function(e){return e.workerClient&&e.workerClient.worker};t(this.spatialIndex)?this._readyDfd.resolve():this.spatialIndex.on("start",function(){t(e.spatialIndex)&&e._readyDfd.resolve()})}return e.prototype.initialize=function(e,t,i,r){this.layerView=e,this.layer=t,this.viewSR=i,this.graphicsCore=r},e.prototype.destroy=function(){this.spatialIndex&&(this.spatialIndex.destroy(),this.spatialIndex=null),this.viewSR=null,this.layerView=null,this.graphicsCore=null},e.prototype.numNodesUpdating=function(){return 0},e.prototype.isUpdating=function(){return this.spatialIndexNumPendingQueries>0},e.prototype.hasGraphics=function(){return this.spatialIndexNumGraphics>0},e.prototype.intersects=function(e,t,i){var r=this;this.hasGraphics()&&(this.spatialIndexNumPendingQueries++,this.spatialIndex.intersects(e,void 0,void 0,!0).then(function(e){r.spatialIndexNumPendingQueries--,i(e.results,e.results.length),r.layerView._evaluateUpdatingState()}))},e.prototype.shouldAddToSpatialIndex=function(e,t,i){return i||t.mustAlignToTerrain()},e.prototype.addGraphicsToSpatialIndex=function(e){if(this.layerView.loadedGraphics)for(var t=this.layerView.loadedGraphics.toArray(),i=t.length,r=0;i>r;r++){var a=t[r],n=this.graphicsCore.getGraphics3DGraphicById(a.uid);n&&!n.addedToSpatialIndex&&this.shouldAddToSpatialIndex(a,n,e)&&this.addGraphicToSpatialIndex(a,n)}},e.prototype.addGraphicToSpatialIndex=function(e,t){var i=e.geometry.spatialReference,r=this.viewSR,a={id:e.uid,geometry:null};if(i.equals(r))a.geometry=e.geometry.toJSON();else{var o=void 0;if(s(i)&&r.isWebMercator)o=n.geographicToWebMercator(e.geometry);else{if(!i.isWebMercator||!s(r))return console.warn("Cannot convert graphic geometry to map spatial reference, elevation and scale updates are disabled"),!1;o=n.webMercatorToGeographic(e.geometry)}a.geometry=o.toJSON()}return this.spatialIndexNumGraphics++,this.spatialIndex.runProcess([a],this.layer.id),t.addedToSpatialIndex=!0,!0},e.prototype.whenLoaded=function(){return this._readyDfd.promise},e}();return o});