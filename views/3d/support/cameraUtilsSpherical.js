// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","./cameraUtilsInternal","./earthUtils","./mathUtils"],function(e,t,a,r,i,n,c,o,s){function l(e,t,r,i){void 0===i&&(i=c.createDirectionUp()),a.vec3.cross(x,e,g),0===a.vec3.dot(x,x)&&a.vec3.cross(x,e,m),a.mat4.identity(T),a.mat4.rotate(T,T,-s.deg2rad(t),e),a.mat4.rotate(T,T,-s.deg2rad(r),x);var n=i.up,o=i.direction;return a.vec3.cross(n,x,e),a.vec3.normalize(n,n),a.vec3.transformMat4(n,n,T),a.vec3.normalize(o,e),a.vec3.negate(o,o),a.vec3.transformMat4(o,o,T),i}function v(e,t,r,i){var n=x,o=b;return a.vec3.normalize(n,e),a.vec3.cross(b,n,g),0===a.vec3.dot(b,b)&&a.vec3.cross(b,n,m),a.vec3.cross(o,b,n),c.directionToHeadingTilt(t,r,i,n,o)}function d(e,t,r,i){var n={eye:a.vec3f64.create(),up:null,tilt:i,heading:r},c=x;c[0]=e[0],c[1]=e[2],c[2]=-e[1];var o,l=t,v=s.deg2rad(r),d=s.deg2rad(i),f=Math.sin(v),y=Math.cos(v),M=Math.sin(d),g=Math.cos(d),m=a.vec3.length(c);if(Math.abs(d)<1e-8)o=l+m;else{var p=m/M,T=s.asin(l/p),b=Math.PI-d-T;o=p*Math.sin(b)}var I=M*M,P=y*y,U=f*f,q=l*l,z=M*l,R=g*l,W=y*z,D=o-R,w=D*D,E=q*I,H=P*E,S=U*E,k=c[1]*D,A=H*(H+w-c[1]*c[1]);if(A<0)return a.vec3.scale(n.eye,c,o/m),n.tilt=0,n;var C,F=Math.sqrt(A),G=H+w;if(C=y>0?-F+k:F+k,Math.abs(G)<1e-8)return m<1e-8?(n.eye[0]=0,n.eye[1]=0,n.eye[2]=l):a.vec3.scale(n.eye,c,o/m),n.tilt=0,h(n.eye),u(n,e);n.eye[1]=C/G;var L=n.eye[1]*n.eye[1],V=W*n.eye[1],_=1-L,j=Math.sqrt(_),O=H*L+S-2*V*j*D+_*w;return Math.abs(O)<1e-8?(a.vec3.scale(n.eye,c,o/m),n.tilt=0,h(n.eye),u(n,e)):(n.eye[0]=(_*(o*c[0]-R*c[0])-z*j*(c[0]*n.eye[1]*y+c[2]*f))/O,n.eye[2]=(_*(o*c[2]-R*c[2])-z*j*(c[2]*n.eye[1]*y-c[0]*f))/O,a.vec3.scale(n.eye,n.eye,o),h(n.eye),u(n,e))}function h(e){var t=e[1];e[1]=-e[2],e[2]=t}function u(e,t){var a=l(t,e.heading,e.tilt);return e.up=a.up,e}function f(e,t,r){var i=a.vec3.length(e),n=Math.sqrt(t*t+i*i-2*t*i*Math.cos(Math.PI-r)),c=s.asin(t/(n/Math.sin(r)));return s.rad2deg(r-c)}function y(e,t,r){var i=s.deg2rad(r),n=a.vec3.length(e);return s.asin(t/(n/Math.sin(i)))+i}function M(e,t,a,c,l){function v(e){var t=Math.PI/2;return e=s.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var d,h,u,f,y=t.latitude,M=t.longitude,g=o.getLonDeltaForDistance(M,y,a)/2;d=M-g,h=M+g;var m=s.deg2rad(y),T=o.earthRadius,x=(1+Math.sin(m))/(1-Math.sin(m)),b=x+1,I=Math.tan(c/T/2),P=b*I,U=P*P;if(u=1.5*Math.PI-2*Math.atan(.5*(P+Math.sqrt(4*x+U))),f=u+c/T,u=v(u),(f=v(f))<u){var q=f;f=u,u=q}if(u=Math.max(s.rad2deg(u),-90),f=Math.min(s.rad2deg(f),90),(h=p.monotonic(d,h))-d>180){var z=(h-d-180)/2;d+=z,h-=z}return l?(l.xmin=d,l.ymin=u,l.xmax=h,l.ymax=f,l.spatialReference=i.WGS84):l=new r(d,u,h,f,i.WGS84),e.spatialReference&&e.spatialReference.isWebMercator&&n.geographicToWebMercator(l,!1,l),l}Object.defineProperty(t,"__esModule",{value:!0});var g=a.vec3f64.fromValues(0,0,1),m=a.vec3.normalize(a.vec3f64.create(),a.vec3f64.fromValues(1,1,1)),p=new s.Cyclical(-180,180),T=a.mat4f64.create(),x=a.vec3f64.create(),b=a.vec3f64.create();t.headingTiltToDirectionUp=l,t.directionToHeadingTilt=v,t.eyeForCenterWithHeadingTilt=d,t.lookAtTiltToEyeTilt=f,t.eyeTiltToLookAtTilt=y,t.toExtent=M});