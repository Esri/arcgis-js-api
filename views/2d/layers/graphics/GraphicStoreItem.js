/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../core/maybe","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/centroid","../../../../geometry/support/jsonUtils","../../../../geometry/support/normalizeUtilsCommon","../../../../geometry/support/quantizationUtils","../../../../layers/graphics/featureConversionUtils","../../../../layers/graphics/OptimizedGeometry","./graphicsUtils"],(function(e,t,n,i,o,s,r,l,u,a){"use strict";const h=new u,c=new u,y="esriGeometryPolyline";function p(e){e.coords.length=0,e.lengths.length=0}let g=function(){function u(){this.bounds=n.create(),this.graphic=null,this.size=[0,0,0,0]}u.acquire=function(e=null,t,n,i,o,s){let r;return 0===u._pool.length?r=new u:(r=u._pool.pop(),this._set.delete(r)),r.acquire(e,t,n,i,o,s),r},u.release=function(e){e&&!this._set.has(e)&&(e.release(),this._pool.push(e),this._set.add(e))},u.getCentroidQuantized=function(e,n){if(o.isPolygon(e.geometry)){const o=e.symbol;if(t.isNone(o))return null;if(a.isMarkerSymbol(o.type)||a.isTextSymbol(o.type)){const t=i.polygonCentroid(e.geometry);return r.quantizePoint(n,{},{x:t[0],y:t[1]},!1,!1)}}return null};var g=u.prototype;return g.acquire=function(e=null,t,n,i,o,s){e&&this.set(e,t,n,i,o,s)},g.release=function(){this.graphic=null,this.symbolResource=null,this.geometry=null},g.set=function(e,t,n,i,o,s){this.graphic=e,this.geometry=n,this.symbolResource=t,this.resolution=i,this.updateBounds(i,o,s)},g.updateBounds=function(e,t,n){a.getBounds(this.bounds,this.size,this.symbolResource,this.geometry,e,t,n)},g.getGeometryQuantized=function(e,t,i){const u=this.geometry;if(o.isPolygon(u)){const t=u.rings;if(1===t.length&&2===t[0].length)return r.quantizeGeometry(e,{paths:[[t[0][0],t[0][1]]]})}else{if(o.isPolyline(u))return p(h),p(c),l.convertFromPolyline(h,u),l.generalizeOptimizedGeometry(c,h,u.hasZ,u.hasM,y,e.scale[0]),l.quantizeOptimizedGeometry(h,c,u.hasZ,u.hasM,y,e),l.convertToPolyline(h,u.hasZ,u.hasM);if(o.isMultipoint(u)){const o=this.resolution*this.size[0],[l,a]=s.getSpatialReferenceMinMaxX(i),h=a-l,c=u.points.filter((e=>{if(e[0]+o>a||e[0]-o<l){const i=[...e];return e[0]+o>a?i[0]-=h:i[0]+=h,n.containsPointWithMargin(t,e,o)||n.containsPointWithMargin(t,i,o)}return n.containsPointWithMargin(t,e,o)}));return 0===c.length?{points:c}:r.quantizeGeometry(e,{points:c})}}return r.quantizeGeometry(e,this.geometry)},e._createClass(u,[{key:"symbol",get:function(){return this.symbolResource.symbol}}]),u}();return g._pool=[],g._set=new Set,g}));
