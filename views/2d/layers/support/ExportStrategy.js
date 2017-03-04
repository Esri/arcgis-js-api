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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../engine/Bitmap","../../viewStateUtils","../../../../geometry/Extent"],function(t,e,i,o,r){var n=[0,0,0,0],a=[0,0],s=function(){function t(t,e,i,o,r,n,a){void 0===o&&(o=0),void 0===r&&(r=!1),void 0===n&&(n=2048),void 0===a&&(a=2048),this.container=t,this.fetchImage=e,this.requestUpdate=i,this.debouncing=o,this.rotationSupported=r,this.imageMaxWidth=n,this.imageMaxHeight=a,this._imagePromise=null}return t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.update=function(t){var e=this,s=t.state;if(this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),t.stationary){this.rotationSupported?(a[0]=s.width,a[1]=s.height):o.getOuterSize(a,s),a[0]=Math.min(a[0],this.imageMaxWidth||2048),a[1]=Math.min(a[1],this.imageMaxHeight||2048),o.getBBox(n,s,a);var h={extent:new r(n[0],n[1],n[2],n[3],s.spatialReference),width:a[0],height:a[1],rotation:this.rotationSupported?s.rotation:0},d=this.fetchImage(h);d.then(function(t){e._imagePromise=null;var o=new i(t);o.coords[0]=t.coords[0]=h.extent.xmin,o.coords[1]=t.coords[1]=h.extent.ymax,o.resolution=t.resolution=h.extent.width/a[0],t.rotation=h.rotation,o.width=h.width,o.height=h.height,e.container.removeAllChildren(),e.container.addChild(o)}).otherwise(function(t){if(e._imagePromise=null,"cancel"!==t.dojoType)throw t}),this._imagePromise=d}},t.prototype.updateExports=function(t,e){for(var i=0,o=this.container.children;i<o.length;i++){var r=o[i];if(!r.visible||!r.attached)return;var n=t(r,e);n?console.error("ExportStrategy.updateExports doesn't support promise yet"):r.requestRender()}},t}();return s});