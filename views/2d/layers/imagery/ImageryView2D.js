/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../Graphic","../../../../core/Accessor","../../../../core/Logger","../../../../core/maybe","../../../../core/promiseUtils","../../../../core/screenUtils","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/accessorSupport/decorators/enumeration","../../../../core/accessorSupport/decorators/subclass","../../../../layers/support/rasterFunctions/pixelUtils","../../engine/BitmapContainer","../../engine/Container","../../engine/ImageryBitmapSource","../support/ExportStrategy"],(function(e,t,r,i,a,o,n,s,c,p,l,u,h,d,y,g,m,x){"use strict";const _=a.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let f=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).attached=!1,e.container=new g.Container,e.updateRequested=!1,e.type="Imagery",e._bitmapView=null,e}e._inheritsLoose(i,t);var a=i.prototype;return a.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1},a.update=function(e){this.strategy.update(e).catch((e=>{n.isAbortError(e)||_.error(e)}))},a.detach=function(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren()},a.hitTest=function(e,t){const i=this.view.toMap(s.createScreenPoint(e,t));return Promise.resolve(new r({attributes:{},geometry:i,layer:this.layer}))},a.attach=function(){const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this._bitmapView=new y.BitmapContainer,this.strategy=new x({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()}),this.attached=!0},a.install=function(e){this.container.addChild(this._bitmapView),e.addChild(this.container)},a.uninstall=function(e){this.container.removeChild(this._bitmapView),e.removeChild(this.container)},a.redraw=function(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender()}))}))},a.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())},a.isUpdating=function(){return this.strategy.updating||this.updateRequested},a.getPixelData=function(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=d.mosaicPixelData(r,t);return o.isSome(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null},a._fetchImage=function(e,t,r,i){return(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((t=>{const r=new m(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))},e._createClass(i,[{key:"updating",get:function(){return!this.attached||this.isUpdating()}}]),i}(i);return t.__decorate([c.property()],f.prototype,"attached",void 0),t.__decorate([c.property()],f.prototype,"container",void 0),t.__decorate([c.property()],f.prototype,"layer",void 0),t.__decorate([c.property()],f.prototype,"strategy",void 0),t.__decorate([c.property()],f.prototype,"timeExtent",void 0),t.__decorate([c.property()],f.prototype,"view",void 0),t.__decorate([c.property()],f.prototype,"updateRequested",void 0),t.__decorate([c.property()],f.prototype,"updating",null),t.__decorate([u.enumeration({imagery:"Imagery"})],f.prototype,"type",void 0),f=t.__decorate([h.subclass("esri.views.2d.layers.imagery.ImageryView2D")],f),f}));
