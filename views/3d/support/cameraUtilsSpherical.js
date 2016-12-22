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

define(["../../../geometry/SpatialReference","../../../geometry/Extent","../../../geometry/support/webMercatorUtils","./mathUtils","./earthUtils","../lib/glMatrix","./cameraUtilsInternal"],function(e,t,a,r,i,n,o){function c(e,t,a){var i=m.create(),n=m.create();return m.cross(e,v,b),0===m.dot(b,b)&&m.cross(e,T,b),f.identity(x),f.rotate(x,-r.deg2rad(t),e),f.rotate(x,-r.deg2rad(a),b),m.cross(b,e,n),m.normalize(n),f.multiplyVec3(x,n),m.normalize(e,i),f.multiplyVec3(x,m.negate(i)),{direction:i,up:n}}function l(e,t,a,r){var i=b,n=I;return m.normalize(e,i),m.cross(i,v,I),0===m.dot(I,I)&&m.cross(i,T,I),m.cross(I,i,n),o.directionToHeadingTilt(t,a,r,i,n)}function s(e,t,a,i){var n={eye:m.create(),tilt:i,heading:a},o=b;o[0]=e[0],o[1]=e[2],o[2]=-e[1];var c,l=t,s=r.deg2rad(a),y=r.deg2rad(i),u=Math.sin(s),M=Math.cos(s),g=Math.sin(y),f=Math.cos(y),v=m.length(o);if(Math.abs(y)<1e-8)c=l+v;else{var T=v/g,p=r.asin(l/T),x=Math.PI-y-p;c=T*Math.sin(x)}var I=g*g,P=M*M,z=u*u,R=l*l,U=g*l,W=f*l,q=M*U,F=c-W,w=F*F,D=R*I,E=P*D,H=z*D,S=o[1]*F,k=E*(E+w-o[1]*o[1]);if(0>k)return m.scale(o,c/v,n.eye),n.tilt=0,n;var A,C=Math.sqrt(k),G=E+w;if(A=M>0?-C+S:C+S,Math.abs(G)<1e-8)return 1e-8>v?(n.eye[0]=0,n.eye[1]=0,n.eye[2]=l):m.scale(o,c/v,n.eye),n.tilt=0,h(n.eye),d(n,e);n.eye[1]=A/G;var L=n.eye[1]*n.eye[1],V=q*n.eye[1],j=1-L,B=Math.sqrt(j),J=E*L+H-2*V*B*F+j*w;return Math.abs(J)<1e-8?(m.scale(o,c/v,n.eye),n.tilt=0,h(n.eye),d(n,e)):(n.eye[0]=(j*(c*o[0]-W*o[0])-U*B*(o[0]*n.eye[1]*M+o[2]*u))/J,n.eye[2]=(j*(c*o[2]-W*o[2])-U*B*(o[2]*n.eye[1]*M-o[0]*u))/J,m.scale(n.eye,c),h(n.eye),d(n,e))}function h(e){var t=e[1];e[1]=-e[2],e[2]=t}function d(e,t){var a=c(t,e.heading,e.tilt);return e.up=a.up,e}function y(e,t,a){var i=m.length(e),n=Math.sqrt(t*t+i*i-2*t*i*Math.cos(Math.PI-a)),o=r.asin(t/(n/Math.sin(a)));return r.rad2deg(a-o)}function u(e,t,a){var i=r.deg2rad(a),n=m.length(e),o=r.asin(t/(n/Math.sin(i)));return o+i}function M(n,o,c,l,s){var h,d,y,u,M=o.latitude,g=o.longitude,m=i.getLonDeltaForDistance(g,M,c)/2;h=g-m,d=g+m;var f=r.deg2rad(M),v=i.earthRadius,T=(1+Math.sin(f))/(1-Math.sin(f)),x=T+1,b=Math.tan(l/v/2),I=x*b,P=I*I;y=1.5*Math.PI-2*Math.atan(.5*(I+Math.sqrt(4*T+P))),u=y+l/v;var z=function(e){var t=Math.PI/2;return e=r.cyclical2PI.normalize(e,-t),e>t&&(e=Math.PI-e),e};if(y=z(y),u=z(u),y>u){var R=u;u=y,y=R}if(y=Math.max(r.rad2deg(y),-90),u=Math.min(r.rad2deg(u),90),d=p.monotonic(h,d),d-h>180){var U=(d-h-180)/2;h+=U,d-=U}return s?(s.xmin=h,s.ymin=y,s.xmax=d,s.ymax=u,s.spatialReference=e.WGS84):s=new t(h,y,d,u,e.WGS84),n.spatialReference&&n.spatialReference.isWebMercator&&a.geographicToWebMercator(s,!1,s),s}var g={headingTiltToDirectionUp:c,directionToHeadingTilt:l,eyeForCenterWithHeadingTilt:s,lookAtTiltToEyeTilt:y,eyeTiltToLookAtTilt:u,toExtent:M},m=n.vec3d,f=n.mat4d,v=m.createFrom(0,0,1),T=m.normalize(m.createFrom(1,1,1)),p=new r.Cyclical(-180,180),x=f.create(),b=m.create(),I=m.create();return g});