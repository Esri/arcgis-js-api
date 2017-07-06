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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["./mathUtils","../lib/glMatrix","../lib/SunCalc"],function(t,e,i){var n=e.vec3d,a=e.mat4d,l=t.lerp,o=a.identity(),u={azimuth:0,altitude:0},r={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,diffuseAtNoon:.65,diffuseAtTwilight:.7},global:{altitude:8e5,ambient:.015,diffuse:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:Math.PI/3,altitude:Math.PI/3}}},s={ambient:{color:n.create(),intensity:0},diffuse:{color:n.create(),intensity:0,direction:n.create()}},f={settings:r,computeDirection:function(e,l,r,s){s||(s=n.create());var c=u,d=a.identity(o);if("global"===r)i.getPosition(e,0,0,c),n.set3(0,0,-1,s),a.rotateX(d,-c.azimuth),a.rotateY(d,-c.altitude),a.multiplyVec3(d,s);else{var m=f.settings.planarDirection,g=m.globalAngles,b=l.z,A=(b-m.localAltitude)/(m.globalAltitude-m.localAltitude);A=t.clamp(A,0,1),1>A?(i.getPosition(e,l.y,l.x,c),c.azimuth=(1-A)*c.azimuth+A*g.azimuth,c.altitude=(1-A)*c.altitude+A*g.altitude):(c.azimuth=g.azimuth,c.altitude=g.altitude),n.set3(0,-1,0,s),a.rotateZ(d,-c.azimuth),a.rotateX(d,-c.altitude),a.multiplyVec3(d,s)}return s},computeShadowsEnabled:function(t,e){if("global"===e)return!0;var i=f.settings.planarDirection,n=t.z;return n<i.localAltitude},computeColorAndIntensity:function(e,a){var o=a.z,u=f.settings,r=s;n.set3(1,1,1,r.ambient.color),r.ambient.intensity=u.global.ambient,n.set3(1,1,1,r.diffuse.color),r.diffuse.intensity=u.global.diffuse;var m=(o-u.local.altitude)/(u.global.altitude-u.local.altitude);m=t.clamp(m,0,1),r.globalFactor=m;var g=i.getTimes(e,a.y,a.x);if(1>m){var b=d(e,g);n.lerp(b.ambient.color,r.ambient.color,m,r.ambient.color),r.ambient.intensity=l(b.ambient.intensity,r.ambient.intensity,m),n.lerp(b.diffuse.color,r.diffuse.color,m,r.diffuse.color),r.diffuse.intensity=l(b.diffuse.intensity,r.diffuse.intensity,m)}return r.noonFactor=c(e,g),r}},c=function(e,n){var a,l,o=e.valueOf();n.polarException===i.POLAR_EXCEPTION.MIDNIGHT_SUN?(a=o-60*(e.getHours()+48)*60*1e3-60*e.getMinutes()*1e3,l=a+432e6):n.polarException===i.POLAR_EXCEPTION.POLAR_NIGHT?(a=o-2,l=o-1):(a=n.sunrise.valueOf(),l=n.sunset.valueOf());var u=l-a,r=a+u/2,s=1-t.clamp(Math.abs(o-r)/432e5,0,1);return s},d=function(t,e){var n,a,l=t.valueOf();e.polarException===i.POLAR_EXCEPTION.MIDNIGHT_SUN?(n=l-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,a=n+432e6):e.polarException===i.POLAR_EXCEPTION.POLAR_NIGHT?(n=l-2,a=l-1):(n=e.sunrise.valueOf(),a=e.sunset.valueOf());var o,u,s=a-n,f=n+s/2,c=s/4,d=f-c,g=f+c,b=.06*s,A=b,h=n-b/2,p=n+b/2,y=a-A/2,v=a+A/2,N=r.local,O=[.01,N.ambientAtNight],P=[.8,.8,1],E=[.01,.01,.01],I=[N.diffuseAtTwilight,N.ambientAtTwilight],T=[1,.75,.75],z=[.8,.8,1],M=[.9*N.diffuseAtNoon,N.ambientAtNoon],_=[1,.98,.98],x=[.98,.98,1],D=[N.diffuseAtNoon,N.ambientAtNoon],C=[1,1,1],H=[1,1,1],L=M,R=_,X=x,w=I,G=T,S=z,U=[0,0],F=[0,0],V=[0,0];return h>l||l>v?(U=O,F=E,V=P,u="night"):p>l?(o=p-h,U=m(l-h,o,O,I),F=m(l-h,o,E,T),V=m(l-h,o,P,z),u="sun rising"):d>l?(o=d-p,U=m(l-p,o,I,M),F=m(l-p,o,T,_),V=m(l-p,o,z,x),u="early morning"):f>l?(o=f-d,U=m(l-d,o,M,D),F=m(l-d,o,_,C),V=m(l-d,o,x,H),u="late morning"):g>l?(o=g-f,U=m(l-f,o,D,L),F=m(l-f,o,C,R),V=m(l-f,o,H,X),u="early afternoon"):y>l?(o=y-g,U=m(l-g,o,L,w),F=m(l-g,o,R,G),V=m(l-g,o,X,S),u="late afternoon"):v>l&&(o=v-y,U=m(l-y,o,w,O),F=m(l-y,o,G,E),V=m(l-y,o,S,P),u="sun setting"),{diffuse:{intensity:U[0],color:F},ambient:{intensity:U[1],color:V},timeOfDay:u}},m=function(t,e,i,n){for(var a=[],l=0;l<i.length;l++)a[l]=(n[l]-i[l])*t/e+i[l];return a};return f});