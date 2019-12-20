// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/screenUtils","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingRect","./FeatureTileVisibility3D","../../support/geometryUtils","../../webgl-engine/lib/Camera"],function(e,t,r,i,a,n,s,o,c){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e){this.camera=new c.default,this.pointOfInterestInMap=[0,0],this.screenRect=n.create(),this.tileSize=e.tileSize,this.maxVerticalScreenSize=e.maxVerticalScreenSize,this.renderCoordsHelper=e.renderCoordsHelper,this.tilingScheme=e.tilingScheme,this.visibility=new s.FeatureTileVisibility3D({renderCoordsHelper:e.renderCoordsHelper})}return e.prototype.begin=function(e,t,r){this.camera.copyFrom(e),this.z=r,this.pointOfInterestInMap[0]=t.x,this.pointOfInterestInMap[1]=t.y,n.fromValues(0,0,e.fullWidth,e.fullHeight,this.screenRect),this.visibility.begin(this.camera,r)},e.prototype.end=function(){this.visibility.end()},e.prototype.updateTile=function(e){e.measures.visibility=this.visibility.calculate(e),0!==e.measures.visibility&&this.updateScreenMeasure(e),this.updateDistanceMeasure(e)},e.prototype.updateDistanceMeasure=function(e){e.measures.distance=n.distance(e.extent,this.pointOfInterestInMap)},e.prototype.updateScreenMeasure=function(e){var t=h,r=1<<t,i=e.measures.screen.rect;n.empty(i);for(var a=0,s=e.lij[0]+t,o=e.lij[1]<<t,c=e.lij[2]<<t,l=this.tileSizeWithBias(e),p=l*l,u=!1,d=0;d<r;d++){for(var f=0;f<r;f++){if(a+=this.computeScreenArea(e,s,o+d,c+f,i).area,u=a>p&&n.height(i)>this.maxVerticalScreenSize)break}if(u)break}e.measures.shouldSplit=a>p},e.prototype.tileSizeWithBias=function(e){return 1===e.measures.visibility?this.tileSize*d:this.tileSize},e.prototype.computeScreenArea=function(e,t,r,i,a){var s=1===e.measures.visibility,c=f.points;this.projectToScreen(t,r,i,s,c),n.empty(p);for(var l=0;l<4;l++)n.expandPointInPlace(p,c[l]);return n.expand(a,p),n.intersection(p,this.screenRect,u),f.screenOverlap=n.area(u)/n.area(p),f.area=o.triangle.areaPoints2d(c[0],c[1],c[2])+o.triangle.areaPoints2d(c[0],c[2],c[3]),f},e.prototype.projectToScreen=function(e,t,r,i,a){this.tilingScheme.ensureMaxLod(e),this.tilingScheme.getExtent(e,t,r,m),this.toRenderCoords(m,0,3,v[0]),this.toRenderCoords(m,2,3,v[1]),this.toRenderCoords(m,2,1,v[2]),this.toRenderCoords(m,0,1,v[3]),i&&(this.projectToPlane(v,this.camera.frustum.planes[4]),this.projectToPlane(v,this.camera.frustum.planes[3]),this.projectToPlane(v,this.camera.frustum.planes[2]));for(var n=0;n<4;n++)this.camera.projectPoint(v[n],g),this.camera.renderToScreen(g,a[n])},e.prototype.projectToPlane=function(e,t){for(var r=0;r<4;r++)S[r]=o.plane.signedDistance(t,e[r]);var a=Math.max(S[0],S[1],S[2],S[3]);if(a>0)for(var n=i.vec3.scale(y,t,-a),r=0;r<4;r++)i.vec3.add(e[r],e[r],n)},e.prototype.toRenderCoords=function(e,t,r,i){return y[0]=e[t],y[1]=e[r],y[2]=this.z,this.renderCoordsHelper.toRenderCoords(y,this.tilingScheme.spatialReference,i),i},e}();t.FeatureTileMeasurements3D=l;var p=n.create(),u=n.create(),h=2,d=5,f={points:[r.createScreenPointArray(),r.createScreenPointArray(),r.createScreenPointArray(),r.createScreenPointArray()],area:0,screenOverlap:0},m=n.create(),y=a.vec3f64.create(),v=[a.vec3f64.create(),a.vec3f64.create(),a.vec3f64.create(),a.vec3f64.create()],S=[0,0,0,0],g=r.createRenderScreenPointArray3();t.default=l});