// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/io-query","../kernel","../urlUtils","../SpatialReference","./TiledMapServiceLayer","./ArcGISMapServiceLayer","./TileInfo","./TimeInfo","./TileMap"],(function(e,r,i,a,t,s,n,o,l,c,_,h,d,f,p){var v=r([_,h],{declaredClass:"esri.layers.ArcGISTiledMapServiceLayer",_agolAttrs:["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],_isReference:!1,_referenceLayers:["Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Reference","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Reference_Overlay","Reference/World_Transportation"],constructor:function(r,a){a&&(a.roundrobin&&(e.deprecated(this.declaredClass+" : Constructor option 'roundrobin' deprecated. Use option 'tileServers'."),a.tileServers=a.roundrobin),this._setTileServers(a.tileServers),this._loadCallback=a.loadCallback),this._params=i.mixin({},this._url.query),this._initLayer=i.hitch(this,this._initLayer);var t=a&&a.resourceInfo;t?this._initLayer(t):(this._load=i.hitch(this,this._load),this._load())},_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_setTileServers:function(e){if(e&&e.length>0){this.tileServers=e;var r,i=e.length;for(r=0;r<i;r++)e[r]=l.urlToObject(e[r]).path}},_initLayer:function(e,r){if(this.inherited(arguments),this.resourceInfo=t.toJson(e),this.tileInfo=new d(e.tileInfo),!1!==this.resampling){var i=e.capabilities&&e.capabilities.indexOf("Tilemap")>-1;i?(this.resampling=!0,this.tileMap=new p(this)):this.resampling=!!e.resampling}!this.spatialReference&&this.tileInfo.spatialReference&&(this.spatialReference=new c(this.tileInfo.spatialReference.toJson())),this.isPNG32="PNG24"===this.tileInfo.format||"PNG32"===this.tileInfo.format,e.timeInfo&&(this.timeInfo=new f(e.timeInfo)),e.mensurationCapabilities&&(this.mensurationCapabilities=e.mensurationCapabilities);var a=this._url.path,s=this._loadCallback,n=l.getProtocolForWebResource(!0),o=a.match(/^https?\:\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i),_=o&&o[2];if(!this.tileServers)if(e.tileServers)this._setTileServers(e.tileServers);else{var h=-1!==a.search(/^https?\:\/\/server\.arcgisonline\.com/i),v=-1!==a.search(/^https?\:\/\/services\.arcgisonline\.com/i);(h||v)&&this._setTileServers([a,a.replace(h?/server\.arcgisonline/i:/services\.arcgisonline/i,h?"services.arcgisonline":"server.arcgisonline")])}if(_){var g,u;for(_=_.toLowerCase(),g=0;g<this._agolAttrs.length;g++)if((u=this._agolAttrs[g]).toLowerCase()===_){this.hasAttributionData=!0,this.attributionDataUrl=this.attributionDataUrl||n+"//static.arcgis.com/attribution/"+u;break}for(g=0;g<this._referenceLayers.length;g++)if((u=this._referenceLayers[g]).toLowerCase()===_){this._isReference=!0;break}}this.loaded=!0,this.onLoad(this),s&&(delete this._loadCallback,s(this))},getTileUrl:function(e,r,i){var a=this.tileServers,t=this._getToken(),s=this._url.query,o=(a?a[r%a.length]:this._url.path)+"/tile/"+e+"/"+r+"/"+i;return o=l.upgradeToHTTPS(o),this.resampling&&!this.tileMap&&(o+="?blankTile=false"),s&&(this.resampling&&!this.tileMap?o+="&"+n.objectToQuery(s):o+="?"+n.objectToQuery(s)),!t||s&&s.token||(o+=(-1===o.indexOf("?")?"?":"&")+"token="+t),o=this.addTimestampToURL(o),l.addProxy(o)}});return s("extend-esri")&&i.setObject("layers.ArcGISTiledMapServiceLayer",v,o),v}));