/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{isSome as t}from"../../../../core/maybe.js";import{watch as i}from"../../../../core/reactiveUtils.js";import{property as r}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/ensureType.js";import{subclass as o}from"../../../../core/accessorSupport/decorators/subclass.js";import{sampleVectorField as s}from"../../../../layers/support/rasterFunctions/vectorFieldUtils.js";import{RasterVFTileContainer as l}from"../../engine/imagery/RasterVFTileContainer.js";import{BaseImageryTileSubView2D as a}from"./BaseImageryTileSubView2D.js";let c=class extends a{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF"}canUseWebGLForProcessing(){return!1}async fetchTile(e,t){t={...t,interpolation:"nearest",requestProjectedLocalDirections:!0};const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return"vector-magdir"===this.layer.rasterInfo.dataType&&i?.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,i){const r=i.symbolizerParams,{tileData:o}=e;o.key=e.key,o.width=this._tileInfoView.tileInfo.size[0],o.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:s}=r,{source:l}=i;if(o.offset=this._getTileSymbolOffset(o.key,s),t(l)&&t(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};o.rawPixelData=e,o.symbolizerParameters=r,o.source=this._sampleVectorFieldData(l.pixelBlock,r,o.offset)}else{const e=[Math.round((this._tileInfoView.tileInfo[0]-o.offset[0])/s),Math.round((this._tileInfoView.tileInfo[1]-o.offset[1])/s)],t=this.createEmptyTilePixelBlock(e);o.source=t,o.symbolizerParameters=r}return o.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,i){const r=i.local,{symbolTileSize:o}=r,{tileData:s}=e;s.offset=this._getTileSymbolOffset(s.key,o);const l=s.symbolizerParameters.symbolTileSize;return s.symbolizerParameters=r,t(s.rawPixelData?.pixelBlock)&&l!==o&&(s.source=this._sampleVectorFieldData(s.rawPixelData.pixelBlock,s.symbolizerParameters,s.offset)),Promise.resolve(null)}attach(){super.attach(),this.container=new l(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=i((()=>this.layer.renderer),(e=>this._updateSymbolType(e)))}detach(){super.detach(),this.container.removeAllChildren(),this._handle.remove(),this._handle=null}_getTileSymbolOffset(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,r=e.row*this._tileInfoView.tileInfo.size[1]%t;return[i>t/2?t-i:-i,r>t/2?t-r:-r]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:r}=t;return s(e,"vector-uv",r,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"])}};e([r()],c.prototype,"container",void 0),e([r()],c.prototype,"layer",void 0),e([r()],c.prototype,"type",void 0),c=e([o("esri.views.2d.layers.imagery.VectorFieldTileView2D")],c);const n=c;export{n as default};