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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/promiseUtils","../../../../geometry/Extent","../../../../geometry/support/spatialReferenceUtils","../../../../layers/support/TileInfo","../../viewStateUtils","../../engine/Bitmap","../../tiling/TileInfoView","../../tiling/TileKey"],function(e,t,i,o,a,r,n,s,h,p,u){var l=[0,0,0,0],c=[0,0],m=new u(0,0,0,0),g={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,imageDataAccessRequired:!1,hidpi:!1};return function(){function e(e){this._imagePromise=null,this.hidpi=g.hidpi,this.imageDataAccessRequired=g.imageDataAccessRequired,this.imageMaxWidth=g.imageMaxWidth,this.imageMaxHeight=g.imageMaxHeight,this.imageRotationSupported=g.imageRotationSupported,this.imageNormalizationSupported=g.imageNormalizationSupported;var t=i({},g,e);this.container=t.container,this.disposeSource=t.disposeSource,this.fetchSource=t.fetchSource,this.requestUpdate=t.requestUpdate,this.imageMaxWidth=t.imageMaxWidth,this.imageMaxHeight=t.imageMaxHeight,this.imageRotationSupported=t.imageRotationSupported,this.imageNormalizationSupported=t.imageNormalizationSupported,this.hidpi=t.hidpi}return e.prototype.destroy=function(){},Object.defineProperty(e.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),e.prototype.update=function(e){var t=this,i=e.state,o=r.getInfo(i.spatialReference),a=this.hidpi?e.pixelRatio:1;if(this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),e.stationary){this.imageRotationSupported?(c[0]=i.width,c[1]=i.height):s.getOuterSize(c,i);var n=Math.floor(c[0]*a)>this.imageMaxWidth||Math.floor(c[1]*a)>this.imageMaxHeight,h=o&&(i.extent.xmin<o.valid[0]||i.extent.xmax>o.valid[1]),p=!this.imageNormalizationSupported&&h,u=!n&&!p,l=this.imageRotationSupported?i.rotation:0;if(u)this._imagePromise=this._singleExport(i,c,l,a);else{var m=Math.min(this.imageMaxWidth,this.imageMaxHeight);p&&(m=Math.min(i.worldScreenWidth,m)),this._imagePromise=this._tiledExport(i,m,l,a)}this._imagePromise.then(function(e){t._imagePromise=null;var i=t.container.children.slice();t.container.removeAllChildren(),e.forEach(t.container.addChild,t.container),t.disposeSource&&i.forEach(function(e){t.disposeSource(e.source)},t)}).catch(function(e){if(t._imagePromise=null,"cancel"!==e.dojoType)throw e})}},e.prototype.updateExports=function(e,t){for(var i=0,o=this.container.children;i<o.length;i++){var a=o[i];if(!a.visible||!a.attached)return;e(a,t)?console.error("ExportStrategy.updateExports doesn't support promise yet"):a.requestRender()}},e.prototype._export=function(e,t,i,a,r){var n=this;return o.resolve().then(function(){return n.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{allowImageDataAccess:n.imageDataAccessRequired,rotation:a,pixelRatio:r})}).then(function(o){var n=new h(o);return n.x=o.x=e.xmin,n.y=o.y=e.ymax,n.resolution=o.resolution=e.width/t,o.rotation=a,o.pixelRatio=r,n.width=t,n.height=i,n})},e.prototype._singleExport=function(e,t,i,o){s.getBBox(l,e.center,e.resolution,t);var r=new a(l[0],l[1],l[2],l[3],e.spatialReference);return this._export(r,t[0],t[1],i,o).then(function(e){return[e]})},e.prototype._tiledExport=function(e,t,i,r){var s=this,h=n.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),u=new p(h),c=u.getTileCoverage(e);if(!c)return null;var g=[];return c.forEach(function(o,n,h,p){m.set(o,n,h,p),u.getTileBounds(l,m);var c=new a(l[0],l[1],l[2],l[3],e.spatialReference);g.push(s._export(c,t,t,i,r))}),o.all(g)},e}()});