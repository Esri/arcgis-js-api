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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","@dojo/framework/shim/Set","../../../core/Error","./CloudRaster","./ImageServerRaster","./MRFRaster","./TIFFRaster"],(function(e,r,t,n,o,s,a,u,c,i){var l=new Map;return l.set("CRF",{desc:"Cloud Raster Format",constructor:a}),l.set("MRF",{desc:"Meta Raster Format",constructor:c}),l.set("TIFF",{desc:"GeoTIFF",constructor:i}),l.set("RasterTileServer",{desc:"Raster Tile Server",constructor:u}),function(){function e(){}return Object.defineProperty(e,"supportedFormats",{get:function(){for(var e=l.keys(),r=new o.default,t=e.next();!t.done;)r.add(t.value),t=e.next();return r},enumerable:!0,configurable:!0}),e.open=function(e){return n(this,void 0,void 0,(function(){var r,n,o,a,u,c,i,d,f,p;return t(this,(function(t){switch(t.label){case 0:return r=e.url,n=e.ioConfig,null==(o=e.datasetFormat)&&r.lastIndexOf(".")&&(o=r.slice(r.lastIndexOf(".")+1).toUpperCase()),"OVR"===o||"TIF"===o?o="TIFF":r.toLowerCase().indexOf("/imageserver")>-1&&(o="RasterTileServer"),a={resolution:null,bandIds:null,sampling:null},u={url:r,datasetFormat:o,ioConfig:n||a},this.supportedFormats.has(o)?(c=l.get(o).constructor,[4,(i=new c(u)).open({signal:e.signal})]):[3,2];case 1:return t.sent(),[2,i];case 2:if(o)throw new s("rasterfactory:open","not a supported format "+o);return d=Array.from(l.keys()),f=0,[2,(p=function(){return(o=d[f++])?(c=l.get(o).constructor,(i=new c(u)).open({signal:e.signal}).then((function(){return i})).catch((function(){return p()}))):null})()]}}))}))},e.register=function(e,r,t){l.has(e.toUpperCase())||l.set(e.toUpperCase(),{desc:r,constructor:t})},e}()}));