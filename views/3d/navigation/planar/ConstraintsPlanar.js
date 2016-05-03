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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../mixins/ConstraintsMixin","../../support/mathUtils","../../support/earthUtils","../../support/RenderCoordsHelper","../../constraints/SceneViewTiltConstraint","../../lib/glMatrix","../../webgl-engine/lib/Util","../../../../geometry/support/scaleUtils"],function(t,a,e,i,n,r,s,o){var l=r.vec3d,u=r.vec4d,m=.001,d=1e-4,c=u.create(),x=l.create(),h=l.create(),p=t.createSubclass({declaredClass:"esri.views.3d.navigation.planar.ConstraintsPlanar",defaultConstraints:{tilt:new t.Tilt({min:function(){return a.deg2rad(n.MAX_DEFAULT)},max:a.makePiecewiseLinearFunction([[4e3,a.deg2rad(n.MIN_DEFAULT)],[1e4,a.deg2rad(88)],[6e6,a.deg2rad(88)]])}),altitude:new t.Altitude({min:function(t){return t._autoAltitudeConstraints.min},max:function(t){return t._autoAltitudeConstraints.max}}),collision:new t.Collision},_updateAutoAltitudeConstraints:function(t){var a=Math.max(t.xmax-t.xmin,t.ymax-t.ymin),e=o.getUnitValueForSR(t.spatialReference);this._autoAltitudeConstraints.max=3*a/Math.atan((this._targetCameraBeforeElevationUpdate||this.targetCamera)._fov/2),this._autoAltitudeConstraints.min=-this._autoAltitudeConstraints.max,this._autoAltitudeConstraints.min*=e,this._autoAltitudeConstraints.max*=e},limitAltitude:function(t){return this.constraints.altitude.apply(this,t)},limitTiltByAltitudeConstraints:function(t){return t},distanceToSilhouette:function(t,n,r,s,o){o||(o={maxFarNearRatio:0,distance:0}),o.maxFarNearRatio=this.maxFarNearRatio;var u=i.Planar.prototype.getAltitude(t.eye);u*=r;var c=u,p=u-s,C=this.elevationProvider?this.elevationProvider.getElevationBounds():null;C&&(u=p>=0?c-r*C[0]:r*C[1]-c);var v={x:n.xmax-n.xmin,y:n.ymax-n.ymin,z:n.zmax-n.zmin},y=Math.max(v.x,v.y,v.z);l.subtract(t.center,t.eye,h),x[0]=h[0]>0?n.xmax:n.xmin,x[1]=h[1]>0?n.ymax:n.ymin,x[2]=h[2]>0?n.zmax:n.zmin,l.subtract(x,t.eye),l.normalize(h);var g=l.dot(x,h);g*=1.1;var M=g*r,f=u+e.earthRadius,A=Math.sqrt(f*f-e.earthRadius*e.earthRadius),_=Math.max(n.xmax-n.xmin,n.ymax-n.ymin),b=_*m*r,R=_*d*r,F=a.clamp((u-R)/(b-R),0,1);return F*=F*F,o.distance=a.lerp(A,M,F),o.maxFarNearRatio=a.clamp(2e6-(Math.log(Math.abs(p))-9.55)/(11.27-9.55)*2e6,2e4,2e6),o.distance*=Math.max(100*Math.log(Math.abs(p)),1),o.distance=Math.min(o.distance,Math.max(34064e4,y)),o},intersectManifold:function(t,a,e,i){var n=this.renderCoordsHelper.worldUp;return u.set4(n[0],n[1],n[2],e,c),s.rayPlane(t,a,c,i)?l.dot(l.subtract(i,t,x),a)<0?!1:!0:!1},getCenterIntersectTerrainFallback:function(t,a,e){l.set(a,e)}});return p});