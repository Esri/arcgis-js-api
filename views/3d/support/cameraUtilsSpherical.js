// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","./cameraUtilsInternal","./earthUtils","./mathUtils"],(function(e,t,a,r,i,c,n,o,l,s,v,d,h){Object.defineProperty(t,"__esModule",{value:!0});var f=n.vec3f64.fromValues(0,0,1),m=c.vec3.normalize(n.vec3f64.create(),n.vec3f64.fromValues(1,1,1)),u=new h.Cyclical(-180,180),y=i.mat4f64.create(),M=n.vec3f64.create(),g=n.vec3f64.create();function p(e,t,i,n){void 0===n&&(n=v.createDirectionUp()),c.vec3.cross(M,e,f),0===c.vec3.dot(M,M)&&c.vec3.cross(M,e,m),r.mat4.identity(y),r.mat4.rotate(y,y,-a.deg2rad(t),e),r.mat4.rotate(y,y,-a.deg2rad(i),M);var o=n.up,l=n.direction;return c.vec3.cross(o,M,e),c.vec3.normalize(o,o),c.vec3.transformMat4(o,o,y),c.vec3.normalize(l,e),c.vec3.negate(l,l),c.vec3.transformMat4(l,l,y),n}function T(e){var t=e[1];e[1]=-e[2],e[2]=t}function x(e,t){var a=p(t,e.heading,e.tilt);return e.up=a.up,e}t.headingTiltToDirectionUp=p,t.directionToHeadingTilt=function(e,t,a,r){var i=M,n=g;return c.vec3.normalize(i,e),c.vec3.cross(g,i,f),0===c.vec3.dot(g,g)&&c.vec3.cross(g,i,m),c.vec3.cross(n,g,i),v.directionToHeadingTilt(t,a,r,i,n)},t.eyeForCenterWithHeadingTilt=function(e,t,r,i){var o={eye:n.vec3f64.create(),up:null,tilt:i,heading:r},l=M;l[0]=e[0],l[1]=e[2],l[2]=-e[1];var s,v=t,d=a.deg2rad(r),h=a.deg2rad(i),f=Math.sin(d),m=Math.cos(d),u=Math.sin(h),y=Math.cos(h),g=c.vec3.length(l);if(Math.abs(h)<1e-8)s=v+g;else{var p=g/u,b=a.asinClamped(v/p),R=Math.PI-h-b;s=p*Math.sin(R)}var I=y*v,P=v*v*(u*u),U=m*m*P,q=s-I,z=q*q,C=U*(U+z-l[1]*l[1]);if(C<0)return c.vec3.scale(o.eye,l,s/g),o.tilt=0,o;var D,W=Math.sqrt(C),w=l[1]*q,E=U+z;if(D=m>0?-W+w:W+w,Math.abs(E)<1e-8)return g<1e-8?(o.eye[0]=0,o.eye[1]=0,o.eye[2]=v):c.vec3.scale(o.eye,l,s/g),o.tilt=0,T(o.eye),x(o,e);o.eye[1]=D/E;var H=f*f*P,k=u*v,A=m*k*o.eye[1],F=o.eye[1]*o.eye[1],G=1-F,L=Math.sqrt(G),S=U*F+H-2*A*L*q+G*z;return Math.abs(S)<1e-8?(c.vec3.scale(o.eye,l,s/g),o.tilt=0,T(o.eye),x(o,e)):(o.eye[0]=(G*(s*l[0]-I*l[0])-k*L*(l[0]*o.eye[1]*m+l[2]*f))/S,o.eye[2]=(G*(s*l[2]-I*l[2])-k*L*(l[2]*o.eye[1]*m-l[0]*f))/S,c.vec3.scale(o.eye,o.eye,s),T(o.eye),x(o,e))},t.lookAtTiltToEyeTilt=function(e,t,r){var i=c.vec3.length(t),n=Math.sqrt(r*r+i*i-2*r*i*Math.cos(Math.PI-e)),o=a.asinClamped(r/(n/Math.sin(e)));return a.rad2deg(e-o)},t.eyeTiltToLookAtTilt=function(e,t,r){var i=a.deg2rad(e),n=c.vec3.length(t);return a.asinClamped(r/(n/Math.sin(i)))+i},t.toExtent=function(e,t,r,i,c){var n,v,f,m,y=t.latitude,M=t.longitude,g=d.getLonDeltaForDistance(y,r)/2;n=M-g,v=M+g;var p=a.deg2rad(y),T=d.earthRadius,x=(1+Math.sin(p))/(1-Math.sin(p)),b=(x+1)*Math.tan(i/T/2),R=b*b;function I(e){var t=Math.PI/2;return(e=h.cyclical2PI.normalize(e,-t))>t&&(e=Math.PI-e),e}if(m=(f=1.5*Math.PI-2*Math.atan(.5*(b+Math.sqrt(4*x+R))))+i/T,f=I(f),(m=I(m))<f){var P=m;m=f,f=P}if(f=Math.max(a.rad2deg(f),-90),m=Math.min(a.rad2deg(m),90),(v=u.monotonic(n,v))-n>180){var U=(v-n-180)/2;n+=U,v-=U}var q=e.spatialReference&&e.spatialReference.isGeographic?e.spatialReference:l.WGS84;return c?(c.xmin=n,c.ymin=f,c.xmax=v,c.ymax=m,c.spatialReference=q):c=new o(n,f,v,m,q),e.spatialReference&&e.spatialReference.isWebMercator&&s.geographicToWebMercator(c,!1,c),c}}));