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

define(["require","exports","tslib","../../../core/mathUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/geodesicConstants","../support/geometryUtils","../support/projectionUtils","../support/geometryUtils/plane","./PatchGeometryFactory","./Tile"],(function(e,t,i,s,r,a,n,o,h,c,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SphericalPatch=void 0;var d=function(e){function t(t,i,s){var r=e.call(this,l)||this;r.obb=new Array(8),r.isWebMercator=!1;for(var n=0;n<8;n++)r.obb[n]=a.vec3f64.create();return void 0!==t&&r.init(t,i,s),r}return i.__extends(t,e),t.prototype.init=function(t,i,o){e.prototype.init.call(this,t,i,o),this.isWebMercator=o.tilingScheme.spatialReference.isWebMercator;var c=this.extentInRadians[0],u=this.extentInRadians[1],p=this.extentInRadians[2],d=this.extentInRadians[3],l=t[0],v=s.lerp(u,d,.5),b=s.lerp(c,p,.5),f=0===l?0:Math.min(Math.abs(u),Math.abs(d));this._edgeLen=(p-c)*Math.cos(f)*n.earthRadius,this._edgeLen2=this._edgeLen*this._edgeLen,this._curvatureHeight=n.earthRadius-Math.sqrt(n.earthRadius*n.earthRadius-this._edgeLen2/4),h.wgs84ComparableLonLatToECEF(this.centerAtSeaLevel,b,v,0);var _=a.vec3f64.fromArray(this.centerAtSeaLevel);r.vec3.normalize(_,_),this.up=_,this._updateOBB(),this.updateRadiusAndCenter()},t.prototype.updateRadiusAndCenter=function(){if(0===this.lij[0])r.vec3.set(this._center[0],0,0,0),r.vec3.set(this._center[1],0,0,0),r.vec3.set(this._center[2],0,0,0),this._radius=n.earthRadius+this.elevationBounds[1];else{this._updateCenter();var e=Math.max(r.vec3.squaredDistance(this._center[0],this.obb[0]),r.vec3.squaredDistance(this._center[0],this.obb[1]));this._radius=Math.sqrt(e)}},t.prototype._isVisible=function(){if(!this.intersectsClippingArea)return!1;var e=this.lij[0],t=this.surface.frustum.planes;if(e<10)return o.frustum.intersectsSphere(t,o.sphere.wrap(this._radius,this._center[0]));for(var i=this.obb,s=0;s<6;s++){var r=t[s];4===s&&(r=c.copy(r,v),v[3]-=this.surface.view.state.camera.near);var a=void 0;for(a=0;a<8&&!c.isPointOutside(r,i[a]);a++);if(8===a)return!1}return!0},t.prototype.computeElevationBounds=function(){e.prototype.computeElevationBounds.call(this),this._updateOBB()},t.prototype.createGeometry=function(e,t){var i=this._isPole(this.lij[1],this.lij[0]);u.createSphericalGlobePatch(e,this.extent,t,this.renderData,this.extentInRadians,this.isWebMercator,i),this.setMemoryDirty()},t.prototype._updateOBB=function(){for(var e=this.extentInRadians,t=this.obb,i=0;i<2;i++){var s=this.elevationBounds[i],a=4*i;h.wgs84ComparableLonLatToECEF(t[a++],e[0],e[1],s),h.wgs84ComparableLonLatToECEF(t[a++],e[0],e[3],s),h.wgs84ComparableLonLatToECEF(t[a++],e[2],e[3],s),h.wgs84ComparableLonLatToECEF(t[a++],e[2],e[1],s)}if(this.isWebMercator){var o=this._isPole(this.lij[1],this.lij[0]);2===o?(r.vec3.set(t[1],0,0,n.earthRadius),r.vec3.set(t[2],0,0,n.earthRadius),r.vec3.set(t[5],0,0,n.earthRadius),r.vec3.set(t[6],0,0,n.earthRadius)):1===o&&(r.vec3.set(t[0],0,0,-n.earthRadius),r.vec3.set(t[3],0,0,-n.earthRadius),r.vec3.set(t[4],0,0,-n.earthRadius),r.vec3.set(t[7],0,0,-n.earthRadius))}},t.prototype._isPole=function(e,t){var i=0;return e===(1<<t)-1&&(i+=1),0===e&&(i+=2),i},t}(p.Tile);t.SphericalPatch=d;var l=[128,64,32,16,16,8,8,4],v=c.create()}));