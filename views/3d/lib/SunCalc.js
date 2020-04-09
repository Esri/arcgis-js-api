// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define([],(function(){"use strict";var n=Math.PI,t=Math.sin,r=Math.cos,e=Math.tan,u=Math.asin,i=Math.atan2,a=Math.acos,o=n/180,c={dec:0,ra:0};function f(n){return new Date(864e5*(n+.5-2440588))}function d(n){return function(n){return n.valueOf()/864e5-.5+2440588}(n)-2451545}var s=23.4397*o;function O(n,u){return i(t(n)*r(s)-e(u)*t(s),r(n))}function M(n,e){return u(t(e)*r(s)+r(e)*t(s)*t(n))}function N(n,u,a){return i(t(n),r(n)*t(u)-e(a)*r(u))}function P(n,e,i){return u(t(e)*t(i)+r(e)*r(i)*r(n))}function h(n,t){return o*(280.16+360.9856235*n)-t}function E(n){return o*(357.5291+.98560028*n)}function I(n){return o*(1.9148*t(n)+.02*t(2*n)+3e-4*t(3*n))}function v(t,r){return t+r+102.9372*o+n}function T(n,t){var r=E(n),e=v(r,I(r));return t||(t={dec:0,ra:0}),t.dec=M(e,0),t.ra=O(e,0),t}var A={POLAR_EXCEPTION:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(n,t,r,e){var u=o*-r,i=o*t,a=d(n),f=T(a,c),s=h(a,u)-f.ra;return e||(e={azimuth:0,altitude:0}),e.azimuth=N(s,i,f.dec),e.altitude=P(s,i,f.dec),e}},L=[[-.83,"sunrise","sunset"]];A.addTime=function(n,t,r){L.push([n,t,r])};function R(t,r,e){return 9e-4+(t+r)/(2*n)+e}function _(n,r,e){return 2451545+n+.0053*t(r)-.0069*t(2*e)}function l(n){var e=o*(134.963+13.064993*n),u=o*(93.272+13.22935*n),i=o*(218.316+13.176396*n)+6.289*o*t(e),a=5.128*o*t(u),c=385001-20905*r(e);return{ra:O(i,a),dec:M(i,a),dist:c}}return A.getTimes=function(e,u,i){var c=o*-i,s=o*u,O=function(t,r){return Math.round(t-9e-4-r/(2*n))}(d(e),c),N=R(0,c,O),P=E(N),h=I(P),T=v(P,h),l=M(T,0),g=_(N,P,T);function m(n){return _(R(function(n,e,u){return a((t(n)-t(e)*t(u))/(r(e)*r(u)))}(n,s,l),c,O),P,T)}var p,C,X,G,H,z,D,x={solarNoon:f(g),nadir:f(g-.5),polarException:A.POLAR_EXCEPTION.NORMAL};for(p=0,C=L.length;p<C;p+=1)H=g-((G=m((X=L[p])[0]*o))-g),x[X[1]]=f(H),x[X[2]]=f(G);return x.polarException=(z=L[0][0]*o,(D=(t(z)-t(s)*t(l))/(r(s)*r(l)))<-1?A.POLAR_EXCEPTION.MIDNIGHT_SUN:D>1?A.POLAR_EXCEPTION.POLAR_NIGHT:A.POLAR_EXCEPTION.NORMAL),x},A.getMoonPosition=function(n,t,r){var u=o*-r,i=o*t,a=d(n),c=l(a),f=h(a,u)-c.ra,s=P(f,i,c.dec);return s+=.017*o/e(s+10.26*o/(s+5.1*o)),{azimuth:N(f,i,c.dec),altitude:s,distance:c.dist}},A.getMoonFraction=function(n){var e=d(n),u=T(e),o=l(e),c=a(t(u.dec)*t(o.dec)+r(u.dec)*r(o.dec)*r(u.ra-o.ra)),f=i(149598e3*t(c),o.dist-149598e3*r(c));return(1+r(f))/2},A}));