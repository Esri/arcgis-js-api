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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../lib/SunCalc","./mathUtils"],function(t,e,i,a,n){function l(t,l){var o=l.z,r=d;i.vec3.set(r.ambient.color,1,1,1),r.ambient.intensity=e.settings.global.ambient,i.vec3.set(r.diffuse.color,1,1,1),r.diffuse.intensity=e.settings.global.diffuse;var c=(Math.abs(o)-e.settings.local.altitude)/(e.settings.global.altitude-e.settings.local.altitude);c=n.clamp(c,0,1),r.globalFactor=c;var f=a.getTimes(t,l.y,l.x);if(c<1){var m=u(t,f);i.vec3.lerp(r.ambient.color,m.ambient.color,r.ambient.color,c),r.ambient.intensity=n.lerp(m.ambient.intensity,r.ambient.intensity,c),i.vec3.lerp(r.diffuse.color,m.diffuse.color,r.diffuse.color,c),r.diffuse.intensity=n.lerp(m.diffuse.intensity,r.diffuse.intensity,c)}return r.noonFactor=s(t,f),r}function o(t,l,o,r){r||(r=i.vec3f64.create());var s=m,u=i.mat4.identity(f);if("global"===o)a.getPosition(t,0,0,s),i.vec3.set(r,0,0,-1),i.mat4.rotateX(u,u,-s.azimuth),i.mat4.rotateY(u,u,-s.altitude),i.vec3.transformMat4(r,r,u);else{var c=e.settings.planarDirection,d=c.globalAngles,g=l.z,b=(Math.abs(g)-c.localAltitude)/(c.globalAltitude-c.localAltitude);b=n.clamp(b,0,1),b<1?(a.getPosition(t,l.y,l.x,s),s.azimuth=(1-b)*s.azimuth+b*d.azimuth,s.altitude=(1-b)*s.altitude+b*d.altitude):(s.azimuth=d.azimuth,s.altitude=d.altitude),i.vec3.set(r,0,-1,0),i.mat4.rotateZ(u,u,-s.azimuth),i.mat4.rotateX(u,u,-s.altitude),i.vec3.transformMat4(r,r,u)}return r}function r(t,i){if("global"===i)return!0;var a=e.settings.planarDirection,n=t.z;return Math.abs(n)<a.localAltitude}function s(t,e){var i,l,o=t.valueOf();e.polarException===a.POLAR_EXCEPTION.MIDNIGHT_SUN?(i=o-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,l=i+432e6):e.polarException===a.POLAR_EXCEPTION.POLAR_NIGHT?(i=o-2,l=o-1):(i=e.sunrise.valueOf(),l=e.sunset.valueOf());var r=l-i,s=i+r/2;return 1-n.clamp(Math.abs(o-s)/432e5,0,1)}function u(t,n){var l,o,r=t.valueOf();n.polarException===a.POLAR_EXCEPTION.MIDNIGHT_SUN?(l=r-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,o=l+432e6):n.polarException===a.POLAR_EXCEPTION.POLAR_NIGHT?(l=r-2,o=r-1):(l=n.sunrise.valueOf(),o=n.sunset.valueOf());var s,u,f=o-l,m=l+f/2,d=f/4,g=m-d,b=m+d,v=.06*f,A=v,h=l-v/2,p=l+v/2,y=o-A/2,N=o+A/2,O=e.settings.local,P=[.01,O.ambientAtNight],E=[.8,.8,1],I=[.01,.01,.01],M=[O.diffuseAtTwilight,O.ambientAtTwilight],T=[1,.75,.75],z=[.8,.8,1],_=[.9*O.diffuseAtNoon,O.ambientAtNoon],x=[1,.98,.98],D=[.98,.98,1],C=[O.diffuseAtNoon,O.ambientAtNoon],H=[1,1,1],L=[1,1,1],R=_,X=x,w=D,F=M,G=T,S=z,U=[0,0],V=[0,0,0],j=[0,0,0];return r<h||r>N?(U=P,V=I,j=E,u="night"):r<p?(s=p-h,U=c(r-h,s,P,M),V=c(r-h,s,I,T),j=c(r-h,s,E,z),u="sun rising"):r<g?(s=g-p,U=c(r-p,s,M,_),V=c(r-p,s,T,x),j=c(r-p,s,z,D),u="early morning"):r<m?(s=m-g,U=c(r-g,s,_,C),V=c(r-g,s,x,H),j=c(r-g,s,D,L),u="late morning"):r<b?(s=b-m,U=c(r-m,s,C,R),V=c(r-m,s,H,X),j=c(r-m,s,L,w),u="early afternoon"):r<y?(s=y-b,U=c(r-b,s,R,F),V=c(r-b,s,X,G),j=c(r-b,s,w,S),u="late afternoon"):r<N&&(s=N-y,U=c(r-y,s,F,P),V=c(r-y,s,G,I),j=c(r-y,s,S,E),u="sun setting"),{diffuse:{intensity:U[0],color:i.vec3f64.fromValues(V[0],V[1],V[2])},ambient:{intensity:U[1],color:i.vec3f64.fromValues(j[0],j[1],j[2])},timeOfDay:u}}function c(t,e,i,a){for(var n=[],l=0;l<i.length;l++)n[l]=(a[l]-i[l])*t/e+i[l];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.settings={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,diffuseAtNoon:.65,diffuseAtTwilight:.7},global:{altitude:8e5,ambient:.015,diffuse:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}},e.computeColorAndIntensity=l,e.computeDirection=o,e.computeShadowsEnabled=r;var f=i.mat4f64.create(),m={azimuth:0,altitude:0},d={ambient:{color:i.vec3f64.create(),intensity:0},diffuse:{color:i.vec3f64.create(),intensity:0,direction:i.vec3f64.create()},globalFactor:0,noonFactor:0}});