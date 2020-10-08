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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../geometry/Extent","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/spatialReferenceUtils","../../../../layers/support/TileInfo","../../viewStateUtils","../../engine/Bitmap","../../tiling/TileInfoView","../../tiling/TileKey"],(function(e,t,r,o,i,a,n,p,s,c,u,d,l,h){"use strict";var g=p.create(),m=[0,0],_=new h(0,0,0,0),f=2048,y=2048,x=!1,v=!1,S=!1;return function(e){function t(t){var o=e.call(this,t)||this;return o._imagePromise=null,o.hidpi=S,o.imageMaxWidth=f,o.imageMaxHeight=y,o.imageRotationSupported=x,o.imageNormalizationSupported=v,o.update=i.debounce((function(e,t){return r.__awaiter(o,void 0,void 0,(function(){var o,i,a,n,p,c,d,l,h,g=this;return r.__generator(this,(function(r){return o=e.state,i=s.getInfo(o.spatialReference),a=this.hidpi?e.pixelRatio:1,!e.stationary||this.destroyed?[2]:(this.imageRotationSupported?(m[0]=o.size[0],m[1]=o.size[1]):u.getOuterSize(m,o),n=Math.floor(m[0]*a)>this.imageMaxWidth||Math.floor(m[1]*a)>this.imageMaxHeight,p=i&&(o.extent.xmin<i.valid[0]||o.extent.xmax>i.valid[1]),c=!this.imageNormalizationSupported&&p,d=!n&&!c,l=this.imageRotationSupported?o.rotation:0,d?this._imagePromise=this._singleExport(o,m,l,a,t):(h=Math.min(this.imageMaxWidth,this.imageMaxHeight),c&&(h=Math.min(o.worldScreenWidth,h)),this._imagePromise=this._tiledExport(o,h,l,a,t)),[2,this._imagePromise.then((function(e){g._imagePromise=null;var t=g.container.children.slice();g.container.removeAllChildren(),e.forEach(g.container.addChild,g.container),g.disposeSource&&t.forEach((function(e){g.disposeSource(e.source)}),g)})).catch((function(e){throw g._imagePromise=null,e}))])}))}))}),5e3),o}return r.__extends(t,e),t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!1,configurable:!0}),t.prototype.updateExports=function(e){for(var t=0,r=this.container.children;t<r.length;t++){var o=r[t];if(!o.visible||!o.stage)return;e(o)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(o.invalidateTexture(),o.requestRender())}},t.prototype._export=function(e,t,r,o,a,n){var p=this;return i.resolve().then((function(){return p.fetchSource(e,Math.floor(t*a),Math.floor(r*a),{rotation:o,pixelRatio:a,signal:n})})).then((function(r){var i=new d.Bitmap(r);return i.x=e.xmin,i.y=e.ymax,i.resolution=e.width/t,i.rotation=o,i.pixelRatio=a,i}))},t.prototype._singleExport=function(e,t,r,o,i){u.getBBox(g,e.center,e.resolution,t);var a=new n(g[0],g[1],g[2],g[3],e.spatialReference);return this._export(a,t[0],t[1],r,o,i).then((function(e){return[e]}))},t.prototype._tiledExport=function(e,t,r,o,a){var p=this,s=c.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),u=new l(s),d=u.getTileCoverage(e);if(!d)return null;var h=[];return d.forEach((function(i,s,c,d){_.set(i,s,c,d),u.getTileBounds(g,_);var l=new n(g[0],g[1],g[2],g[3],e.spatialReference);h.push(p._export(l,t,t,r,o,a))})),i.all(h)},r.__decorate([a.property()],t.prototype,"_imagePromise",void 0),r.__decorate([a.property()],t.prototype,"container",void 0),r.__decorate([a.property()],t.prototype,"disposeSource",void 0),r.__decorate([a.property()],t.prototype,"fetchSource",void 0),r.__decorate([a.property()],t.prototype,"hidpi",void 0),r.__decorate([a.property()],t.prototype,"imageMaxWidth",void 0),r.__decorate([a.property()],t.prototype,"imageMaxHeight",void 0),r.__decorate([a.property()],t.prototype,"imageRotationSupported",void 0),r.__decorate([a.property()],t.prototype,"imageNormalizationSupported",void 0),r.__decorate([a.property()],t.prototype,"requestUpdate",void 0),r.__decorate([a.property({dependsOn:["_imagePromise"]})],t.prototype,"updating",null),t=r.__decorate([a.subclass("esri.views.2d.layers.support.ExportStrategy")],t)}(o)}));