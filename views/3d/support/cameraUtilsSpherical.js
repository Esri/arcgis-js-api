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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","./cameraUtilsInternal","./earthUtils","./mathUtils"],function(e,t,a,r,i,n,c,o,s,l,v,d){function h(e,t,r,n){void 0===n&&(n=l.createDirectionUp()),i.vec3.cross(P,e,T),0===i.vec3.dot(P,P)&&i.vec3.cross(P,e,x),a.mat4.identity(I),a.mat4.rotate(I,I,-d.deg2rad(t),e),a.mat4.rotate(I,I,-d.deg2rad(r),P);var c=n.up,o=n.direction;return i.vec3.cross(c,P,e),i.vec3.normalize(c,c),i.vec3.transformMat4(c,c,I),i.vec3.normalize(o,e),i.vec3.negate(o,o),i.vec3.transformMat4(o,o,I),n}function f(e,t,a,r){var n=P,c=U;return i.vec3.normalize(n,e),i.vec3.cross(U,n,T),0===i.vec3.dot(U,U)&&i.vec3.cross(U,n,x),i.vec3.cross(c,U,n),l.directionToHeadingTilt(t,a,r,n,c)}function u(e,t,a,r){var c={eye:n.vec3f64.create(),up:null,tilt:r,heading:a},o=P;o[0]=e[0],o[1]=e[2],o[2]=-e[1];var s,l=t,v=d.deg2rad(a),h=d.deg2rad(r),f=Math.sin(v),u=Math.cos(v),m=Math.sin(h),g=Math.cos(h),p=i.vec3.length(o);if(Math.abs(h)<1e-8)s=l+p;else{var T=p/m,x=d.asin(l/T),b=Math.PI-h-x;s=T*Math.sin(b)}var I=m*m,U=u*u,q=f*f,z=l*l,R=m*l,W=g*l,D=u*R,w=s-W,E=w*w,H=z*I,S=U*H,k=q*H,A=o[1]*w,C=S*(S+E-o[1]*o[1]);if(C<0)return i.vec3.scale(c.eye,o,s/p),c.tilt=0,c;var F,G=Math.sqrt(C),L=S+E;if(F=u>0?-G+A:G+A,Math.abs(L)<1e-8)return p<1e-8?(c.eye[0]=0,c.eye[1]=0,c.eye[2]=l):i.vec3.scale(c.eye,o,s/p),c.tilt=0,y(c.eye),M(c,e);c.eye[1]=F/L;var V=c.eye[1]*c.eye[1],_=D*c.eye[1],j=1-V,O=Math.sqrt(j),B=S*V+k-2*_*O*w+j*E;return Math.abs(B)<1e-8?(i.vec3.scale(c.eye,o,s/p),c.tilt=0,y(c.eye),M(c,e)):(c.eye[0]=(j*(s*o[0]-W*o[0])-R*O*(o[0]*c.eye[1]*u+o[2]*f))/B,c.eye[2]=(j*(s*o[2]-W*o[2])-R*O*(o[2]*c.eye[1]*u-o[0]*f))/B,i.vec3.scale(c.eye,c.eye,s),y(c.eye),M(c,e))}function y(e){var t=e[1];e[1]=-e[2],e[2]=t}function M(e,t){var a=h(t,e.heading,e.tilt);return e.up=a.up,e}function m(e,t,a){var r=i.vec3.length(e),n=Math.sqrt(t*t+r*r-2*t*r*Math.cos(Math.PI-a)),c=d.asin(t/(n/Math.sin(a)));return d.rad2deg(a-c)}function g(e,t,a){var r=d.deg2rad(a),n=i.vec3.length(e);return d.asin(t/(n/Math.sin(r)))+r}function p(e,t,a,r,i){function n(e){var t=Math.PI/2;return e=d.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var l,h,f,u,y=t.latitude,M=t.longitude,m=v.getLonDeltaForDistance(M,y,a)/2;l=M-m,h=M+m;var g=d.deg2rad(y),p=v.earthRadius,T=(1+Math.sin(g))/(1-Math.sin(g)),x=T+1,I=Math.tan(r/p/2),P=x*I,U=P*P;if(f=1.5*Math.PI-2*Math.atan(.5*(P+Math.sqrt(4*T+U))),u=f+r/p,f=n(f),(u=n(u))<f){var q=u;u=f,f=q}if(f=Math.max(d.rad2deg(f),-90),u=Math.min(d.rad2deg(u),90),(h=b.monotonic(l,h))-l>180){var z=(h-l-180)/2;l+=z,h-=z}return i?(i.xmin=l,i.ymin=f,i.xmax=h,i.ymax=u,i.spatialReference=o.WGS84):i=new c(l,f,h,u,o.WGS84),e.spatialReference&&e.spatialReference.isWebMercator&&s.geographicToWebMercator(i,!1,i),i}Object.defineProperty(t,"__esModule",{value:!0});var T=n.vec3f64.fromValues(0,0,1),x=i.vec3.normalize(n.vec3f64.create(),n.vec3f64.fromValues(1,1,1)),b=new d.Cyclical(-180,180),I=r.mat4f64.create(),P=n.vec3f64.create(),U=n.vec3f64.create();t.headingTiltToDirectionUp=h,t.directionToHeadingTilt=f,t.eyeForCenterWithHeadingTilt=u,t.lookAtTiltToEyeTilt=m,t.eyeTiltToLookAtTilt=g,t.toExtent=p});