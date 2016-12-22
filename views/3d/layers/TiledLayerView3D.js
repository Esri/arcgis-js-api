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

define(["dojo/request/xhr","../../../core/declare","../../../core/watchUtils","../../../core/promiseUtils","../../../core/Error","../../../layers/support/arcgisLayerUrl","../../layers/LayerView","../terrain/terrainUtils","./support/LayerViewUpdatingPercentage"],function(e,i,r,t,a,s,n,l,o){function c(e){var i=null,r=e.search(/\/rest\/services\//i);return r>0&&(i=e.substring(0,r+6)),i}var h=i([n,o],{declaredClass:"esri.views.3d.layers.TiledLayerView3D",properties:{formatIsTransparent:{dependsOn:["layer.tileInfo.format"],get:function(){return"jpg"!==this.get("layer.tileInfo.format")}},isTransparent:{dependsOn:["fullOpacity","formatIsTransparent"],readOnly:!0,get:function(){return this.fullOpacity<1||this.formatIsTransparent}}},_numUpdating:0,_maxNumUpdating:0,_isUpdating:!1,minDataLevel:0,maxDataLevel:1/0,initialize:function(){var e=this.layer.tileInfo,i=l.checkIfTileInfoSupportedForView(e,this.layer.fullExtent,this.view.spatialReference,this.view.basemapTerrain.manifold);if(i){var s,n={layer:this.layer,error:i};switch(i.name){case"tilingscheme:local-gcs-not-supported":s=new a("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",n);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":s=new a("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",n);break;default:s=new a("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",n)}this.addResolvingPromise(t.reject(s))}else{var o=r.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){if(!this.view.basemapTerrain.tilingScheme.compatibleWith(e)){var i=new a("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface");return t.reject(i)}}.bind(this));this.addResolvingPromise(o)}this._checkServiceVersionCompatibility();var c=1/0,h=0;e.lods.forEach(function(e){c=Math.min(e.level,c),h=Math.max(e.level,h)}),h=Math.min(h,l.getKnownTiledServiceLevelCap(this.layer.url)),this.minDataLevel=c,this.maxDataLevel=h},getTileUrl:function(e,i,r){return this.layer.getTileUrl(e,i,r)},_checkServiceVersionCompatibility:function(){if(!s.isHostedAgolService(this.layer.url))if(this.layer.version<10.22){var i=new a("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+this.layer.version,{minVersion:10.22,detectedVersion:this.layer.version});this.addResolvingPromise(t.reject(i))}else if(10.22===this.layer.version){var r=c(this.layer.url),n={headers:{"X-Requested-With":null},timeout:1e4,handleAs:"json"},l=new a("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied."),o=e(r+"self?f=json",n).then(function(e){if(!e||e.error)throw l}).otherwise(function(){throw l});this.addResolvingPromise(o)}},_evaluateUpdatingState:function(e){this._isUpdating=!!e,this.notifyChange("updating")},isUpdating:function(){return this._isUpdating}});return h});