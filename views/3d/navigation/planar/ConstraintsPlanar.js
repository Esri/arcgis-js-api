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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../mixins/ConstraintsMixin","../../support/mathUtils","../../support/earthUtils","../../constraints/SceneViewTiltConstraint","../../lib/glMatrix","../../terrain/StableSurfaceCenter","../../webgl-engine/lib/Util","../../../../geometry/support/scaleUtils","../../../../core/watchUtils","../../../../core/Logger"],function(e,t,a,r,n,i,s,l,c,o){var u=n.vec3d,h=o.getLogger("esri.views.3d.navigation.planar.ConstraintsPlanar"),d=.001,m=1e-4,f=u.create(),x=u.create(),C=u.create(),p={min:0,max:Math.PI},_=e.createSubclass({declaredClass:"esri.views.3d.navigation.planar.ConstraintsPlanar",defaultConstraints:{tilt:new e.Tilt({min:function(){return t.deg2rad(r.MAX_DEFAULT)},max:t.makePiecewiseLinearFunction([[4e3,t.deg2rad(r.MIN_DEFAULT)],[1e4,t.deg2rad(88)],[6e6,t.deg2rad(88)]])}),altitude:new e.Altitude({min:function(){return-(1/0)},max:function(){return 1/0}}),collision:new e.Collision},_surfaceDistanceConstraint:1/0,_surfaceCenter:null,_surfaceCenterHelper:null,_basemapTerrainWatchHandle:null,constructor:function(e){this._basemapTerrainWatchHandle=c.init(e.view,"basemapTerrain",this._initializeSurfaceCenterHelper.bind(this,e.view))},destroy:function(){this._surfaceCenterHelper&&(this._surfaceCenterHelper.destroy(),this._surfaceCenterHelper=null),this._basemapTerrainWatchHandle&&(this._basemapTerrainWatchHandle.remove(),this._basemapTerrainWatchHandle=null)},_initializeSurfaceCenterHelper:function(e){this._surfaceCenterHelper&&(this._surfaceCenterHelper.destroy(),this._surfaceCenterHelper=null,this._surfaceCenter=null),e.basemapTerrain&&(this._surfaceCenterHelper=new i({view:e}),c.init(this._surfaceCenterHelper,"center",function(e){e&&this.renderCoordsHelper.toRenderCoords(e,f)?(this._surfaceCenter=u.create(f),this._dataExtentChanged()):this._surfaceCenter=null}.bind(this)))},_altitudeModeHandler:function(e){this.inherited(arguments),"auto"!==e&&h.warn("Altitude constraint is ignored in local scenes")},_updateSurfaceDistanceConstraint:function(e){var t=Math.max(e.xmax-e.xmin,e.ymax-e.ymin);e.hasZ&&(t=Math.max(t,e.zmax-e.zmin));var a=3*t/Math.atan((this._targetCameraBeforeElevationUpdate||this.targetCamera)._fov/2),r=l.getMetersPerUnitForSR(e.spatialReference);this._surfaceDistanceConstraint=a*r},limitAltitude:function(e,t,a){var r=this._surfaceDistanceConstraint;if(!this._surfaceCenter||r===1/0)return e;u.scale(a,e/u.length(a),f);var n=u.subtract(t,f,f),i=u.dist(n,this._surfaceCenter);if(i-r>1e-6){var l=x;if(s.raySphere(n,a,this._surfaceCenter,r,l))return u.dist(t,l)}return e},tiltConstraintsFromAltitudeConstraints:function(e,t){return p},distanceToSilhouette:function(e,r,n,i,s){s||(s={maxFarNearRatio:0,distance:0}),s.maxFarNearRatio=this.maxFarNearRatio;var l=this.renderCoordsHelper.getAltitude(e.eye);l*=n;var c=l,o=l-i,h=this.elevationProvider?this.elevationProvider.getElevationBounds():null;h&&(l=o>=0?c-n*h[0]:n*h[1]-c);var x={x:r.xmax-r.xmin,y:r.ymax-r.ymin,z:4*Math.max(r.xmax-r.xmin,r.ymax-r.ymin)},p=Math.max(x.x,x.y,x.z);u.subtract(e.center,e.eye,C),f[0]=C[0]>0?r.xmax:r.xmin,f[1]=C[1]>0?r.ymax:r.ymin,f[2]=C[2]>0?p/2:-p/2,u.subtract(f,e.eye),u.normalize(C);var _=u.dot(f,C);_*=1.1;var g=_*n,v=l+a.earthRadius,y=Math.sqrt(v*v-a.earthRadius*a.earthRadius),b=Math.max(r.xmax-r.xmin,r.ymax-r.ymin),H=b*d*n,M=b*m*n,w=t.clamp((l-M)/(H-M),0,1);return w*=w*w,s.distance=t.lerp(y,g,w),s.maxFarNearRatio=2e4,s.distance*=Math.max(Math.log(Math.abs(o)),1),s.distance=Math.min(s.distance,Math.max(34064e4,p)),s},getFallbackCenterAlongViewDirection:function(e,t,a){u.set(t,a)}});return _});