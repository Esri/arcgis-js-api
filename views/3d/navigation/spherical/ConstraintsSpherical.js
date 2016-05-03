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

define(["../mixins/ConstraintsMixin","../../support/mathUtils","../../support/earthUtils","../../lib/glMatrix","../../constraints/SceneViewAltitudeConstraint","../../constraints/SceneViewTiltConstraint","../../webgl-engine/lib/Util"],function(t,a,e,i,r,n,s){var d=i.vec3d,o=d.create(),l=t.createSubclass({declaredClass:"esri.views.3d.navigation.spherical.ConstraintsSpherical",defaultConstraints:{tilt:new t.Tilt({min:function(){return a.deg2rad(n.MAX_DEFAULT)},max:a.makePiecewiseLinearFunction([[4e3,a.deg2rad(n.MIN_DEFAULT)],[5e4,a.deg2rad(88)],[6e6,a.deg2rad(88)],[2e7,a.deg2rad(n.MAX_DEFAULT)]])}),altitude:new t.Altitude({min:function(){return r.MIN_DEFAULT},max:function(){return r.MAX_DEFAULT}}),collision:new t.Collision},limitAltitude:function(t,a,i,r){d.scale(i,t/r,o),d.subtract(a,o,o);var n=this.renderCoordsHelper.getAltitude(o),s=this.constraints.altitude.apply(this,n);if(Math.abs(n-s)>1e-6){var l=d.length(a),u=r,c=s+e.earthRadius,h=d.dot(i,a)/(l*u),m=-2*l*h,M=-(c*c)+l*l,f=m*m-4*M;if(0>f)return this.minPoiDist;var g=Math.sqrt(f);return m>g?(m-g)/2:(g-m)/2}return t},limitTiltByAltitudeConstraints:function(t,i,r,n){var s,o=d.length(i),l=o*o,u=r*r,c=Math.sqrt(l+u-2*o*r*Math.cos(Math.PI-t))-e.earthRadius,h=this.constraints.altitude.min(),m=this.constraints.altitude.max();if((void 0===n||n>0)&&h>c?s=h:(void 0===n||0>n)&&c>m&&(s=m),void 0!==s){var M=s+e.earthRadius,f=M*M;t=Math.PI-a.acos((-f+l+u)/(2*o*r))}return t},distanceToSilhouette:function(t,i,r,n,s){s||(s={maxFarNearRatio:0,distance:0});var o=d.dot(t.eye,t.eye),l=e.earthRadius*e.earthRadius;return s.maxFarNearRatio=this.maxFarNearRatio,o>l?(s.maxFarNearRatio=a.clamp(2e4-(Math.log(Math.sqrt(o)-e.earthRadius)-7.983)/9.011*19e3,1e3,2e4),s.distance=Math.sqrt(o-l)):s.distance=this.maxFarNearRatio*this.minNearDistance,s.distance*=1.2,s},intersectManifold:function(t,a,i,r){return s.raySphereClosestPositive(t,a,e.earthRadius+i,r)},getCenterIntersectTerrainFallback:function(t,a,i){var r=d.dot(t,t),n=e.earthRadius*e.earthRadius,s=r>n?Math.sqrt(r-n)/3:1;d.scale(i,s/d.length(i),i),d.add(i,t)}});return l});