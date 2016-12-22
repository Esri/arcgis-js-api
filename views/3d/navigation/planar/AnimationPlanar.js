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

define(["../mixins/AnimationMixin","../../lib/glMatrix","../../support/mathUtils"],function(n,e,t){function i(n,e){var t=e[0]-n[0],i=e[1]-n[1],r=e[2]-n[2],a=e[3]-n[3];return t*t+i*i+r*r+a*a}function r(n,e){return Math.sqrt(i(n,e))}function a(n){this.interpolate=function(n,e,i){var r=Math.min(5*i,.3);u.lerp(n.eye,e.eye,r),u.lerp(n.center,e.center,r),u.lerp(n.up,e.up,r),n.fov=t.lerp(n.fov,e.fov,r),n.padding=p.lerp(n.padding,e.padding,r,c)}}function o(n,e,i){e=e||250,i=i||e;var a=0,o=0,s=0,l=0,d=0,f=function(t,r,a,o,u){return n.easeInOutInterpLinear(i,e,t,r,a,o,u)};this.interpolate=function(n,e,i){a=f(n.eye,e.eye,i,a,u),o=f(n.center,e.center,i,o,u),s=f(n.up,e.up,i,s,u),d=f(n.padding,e.padding,i,d,{dist:r,lerp:function(n,e,t){return p.lerp(n,e,t,c)},set:function(e){n.padding=e}}),l=f(n.fov,e.fov,i,l,{dist:function(n,e){return Math.abs(e-n)},lerp:t.lerp,set:function(e){n.fov=e}})}}var u=e.vec3d,p=e.vec4d,c=p.create(),s=n.createSubclass({declaredClass:"esri.views.3d.navigation.planar.AnimationPlanar",constructor:function(){this.interpolationTypes={linear:a,easeInOut:o}}});return s});