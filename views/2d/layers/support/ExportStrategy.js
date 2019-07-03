// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/promiseUtils","../../../../geometry/Extent","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/spatialReferenceUtils","../../../../layers/support/TileInfo","../../engine","../../viewStateUtils","../../tiling/TileInfoView","../../tiling/TileKey"],function(e,t,i,r,o,a,n,s,p,u,h,l,c,d){var g=s.create(),m=[0,0],f=new d(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};return function(){function e(e){var t=this;this._imagePromise=null,this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=a.debounce(function(e){return o(t,void 0,void 0,function(){var t,i,o,n,s,u,h,c,d,g=this;return r(this,function(r){return t=e.state,i=p.getInfo(t.spatialReference),o=this.hidpi?e.pixelRatio:1,e.stationary?(this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):l.getOuterSize(m,t),n=Math.floor(m[0]*o)>this.imageMaxWidth||Math.floor(m[1]*o)>this.imageMaxHeight,s=i&&(t.extent.xmin<i.valid[0]||t.extent.xmax>i.valid[1]),u=!this.imageNormalizationSupported&&s,h=!n&&!u,c=this.imageRotationSupported?t.rotation:0,h?this._imagePromise=this._singleExport(t,m,c,o):(d=Math.min(this.imageMaxWidth,this.imageMaxHeight),u&&(d=Math.min(t.worldScreenWidth,d)),this._imagePromise=this._tiledExport(t,d,c,o)),[2,this._imagePromise.then(function(e){g._imagePromise=null;var t=g.container.children.slice();g.container.removeAllChildren(),e.forEach(g.container.addChild,g.container),g.disposeSource&&t.forEach(function(e){g.disposeSource(e.source)},g)}).catch(function(e){if(g._imagePromise=null,!a.isAbortError(e))throw e})]):[2]})})});var n=i({},x,e);this.container=n.container,this.disposeSource=n.disposeSource,this.fetchSource=n.fetchSource,this.requestUpdate=n.requestUpdate,this.imageMaxWidth=n.imageMaxWidth,this.imageMaxHeight=n.imageMaxHeight,this.imageRotationSupported=n.imageRotationSupported,this.imageNormalizationSupported=n.imageNormalizationSupported,this.hidpi=n.hidpi,this.requestUpdate()}return e.prototype.destroy=function(){},Object.defineProperty(e.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),e.prototype.updateExports=function(e){for(var t=0,i=this.container.children;t<i.length;t++){var r=i[t];if(!r.visible||!r.attached)return;e(r)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(r.invalidateTexture(),r.requestRender())}},e.prototype._export=function(e,t,i,r,o){var n=this;return a.resolve().then(function(){return n.fetchSource(e,Math.floor(t*o),Math.floor(i*o),{rotation:r,pixelRatio:o})}).then(function(i){var a=new h.Bitmap(i);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/t,a.rotation=r,a.pixelRatio=o,a})},e.prototype._singleExport=function(e,t,i,r){l.getBBox(g,e.center,e.resolution,t);var o=new n(g[0],g[1],g[2],g[3],e.spatialReference);return this._export(o,t[0],t[1],i,r).then(function(e){return[e]})},e.prototype._tiledExport=function(e,t,i,r){var o=this,s=u.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),p=new c(s),h=p.getTileCoverage(e);if(!h)return null;var l=[];return h.forEach(function(a,s,u,h){f.set(a,s,u,h),p.getTileBounds(g,f);var c=new n(g[0],g[1],g[2],g[3],e.spatialReference);l.push(o._export(c,t,t,i,r))}),a.all(l)},e}()});