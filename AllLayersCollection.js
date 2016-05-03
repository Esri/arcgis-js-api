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

define(["./core/Collection","./core/HandleRegistry","./core/Scheduler","./core/watchUtils"],function(e,r,s){var t=function(e){var r=function(s){return s&&(e.push(s),s.forEach(function(e){r(e.layers)})),e};return r},n=function(e){var r=function(s){return s&&s.forEach(function(s){e.push(s),r(s.layers)}),e};return r},o=e.createSubclass({declaredClass:"esri.AllLayersCollection",properties:{source:{}},constructor:function(){this._handles=new r,this._repopulate=this._repopulate.bind(this),this.refresh=this.refresh.bind(this)},initialize:function(){this._handles.add(this.layersCollectionNames.map(function(e){return this.watch(e,this.refresh)},this)),this._repopulate()},destroy:function(){this.source=null,this._repopulate(),this._handles.destroy(),this._handles=null},_handles:null,layersCollectionNames:["source.basemap.baseLayers","source.ground.layers","source.layers","source.basemap.referenceLayers"],source:null,refresh:function(){var e=this._handles;e&&(e.remove("refresh"),e.add(s.schedule(this._repopulate),"refresh"))},_repopulate:function(){var e=this._handles;e.remove("refresh"),e.remove("collections");var r=this.layersCollectionNames.map(this.get,this).filter(function(e){return null!=e}),s=[];r.forEach(t(s)),e.remove("collections"),e.add(s.map(function(e){return e.on("change",this.refresh)},this),"collections"),this.removeAll(),r.forEach(n(this))},_createNewInstance:function(r){return new e(r)}});return o});