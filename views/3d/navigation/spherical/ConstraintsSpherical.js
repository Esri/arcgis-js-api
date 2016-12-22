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

define(["../mixins/ConstraintsMixin","../../support/mathUtils","../../support/earthUtils","../../lib/glMatrix","../../constraints/SceneViewAltitudeConstraint","../../constraints/SceneViewTiltConstraint","../../webgl-engine/lib/Util"],function(t,i,e,a,r,n,s){var o=a.vec3d,d=o.create(),l=t.createSubclass({declaredClass:"esri.views.3d.navigation.spherical.ConstraintsSpherical",defaultConstraints:{tilt:new t.Tilt({min:function(){return i.deg2rad(n.MAX_DEFAULT)},max:i.makePiecewiseLinearFunction([[4e3,i.deg2rad(n.MIN_DEFAULT)],[5e4,i.deg2rad(88)],[6e6,i.deg2rad(88)],[2e7,i.deg2rad(n.MAX_DEFAULT)]])}),altitude:new t.Altitude({min:function(){return r.MIN_DEFAULT},max:function(){return r.MAX_DEFAULT}}),collision:new t.Collision},initialize:function(){this.captainNemoAltitudeThreshold=h,this.captainNemoElevationThreshold=u},limitAltitude:function(t,i,a,r){o.scale(a,t/r,d),o.subtract(i,d,d);var n=this.renderCoordsHelper.getAltitude(d),s=this.constraints.altitude.apply(this,n);if(Math.abs(n-s)>1e-6){var l=o.length(i),h=r,u=o.dot(a,i)/(l*h);if(Math.abs(u)>.9999)return t+(s-n);var c=s+e.earthRadius,m=-2*l*u,M=-(c*c)+l*l,v=m*m-4*M;if(0>v)return this.minPoiDist;var f=Math.sqrt(v);return m>f?(m-f)/2:(f-m)/2}return t},limitTiltByAltitudeConstraints:function(t,a,r,n){var s,d=o.length(a),l=d*d,h=r*r,u=Math.sqrt(l+h-2*d*r*Math.cos(Math.PI-t))-e.earthRadius,c=this.constraints.altitude.min(),m=this.constraints.altitude.max();if((void 0===n||n>0)&&c>u?s=c:(void 0===n||0>n)&&u>m&&(s=m),void 0!==s){var M=s+e.earthRadius,v=M*M;t=Math.PI-i.acos((-v+l+h)/(2*d*r))}return t},distanceToSilhouette:function(t,a,r,n,s){s||(s={maxFarNearRatio:0,distance:0});var d=o.dot(t.eye,t.eye),l=e.earthRadius*e.earthRadius;if(s.maxFarNearRatio=this.maxFarNearRatio,this.isNemoMode(d,n)){var h=e.earthRadius+n,u=h*h;s.distance=Math.sqrt(d-u)}else d>l?(s.maxFarNearRatio=i.clamp(2e4-(Math.log(Math.sqrt(d)-e.earthRadius)-7.983)/9.011*19e3,1e3,2e4),s.distance=Math.sqrt(d-l)):s.distance=this.maxFarNearRatio*this.minNearDistance;return s.distance*=1.2,s},isNemoMode:function(t,i){var a=e.earthRadius+this.captainNemoAltitudeThreshold,r=a*a;return r>t&&i<this.captainNemoElevationThreshold},intersectManifold:function(t,i,a,r){return s.raySphereClosestPositive(t,i,e.earthRadius+a,r)},getFallbackCenterAlongViewDirection:function(t,i,a){var r=o.dot(t,t),n=e.earthRadius*e.earthRadius,s=r>n?Math.sqrt(r-n)/3:1;o.subtract(i,t,a),o.scale(a,s/o.length(a),a),o.add(a,t)}}),h=2e4,u=-500;return l});