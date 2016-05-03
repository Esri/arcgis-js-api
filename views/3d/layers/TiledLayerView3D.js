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

define(["dojo/request/xhr","../../../core/declare","../../../core/watchUtils","../../../core/promiseUtils","../../../core/Error","../../layers/LayerView","../terrain/TilingScheme","../terrain/terrainUtils","./support/LayerViewUpdatingPercentage"],function(e,i,r,t,n,s,a,l,o){function c(e){if(!e)return!1;var i=".arcgis.com/",r=".arcgisonline.com/",t="//services",n="//tiles",s="//features",a=-1!==e.indexOf(i)||-1!==e.indexOf(r),l=-1!==e.indexOf(t)||-1!==e.indexOf(n)||-1!==e.indexOf(s);return a&&l}function h(e){var i=null,r=e.search(/\/rest\/services\//i);return r>0&&(i=e.substring(0,r+6)),i}var d=i([s,o],{declaredClass:"esri.views.3d.layers.TiledLayerView3D",_numUpdating:0,_maxNumUpdating:0,minDataLevel:0,maxDataLevel:1/0,initialize:function(){var e=this.layer.tileInfo,i=a.checkUnsupported(e);i&&this.addResolvingPromise(t.reject(i));var s=r.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeLocked").then(function(){if(!this.view.basemapTerrain.tilingScheme.compatibleWith(e)){var i=new n("tiledlayerview3d:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface");return t.reject(i)}}.bind(this));this.addResolvingPromise(s);var o=1/0,c=0;e.lods.forEach(function(e){o=Math.min(e.level,o),c=Math.max(e.level,c)}),c=Math.min(c,l.getKnownTiledServiceLevelCap(this.layer.url)),this.minDataLevel=o,this.maxDataLevel=c},getTileUrl:function(e,i,r){return this.layer.getTileUrl(e,i,r)},isTransparent:function(){return this.layer.tileInfo&&"JPEG"!==this.layer.tileInfo.format},_checkServiceVersionCompatibility:function(){if(!c(this.layer.url))if(this.layer.version<10.22){var i=new n("tiledlayerview3d:service-version-not-supported","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+this.layer.version,"service-too-old");this.addResolvingPromise(t.reject(i))}else if(10.22===this.layer.version){var r=h(this.layer.url),s={headers:{"X-Requested-With":null},timeout:1e4,handleAs:"json"},a=new n("tiledlayerview3d:service-version-not-supported","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.","cors-patch-missing"),l=e(r+"self?f=json",s).then(function(e){if(!e||e.error)throw a}).otherwise(function(){throw a});this.addResolvingPromise(l)}}});return d});