// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils","../../tiling/TileInfoView","../../tiling/TileKey","../../engine/Bitmap","../../viewStateUtils","../../../../geometry/Extent","../../../../geometry/support/spatialReferenceUtils","../../../../layers/support/TileInfo"],function(e,t,i,a,o,r,n,s,h,p,l){var m=[0,0,0,0],g=[0,0],u=new r(0,0,0,0),c={container:null,fetchImage:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,imageDataAccessRequired:!1,hidpi:!1},d=function(){function e(e){this._imagePromise=null,this.hidpi=c.hidpi,this.imageDataAccessRequired=c.imageDataAccessRequired,this.imageMaxWidth=c.imageMaxWidth,this.imageMaxHeight=c.imageMaxHeight,this.imageRotationSupported=c.imageRotationSupported,this.imageNormalizationSupported=c.imageNormalizationSupported;var t=i({},c,e);this.container=t.container,this.fetchImage=t.fetchImage,this.requestUpdate=t.requestUpdate,this.imageMaxWidth=t.imageMaxWidth,this.imageMaxHeight=t.imageMaxHeight,this.imageRotationSupported=t.imageRotationSupported,this.imageNormalizationSupported=t.imageNormalizationSupported,this.hidpi=t.hidpi}return e.prototype.destroy=function(){},Object.defineProperty(e.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this,i=e.state,a=p.getInfo(i.spatialReference),o=this.hidpi?e.devicePixelRatio:1;if(this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),e.stationary){this.imageRotationSupported?(g[0]=i.width,g[1]=i.height):s.getOuterSize(g,i),g[0]=Math.floor(g[0]*o),g[1]=Math.floor(g[1]*o);var r=g[0]>this.imageMaxWidth||g[1]>this.imageMaxHeight,n=!this.imageNormalizationSupported&&a&&(i.extent.xmin<a.valid[0]||i.extent.xmax>a.valid[1]),h=!r&&!n,l=this.imageRotationSupported?i.rotation:0;if(h)this._imagePromise=this._singleExport(i,g[0],g[1],l,o);else{var m=Math.min(this.imageMaxWidth,this.imageMaxHeight);n&&(m=Math.min(i.worldScreenWidth,m)),this._imagePromise=this._tiledExport(i,m,l,o)}this._imagePromise.then(function(e){t._imagePromise=null,t.container.removeAllChildren(),e.forEach(t.container.addChild,t.container)}).otherwise(function(e){if(t._imagePromise=null,"cancel"!==e.dojoType)throw e})}},e.prototype.updateExports=function(e,t){for(var i=0,a=this.container.children;i<a.length;i++){var o=a[i];if(!o.visible||!o.attached)return;var r=e(o,t);r?console.error("ExportStrategy.updateExports doesn't support promise yet"):o.requestRender()}},e.prototype._export=function(e,t,i,a,o){return this.fetchImage(e,t,i,{allowImageDataAccess:this.imageDataAccessRequired,rotation:a,pixelRatio:o}).then(function(r){var s=new n(r);return s.coords[0]=r.coords[0]=e.xmin,s.coords[1]=r.coords[1]=e.ymax,s.resolution=r.resolution=e.width/t,r.rotation=a,r.pixelRatio=o,s.width=t,s.height=i,s})},e.prototype._singleExport=function(e,t,i,a,o){s.getBBox(m,e.center,e.resolution,e.size);var r=new h(m[0],m[1],m[2],m[3],e.spatialReference);return this._export(r,g[0],g[1],a,o).then(function(e){return[e]})},e.prototype._tiledExport=function(e,t,i,r){var n=this,s=l.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),p=new o(s),g=p.getTileCoverage(e);if(!g)return null;var c=[];return g.forEach(function(a,o,s,l){u.set(a,o,s,l),p.getTileBounds(m,u);var g=new h(m[0],m[1],m[2],m[3],e.spatialReference);c.push(n._export(g,t,t,i,r))}),a.all(c)},e}();return d});