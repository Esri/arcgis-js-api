/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/Error","../../../../core/maybe","../../../../core/accessorSupport/decorators/property","../../../../core/has","../../../../core/accessorSupport/ensureType","../../../../core/Logger","../../../../core/accessorSupport/decorators/subclass","../../../../geometry/Extent","../../../../layers/support/rasterFunctions/pixelUtils","./RasterLayerAdapter"],(function(t,e,r,s,a,i,o,n,l,c,h,p){"use strict";let u=function(e){function a(){return e.apply(this,arguments)||this}t._inheritsLoose(a,e);var i=a.prototype;return i.generateRasterInfo=function(t){return Promise.resolve(this.rasterInfo)},i.estimateStatisticsHistograms=function(){var e=t._asyncToGenerator((function*(t){if(null!==this._statsCache)return this._statsCache;const{raster:e}=this.layer,{extent:a,width:i,height:o}=this.getSamplePixelBlockDescriptor(e.rasterInfo),{pixelBlock:n}=yield e.fetchPixels(a,i,o,t);if(s.isNone(n))throw new r("raster-layer-adapter","Unable to estimate histograms");return this._statsCache=h.estimateStatisticsHistograms(n),this._statsCache}));function a(t){return e.apply(this,arguments)}return a}(),i.supportsMultidirectionalHillshade=function(){return!0},i.load=function(t){return this.addResolvingPromise(this.layer.load(t).then((()=>this.rasterInfo=this.layer.raster.rasterInfo))),Promise.resolve(this)},i.getSamplePixelBlockDescriptor=function(t,e=1e3){const{pyramidScalingFactor:r,maximumPyramidLevel:s}=t.storageInfo;let{extent:a,width:i,height:o,pixelSize:n}=t,l=Math.ceil(Math.log(Math.max(i,o)/e)/Math.log(r))-1,h=0,p=0;if(l<=s){const t=r**l;i=Math.floor(i/t),o=Math.floor(o/t)}else l=0,i=Math.min(i,e),o=Math.min(o,e),h=Math.max(Math.floor(i/2-500),0),p=Math.max(Math.floor(o/2-500),0),a=new c({xmin:a.xmin+h*n.x,xmax:Math.min(a.xmax,a.xmin+h*n.x*e),ymin:a.ymin+p*n.y,ymax:Math.min(a.ymax,a.ymin+p*n.y*e)});return{extent:a,width:i,height:o,origin:{x:h,y:p}}},a}(p);return e.__decorate([a.property()],u.prototype,"layer",void 0),u=e.__decorate([l.subclass("esri.smartMapping.support.adapters.ImageryTileLayerAdapter")],u),u}));
