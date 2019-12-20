// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Extent","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","./cameraUtilsInternal","./earthUtils","./mathUtils"],function(e,t,a,r,i,c,n,o,l,s,v,d,h){function f(e,t,i,n){void 0===n&&(n=v.createDirectionUp()),c.vec3.cross(P,e,x),0===c.vec3.dot(P,P)&&c.vec3.cross(P,e,b),r.mat4.identity(I),r.mat4.rotate(I,I,-a.deg2rad(t),e),r.mat4.rotate(I,I,-a.deg2rad(i),P);var o=n.up,l=n.direction;return c.vec3.cross(o,P,e),c.vec3.normalize(o,o),c.vec3.transformMat4(o,o,I),c.vec3.normalize(l,e),c.vec3.negate(l,l),c.vec3.transformMat4(l,l,I),n}function m(e,t,a,r){var i=P,n=U;return c.vec3.normalize(i,e),c.vec3.cross(U,i,x),0===c.vec3.dot(U,U)&&c.vec3.cross(U,i,b),c.vec3.cross(n,U,i),v.directionToHeadingTilt(t,a,r,i,n)}function u(e,t,r,i){var o={eye:n.vec3f64.create(),up:null,tilt:i,heading:r},l=P;l[0]=e[0],l[1]=e[2],l[2]=-e[1];var s,v=t,d=a.deg2rad(r),h=a.deg2rad(i),f=Math.sin(d),m=Math.cos(d),u=Math.sin(h),g=Math.cos(h),p=c.vec3.length(l);if(Math.abs(h)<1e-8)s=v+p;else{var T=p/u,x=a.asinClamped(v/T),b=Math.PI-h-x;s=T*Math.sin(b)}var R=u*u,I=m*m,U=f*f,q=v*v,z=u*v,C=g*v,D=m*z,W=s-C,w=W*W,E=q*R,H=I*E,k=U*E,A=l[1]*W,F=H*(H+w-l[1]*l[1]);if(F<0)return c.vec3.scale(o.eye,l,s/p),o.tilt=0,o;var G,L=Math.sqrt(F),S=H+w;if(G=m>0?-L+A:L+A,Math.abs(S)<1e-8)return p<1e-8?(o.eye[0]=0,o.eye[1]=0,o.eye[2]=v):c.vec3.scale(o.eye,l,s/p),o.tilt=0,y(o.eye),M(o,e);o.eye[1]=G/S;var V=o.eye[1]*o.eye[1],_=D*o.eye[1],j=1-V,O=Math.sqrt(j),B=H*V+k-2*_*O*W+j*w;return Math.abs(B)<1e-8?(c.vec3.scale(o.eye,l,s/p),o.tilt=0,y(o.eye),M(o,e)):(o.eye[0]=(j*(s*l[0]-C*l[0])-z*O*(l[0]*o.eye[1]*m+l[2]*f))/B,o.eye[2]=(j*(s*l[2]-C*l[2])-z*O*(l[2]*o.eye[1]*m-l[0]*f))/B,c.vec3.scale(o.eye,o.eye,s),y(o.eye),M(o,e))}function y(e){var t=e[1];e[1]=-e[2],e[2]=t}function M(e,t){var a=f(t,e.heading,e.tilt);return e.up=a.up,e}function g(e,t,r){var i=c.vec3.length(t),n=Math.sqrt(r*r+i*i-2*r*i*Math.cos(Math.PI-e)),o=a.asinClamped(r/(n/Math.sin(e)));return a.rad2deg(e-o)}function p(e,t,r){var i=a.deg2rad(e),n=c.vec3.length(t);return a.asinClamped(r/(n/Math.sin(i)))+i}function T(e,t,r,i,c){function n(e){var t=Math.PI/2;return e=h.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e}var v,f,m,u,y=t.latitude,M=t.longitude,g=d.getLonDeltaForDistance(y,r)/2;v=M-g,f=M+g;var p=a.deg2rad(y),T=d.earthRadius,x=(1+Math.sin(p))/(1-Math.sin(p)),b=x+1,I=Math.tan(i/T/2),P=b*I,U=P*P;if(m=1.5*Math.PI-2*Math.atan(.5*(P+Math.sqrt(4*x+U))),u=m+i/T,m=n(m),(u=n(u))<m){var q=u;u=m,m=q}if(m=Math.max(a.rad2deg(m),-90),u=Math.min(a.rad2deg(u),90),(f=R.monotonic(v,f))-v>180){var z=(f-v-180)/2;v+=z,f-=z}var C=e.spatialReference&&e.spatialReference.isGeographic?e.spatialReference:l.WGS84;return c?(c.xmin=v,c.ymin=m,c.xmax=f,c.ymax=u,c.spatialReference=C):c=new o(v,m,f,u,C),e.spatialReference&&e.spatialReference.isWebMercator&&s.geographicToWebMercator(c,!1,c),c}Object.defineProperty(t,"__esModule",{value:!0});var x=n.vec3f64.fromValues(0,0,1),b=c.vec3.normalize(n.vec3f64.create(),n.vec3f64.fromValues(1,1,1)),R=new h.Cyclical(-180,180),I=i.mat4f64.create(),P=n.vec3f64.create(),U=n.vec3f64.create();t.headingTiltToDirectionUp=f,t.directionToHeadingTilt=m,t.eyeForCenterWithHeadingTilt=u,t.lookAtTiltToEyeTilt=g,t.eyeTiltToLookAtTilt=p,t.toExtent=T});