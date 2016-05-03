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

define(["../../core/declare","dojo/_base/lang","dojo/_base/array","dojo/io-query","../../request","../../core/urlUtils","../../core/Accessoire"],function(e,t,i,l,a,n,r){var s=function(e,t,i){return[e,t,i].join("/")},o=function(e,t,i,l,a){return[e,t,i,l,a].join("/")},h=function(e,t,i){this.id=s(e,t,i),this.level=e,this.row=t,this.col=i},u=function(e,t,i,l,a){this.id=o(e,t,i,l,a),this.level=e,this.row=t,this.col=i,this.width=l,this.height=a,this.data=null,this.dataValue=null,this.valid=null,this.location=null,this.promise=null};u.prototype={setData:function(e){var i,l,a=e?e.data:null,n=null;if(t.mixin(this,e||{}),a&&a.length>0)if(l=a.length,1===l)n=a[0];else for(n=a[0],i=1;l>i;i++)if(a[i]!==n){n=null;break}return null!==n&&(this.data=null,this.dataValue=n),this},isTileAvailable:function(e,t){var i,l,a,n=this.location,r=this.data,s=this.dataValue;return this.valid?null!==s?a=s:(i=n.left,l=n.top,a=(e-l)*n.width+(t-i),a=a<r.length?r[a]:0):a=0,!!a}};var c=e(r,{declaredClass:"esri.layers.support.TileMap",constructor:function(){this._tileMapCache={}},width:8,height:8,getTileMap:function(e,t,i,l,n){var r=null!=e.level?e:new u(e,t,i,l,n),s=a(this._getTileMapUrl(r.level,r.row,r.col,r.width,r.height),{responseType:"json",callbackParamName:"callback",timeout:3e3,failOk:!0}).then(function(e){return r.setData(e.data)});return r.promise=s,s},getTile:function(e,t,i,l){var a=this._getResamplingBudget(),n=null;if(e&&null!=e.level?(n=e,l=t):n=new h(e,t,i),a>0){var r={tile:n,requestedTile:n,callback:l,resamplingBudget:a};this._process(r)}else l.call(this,n,n)},statusOf:function(e,t,i){var l,a=this._getResamplingBudget(),n=new h(e,t,i);if(0===a)return 1;for(;a>=0;){if(l=this._tileToTileMap(n),!this._tileMapCache[l.id])return-1;if(l=this._tileMapCache[l.id],!l.promise.isFulfilled())return-1;if(l.isTileAvailable(n.row,n.col))return 1;if(n=this._parentTile(n),!n)return 0;a--}return 0},_process:function(e){var t=(e.tile,this._tileToTileMap(e.tile));this._getTileMap(t).then(function(t){var i=e.tile,l=this._parentTile(i);t.isTileAvailable(i.row,i.col)?e.callback.call(this,i,e.requestedTile):e.resamplingBudget>0&&l?(e.resamplingBudget--,e.tile=l,this._process(e)):e.callback.call(this,e.requestedTile,e.requestedTile)}.bind(this),function(){e.callback.call(this,e.requestedTile,e.requestedTile)}.bind(this))},_getTileMap:function(e){var t;return this._tileMapCache[e.id]?(e=this._tileMapCache[e.id],t=e.promise):(this._tileMapCache[e.id]=e,t=this.getTileMap(e)),t},_parentTile:function(e){var t,l,a,n=this.layer.tileInfo,r=n.lods,s=null;return i.some(r,function(i,a){return e.level===i.level?(t=i,l=a,!0):!1}),l>0&&(a=r[l-1],s=new h(a.level,Math.floor(e.row*t.resolution/a.resolution+.01),Math.floor(e.col*t.resolution/a.resolution+.01))),s},_tileToTileMap:function(e){var t=Math.floor(e.row/this.width)*this.width,i=Math.floor(e.col/this.height)*this.height;return new u(e.level,t,i,this.width,this.height)},_getTileMapUrl:function(e,t,i,a,r){var s=this.layer,o=s.tileServers,h=s.parsedUrl,u=s.token,c=h.query,d=[o&&o.length?o[t%o.length]:h.path,"tilemap",e,t,i,a,r].join("/");return c&&(d+="?"+l.objectToQuery(c)),!u||c&&c.token||(d+=(-1===d.indexOf("?")?"?":"&")+"token="+u),n.addProxy(d)},_getResamplingBudget:function(){var e=this.layer,t=0;return e.resampling&&(t=e.tileInfo.lods.length),t}});return c.TileMapData=u,c});