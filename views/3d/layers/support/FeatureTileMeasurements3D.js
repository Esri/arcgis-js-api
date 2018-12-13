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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/support/aaBoundingRect","./FeatureTileVisibility3D","../../support/geometryUtils"],function(e,t,i,r,s,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.pointOfInterestInMap=[0,0],this.screenRect=r.create(),this.tileSize=e.tileSize,this.maxVerticalScreenSize=e.maxVerticalScreenSize,this.renderCoordsHelper=e.renderCoordsHelper,this.tilingScheme=e.tilingScheme,this.visibility=new s.FeatureTileVisibility3D({renderCoordsHelper:e.renderCoordsHelper})}return e.prototype.begin=function(e,t,i){this.camera=e,this.z=i,this.pointOfInterestInMap[0]=t.x,this.pointOfInterestInMap[1]=t.y,r.fromValues(0,0,e.fullWidth,e.fullHeight,this.screenRect),this.visibility.begin(e,i)},e.prototype.end=function(){this.visibility.end()},e.prototype.updateTile=function(e){e.measures.visibility=this.visibility.calculate(e),0!==e.measures.visibility&&this.updateScreenMeasure(e),this.updateDistanceMeasure(e)},e.prototype.updateDistanceMeasure=function(e){e.measures.distance=r.distance(e.extent,this.pointOfInterestInMap)},e.prototype.updateScreenMeasure=function(e){var t=l,i=1<<t,s=e.measures.screen.rect;r.empty(s);for(var a=0,n=e.lij[0]+t,o=e.lij[1]<<t,c=e.lij[2]<<t,p=this.tileSizeWithBias(e),u=p*p,h=!1,d=0;d<i;d++){for(var f=0;f<i;f++){if(a+=this.computeScreenArea(e,n,o+d,c+f,s).area,h=a>u&&r.height(s)>this.maxVerticalScreenSize)break}if(h)break}e.measures.shouldSplit=a>u},e.prototype.tileSizeWithBias=function(e){return 1===e.measures.visibility?this.tileSize*p:this.tileSize},e.prototype.computeScreenArea=function(e,t,i,s,n){var l=1===e.measures.visibility,p=u.points;this.projectToScreen(t,i,s,l,p),r.empty(o);for(var h=0;h<4;h++)r.expandPointInPlace(o,p[h]);return r.expand(n,o),r.intersection(o,this.screenRect,c),u.screenOverlap=r.area(c)/r.area(o),u.area=a.triangle.areaPoints2d(p[0],p[1],p[2])+a.triangle.areaPoints2d(p[0],p[2],p[3]),u},e.prototype.projectToScreen=function(e,t,i,r,s){this.tilingScheme.ensureMaxLod(e),this.tilingScheme.getExtent(e,t,i,h),this.toRenderCoords(h,0,3,f[0]),this.toRenderCoords(h,2,3,f[1]),this.toRenderCoords(h,2,1,f[2]),this.toRenderCoords(h,0,1,f[3]),r&&(this.projectToPlane(f,this.camera.frustum.planes[4]),this.projectToPlane(f,this.camera.frustum.planes[3]),this.projectToPlane(f,this.camera.frustum.planes[2]));for(var a=0;a<4;a++)this.camera.projectPoint(f[a],s[a])},e.prototype.projectToPlane=function(e,t){for(var r=0;r<4;r++)m[r]=a.plane.signedDistance(t,e[r]);var s=Math.max(m[0],m[1],m[2],m[3]);if(s>0)for(var n=i.vec3.scale(d,t,-s),r=0;r<4;r++)i.vec3.add(e[r],e[r],n)},e.prototype.toRenderCoords=function(e,t,i,r){return d[0]=e[t],d[1]=e[i],d[2]=this.z,this.renderCoordsHelper.toRenderCoords(d,this.tilingScheme.spatialReference,r),r},e}();t.FeatureTileMeasurements3D=n;var o=r.create(),c=r.create(),l=2,p=5,u={points:[i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create()],area:0,screenOverlap:0},h=r.create(),d=i.vec3f64.create(),f=[i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create(),i.vec3f64.create()],m=[0,0,0,0];t.default=n});