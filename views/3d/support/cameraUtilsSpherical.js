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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","../lib/gl-matrix","./cameraUtilsInternal","./earthUtils","./mathUtils"],function(e,t,a,r,i,n,c,d,o){function l(e,t,a,r){void 0===r&&(r=c.createDirectionUp()),n.vec3d.cross(e,g,x),0===n.vec3d.dot(x,x)&&n.vec3d.cross(e,f,x),n.mat4d.identity(T),n.mat4d.rotate(T,-o.deg2rad(t),e),n.mat4d.rotate(T,-o.deg2rad(a),x);var i=r.up,d=r.direction;return n.vec3d.cross(x,e,i),n.vec3d.normalize(i),n.mat4d.multiplyVec3(T,i),n.vec3d.normalize(e,d),n.mat4d.multiplyVec3(T,n.vec3d.negate(d)),r}function s(e,t,a,r){var i=x,d=b;return n.vec3d.normalize(e,i),n.vec3d.cross(i,g,b),0===n.vec3d.dot(b,b)&&n.vec3d.cross(i,f,b),n.vec3d.cross(b,i,d),c.directionToHeadingTilt(t,a,r,i,d)}function v(e,t,a,r){var i={eye:n.vec3d.create(),up:null,tilt:r,heading:a},c=x;c[0]=e[0],c[1]=e[2],c[2]=-e[1];var d,l=t,s=o.deg2rad(a),v=o.deg2rad(r),y=Math.sin(s),M=Math.cos(s),m=Math.sin(v),g=Math.cos(v),f=n.vec3d.length(c);if(Math.abs(v)<1e-8)d=l+f;else{var p=f/m,T=o.asin(l/p),b=Math.PI-v-T;d=p*Math.sin(b)}var I=m*m,P=M*M,U=y*y,q=l*l,z=m*l,R=g*l,W=M*z,D=d-R,F=D*D,w=q*I,E=P*w,H=U*w,S=c[1]*D,k=E*(E+F-c[1]*c[1]);if(k<0)return n.vec3d.scale(c,d/f,i.eye),i.tilt=0,i;var A,C=Math.sqrt(k),G=E+F;if(A=M>0?-C+S:C+S,Math.abs(G)<1e-8)return f<1e-8?(i.eye[0]=0,i.eye[1]=0,i.eye[2]=l):n.vec3d.scale(c,d/f,i.eye),i.tilt=0,h(i.eye),u(i,e);i.eye[1]=A/G;var L=i.eye[1]*i.eye[1],V=W*i.eye[1],_=1-L,j=Math.sqrt(_),O=E*L+H-2*V*j*D+_*F;return Math.abs(O)<1e-8?(n.vec3d.scale(c,d/f,i.eye),i.tilt=0,h(i.eye),u(i,e)):(i.eye[0]=(_*(d*c[0]-R*c[0])-z*j*(c[0]*i.eye[1]*M+c[2]*y))/O,i.eye[2]=(_*(d*c[2]-R*c[2])-z*j*(c[2]*i.eye[1]*M-c[0]*y))/O,n.vec3d.scale(i.eye,d),h(i.eye),u(i,e))}function h(e){var t=e[1];e[1]=-e[2],e[2]=t}function u(e,t){var a=l(t,e.heading,e.tilt);return e.up=a.up,e}function y(e,t,a){var r=n.vec3d.length(e),i=Math.sqrt(t*t+r*r-2*t*r*Math.cos(Math.PI-a)),c=o.asin(t/(i/Math.sin(a)));return o.rad2deg(a-c)}function M(e,t,a){var r=o.deg2rad(a),i=n.vec3d.length(e);return o.asin(t/(i/Math.sin(r)))+r}function m(e,t,n,c,l){function s(e){var t=Math.PI/2;return e=o.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var v,h,u,y,M=t.latitude,m=t.longitude,g=d.getLonDeltaForDistance(m,M,n)/2;v=m-g,h=m+g;var f=o.deg2rad(M),T=d.earthRadius,x=(1+Math.sin(f))/(1-Math.sin(f)),b=x+1,I=Math.tan(c/T/2),P=b*I,U=P*P;if(u=1.5*Math.PI-2*Math.atan(.5*(P+Math.sqrt(4*x+U))),y=u+c/T,u=s(u),(y=s(y))<u){var q=y;y=u,u=q}if(u=Math.max(o.rad2deg(u),-90),y=Math.min(o.rad2deg(y),90),(h=p.monotonic(v,h))-v>180){var z=(h-v-180)/2;v+=z,h-=z}return l?(l.xmin=v,l.ymin=u,l.xmax=h,l.ymax=y,l.spatialReference=r.WGS84):l=new a(v,u,h,y,r.WGS84),e.spatialReference&&e.spatialReference.isWebMercator&&i.geographicToWebMercator(l,!1,l),l}Object.defineProperty(t,"__esModule",{value:!0});var g=n.vec3d.createFrom(0,0,1),f=n.vec3d.normalize(n.vec3d.createFrom(1,1,1)),p=new o.Cyclical(-180,180),T=n.mat4d.create(),x=n.vec3d.create(),b=n.vec3d.create();t.headingTiltToDirectionUp=l,t.directionToHeadingTilt=s,t.eyeForCenterWithHeadingTilt=v,t.lookAtTiltToEyeTilt=y,t.eyeTiltToLookAtTilt=M,t.toExtent=m});