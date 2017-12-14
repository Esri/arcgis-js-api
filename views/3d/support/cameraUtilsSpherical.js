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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../geometry/SpatialReference","../../../geometry/Extent","../../../geometry/support/webMercatorUtils","./mathUtils","./earthUtils","./cameraUtilsInternal","../lib/glMatrix"],function(e,t,a,r,i,n,c,d,o){function l(e,t,a){var r=o.vec3d.create(),i=o.vec3d.create();return o.vec3d.cross(e,m,x),0===o.vec3d.dot(x,x)&&o.vec3d.cross(e,f,x),o.mat4d.identity(T),o.mat4d.rotate(T,-n.deg2rad(t),e),o.mat4d.rotate(T,-n.deg2rad(a),x),o.vec3d.cross(x,e,i),o.vec3d.normalize(i),o.mat4d.multiplyVec3(T,i),o.vec3d.normalize(e,r),o.mat4d.multiplyVec3(T,o.vec3d.negate(r)),{direction:r,up:i}}function s(e,t,a,r){var i=x,n=b;return o.vec3d.normalize(e,i),o.vec3d.cross(i,m,b),0===o.vec3d.dot(b,b)&&o.vec3d.cross(i,f,b),o.vec3d.cross(b,i,n),d.directionToHeadingTilt(t,a,r,i,n)}function v(e,t,a,r){var i={eye:o.vec3d.create(),up:null,tilt:r,heading:a},c=x;c[0]=e[0],c[1]=e[2],c[2]=-e[1];var d,l=t,s=n.deg2rad(a),v=n.deg2rad(r),y=Math.sin(s),M=Math.cos(s),g=Math.sin(v),m=Math.cos(v),f=o.vec3d.length(c);if(Math.abs(v)<1e-8)d=l+f;else{var p=f/g,T=n.asin(l/p),b=Math.PI-v-T;d=p*Math.sin(b)}var I=g*g,P=M*M,q=y*y,z=l*l,R=g*l,U=m*l,W=M*R,F=d-U,w=F*F,D=z*I,E=P*D,H=q*D,S=c[1]*F,k=E*(E+w-c[1]*c[1]);if(0>k)return o.vec3d.scale(c,d/f,i.eye),i.tilt=0,i;var A,C=Math.sqrt(k),G=E+w;if(A=M>0?-C+S:C+S,Math.abs(G)<1e-8)return 1e-8>f?(i.eye[0]=0,i.eye[1]=0,i.eye[2]=l):o.vec3d.scale(c,d/f,i.eye),i.tilt=0,h(i.eye),u(i,e);i.eye[1]=A/G;var L=i.eye[1]*i.eye[1],V=W*i.eye[1],_=1-L,j=Math.sqrt(_),O=E*L+H-2*V*j*F+_*w;return Math.abs(O)<1e-8?(o.vec3d.scale(c,d/f,i.eye),i.tilt=0,h(i.eye),u(i,e)):(i.eye[0]=(_*(d*c[0]-U*c[0])-R*j*(c[0]*i.eye[1]*M+c[2]*y))/O,i.eye[2]=(_*(d*c[2]-U*c[2])-R*j*(c[2]*i.eye[1]*M-c[0]*y))/O,o.vec3d.scale(i.eye,d),h(i.eye),u(i,e))}function h(e){var t=e[1];e[1]=-e[2],e[2]=t}function u(e,t){var a=l(t,e.heading,e.tilt);return e.up=a.up,e}function y(e,t,a){var r=o.vec3d.length(e),i=Math.sqrt(t*t+r*r-2*t*r*Math.cos(Math.PI-a)),c=n.asin(t/(i/Math.sin(a)));return n.rad2deg(a-c)}function M(e,t,a){var r=n.deg2rad(a),i=o.vec3d.length(e),c=n.asin(t/(i/Math.sin(r)));return c+r}function g(e,t,d,o,l){function s(e){var t=Math.PI/2;return e=n.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var v,h,u,y,M=t.latitude,g=t.longitude,m=c.getLonDeltaForDistance(g,M,d)/2;v=g-m,h=g+m;var f=n.deg2rad(M),T=c.earthRadius,x=(1+Math.sin(f))/(1-Math.sin(f)),b=x+1,I=Math.tan(o/T/2),P=b*I,q=P*P;if(u=1.5*Math.PI-2*Math.atan(.5*(P+Math.sqrt(4*x+q))),y=u+o/T,u=s(u),y=s(y),u>y){var z=y;y=u,u=z}if(u=Math.max(n.rad2deg(u),-90),y=Math.min(n.rad2deg(y),90),h=p.monotonic(v,h),h-v>180){var R=(h-v-180)/2;v+=R,h-=R}return l?(l.xmin=v,l.ymin=u,l.xmax=h,l.ymax=y,l.spatialReference=a.WGS84):l=new r(v,u,h,y,a.WGS84),e.spatialReference&&e.spatialReference.isWebMercator&&i.geographicToWebMercator(l,!1,l),l}Object.defineProperty(t,"__esModule",{value:!0});var m=o.vec3d.createFrom(0,0,1),f=o.vec3d.normalize(o.vec3d.createFrom(1,1,1)),p=new n.Cyclical(-180,180),T=o.mat4d.create(),x=o.vec3d.create(),b=o.vec3d.create();t.headingTiltToDirectionUp=l,t.directionToHeadingTilt=s,t.eyeForCenterWithHeadingTilt=v,t.lookAtTiltToEyeTilt=y,t.eyeTiltToLookAtTilt=M,t.toExtent=g});