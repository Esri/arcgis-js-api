// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Error","../../../core/MapUtils","./CloudRaster","./ImageServerRaster","./MRFRaster","./TIFFRaster"],(function(e,r,t,n,o,s,a,u,c){"use strict";var i=new Map;return i.set("CRF",{desc:"Cloud Raster Format",constructor:s}),i.set("MRF",{desc:"Meta Raster Format",constructor:u}),i.set("TIFF",{desc:"GeoTIFF",constructor:c}),i.set("RasterTileServer",{desc:"Raster Tile Server",constructor:a}),function(){function e(){}return Object.defineProperty(e,"supportedFormats",{get:function(){var e=new Set;return i.forEach((function(r,t){return e.add(t)})),e},enumerable:!1,configurable:!0}),e.open=function(e){return t.__awaiter(this,void 0,void 0,(function(){var r,s,a,u,c,l,f,d,p,F,g;return t.__generator(this,(function(t){switch(t.label){case 0:return r=e.url,s=e.ioConfig,a=e.sourceJSON,null==(u=e.datasetFormat)&&r.lastIndexOf(".")&&(u=r.slice(r.lastIndexOf(".")+1).toUpperCase()),"OVR"===u||"TIF"===u?u="TIFF":r.toLowerCase().indexOf("/imageserver")>-1&&(u="RasterTileServer"),c={bandIds:null,sampling:null},l={url:r,sourceJSON:a,datasetFormat:u,ioConfig:s||c},this.supportedFormats.has(u)?(f=i.get(u).constructor,[4,(d=new f(l)).open({signal:e.signal})]):[3,2];case 1:return t.sent(),[2,d];case 2:if(u)throw new n("rasterfactory:open","not a supported format "+u);return p=o.keysOfMap(i),F=0,[2,(g=function(){return(u=p[F++])?(f=i.get(u).constructor,(d=new f(l)).open({signal:e.signal}).then((function(){return d})).catch((function(){return g()}))):null})()]}}))}))},e.register=function(e,r,t){i.has(e.toUpperCase())||i.set(e.toUpperCase(),{desc:r,constructor:t})},e}()}));