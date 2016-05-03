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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./mathUtils","../lib/glMatrix","../lib/SunCalc"],function(t,e,i){var n=e.vec3d,o=e.mat4d,a=t.lerp,l=o.identity(),r={azimuth:0,altitude:0},s={local:{altitude:2e3,ambientAtNight:.2,ambientAtNoon:.75,ambientAtTwilight:.5,diffuseAtNoon:.25,diffuseAtTwilight:.5},global:{altitude:2e4,ambient:.5,diffuse:.5}},u={ambient:{color:n.create(),intensity:0},diffuse:{color:n.create(),intensity:0,direction:n.create()}},f={settings:s,computeDirection:function(t,e,a,s){s||(s=n.create());var u=r,f=o.identity(l);return"global"===a?(i.getPosition(t,0,0,u),n.set3(0,0,-1,s),o.rotateX(f,-u.azimuth),o.rotateY(f,-u.altitude),o.multiplyVec3(f,s)):(i.getPosition(t,e.y,e.x,u),n.set3(0,-1,0,s),o.rotateZ(f,-u.azimuth),o.rotateX(f,-u.altitude),o.multiplyVec3(f,s)),s},computeColorAndIntensity:function(e,o){var l=o.z,r=f.settings,s=u;n.set3(1,1,1,s.ambient.color),s.ambient.intensity=r.global.ambient,n.set3(1,1,1,s.diffuse.color),s.diffuse.intensity=r.global.diffuse;var m=(l-r.local.altitude)/(r.global.altitude-r.local.altitude);if(m=t.clamp(m,0,1),1>m){var d=i.getTimes(e,o.y,o.x),b=c(e,d);n.lerp(b.ambient.color,s.ambient.color,m,s.ambient.color),s.ambient.intensity=a(b.ambient.intensity,s.ambient.intensity,m),n.lerp(b.diffuse.color,s.diffuse.color,m,s.diffuse.color),s.diffuse.intensity=a(b.diffuse.intensity,s.diffuse.intensity,m)}return s}},c=function(t,e){var n,o,a=t.valueOf();e.polarException===i.POLAR_EXCEPTION.MIDNIGHT_SUN?(n=a-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,o=n+432e6):e.polarException===i.POLAR_EXCEPTION.POLAR_NIGHT?(n=a-2,o=a-1):(n=e.sunrise.valueOf(),o=e.sunset.valueOf());var l,r,s=o-n,u=n+s/2,c=s/4,d=u-c,b=u+c,g=.06*s,y=g,A=n-g/2,N=n+g/2,h=o-y/2,p=o+y/2,v=f.settings.local,O=[.01,v.ambientAtNight],T=[.8,.8,1],P=[.01,.01,.01],E=[v.diffuseAtTwilight,v.ambientAtTwilight],I=[1,.75,.75],x=[.8,.8,1],w=[.9*v.diffuseAtNoon,v.ambientAtNoon],z=[1,.98,.98],C=[.98,.98,1],X=[v.diffuseAtNoon,v.ambientAtNoon],_=[1,1,1],D=[1,1,1],H=w,L=z,M=C,R=E,G=I,S=x,U=[0,0],V=[0,0],Y=[0,0];return A>a||a>p?(U=O,V=P,Y=T,r="night"):N>a?(l=N-A,U=m(a-A,l,O,E),V=m(a-A,l,P,I),Y=m(a-A,l,T,x),r="sun rising"):d>a?(l=d-N,U=m(a-N,l,E,w),V=m(a-N,l,I,z),Y=m(a-N,l,x,C),r="early morning"):u>a?(l=u-d,U=m(a-d,l,w,X),V=m(a-d,l,z,_),Y=m(a-d,l,C,D),r="late morning"):b>a?(l=b-u,U=m(a-u,l,X,H),V=m(a-u,l,_,L),Y=m(a-u,l,D,M),r="early afternoon"):h>a?(l=h-b,U=m(a-b,l,H,R),V=m(a-b,l,L,G),Y=m(a-b,l,M,S),r="late afternoon"):p>a&&(l=p-h,U=m(a-h,l,R,O),V=m(a-h,l,G,P),Y=m(a-h,l,S,T),r="sun setting"),{diffuse:{intensity:U[0],color:V},ambient:{intensity:U[1],color:Y},timeOfDay:r}},m=function(t,e,i,n){for(var o=[],a=0;a<i.length;a++)o[a]=(n[a]-i[a])*t/e+i[a];return o};return f});