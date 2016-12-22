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

define(["./mathUtils","../lib/glMatrix","../lib/SunCalc"],function(t,i,e){var n=i.vec3d,a=i.mat4d,l=t.lerp,o=a.identity(),u={azimuth:0,altitude:0},r={local:{altitude:2e3,ambientAtNight:.2,ambientAtNoon:.75,ambientAtTwilight:.5,diffuseAtNoon:.25,diffuseAtTwilight:.5},global:{altitude:2e4,ambient:.5,diffuse:.5},planarDirection:{localAltitude:1e5,globalAltitude:1e6,globalAngles:{azimuth:Math.PI/2,altitude:Math.PI/2}}},s={ambient:{color:n.create(),intensity:0},diffuse:{color:n.create(),intensity:0,direction:n.create()}},f={settings:r,computeDirection:function(i,l,r,s){s||(s=n.create());var c=u,d=a.identity(o);if("global"===r)e.getPosition(i,0,0,c),n.set3(0,0,-1,s),a.rotateX(d,-c.azimuth),a.rotateY(d,-c.altitude),a.multiplyVec3(d,s);else{var m=f.settings.planarDirection,g=m.globalAngles,b=l.z,A=(b-m.localAltitude)/(m.globalAltitude-m.localAltitude);A=t.clamp(A,0,1),1>A?(e.getPosition(i,l.y,l.x,c),c.azimuth=(1-A)*c.azimuth+A*g.azimuth,c.altitude=(1-A)*c.altitude+A*g.altitude):(c.azimuth=g.azimuth,c.altitude=g.altitude),n.set3(0,-1,0,s),a.rotateZ(d,-c.azimuth),a.rotateX(d,-c.altitude),a.multiplyVec3(d,s)}return s},computeShadowsEnabled:function(t,i){if("global"===i)return!0;var e=f.settings.planarDirection,n=t.z;return n<e.localAltitude},computeColorAndIntensity:function(i,a){var o=a.z,u=f.settings,r=s;n.set3(1,1,1,r.ambient.color),r.ambient.intensity=u.global.ambient,n.set3(1,1,1,r.diffuse.color),r.diffuse.intensity=u.global.diffuse;var d=(o-u.local.altitude)/(u.global.altitude-u.local.altitude);if(d=t.clamp(d,0,1),1>d){var m=e.getTimes(i,a.y,a.x),g=c(i,m);n.lerp(g.ambient.color,r.ambient.color,d,r.ambient.color),r.ambient.intensity=l(g.ambient.intensity,r.ambient.intensity,d),n.lerp(g.diffuse.color,r.diffuse.color,d,r.diffuse.color),r.diffuse.intensity=l(g.diffuse.intensity,r.diffuse.intensity,d)}return r}},c=function(t,i){var n,a,l=t.valueOf();i.polarException===e.POLAR_EXCEPTION.MIDNIGHT_SUN?(n=l-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,a=n+432e6):i.polarException===e.POLAR_EXCEPTION.POLAR_NIGHT?(n=l-2,a=l-1):(n=i.sunrise.valueOf(),a=i.sunset.valueOf());var o,u,r=a-n,s=n+r/2,c=r/4,m=s-c,g=s+c,b=.06*r,A=b,y=n-b/2,h=n+b/2,p=a-A/2,v=a+A/2,N=f.settings.local,z=[.01,N.ambientAtNight],O=[.8,.8,1],P=[.01,.01,.01],T=[N.diffuseAtTwilight,N.ambientAtTwilight],I=[1,.75,.75],E=[.8,.8,1],D=[.9*N.diffuseAtNoon,N.ambientAtNoon],w=[1,.98,.98],x=[.98,.98,1],M=[N.diffuseAtNoon,N.ambientAtNoon],C=[1,1,1],X=[1,1,1],_=D,H=w,L=x,R=T,S=I,G=E,U=[0,0],V=[0,0],Y=[0,0];return y>l||l>v?(U=z,V=P,Y=O,u="night"):h>l?(o=h-y,U=d(l-y,o,z,T),V=d(l-y,o,P,I),Y=d(l-y,o,O,E),u="sun rising"):m>l?(o=m-h,U=d(l-h,o,T,D),V=d(l-h,o,I,w),Y=d(l-h,o,E,x),u="early morning"):s>l?(o=s-m,U=d(l-m,o,D,M),V=d(l-m,o,w,C),Y=d(l-m,o,x,X),u="late morning"):g>l?(o=g-s,U=d(l-s,o,M,_),V=d(l-s,o,C,H),Y=d(l-s,o,X,L),u="early afternoon"):p>l?(o=p-g,U=d(l-g,o,_,R),V=d(l-g,o,H,S),Y=d(l-g,o,L,G),u="late afternoon"):v>l&&(o=v-p,U=d(l-p,o,R,z),V=d(l-p,o,S,P),Y=d(l-p,o,G,O),u="sun setting"),{diffuse:{intensity:U[0],color:V},ambient:{intensity:U[1],color:Y},timeOfDay:u}},d=function(t,i,e,n){for(var a=[],l=0;l<e.length;l++)a[l]=(n[l]-e[l])*t/i+e[l];return a};return f});