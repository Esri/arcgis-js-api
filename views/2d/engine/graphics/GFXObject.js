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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../geometry/Extent","../../../../geometry/support/webMercatorUtils","../../../../geometry/support/spatialReferenceUtils","../DisplayObject","./gfxUtils"],function(e,t,r,o,n,i,s,a){var p=new Set,h=[],l=function(e){function t(){e.call(this),this.visible=!0}return r(t,e),Object.defineProperty(t.prototype,"graphic",{get:function(){return this._graphic},set:function(e){this._graphic=e,this._geometry=e&&e.geometry||null,this._projected=null,this.requestRender()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geometry",{get:function(){return this._geometry},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isPolygonMarkerSymbol",{get:function(){var e=this.renderingInfo.symbol.type,t=this.geometry,r="simple-marker-symbol"===e||"picture-marker-symbol"===e||"text-symbol"===e,o=t&&"polygon"===t.type;return o&&r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingInfo",{get:function(){return this._renderingInfo},set:function(e){this._renderingInfo=e,this.requestRender()},enumerable:!0,configurable:!0}),t.prototype.attach=function(e){return!0},t.prototype.detach=function(){this._removeShape(),this._projected=null,this._drawInfo=null},t.prototype.render=function(e){var t=e.surface,r=e.state,o=e.projector,n=this.visible&&this._projectGeometry(this.geometry,e.state.spatialReference),i=this._getScreenOffsets([],e.state);if(a.isShapeInvalid(this.renderingInfo.symbol,this._shape)&&this._removeShape(),!i.length)return void this._removeShape();var s=this._shape,p=n.type;(!s||this._showRedraw(i,r))&&("point"===p?(s=a.drawPoint(o,t,n,s,this.renderingInfo,r.rotation,i),a.stylePoint(s,this.renderingInfo)):"multipoint"===p?(s=a.drawMarkers(o,t,n,s,this.renderingInfo,r.rotation,i),a.styleMarkers(s,this.renderingInfo)):(s=a.drawShape(o,t,n,s,i),a.styleShape(s,this.renderingInfo)),this._shape=s,s.getNode().gfxObject=this)},t.prototype._getScreenOffsets=function(e,t){var r=t.clippedExtent,o=this._projected.outExtent,n=t.spatialReference;if(e.length=0,!o)return e;if(n.isWrappable){var s=i.getInfo(n),a=o.cache._partwise,l=r._getParts(s);if(h.length=0,a&&a.length)for(var u=0,c=a;u<c.length;u++){var f=c[u];h.push.apply(h,f._getParts(s))}else h.push.apply(h,o._getParts(s));var y=t.worldScreenWidth;e.length=0,p.clear();for(var g=0,d=h.length;d>g;g++)for(var m=h[g],_=m.extent,v=m.frameIds,b=v.length,j=0,x=l.length;x>j;j++){var S=l[j];if(S.extent.intersects(_))for(var I=0,w=b;w>I;I++){var G=(S.frameIds[0]-v[I])*y;p.has(G)||(e.push(G),p.add(G))}}e.sort()}else r.intersects(o)&&e.push(0);return e},t.prototype._projectGeometry=function(e,t){var r=this._projected,o=this.isPolygonMarkerSymbol?e.centroid:e;return r&&r.inGeometry===o&&r.outSpatialReference===t?r.outGeometry:o&&o.spatialReference.equals(t)?(this._projected={inGeometry:o,outGeometry:o,outSpatialReference:t,outExtent:this._getExtent(o)},this._projected.outGeometry):n.canProject(o,t)?(this._projected={inGeometry:o,outGeometry:n.project(o,t),outSpatialReference:t,outExtent:this._getExtent(o)},this._projected.outGeometry):(this._projected={inGeometry:o,outGeometry:null,outSpatialReference:t,outExtent:null},this._projected.outGeometry)},t.prototype._getExtent=function(e){var t=e.extent;if(!t){var r=void 0,n=void 0;"esri.geometry.Point"===e.declaredClass?(r=e.x,n=e.y):"esri.geometry.Multipoint"===e.declaredClass&&(r=e.points[0][0],n=e.points[0][1]),t=new o(r,n,r,n,e.spatialReference)}return t},t.prototype._removeShape=function(){var e=this._shape;e&&(e.removeShape(),e.getNode().gfxObject=null,e.destroy()),this._shape=this._drawInfo=null},t.prototype._showRedraw=function(e,t){return!0},t}(s);return l});