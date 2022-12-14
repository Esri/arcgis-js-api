/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import e from"../../../core/Error.js";import{isSome as s}from"../../../core/maybe.js";import{eachAlways as r}from"../../../core/promiseUtils.js";import{property as i}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import a from"../RasterInfo.js";import m from"./BaseRaster.js";import{split as n}from"../rasterFunctions/pixelUtils.js";import{estimateStatisticsHistograms as l}from"../rasterFunctions/stretchUtils.js";import p from"../../../geometry/Extent.js";import c from"../../../geometry/SpatialReference.js";let h=class extends m{constructor(){super(...arguments),this.datasetFormat="MEMORY"}async open(t){await this.init();const{pixelBlock:e,statistics:s,histograms:r,name:i,keyProperties:o,nativeExtent:m,transform:n}=this.data,{width:l,height:h,pixelType:f}=e,d=this.data.extent||new p({xmin:-.5,ymin:.5,xmax:l-.5,ymax:h-.5,spatialReference:new c({wkid:3857})}),u=this.data.isPseudoSpatialReference??!this.data.extent,y={x:d.width/l,y:d.height/h},x=new a({width:l,height:h,pixelType:f,extent:d,nativeExtent:m,transform:n,pixelSize:y,spatialReference:d.spatialReference,bandCount:3,keyProperties:o||{},statistics:s,isPseudoSpatialReference:u,histograms:r});this.createRemoteDatasetStorageInfo(x,512,512),this._set("rasterInfo",x),this.updateTileInfo(),await this._buildInMemoryRaster(e,{width:512,height:512},t),this.datasetName=i,this.url="/InMemory/"+i}fetchRawTile(t,e,s,r={}){const i=this._pixelBlockTiles.get(`${t}/${e}/${s}`);return Promise.resolve(i)}async _buildInMemoryRaster(t,i,o){const a=this.rasterInfo.storageInfo.maximumPyramidLevel,m=this.rasterJobHandler?this.rasterJobHandler.split({pixelBlock:t,tileSize:i,maximumPyramidLevel:a},o):Promise.resolve(n(t,i,a)),p=s(this.rasterInfo.statistics),c=s(this.rasterInfo.histograms),h=p?Promise.resolve({statistics:null,histograms:null}):this.rasterJobHandler?this.rasterJobHandler.estimateStatisticsHistograms({pixelBlock:t},o):Promise.resolve(l(t)),f=await r([m,h]);if(!f[0].value&&f[1].value)throw new e("inmemory-raster:open","failed to build in memory raster");this._pixelBlockTiles=f[0].value,p||(this.rasterInfo.statistics=f[1].value?.statistics),c||(this.rasterInfo.histograms=f[1].value?.histograms)}};t([i({type:String,json:{write:!0}})],h.prototype,"datasetFormat",void 0),t([i()],h.prototype,"data",void 0),h=t([o("esri.layers.support.rasterDatasets.InMemoryRaster")],h);const f=h;export{f as default};