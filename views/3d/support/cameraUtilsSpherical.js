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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","../lib/glMatrix","./cameraUtilsInternal","./earthUtils","./mathUtils"],function(e,t,a,r,i,n,c,d,o){function l(e,t,a){var r=n.vec3d.create(),i=n.vec3d.create();return n.vec3d.cross(e,m,x),0===n.vec3d.dot(x,x)&&n.vec3d.cross(e,f,x),n.mat4d.identity(T),n.mat4d.rotate(T,-o.deg2rad(t),e),n.mat4d.rotate(T,-o.deg2rad(a),x),n.vec3d.cross(x,e,i),n.vec3d.normalize(i),n.mat4d.multiplyVec3(T,i),n.vec3d.normalize(e,r),n.mat4d.multiplyVec3(T,n.vec3d.negate(r)),{direction:r,up:i}}function s(e,t,a,r){var i=x,d=b;return n.vec3d.normalize(e,i),n.vec3d.cross(i,m,b),0===n.vec3d.dot(b,b)&&n.vec3d.cross(i,f,b),n.vec3d.cross(b,i,d),c.directionToHeadingTilt(t,a,r,i,d)}function v(e,t,a,r){var i={eye:n.vec3d.create(),up:null,tilt:r,heading:a},c=x;c[0]=e[0],c[1]=e[2],c[2]=-e[1];var d,l=t,s=o.deg2rad(a),v=o.deg2rad(r),y=Math.sin(s),M=Math.cos(s),g=Math.sin(v),m=Math.cos(v),f=n.vec3d.length(c);if(Math.abs(v)<1e-8)d=l+f;else{var p=f/g,T=o.asin(l/p),b=Math.PI-v-T;d=p*Math.sin(b)}var I=g*g,P=M*M,q=y*y,z=l*l,R=g*l,U=m*l,W=M*R,F=d-U,w=F*F,D=z*I,E=P*D,H=q*D,S=c[1]*F,k=E*(E+w-c[1]*c[1]);if(k<0)return n.vec3d.scale(c,d/f,i.eye),i.tilt=0,i;var A,C=Math.sqrt(k),G=E+w;if(A=M>0?-C+S:C+S,Math.abs(G)<1e-8)return f<1e-8?(i.eye[0]=0,i.eye[1]=0,i.eye[2]=l):n.vec3d.scale(c,d/f,i.eye),i.tilt=0,h(i.eye),u(i,e);i.eye[1]=A/G;var L=i.eye[1]*i.eye[1],V=W*i.eye[1],_=1-L,j=Math.sqrt(_),O=E*L+H-2*V*j*F+_*w;return Math.abs(O)<1e-8?(n.vec3d.scale(c,d/f,i.eye),i.tilt=0,h(i.eye),u(i,e)):(i.eye[0]=(_*(d*c[0]-U*c[0])-R*j*(c[0]*i.eye[1]*M+c[2]*y))/O,i.eye[2]=(_*(d*c[2]-U*c[2])-R*j*(c[2]*i.eye[1]*M-c[0]*y))/O,n.vec3d.scale(i.eye,d),h(i.eye),u(i,e))}function h(e){var t=e[1];e[1]=-e[2],e[2]=t}function u(e,t){var a=l(t,e.heading,e.tilt);return e.up=a.up,e}function y(e,t,a){var r=n.vec3d.length(e),i=Math.sqrt(t*t+r*r-2*t*r*Math.cos(Math.PI-a)),c=o.asin(t/(i/Math.sin(a)));return o.rad2deg(a-c)}function M(e,t,a){var r=o.deg2rad(a),i=n.vec3d.length(e);return o.asin(t/(i/Math.sin(r)))+r}function g(e,t,n,c,l){function s(e){var t=Math.PI/2;return e=o.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var v,h,u,y,M=t.latitude,g=t.longitude,m=d.getLonDeltaForDistance(g,M,n)/2;v=g-m,h=g+m;var f=o.deg2rad(M),T=d.earthRadius,x=(1+Math.sin(f))/(1-Math.sin(f)),b=x+1,I=Math.tan(c/T/2),P=b*I,q=P*P;if(u=1.5*Math.PI-2*Math.atan(.5*(P+Math.sqrt(4*x+q))),y=u+c/T,u=s(u),(y=s(y))<u){var z=y;y=u,u=z}if(u=Math.max(o.rad2deg(u),-90),y=Math.min(o.rad2deg(y),90),(h=p.monotonic(v,h))-v>180){var R=(h-v-180)/2;v+=R,h-=R}return l?(l.xmin=v,l.ymin=u,l.xmax=h,l.ymax=y,l.spatialReference=r.WGS84):l=new a(v,u,h,y,r.WGS84),e.spatialReference&&e.spatialReference.isWebMercator&&i.geographicToWebMercator(l,!1,l),l}Object.defineProperty(t,"__esModule",{value:!0});var m=n.vec3d.createFrom(0,0,1),f=n.vec3d.normalize(n.vec3d.createFrom(1,1,1)),p=new o.Cyclical(-180,180),T=n.mat4d.create(),x=n.vec3d.create(),b=n.vec3d.create();t.headingTiltToDirectionUp=l,t.directionToHeadingTilt=s,t.eyeForCenterWithHeadingTilt=v,t.lookAtTiltToEyeTilt=y,t.eyeTiltToLookAtTilt=M,t.toExtent=g});