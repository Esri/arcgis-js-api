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

define(["require","exports","../../../../geometry/support/aaBoundingRect","./FeatureTileVisibility3D","../../lib/glMatrix","../../support/geometryUtils"],function(e,t,i,r,s,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.pointOfInterestInMap=[0,0],this.screenRect=i.create(),this.tileSize=e.tileSize,this.maxVerticalScreenSize=e.maxVerticalScreenSize,this.renderCoordsHelper=e.renderCoordsHelper,this.tilingScheme=e.tilingScheme,this.visibility=new r.FeatureTileVisibility3D({renderCoordsHelper:e.renderCoordsHelper})}return e.prototype.begin=function(e,t,r){this.camera=e,this.z=r,this.pointOfInterestInMap[0]=t.x,this.pointOfInterestInMap[1]=t.y,i.fromValues(0,0,e.fullWidth,e.fullHeight,this.screenRect),this.visibility.begin(e,r)},e.prototype.end=function(){this.visibility.end()},e.prototype.updateTile=function(e){e.measures.visibility=this.visibility.calculate(e),0!==e.measures.visibility&&this.updateScreenMeasure(e),this.updateDistanceMeasure(e)},e.prototype.updateDistanceMeasure=function(e){e.measures.distance=i.distance(e.extent,this.pointOfInterestInMap)},e.prototype.updateScreenMeasure=function(e){var t=l,r=1<<t,s=e.measures.screen.rect;i.empty(s);for(var a=0,n=e.lij[0]+t,o=e.lij[1]<<t,c=e.lij[2]<<t,p=this.tileSizeWithBias(e),u=p*p,d=!1,h=0;h<r;h++){for(var f=0;f<r;f++){if(a+=this.computeScreenArea(e,n,o+h,c+f,s).area,d=a>u&&i.height(s)>this.maxVerticalScreenSize)break}if(d)break}e.measures.shouldSplit=a>u},e.prototype.tileSizeWithBias=function(e){return 1===e.measures.visibility?this.tileSize*p:this.tileSize},e.prototype.computeScreenArea=function(e,t,r,s,n){var l=1===e.measures.visibility,p=u.points;this.projectToScreen(t,r,s,l,p),i.empty(o);for(var d=0;d<4;d++)i.expandPointInPlace(o,p[d]);return i.expand(n,o),i.intersection(o,this.screenRect,c),u.screenOverlap=i.area(c)/i.area(o),u.area=a.triangle.areaPoints2d(p[0],p[1],p[2])+a.triangle.areaPoints2d(p[0],p[2],p[3]),u},e.prototype.projectToScreen=function(e,t,i,r,s){this.tilingScheme.ensureMaxLod(e),this.tilingScheme.getExtent(e,t,i,d),this.toRenderCoords(d,0,3,f[0]),this.toRenderCoords(d,2,3,f[1]),this.toRenderCoords(d,2,1,f[2]),this.toRenderCoords(d,0,1,f[3]),r&&(this.projectToPlane(f,this.camera.frustumPlanes[4]),this.projectToPlane(f,this.camera.frustumPlanes[3]),this.projectToPlane(f,this.camera.frustumPlanes[2]));for(var a=0;a<4;a++)this.camera.projectPoint(f[a],s[a])},e.prototype.projectToPlane=function(e,t){for(var i=0;i<4;i++)v[i]=a.plane.distance(t,e[i]);var r=Math.max(v[0],v[1],v[2],v[3]);if(r>0)for(var n=s.vec3d.scale(t,-r,h),i=0;i<4;i++)s.vec3d.add(e[i],n)},e.prototype.toRenderCoords=function(e,t,i,r){return h[0]=e[t],h[1]=e[i],h[2]=this.z,this.renderCoordsHelper.toRenderCoords(h,this.tilingScheme.spatialReference,r),r},e}();t.FeatureTileMeasurements3D=n;var o=i.create(),c=i.create(),l=2,p=5,u={points:[s.vec3d.create(),s.vec3d.create(),s.vec3d.create(),s.vec3d.create()],area:0,screenOverlap:0},d=i.create(),h=s.vec3d.create(),f=[s.vec3d.create(),s.vec3d.create(),s.vec3d.create(),s.vec3d.create()],v=[0,0,0,0];t.default=n});