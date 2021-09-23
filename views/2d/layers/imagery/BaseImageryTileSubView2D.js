/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Accessor","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../layers/support/PixelBlock"],(function(e,r,i,o,t,l,s,a,c,p,n){"use strict";e.BaseImageryTileSubView2D=function(e){function i(){var r;return(r=e.apply(this,arguments)||this)._emptyTilePixelBlock=null,r.container=null,r.layer=null,r.tileSize=null,r.useWebGLForProcessing=!0,r}r._inheritsLoose(i,e);var o=i.prototype;return o.fetchTile=function(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)},o.createEmptyTilePixelBlock=function(e=null){const r=null==e||e.join(",")===this.tileSize.join(",");if(r&&t.isSome(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this.tileSize;const[i,o]=e,l=new n({width:i,height:o,pixels:[new Uint8Array(i*o)],mask:new Uint8Array(i*o),pixelType:"u8"});return r&&(this._emptyTilePixelBlock=l),l},i}(o),i.__decorate([l.property()],e.BaseImageryTileSubView2D.prototype,"container",void 0),i.__decorate([l.property()],e.BaseImageryTileSubView2D.prototype,"layer",void 0),i.__decorate([l.property()],e.BaseImageryTileSubView2D.prototype,"tileSize",void 0),i.__decorate([l.property()],e.BaseImageryTileSubView2D.prototype,"type",void 0),i.__decorate([l.property()],e.BaseImageryTileSubView2D.prototype,"useWebGLForProcessing",void 0),e.BaseImageryTileSubView2D=i.__decorate([p.subclass("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],e.BaseImageryTileSubView2D),Object.defineProperty(e,"__esModule",{value:!0})}));
