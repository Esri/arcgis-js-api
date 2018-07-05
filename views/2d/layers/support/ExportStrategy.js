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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils","../../../../geometry/Extent","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/spatialReferenceUtils","../../../../layers/support/TileInfo","../../viewStateUtils","../../engine/Bitmap","../../tiling/TileInfoView","../../tiling/TileKey"],function(e,t,i,o,a,r,n,s,p,h,u,l){var c=r.create(),g=[0,0],m=new l(0,0,0,0),d={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,imageDataAccessRequired:!1,hidpi:!1};return function(){function e(e){this._imagePromise=null,this.hidpi=d.hidpi,this.imageDataAccessRequired=d.imageDataAccessRequired,this.imageMaxWidth=d.imageMaxWidth,this.imageMaxHeight=d.imageMaxHeight,this.imageRotationSupported=d.imageRotationSupported,this.imageNormalizationSupported=d.imageNormalizationSupported;var t=i({},d,e);this.container=t.container,this.disposeSource=t.disposeSource,this.fetchSource=t.fetchSource,this.requestUpdate=t.requestUpdate,this.imageMaxWidth=t.imageMaxWidth,this.imageMaxHeight=t.imageMaxHeight,this.imageRotationSupported=t.imageRotationSupported,this.imageNormalizationSupported=t.imageNormalizationSupported,this.hidpi=t.hidpi}return e.prototype.destroy=function(){},Object.defineProperty(e.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this,i=e.state,o=n.getInfo(i.spatialReference),a=this.hidpi?e.pixelRatio:1;if(this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),e.stationary){this.imageRotationSupported?(g[0]=i.width,g[1]=i.height):p.getOuterSize(g,i);var r=Math.floor(g[0]*a)>this.imageMaxWidth||Math.floor(g[1]*a)>this.imageMaxHeight,s=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),h=!this.imageNormalizationSupported&&s,u=!r&&!h,l=this.imageRotationSupported?i.rotation:0;if(u)this._imagePromise=this._singleExport(i,g,l,a);else{var c=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(c=Math.min(i.worldScreenWidth,c)),this._imagePromise=this._tiledExport(i,c,l,a)}this._imagePromise.then(function(e){t._imagePromise=null;var i=t.container.children.slice();t.container.removeAllChildren(),e.forEach(t.container.addChild,t.container),t.disposeSource&&i.forEach(function(e){t.disposeSource(e.source)},t)}).catch(function(e){if(t._imagePromise=null,"cancel"!==e.dojoType)throw e})}},e.prototype.updateExports=function(e,t){for(var i=0,o=this.container.children;i<o.length;i++){var a=o[i];if(!a.visible||!a.attached)return;e(a,t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):a.requestRender()}},e.prototype._export=function(e,t,i,a,r){var n=this;return o.resolve().then(function(){return n.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{allowImageDataAccess:n.imageDataAccessRequired,rotation:a,pixelRatio:r})}).then(function(o){var n=new h(o);return n.x=o.x=e.xmin,n.y=o.y=e.ymax,n.resolution=o.resolution=e.width/t,o.rotation=a,o.pixelRatio=r,n.width=t,n.height=i,n})},e.prototype._singleExport=function(e,t,i,o){p.getBBox(c,e.center,e.resolution,t);var r=new a(c[0],c[1],c[2],c[3],e.spatialReference);return this._export(r,t[0],t[1],i,o).then(function(e){return[e]})},e.prototype._tiledExport=function(e,t,i,r){var n=this,p=s.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),h=new u(p),l=h.getTileCoverage(e);if(!l)return null;var g=[];return l.forEach(function(o,s,p,u){m.set(o,s,p,u),h.getTileBounds(c,m);var l=new a(c[0],c[1],c[2],c[3],e.spatialReference);g.push(n._export(l,t,t,i,r))}),o.all(g)},e}()});