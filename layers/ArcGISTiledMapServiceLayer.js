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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/io-query","../kernel","../urlUtils","../SpatialReference","./TiledMapServiceLayer","./ArcGISMapServiceLayer","./TileInfo","./TimeInfo","./TileMap"],function(e,r,i,t,a,s,n,o,l,c,_,h,d,f,p){var v=r([_,h],{declaredClass:"esri.layers.ArcGISTiledMapServiceLayer",_agolAttrs:["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],_isReference:!1,_referenceLayers:["Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Reference","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Reference_Overlay","Reference/World_Transportation"],constructor:function(r,t){t&&(t.roundrobin&&(e.deprecated(this.declaredClass+" : Constructor option 'roundrobin' deprecated. Use option 'tileServers'."),t.tileServers=t.roundrobin),this._setTileServers(t.tileServers),this._loadCallback=t.loadCallback),this._params=i.mixin({},this._url.query),this._initLayer=i.hitch(this,this._initLayer);var a=t&&t.resourceInfo;a?this._initLayer(a):(this._load=i.hitch(this,this._load),this._load())},_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_setTileServers:function(e){if(e&&e.length>0){this.tileServers=e;var r,i=e.length;for(r=0;i>r;r++)e[r]=l.urlToObject(e[r]).path}},_initLayer:function(e){if(this.inherited(arguments),this.resourceInfo=a.toJson(e),this.tileInfo=new d(e.tileInfo),this.resampling!==!1){var r=e.capabilities&&e.capabilities.indexOf("Tilemap")>-1;r?(this.resampling=!0,this.tileMap=new p(this)):this.resampling=!!e.resampling}!this.spatialReference&&this.tileInfo.spatialReference&&(this.spatialReference=new c(this.tileInfo.spatialReference.toJson())),this.isPNG32="PNG24"===this.tileInfo.format||"PNG32"===this.tileInfo.format,e.timeInfo&&(this.timeInfo=new f(e.timeInfo));var i=this._url.path,t=this._loadCallback,s="file:"===window.location.protocol?"https:":window.location.protocol,n=i.match(/^https?\:\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i),o=n&&n[2];if(!this.tileServers)if(e.tileServers)this._setTileServers(e.tileServers);else{var l=-1!==i.search(/^https?\:\/\/server\.arcgisonline\.com/i),_=-1!==i.search(/^https?\:\/\/services\.arcgisonline\.com/i);(l||_)&&this._setTileServers([i,i.replace(l?/server\.arcgisonline/i:/services\.arcgisonline/i,l?"services.arcgisonline":"server.arcgisonline")])}if(o){o=o.toLowerCase();var h,v;for(h=0;h<this._agolAttrs.length;h++)if(v=this._agolAttrs[h],v.toLowerCase()===o){this.hasAttributionData=!0,this.attributionDataUrl=this.attributionDataUrl||s+"//static.arcgis.com/attribution/"+v;break}for(h=0;h<this._referenceLayers.length;h++)if(v=this._referenceLayers[h],v.toLowerCase()===o){this._isReference=!0;break}}this.loaded=!0,this.onLoad(this),t&&(delete this._loadCallback,t(this))},getTileUrl:function(e,r,i){var t=this.tileServers,a=this._getToken(),s=this._url.query,o=(t?t[r%t.length]:this._url.path)+"/tile/"+e+"/"+r+"/"+i;return this.resampling&&!this.tileMap&&(o+="?blankTile=false"),s&&(o+=this.resampling&&!this.tileMap?"&"+n.objectToQuery(s):"?"+n.objectToQuery(s)),!a||s&&s.token||(o+=(-1===o.indexOf("?")?"?":"&")+"token="+a),o=this.addTimestampToURL(o),l.addProxy(o)}});return s("extend-esri")&&i.setObject("layers.ArcGISTiledMapServiceLayer",v,o),v});