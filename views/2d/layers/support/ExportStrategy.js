// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../viewStateUtils","../../../../geometry/Extent"],function(t,e,i,o){var n=[0,0,0,0],r=[0,0],a=function(){function t(t,e,i,o,n,r,a,s){void 0===o&&(o=0),void 0===n&&(n=!1),void 0===r&&(r=2048),void 0===a&&(a=2048),void 0===s&&(s=!1),this.container=t,this.fetchImage=e,this.requestUpdate=i,this.debouncing=o,this.imageRotationSupported=n,this.maxImageWidth=r,this.maxImageHeight=a,this.shiftCentralMeridian=s,this._imagePromise=null}return t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.update=function(t){var e=this,a=t.state;this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),this.imageRotationSupported||i.getOuterSize(r,a),r[0]=Math.min(r[0],this.maxImageWidth||2048),r[1]=Math.min(r[1],this.maxImageHeight||2048),i.getBBox(n,a,r);var s={extent:new o(n[0],n[1],n[2],n[3],a.spatialReference),width:r[0],height:r[1],rotation:a.rotation},h=this.fetchImage(s);h.then(function(t){e._imagePromise=null,t.topLeft[0]=s.extent.xmin,t.topLeft[1]=s.extent.ymax,t.bottomRight[0]=s.extent.xmax,t.bottomRight[1]=s.extent.ymin,t.resolution=s.extent.width/r[0],e.container.removeAllChildren(),e.container.addChild(t)}).otherwise(function(t){if(e._imagePromise=null,"cancel"!==t.dojoType)throw t}),this._imagePromise=h},t.prototype.updateExports=function(t,e){for(var i=0,o=this.container.children;i<o.length;i++){var n=o[i];if(!n.visible||!n.attached)return;var r=t(n,e);r?console.error("ExportStrategy.updateExports doesn't support promise yet"):n.requestRender()}},t}();return a});