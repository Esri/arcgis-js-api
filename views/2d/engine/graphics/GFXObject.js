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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../geometry","../../../../geometry/support/spatialReferenceUtils","../../../../geometry/support/webMercatorUtils","../DisplayObject","./gfxUtils"],function(e,t,r,o,n,i,s,a){var p=new Set,h=[];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._prevStateId=null,t.visible=!0,t}return r(t,e),Object.defineProperty(t.prototype,"graphic",{get:function(){return this._graphic},set:function(e){this._graphic=e,this._geometry=e&&e.geometry||null,this._projected=null,this.requestRender()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPolygonMarkerSymbol",{get:function(){var e=this.renderingInfo.symbol.type,t=this.geometry,r="simple-marker"===e||"picture-marker"===e||"text"===e;return t&&"polygon"===t.type&&r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingInfo",{get:function(){return this._renderingInfo},set:function(e){this._renderingInfo=e,this.requestRender()},enumerable:!0,configurable:!0}),t.prototype.detach=function(){this._removeShape(),this._projected=null,this._drawInfo=null},t.prototype.doRender=function(e){var t=e.surface,r=e.state,o=e.projector,n=this._prevStateId!==r.id;if(this.renderRequested||n){if(n&&e.stationary&&(this._prevStateId=r.id),!this.visible)return void this._removeShape();var i=this._projectGeometry(this.geometry,e.state.spatialReference),s=this._getScreenOffsets([],e.state);if(a.isShapeInvalid(this.renderingInfo.symbol,this._shape)&&this._removeShape(),!s.length)return void this._removeShape();var p=this._shape,h=i.type;p&&!this._showRedraw(s,r)||("point"===h?(p=a.drawPoint(o,t,i,p,this.renderingInfo,r.rotation,s),a.stylePoint(p,this.renderingInfo)):"multipoint"===h?(p=a.drawMarkers(o,t,i,p,this.renderingInfo,r.rotation,s,this),a.styleMarkers(p,this.renderingInfo)):(p=a.drawShape(o,t,i,p,s),a.styleShape(p,this.renderingInfo)),this._shape=p,p.getNode().gfxObject=this)}},t.prototype._getScreenOffsets=function(e,t){var r=t.clippedExtent,o=this._projected.outExtent,i=t.spatialReference;if(e.length=0,!o)return e;if(i.isWrappable){var s=n.getInfo(i),a=o.cache._partwise,l=r._getParts(s);if(h.length=0,a&&a.length)for(var u=0,c=a;u<c.length;u++){var f=c[u];h.push.apply(h,f._getParts(s))}else h.push.apply(h,o._getParts(s));var d=t.worldScreenWidth;e.length=0,p.clear();for(var y=h.length,g=0;g<y;g++)for(var m=h[g],_=m.extent,v=m.frameIds,b=v.length,S=l.length,j=0;j<S;j++){var x=l[j];if(x.extent.intersects(_))for(var I=b,R=0;R<I;R++){var w=(x.frameIds[0]-v[R])*d;p.has(w)||(e.push(w),p.add(w))}}e.sort()}else r.intersects(o)&&e.push(0);return e},t.prototype._projectGeometry=function(e,t){var r=this._projected,o=this.isPolygonMarkerSymbol?e.centroid:e;return r&&r.inGeometry===o&&r.outSpatialReference===t?r.outGeometry:o&&o.spatialReference.equals(t)?(this._projected={inGeometry:o,outGeometry:o,outSpatialReference:t,outExtent:this._getExtent(o)},this._projected.outGeometry):i.canProject(o,t)?(this._projected={inGeometry:o,outGeometry:i.project(o,t),outSpatialReference:t,outExtent:this._getExtent(o)},this._projected.outGeometry):(this._projected={inGeometry:o,outGeometry:null,outSpatialReference:t,outExtent:null},this._projected.outGeometry)},t.prototype._getExtent=function(e){var t=e.extent;if(!t){var r=void 0,n=void 0;"esri.geometry.Point"===e.declaredClass?(r=e.x,n=e.y):"esri.geometry.Multipoint"===e.declaredClass&&(r=e.points[0][0],n=e.points[0][1]),t=new o.Extent(r,n,r,n,e.spatialReference)}return t},t.prototype._removeShape=function(){var e=this._shape;e&&(e.removeShape(),e.getNode().gfxObject=null,e.destroy()),this._shape=this._drawInfo=null},t.prototype._showRedraw=function(e,t){return!0},t}(s)});