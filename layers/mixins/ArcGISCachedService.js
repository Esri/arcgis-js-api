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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/io-query","./ArcGISService","./ScaleRangeLayer","../../core/urlUtils","../support/TileInfo","../support/TileMap"],function(e,r,i,a,l,n,s){var t=i.createSubclass([a],{declaredClass:"esri.layers.mixins.ArcGISCachedService",properties:{minScale:{json:{origins:{service:{readable:!1}}}},maxScale:{json:{origins:{service:{readable:!1}}}},resampling:!0,supportsBlankTile:{value:!1,readOnly:!0,dependsOn:["version"],get:function(){return this.version>=10.2}},tileInfo:{value:null,type:n,json:{read:function(e,r){var i=r.minScale?r.minScale:+(1/0),a=r.maxScale?r.maxScale:-(1/0);return e?(e.lods=e.lods.filter(function(e){return e.scale<=i&&e.scale>=a}),n.fromJSON(e)):null}}},tileMap:{value:null,json:{readFrom:["capabilities"],read:function(e,r){var i=r.capabilities&&r.capabilities.indexOf("Tilemap")>-1;return i?new s({layer:this}):null}}},refreshTimestamp:null,version:{}},refresh:function(){this.refreshTimestamp=Date.now(),this.inherited(arguments)},getTileUrl:function(i,a,n){var s=!this.tileMap&&this.resampling&&this.supportsBlankTile,t=e.mixin({},this.parsedUrl.query,{token:this.token,blankTile:s?!1:null,_ts:this.refreshTimestamp}),o=this.parsedUrl.path+"/tile/"+i+"/"+a+"/"+n;return t=r.objectToQuery(t),o+=t?"?"+t:"",l.addProxy(o)}});return t});