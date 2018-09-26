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

define(["require","exports","../lib/gl-matrix","../lib/SunCalc","./mathUtils"],function(t,e,i,a,n){function l(t,l){var o=l.z,r=m;i.vec3d.set3(1,1,1,r.ambient.color),r.ambient.intensity=e.settings.global.ambient,i.vec3d.set3(1,1,1,r.diffuse.color),r.diffuse.intensity=e.settings.global.diffuse;var c=(Math.abs(o)-e.settings.local.altitude)/(e.settings.global.altitude-e.settings.local.altitude);c=n.clamp(c,0,1),r.globalFactor=c;var d=a.getTimes(t,l.y,l.x);if(c<1){var f=s(t,d);i.vec3d.lerp(f.ambient.color,r.ambient.color,c,r.ambient.color),r.ambient.intensity=n.lerp(f.ambient.intensity,r.ambient.intensity,c),i.vec3d.lerp(f.diffuse.color,r.diffuse.color,c,r.diffuse.color),r.diffuse.intensity=n.lerp(f.diffuse.intensity,r.diffuse.intensity,c)}return r.noonFactor=u(t,d),r}function o(t,l,o,r){r||(r=i.vec3d.create());var u=f,s=i.mat4d.identity(d);if("global"===o)a.getPosition(t,0,0,u),i.vec3d.set3(0,0,-1,r),i.mat4d.rotateX(s,-u.azimuth),i.mat4d.rotateY(s,-u.altitude),i.mat4d.multiplyVec3(s,r);else{var c=e.settings.planarDirection,m=c.globalAngles,g=l.z,b=(Math.abs(g)-c.localAltitude)/(c.globalAltitude-c.localAltitude);b=n.clamp(b,0,1),b<1?(a.getPosition(t,l.y,l.x,u),u.azimuth=(1-b)*u.azimuth+b*m.azimuth,u.altitude=(1-b)*u.altitude+b*m.altitude):(u.azimuth=m.azimuth,u.altitude=m.altitude),i.vec3d.set3(0,-1,0,r),i.mat4d.rotateZ(s,-u.azimuth),i.mat4d.rotateX(s,-u.altitude),i.mat4d.multiplyVec3(s,r)}return r}function r(t,i){if("global"===i)return!0;var a=e.settings.planarDirection,n=t.z;return Math.abs(n)<a.localAltitude}function u(t,e){var i,l,o=t.valueOf();e.polarException===a.POLAR_EXCEPTION.MIDNIGHT_SUN?(i=o-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,l=i+432e6):e.polarException===a.POLAR_EXCEPTION.POLAR_NIGHT?(i=o-2,l=o-1):(i=e.sunrise.valueOf(),l=e.sunset.valueOf());var r=l-i,u=i+r/2;return 1-n.clamp(Math.abs(o-u)/432e5,0,1)}function s(t,i){var n,l,o=t.valueOf();i.polarException===a.POLAR_EXCEPTION.MIDNIGHT_SUN?(n=o-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,l=n+432e6):i.polarException===a.POLAR_EXCEPTION.POLAR_NIGHT?(n=o-2,l=o-1):(n=i.sunrise.valueOf(),l=i.sunset.valueOf());var r,u,s=l-n,d=n+s/2,f=s/4,m=d-f,g=d+f,b=.06*s,v=b,A=n-b/2,h=n+b/2,p=l-v/2,y=l+v/2,N=e.settings.local,O=[.01,N.ambientAtNight],P=[.8,.8,1],E=[.01,.01,.01],I=[N.diffuseAtTwilight,N.ambientAtTwilight],T=[1,.75,.75],z=[.8,.8,1],M=[.9*N.diffuseAtNoon,N.ambientAtNoon],_=[1,.98,.98],x=[.98,.98,1],D=[N.diffuseAtNoon,N.ambientAtNoon],C=[1,1,1],H=[1,1,1],L=M,R=_,X=x,w=I,F=T,G=z,S=[0,0],U=[0,0],V=[0,0];return o<A||o>y?(S=O,U=E,V=P,u="night"):o<h?(r=h-A,S=c(o-A,r,O,I),U=c(o-A,r,E,T),V=c(o-A,r,P,z),u="sun rising"):o<m?(r=m-h,S=c(o-h,r,I,M),U=c(o-h,r,T,_),V=c(o-h,r,z,x),u="early morning"):o<d?(r=d-m,S=c(o-m,r,M,D),U=c(o-m,r,_,C),V=c(o-m,r,x,H),u="late morning"):o<g?(r=g-d,S=c(o-d,r,D,L),U=c(o-d,r,C,R),V=c(o-d,r,H,X),u="early afternoon"):o<p?(r=p-g,S=c(o-g,r,L,w),U=c(o-g,r,R,F),V=c(o-g,r,X,G),u="late afternoon"):o<y&&(r=y-p,S=c(o-p,r,w,O),U=c(o-p,r,F,E),V=c(o-p,r,G,P),u="sun setting"),{diffuse:{intensity:S[0],color:U},ambient:{intensity:S[1],color:V},timeOfDay:u}}function c(t,e,i,a){for(var n=[],l=0;l<i.length;l++)n[l]=(a[l]-i[l])*t/e+i[l];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.settings={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,diffuseAtNoon:.65,diffuseAtTwilight:.7},global:{altitude:8e5,ambient:.015,diffuse:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}},e.computeColorAndIntensity=l,e.computeDirection=o,e.computeShadowsEnabled=r;var d=i.mat4d.identity(),f={azimuth:0,altitude:0},m={ambient:{color:i.vec3d.create(),intensity:0},diffuse:{color:i.vec3d.create(),intensity:0,direction:i.vec3d.create()},globalFactor:0,noonFactor:0}});