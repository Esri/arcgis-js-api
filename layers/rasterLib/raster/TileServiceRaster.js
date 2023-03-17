// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/_base/json","dojo/sniff","dojo/DeferredList","dojo/when","../../../kernel","../../../Evented","../../../request","../../../geometry/Extent","../../../geometry/Point","../../../SpatialReference","../../../deferredUtils","../../../urlUtils","../../PixelBlock","../../rasterFormats/rasterCodec","../tile/RasterTileInfo","./RasterInfo","./BasicRaster"],(function(e,t,i,n,r,s,l,o,a,h,c,f,d,u,p,I,v,y,x,g,m,w,T){var _=t([T],{declaredClass:"esri.layers.rasterLib.raster.TileServiceRaster",constructor:function(e){},open:function(){var e=new n,t=this.serviceInfo||this._getServiceInfo(null),r=i.hitch(this,(function(t){this.serviceInfo=t,this.version=t.currentVersion,this.rasterInfo=this._parseRasterInfo(t),this.loaded=!0,this._getRasterIdentifier(),e.resolve(this)})),s=i.hitch(this,(function(t){this.loaded=!0,this._getRasterIdentifier(),e.reject(t)}));return h(t,r,s),e.promise},read:function(e){var t=this.url+"/tile/"+e.level+"/"+e.row+"/"+e.col,i={width:this.tileInfo.cols,height:this.tileInfo.rows,planes:null,pixelType:null,format:null,decodeFunc:null,isPoint:"elevation"===this.tileType.toLowerCase()};return this._requestPixels({url:t+(this.disableClientCaching?"?_ts= "+(new Date).getTime():""),payload:{},decodeParams:i,tileOptions:e})},identify:function(e,t){null==t&&(t=this.tileInfo.lods[this.tileInfo.lods.length-1].level);var i=(e.x-this.tileInfo.origin.x)/this.tileInfo.lods[t].resolution/this.tileInfo.cols,r=(this.tileInfo.origin.y-e.y)/this.tileInfo.lods[t].resolution/this.tileInfo.rows,s=Math.floor(i),l=Math.floor(r),o=Math.floor((i-s)*this.tileInfo.cols);o=Math.min(o,this.tileInfo.cols-1);var a=Math.floor((r-l)*this.tileInfo.rows);a=Math.min(a,this.tileInfo.rows-1);var h=new n;return this.read({level:t,row:l,col:s}).then((function(e){var t,i=a*e.width+o;e&&e.pixels&&e.pixels.length>0?(t=e.mask?e.mask[i]?e.pixels.map((function(e){return e[i]})):null:e.pixels.map((function(e){return e[i]})),h.resolve(t)):h.reject("no valid data")}),(function(e){h.reject(e)})),h.promise},setFetchParameters:function(e,t){},_getRasterIdentifier:function(){return this._rasterId||(this._rasterId=this.url.replace("http:","").replace("https:","")),this._rasterId},_getServiceInfo:function(){var e=this.url,t=new n(v._dfdCanceller);return t._pendingDfd=d({url:e,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),t._pendingDfd.then((function(e){t.callback(e)}),(function(e){t.errback(e)})),t},_parseRasterInfo:function(e){var t=new w;switch(t.extent=new u(e.fullExtent),t.spatialReference=new I(e.spatialReference),this.tileType=e.cacheType||"Map",this.tileType){case"Map":t.bandCount=3,t.pixelType="U8",this.dataType="Processed";break;case"Elevation":t.bandCount=1,t.pixelType=e.pixelType||"F32",this.dataType="Elevation";break;case"Raster":t.bandCount=null,t.pixelType=null,this.dataType=e.serviceDataType&&e.serviceDataType.replace("esriImageServiceDataType","")||"Generic"}var i=e.tileInfo;return t.width=Math.floor((e.fullExtent.xmax-e.fullExtent.xmin)/i.lods[i.lods.length-1].resolution+.5),t.height=Math.floor((e.fullExtent.ymax-e.fullExtent.ymin)/i.lods[i.lods.length-1].resolution+.5),t.cellSize=new p({x:i.lods[i.lods.length-1].resolution,y:i.lods[i.lods.length-1].resolution,spatialReference:e.spatialReference}),this.tileInfo=new m(i),this.tileInfo.tileType=this.tileType,t}});return o("extend-esri")&&i.setObject("layers.rasterLib.raster.TileServiceRaster",_,c),_}));