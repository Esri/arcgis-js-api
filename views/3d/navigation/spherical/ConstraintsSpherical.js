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

define(["../mixins/ConstraintsMixin","../../support/mathUtils","../../support/earthUtils","../../lib/glMatrix","../../webgl-engine/lib/Util","../../constraints/SceneViewAltitudeConstraint","../../constraints/SceneViewTiltConstraint"],function(t,e,a,i,n,r,s){var o=i.vec3d,l=o.create(),d=o.create(),c=o.create(),h=t.createSubclass({declaredClass:"esri.views.3d.navigation.spherical.ConstraintsSpherical",defaultConstraints:{tilt:new t.Tilt({min:function(){return e.deg2rad(s.MAX_DEFAULT)},max:e.makePiecewiseLinearFunction([[4e3,e.deg2rad(s.MIN_DEFAULT)],[5e4,e.deg2rad(88)],[6e6,e.deg2rad(88)],[2e7,e.deg2rad(s.MAX_DEFAULT)]])}),altitude:new t.Altitude({min:function(){return r.MIN_DEFAULT},max:function(){return r.MAX_DEFAULT}}),collision:new t.Collision},initialize:function(){this.captainNemoAltitudeThreshold=u,this.captainNemoElevationThreshold=m},limitAltitude:function(t,e,i){o.scale(i,t/o.length(i),l);var r=o.subtract(e,l,l),s=this.renderCoordsHelper.getAltitude(r),h=this.constraints.altitude.apply(this,s);if(Math.abs(s-h)>1e-6){var u=d,m=h>s?e:r,M=h>s?o.scale(i,-1,c):i;if(n.raySphere(m,M,null,h+a.earthRadius,u))return o.dist(e,u)}return t},tiltConstraintsFromAltitudeConstraints:function(t,i){var n=this.constraints.altitude.min(),r=this.constraints.altitude.max(),s=o.length2(t),l=Math.sqrt(s),d=n+a.earthRadius,c=r+a.earthRadius,h=(d*d-i*i-s)/(2*l*i),u=(c*c-i*i-s)/(2*l*i),m=Math.acos(e.clamp(h,-1,1)),M=Math.acos(e.clamp(u,-1,1));return{min:M,max:m}},distanceToSilhouette:function(t,i,n,r,s){s||(s={maxFarNearRatio:0,distance:0});var l=o.dot(t.eye,t.eye),d=a.earthRadius*a.earthRadius;if(s.maxFarNearRatio=this.maxFarNearRatio,this.isNemoMode(l,r)){var c=a.earthRadius+r,h=c*c;s.distance=Math.sqrt(l-h)}else l>d?(s.maxFarNearRatio=e.clamp(2e4-(Math.log(Math.sqrt(l)-a.earthRadius)-7.983)/9.011*19e3,1e3,2e4),s.distance=Math.sqrt(l-d)):s.distance=this.maxFarNearRatio*this.minNearDistance;return s.distance*=1.2,s},isNemoMode:function(t,e){var i=a.earthRadius+this.captainNemoAltitudeThreshold,n=i*i;return n>t&&e<this.captainNemoElevationThreshold},getFallbackCenterAlongViewDirection:function(t,e,i){var n=o.dot(t,t),r=a.earthRadius*a.earthRadius,s=n>r?Math.sqrt(n-r)/3:1;o.subtract(e,t,i),o.scale(i,s/o.length(i),i),o.add(i,t)}}),u=2e4,m=-500;return h});