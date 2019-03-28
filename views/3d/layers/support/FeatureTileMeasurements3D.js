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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingRect","./FeatureTileVisibility3D","../../support/geometryUtils"],function(e,t,r,i,a,n,s,o){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){this.pointOfInterestInMap=[0,0],this.screenRect=n.create(),this.tileSize=e.tileSize,this.maxVerticalScreenSize=e.maxVerticalScreenSize,this.renderCoordsHelper=e.renderCoordsHelper,this.tilingScheme=e.tilingScheme,this.visibility=new s.FeatureTileVisibility3D({renderCoordsHelper:e.renderCoordsHelper})}return e.prototype.begin=function(e,t,r){this.camera=e,this.z=r,this.pointOfInterestInMap[0]=t.x,this.pointOfInterestInMap[1]=t.y,n.fromValues(0,0,e.fullWidth,e.fullHeight,this.screenRect),this.visibility.begin(e,r)},e.prototype.end=function(){this.visibility.end()},e.prototype.updateTile=function(e){e.measures.visibility=this.visibility.calculate(e),0!==e.measures.visibility&&this.updateScreenMeasure(e),this.updateDistanceMeasure(e)},e.prototype.updateDistanceMeasure=function(e){e.measures.distance=n.distance(e.extent,this.pointOfInterestInMap)},e.prototype.updateScreenMeasure=function(e){var t=u,r=1<<t,i=e.measures.screen.rect;n.empty(i);for(var a=0,s=e.lij[0]+t,o=e.lij[1]<<t,c=e.lij[2]<<t,l=this.tileSizeWithBias(e),p=l*l,h=!1,d=0;d<r;d++){for(var f=0;f<r;f++){if(a+=this.computeScreenArea(e,s,o+d,c+f,i).area,h=a>p&&n.height(i)>this.maxVerticalScreenSize)break}if(h)break}e.measures.shouldSplit=a>p},e.prototype.tileSizeWithBias=function(e){return 1===e.measures.visibility?this.tileSize*h:this.tileSize},e.prototype.computeScreenArea=function(e,t,r,i,a){var s=1===e.measures.visibility,c=d.points;this.projectToScreen(t,r,i,s,c),n.empty(l);for(var u=0;u<4;u++)n.expandPointInPlace(l,c[u]);return n.expand(a,l),n.intersection(l,this.screenRect,p),d.screenOverlap=n.area(p)/n.area(l),d.area=o.triangle.areaPoints2d(c[0],c[1],c[2])+o.triangle.areaPoints2d(c[0],c[2],c[3]),d},e.prototype.projectToScreen=function(e,t,r,i,a){this.tilingScheme.ensureMaxLod(e),this.tilingScheme.getExtent(e,t,r,f),this.toRenderCoords(f,0,3,v[0]),this.toRenderCoords(f,2,3,v[1]),this.toRenderCoords(f,2,1,v[2]),this.toRenderCoords(f,0,1,v[3]),i&&(this.projectToPlane(v,this.camera.frustum.planes[4]),this.projectToPlane(v,this.camera.frustum.planes[3]),this.projectToPlane(v,this.camera.frustum.planes[2]));for(var n=0;n<4;n++)this.camera.projectPoint(v[n],S),this.camera.renderToScreen(S,a[n])},e.prototype.projectToPlane=function(e,t){for(var r=0;r<4;r++)y[r]=o.plane.signedDistance(t,e[r]);var a=Math.max(y[0],y[1],y[2],y[3]);if(a>0)for(var n=i.vec3.scale(m,t,-a),r=0;r<4;r++)i.vec3.add(e[r],e[r],n)},e.prototype.toRenderCoords=function(e,t,r,i){return m[0]=e[t],m[1]=e[r],m[2]=this.z,this.renderCoordsHelper.toRenderCoords(m,this.tilingScheme.spatialReference,i),i},e}();t.FeatureTileMeasurements3D=c;var l=n.create(),p=n.create(),u=2,h=5,d={points:[r.createScreenPointArray(),r.createScreenPointArray(),r.createScreenPointArray(),r.createScreenPointArray()],area:0,screenOverlap:0},f=n.create(),m=a.vec3f64.create(),v=[a.vec3f64.create(),a.vec3f64.create(),a.vec3f64.create(),a.vec3f64.create()],y=[0,0,0,0],S=r.createRenderScreenPointArray3();t.default=c});