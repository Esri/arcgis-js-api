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

define(["../mixins/ConstraintsMixin","../../support/mathUtils","../../support/earthUtils","../../support/RenderCoordsHelper","../../constraints/SceneViewTiltConstraint","../../lib/glMatrix","../../webgl-engine/lib/Util","../../../../geometry/support/scaleUtils"],function(t,a,e,i,n,r,s,o){var l=r.vec3d,m=r.vec4d,u=.001,d=1e-4,x=m.create(),c=l.create(),h=l.create(),p=t.createSubclass({declaredClass:"esri.views.3d.navigation.planar.ConstraintsPlanar",defaultConstraints:{tilt:new t.Tilt({min:function(){return a.deg2rad(n.MAX_DEFAULT)},max:a.makePiecewiseLinearFunction([[4e3,a.deg2rad(n.MIN_DEFAULT)],[1e4,a.deg2rad(88)],[6e6,a.deg2rad(88)]])}),altitude:new t.Altitude({min:function(t){return t._autoAltitudeConstraints.min},max:function(t){return t._autoAltitudeConstraints.max}}),collision:new t.Collision},_updateAutoAltitudeConstraints:function(t){var a=Math.max(t.xmax-t.xmin,t.ymax-t.ymin);t.hasZ&&(a=Math.max(a,t.zmax-t.zmin));var e=3*a/Math.atan((this._targetCameraBeforeElevationUpdate||this.targetCamera)._fov/2),i=o.getUnitValueForSR(t.spatialReference);this._autoAltitudeConstraints.min=0,this._autoAltitudeConstraints.max=e*i},limitAltitude:function(t,a,e,i){return this.constraints.altitude.apply(this,t)},limitTiltByAltitudeConstraints:function(t,a,e,i){return t},distanceToSilhouette:function(t,n,r,s,o){o||(o={maxFarNearRatio:0,distance:0}),o.maxFarNearRatio=this.maxFarNearRatio;var m=i.Planar.prototype.getAltitude(t.eye);m*=r;var x=m,p=m-s,v=this.elevationProvider?this.elevationProvider.getElevationBounds():null;v&&(m=p>=0?x-r*v[0]:r*v[1]-x);var y={x:n.xmax-n.xmin,y:n.ymax-n.ymin,z:8*Math.max(n.xmax-n.xmin,n.ymax-n.ymin)},g=Math.max(y.x,y.y,y.z);l.subtract(t.center,t.eye,h),c[0]=h[0]>0?n.xmax:n.xmin,c[1]=h[1]>0?n.ymax:n.ymin,c[2]=h[2]>0?g/2:-g/2,l.subtract(c,t.eye),l.normalize(h);var C=l.dot(c,h);C*=1.1;var M=C*r,f=m+e.earthRadius,A=Math.sqrt(f*f-e.earthRadius*e.earthRadius),R=Math.max(n.xmax-n.xmin,n.ymax-n.ymin),b=R*u*r,w=R*d*r,F=a.clamp((m-w)/(b-w),0,1);return F*=F*F,o.distance=a.lerp(A,M,F),o.maxFarNearRatio=2e4,o.distance*=Math.max(Math.log(Math.abs(p)),1),o.distance=Math.min(o.distance,Math.max(34064e4,g)),o},intersectManifold:function(t,a,e,i){var n=this.renderCoordsHelper.worldUp;return m.set4(n[0],n[1],n[2],e,x),s.rayPlane(t,a,x,i)?l.dot(l.subtract(i,t,c),a)<0?!1:!0:!1},getFallbackCenterAlongViewDirection:function(t,a,e){l.set(a,e)}});return p});