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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","module","dojo/Deferred","dojo/promise/all","../../PixelBlock","../../rasterFormats/rasterCodec","../function/rasterFunctionHelper","../renderer/rasterRendererHelper","../raster/RasterInfo"],function(e,r,t,s,n,i,o,a,c,p){return function(){function e(e){this.processingSettings={}}return e.prototype.setLayer=function(e){var r=new s,t=e.layerId;return this.processingSettings[t]=this.processingSettings[t]||{},e.raster&&(this.processingSettings[t].raster=e.raster,e.raster.rasterInfo&&(this.processingSettings[t].raster.rasterInfo=new p(e.raster.rasterInfo))),this.processingSettings[t].bandCount=e.bandCount,this.processingSettings[t].useWebGL=!1,r.resolve(),r.promise},e.prototype.setRasterFunction=function(e){var r=new s,t=e.layerId,n=e.data;this.processingSettings[t]=this.processingSettings[t]||{};var i;return n?(i=a.create(n),this.processingSettings[t].rasterFunction=i,this.processingSettings[t].rasterFunction.setProcessingContext(this.processingSettings[t])):this.processingSettings[t].rasterFunction=null,r.resolve(),r.promise},e.prototype.setRasterRenderer=function(e){var r=new s,t=e.layerId,n=e.data;return this.processingSettings[t]=this.processingSettings[t]||{},n?(this.processingSettings[t].rasterRenderer=c.create(n),this.processingSettings[t].rasterRenderer.bind({layer:this.processingSettings[t]})):this.processingSettings[t].rasterRenderer=null,r.resolve(),r.promise},e.prototype.processTileData=function(e){return this.decode(e).then(function(e){this.process(e).then(function(e){this.render(e)}.bind(this))}.bind(this))},e.prototype.decode=function(e){var r=e.encodedData,t=e.decodeParams;return o.decode(r,t)},e.prototype.process=function(e){var r,t=new s,n=this.processingSettings[e.layerId].rasterFunction;return n&&e&&(r=n.read(e)),t.resolve(r||e),t.promise},e.prototype.render=function(e){var r,t=new s,n=this.processingSettings[e.layerId].rasterRenderer;return n&&e&&(r=n.draw(e)),t.resolve(r||e),t.promise},e}()});