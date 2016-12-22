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

define(["../mixins/AnimationMixin","../../lib/glMatrix","../../support/mathUtils"],function(e,n,t){function r(e,n){var t=n[0]-e[0],r=n[1]-e[1],i=n[2]-e[2],a=n[3]-e[3];return t*t+r*r+i*i+a*a}function i(e,n){return Math.sqrt(r(e,n))}function a(e){this.interpolate=function(e,n,r){var i=Math.min(9*r,.3);t.slerpOrLerp(e.center,n.center,i,e.center,s),t.slerpOrLerp(e.eye,n.eye,i,e.eye,s),t.slerp(e.up,n.up,i),e.fov=t.lerp(e.fov,n.fov,i),e.padding=c.lerp(e.padding,n.padding,i,u),e.computeUpOnSphere()}}function p(e,n,r){n=n||250,r=r||n;var a=0,p=0,f=0,l=0,d=function(t,i,a,p,o){return e.easeInOutInterpLinear(r,n,t,i,a,p,o)},v=function(e,i,a,p){var c=o.dist(e,i);if(.1>c)return o.set(i,e),0;var u=Math.min(Math.sqrt(c*r),n);p=Math.min(p+r*a,u);var f=Math.min(p/c*a,1);return t.slerpOrLerp(e,i,f,e,s),p};this.interpolate=function(e,n,r){a=v(e.eye,n.eye,r,a),p=v(e.center,n.center,r,p),l=v(e.padding,n.padding,r,l,{dist:i,lerp:function(e,n,t){return c.lerp(e,n,t,u)},set:function(n){e.padding=n}}),f=d(e.fov,n.fov,r,f,{dist:function(e,n){return Math.abs(n-e)},lerp:t.lerp,set:function(n){e.fov=n}}),e.computeUpOnSphere()}}var o=n.vec3d,c=n.vec4d,u=c.create(),s=1e-4,f=e.createSubclass({declaredClass:"esri.views.3d.navigation.spherical.AnimationSpherical",constructor:function(){this.interpolationTypes={linear:a,easeInOut:p}}});return f});