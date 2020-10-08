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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/geodesicConstants","../../../geometry/support/webMercatorUtils","./cameraUtilsInternal","./earthUtils","./mathUtils"],(function(e,t,a,r,i,n,c,o,l,s,v,d,h,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toExtent=t.eyeTiltToLookAtTilt=t.lookAtTiltToEyeTilt=t.eyeForCenterWithHeadingTilt=t.directionToHeadingTilt=t.headingTiltToDirectionUp=void 0;var g=c.vec3f64.fromValues(0,0,1),m=n.vec3.normalize(c.vec3f64.create(),c.vec3f64.fromValues(1,1,1)),u=new f.Cyclical(-180,180),y=i.mat4f64.create(),M=c.vec3f64.create(),p=c.vec3f64.create();function T(e,t,i,c){void 0===c&&(c=d.createDirectionUp()),n.vec3.cross(M,e,g),0===n.vec3.dot(M,M)&&n.vec3.cross(M,e,m),r.mat4.identity(y),r.mat4.rotate(y,y,-a.deg2rad(t),e),r.mat4.rotate(y,y,-a.deg2rad(i),M);var o=c.up,l=c.direction;return n.vec3.cross(o,M,e),n.vec3.normalize(o,o),n.vec3.transformMat4(o,o,y),n.vec3.normalize(l,e),n.vec3.negate(l,l),n.vec3.transformMat4(l,l,y),c}function x(e){var t=e[1];e[1]=-e[2],e[2]=t}function b(e,t){var a=T(t,e.heading,e.tilt);return e.up=a.up,e}t.headingTiltToDirectionUp=T,t.directionToHeadingTilt=function(e,t,a,r){var i=M,c=p;return n.vec3.normalize(i,e),n.vec3.cross(p,i,g),0===n.vec3.dot(p,p)&&n.vec3.cross(p,i,m),n.vec3.cross(c,p,i),d.directionToHeadingTilt(t,a,r,i,c)},t.eyeForCenterWithHeadingTilt=function(e,t,r,i){var o={eye:c.vec3f64.create(),up:null,tilt:i,heading:r},l=M;l[0]=e[0],l[1]=e[2],l[2]=-e[1];var s,v=t,d=a.deg2rad(r),h=a.deg2rad(i),f=Math.sin(d),g=Math.cos(d),m=Math.sin(h),u=Math.cos(h),y=n.vec3.length(l);if(Math.abs(h)<1e-8)s=v+y;else{var p=y/m,T=a.asinClamped(v/p),R=Math.PI-h-T;s=p*Math.sin(R)}var U=u*v,C=v*v*(m*m),I=g*g*C,P=s-U,q=P*P,z=I*(I+q-l[1]*l[1]);if(z<0)return n.vec3.scale(o.eye,l,s/y),o.tilt=0,o;var D,E=Math.sqrt(z),H=l[1]*P,W=I+q;if(D=g>0?-E+H:E+H,Math.abs(W)<1e-8)return y<1e-8?(o.eye[0]=0,o.eye[1]=0,o.eye[2]=v):n.vec3.scale(o.eye,l,s/y),o.tilt=0,x(o.eye),b(o,e);o.eye[1]=D/W;var k=f*f*C,A=m*v,w=g*A*o.eye[1],F=o.eye[1]*o.eye[1],L=1-F,G=Math.sqrt(L),S=I*F+k-2*w*G*P+L*q;return Math.abs(S)<1e-8?(n.vec3.scale(o.eye,l,s/y),o.tilt=0,x(o.eye),b(o,e)):(o.eye[0]=(L*(s*l[0]-U*l[0])-A*G*(l[0]*o.eye[1]*g+l[2]*f))/S,o.eye[2]=(L*(s*l[2]-U*l[2])-A*G*(l[2]*o.eye[1]*g-l[0]*f))/S,n.vec3.scale(o.eye,o.eye,s),x(o.eye),b(o,e))},t.lookAtTiltToEyeTilt=function(e,t,r){var i=n.vec3.length(t),c=Math.sqrt(r*r+i*i-2*r*i*Math.cos(Math.PI-e)),o=a.asinClamped(r/(c/Math.sin(e)));return a.rad2deg(e-o)},t.eyeTiltToLookAtTilt=function(e,t,r){var i=a.deg2rad(e),c=n.vec3.length(t);return a.asinClamped(r/(c/Math.sin(i)))+i},t.toExtent=function(e,t,r,i,n){var c,d,g,m,y=t.latitude,M=t.longitude,p=h.getLonDeltaForDistance(y,r)/2;c=M-p,d=M+p;var T=a.deg2rad(y),x=s.earthRadius,b=(1+Math.sin(T))/(1-Math.sin(T)),R=(b+1)*Math.tan(i/x/2),U=R*R;function C(e){var t=Math.PI/2;return(e=f.cyclical2PI.normalize(e,-t))>t&&(e=Math.PI-e),e}if(m=(g=1.5*Math.PI-2*Math.atan(.5*(R+Math.sqrt(4*b+U))))+i/x,g=C(g),(m=C(m))<g){var I=m;m=g,g=I}if(g=Math.max(a.rad2deg(g),-90),m=Math.min(a.rad2deg(m),90),(d=u.monotonic(c,d))-c>180){var P=(d-c-180)/2;c+=P,d-=P}var q=e.spatialReference&&e.spatialReference.isGeographic?e.spatialReference:l.WGS84;return n?(n.xmin=c,n.ymin=g,n.xmax=d,n.ymax=m,n.spatialReference=q):n=new o(c,g,d,m,q),e.spatialReference&&e.spatialReference.isWebMercator&&v.geographicToWebMercator(n,!1,n),n}}));