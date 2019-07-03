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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","./cameraUtilsInternal","./earthUtils","./mathUtils"],function(e,t,a,r,i,n,c,o,s,l,v,h){function d(e,t,r,n){void 0===n&&(n=l.createDirectionUp()),i.vec3.cross(I,e,T),0===i.vec3.dot(I,I)&&i.vec3.cross(I,e,x),a.mat4.identity(R),a.mat4.rotate(R,R,-h.deg2rad(t),e),a.mat4.rotate(R,R,-h.deg2rad(r),I);var c=n.up,o=n.direction;return i.vec3.cross(c,I,e),i.vec3.normalize(c,c),i.vec3.transformMat4(c,c,R),i.vec3.normalize(o,e),i.vec3.negate(o,o),i.vec3.transformMat4(o,o,R),n}function f(e,t,a,r){var n=I,c=P;return i.vec3.normalize(n,e),i.vec3.cross(P,n,T),0===i.vec3.dot(P,P)&&i.vec3.cross(P,n,x),i.vec3.cross(c,P,n),l.directionToHeadingTilt(t,a,r,n,c)}function u(e,t,a,r){var c={eye:n.vec3f64.create(),up:null,tilt:r,heading:a},o=I;o[0]=e[0],o[1]=e[2],o[2]=-e[1];var s,l=t,v=h.deg2rad(a),d=h.deg2rad(r),f=Math.sin(v),u=Math.cos(v),g=Math.sin(d),m=Math.cos(d),p=i.vec3.length(o);if(Math.abs(d)<1e-8)s=l+p;else{var T=p/g,x=h.asin(l/T),b=Math.PI-d-x;s=T*Math.sin(b)}var R=g*g,P=u*u,U=f*f,q=l*l,z=g*l,D=m*l,W=u*z,w=s-D,E=w*w,H=q*R,k=P*H,A=U*H,C=o[1]*w,F=k*(k+E-o[1]*o[1]);if(F<0)return i.vec3.scale(c.eye,o,s/p),c.tilt=0,c;var G,L=Math.sqrt(F),S=k+E;if(G=u>0?-L+C:L+C,Math.abs(S)<1e-8)return p<1e-8?(c.eye[0]=0,c.eye[1]=0,c.eye[2]=l):i.vec3.scale(c.eye,o,s/p),c.tilt=0,y(c.eye),M(c,e);c.eye[1]=G/S;var V=c.eye[1]*c.eye[1],_=W*c.eye[1],j=1-V,O=Math.sqrt(j),B=k*V+A-2*_*O*w+j*E;return Math.abs(B)<1e-8?(i.vec3.scale(c.eye,o,s/p),c.tilt=0,y(c.eye),M(c,e)):(c.eye[0]=(j*(s*o[0]-D*o[0])-z*O*(o[0]*c.eye[1]*u+o[2]*f))/B,c.eye[2]=(j*(s*o[2]-D*o[2])-z*O*(o[2]*c.eye[1]*u-o[0]*f))/B,i.vec3.scale(c.eye,c.eye,s),y(c.eye),M(c,e))}function y(e){var t=e[1];e[1]=-e[2],e[2]=t}function M(e,t){var a=d(t,e.heading,e.tilt);return e.up=a.up,e}function g(e,t,a){var r=i.vec3.length(e),n=Math.sqrt(t*t+r*r-2*t*r*Math.cos(Math.PI-a)),c=h.asin(t/(n/Math.sin(a)));return h.rad2deg(a-c)}function m(e,t,a){var r=h.deg2rad(a),n=i.vec3.length(e);return h.asin(t/(n/Math.sin(r)))+r}function p(e,t,a,r,i){function n(e){var t=Math.PI/2;return e=h.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var l,d,f,u,y=t.latitude,M=t.longitude,g=v.getLonDeltaForDistance(M,y,a)/2;l=M-g,d=M+g;var m=h.deg2rad(y),p=v.earthRadius,T=(1+Math.sin(m))/(1-Math.sin(m)),x=T+1,R=Math.tan(r/p/2),I=x*R,P=I*I;if(f=1.5*Math.PI-2*Math.atan(.5*(I+Math.sqrt(4*T+P))),u=f+r/p,f=n(f),(u=n(u))<f){var U=u;u=f,f=U}if(f=Math.max(h.rad2deg(f),-90),u=Math.min(h.rad2deg(u),90),(d=b.monotonic(l,d))-l>180){var q=(d-l-180)/2;l+=q,d-=q}var z=e.spatialReference&&e.spatialReference.isGeographic?e.spatialReference:o.WGS84;return i?(i.xmin=l,i.ymin=f,i.xmax=d,i.ymax=u,i.spatialReference=z):i=new c(l,f,d,u,z),e.spatialReference&&e.spatialReference.isWebMercator&&s.geographicToWebMercator(i,!1,i),i}Object.defineProperty(t,"__esModule",{value:!0});var T=n.vec3f64.fromValues(0,0,1),x=i.vec3.normalize(n.vec3f64.create(),n.vec3f64.fromValues(1,1,1)),b=new h.Cyclical(-180,180),R=r.mat4f64.create(),I=n.vec3f64.create(),P=n.vec3f64.create();t.headingTiltToDirectionUp=d,t.directionToHeadingTilt=f,t.eyeForCenterWithHeadingTilt=u,t.lookAtTiltToEyeTilt=g,t.eyeTiltToLookAtTilt=m,t.toExtent=p});