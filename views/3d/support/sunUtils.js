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

define(["./mathUtils","../lib/glMatrix","../lib/SunCalc"],function(t,e,i){var a=e.vec3d,n=e.mat4d,l=t.lerp,o=n.identity(),u={azimuth:0,altitude:0},r={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,diffuseAtNoon:.65,diffuseAtTwilight:.7},global:{altitude:8e5,ambient:.015,diffuse:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:Math.PI/3,altitude:Math.PI/3}}},s={ambient:{color:a.create(),intensity:0},diffuse:{color:a.create(),intensity:0,direction:a.create()}},f={settings:r,computeDirection:function(e,l,r,s){s||(s=a.create());var c=u,d=n.identity(o);if("global"===r)i.getPosition(e,0,0,c),a.set3(0,0,-1,s),n.rotateX(d,-c.azimuth),n.rotateY(d,-c.altitude),n.multiplyVec3(d,s);else{var m=f.settings.planarDirection,b=m.globalAngles,g=l.z,A=(Math.abs(g)-m.localAltitude)/(m.globalAltitude-m.localAltitude);A=t.clamp(A,0,1),1>A?(i.getPosition(e,l.y,l.x,c),c.azimuth=(1-A)*c.azimuth+A*b.azimuth,c.altitude=(1-A)*c.altitude+A*b.altitude):(c.azimuth=b.azimuth,c.altitude=b.altitude),a.set3(0,-1,0,s),n.rotateZ(d,-c.azimuth),n.rotateX(d,-c.altitude),n.multiplyVec3(d,s)}return s},computeShadowsEnabled:function(t,e){if("global"===e)return!0;var i=f.settings.planarDirection,a=t.z;return Math.abs(a)<i.localAltitude},computeColorAndIntensity:function(e,n){var o=n.z,u=f.settings,r=s;a.set3(1,1,1,r.ambient.color),r.ambient.intensity=u.global.ambient,a.set3(1,1,1,r.diffuse.color),r.diffuse.intensity=u.global.diffuse;var m=(Math.abs(o)-u.local.altitude)/(u.global.altitude-u.local.altitude);m=t.clamp(m,0,1),r.globalFactor=m;var b=i.getTimes(e,n.y,n.x);if(1>m){var g=d(e,b);a.lerp(g.ambient.color,r.ambient.color,m,r.ambient.color),r.ambient.intensity=l(g.ambient.intensity,r.ambient.intensity,m),a.lerp(g.diffuse.color,r.diffuse.color,m,r.diffuse.color),r.diffuse.intensity=l(g.diffuse.intensity,r.diffuse.intensity,m)}return r.noonFactor=c(e,b),r}},c=function(e,a){var n,l,o=e.valueOf();a.polarException===i.POLAR_EXCEPTION.MIDNIGHT_SUN?(n=o-60*(e.getHours()+48)*60*1e3-60*e.getMinutes()*1e3,l=n+432e6):a.polarException===i.POLAR_EXCEPTION.POLAR_NIGHT?(n=o-2,l=o-1):(n=a.sunrise.valueOf(),l=a.sunset.valueOf());var u=l-n,r=n+u/2,s=1-t.clamp(Math.abs(o-r)/432e5,0,1);return s},d=function(t,e){var a,n,l=t.valueOf();e.polarException===i.POLAR_EXCEPTION.MIDNIGHT_SUN?(a=l-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,n=a+432e6):e.polarException===i.POLAR_EXCEPTION.POLAR_NIGHT?(a=l-2,n=l-1):(a=e.sunrise.valueOf(),n=e.sunset.valueOf());var o,u,s=n-a,f=a+s/2,c=s/4,d=f-c,b=f+c,g=.06*s,A=g,h=a-g/2,p=a+g/2,y=n-A/2,v=n+A/2,N=r.local,O=[.01,N.ambientAtNight],P=[.8,.8,1],E=[.01,.01,.01],I=[N.diffuseAtTwilight,N.ambientAtTwilight],T=[1,.75,.75],z=[.8,.8,1],M=[.9*N.diffuseAtNoon,N.ambientAtNoon],_=[1,.98,.98],x=[.98,.98,1],D=[N.diffuseAtNoon,N.ambientAtNoon],C=[1,1,1],H=[1,1,1],L=M,R=_,X=x,w=I,G=T,S=z,U=[0,0],F=[0,0],V=[0,0];return h>l||l>v?(U=O,F=E,V=P,u="night"):p>l?(o=p-h,U=m(l-h,o,O,I),F=m(l-h,o,E,T),V=m(l-h,o,P,z),u="sun rising"):d>l?(o=d-p,U=m(l-p,o,I,M),F=m(l-p,o,T,_),V=m(l-p,o,z,x),u="early morning"):f>l?(o=f-d,U=m(l-d,o,M,D),F=m(l-d,o,_,C),V=m(l-d,o,x,H),u="late morning"):b>l?(o=b-f,U=m(l-f,o,D,L),F=m(l-f,o,C,R),V=m(l-f,o,H,X),u="early afternoon"):y>l?(o=y-b,U=m(l-b,o,L,w),F=m(l-b,o,R,G),V=m(l-b,o,X,S),u="late afternoon"):v>l&&(o=v-y,U=m(l-y,o,w,O),F=m(l-y,o,G,E),V=m(l-y,o,S,P),u="sun setting"),{diffuse:{intensity:U[0],color:F},ambient:{intensity:U[1],color:V},timeOfDay:u}},m=function(t,e,i,a){for(var n=[],l=0;l<i.length;l++)n[l]=(a[l]-i[l])*t/e+i[l];return n};return f});