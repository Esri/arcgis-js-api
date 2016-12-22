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

/*
 (c) 2011-2013, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/mooon position and light phases.
 https://github.com/mourner/suncalc


 Copyright (c) 2013, Vladimir Agafonkin
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are
 permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice, this list of
 conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright notice, this list
 of conditions and the following disclaimer in the documentation and/or other materials
 provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

define([],function(){"use strict";function n(n){return n.valueOf()/l-.5+g}function t(n){return new Date((n+.5-g)*l)}function r(t){return n(t)-m}function e(n,t){return L(E(n)*I(C)-T(t)*E(C),I(n))}function u(n,t){return A(E(t)*I(C)+I(t)*E(C)*E(n))}function i(n,t,r){return L(E(n),I(n)*E(t)-T(r)*I(t))}function a(n,t,r){return A(E(t)*E(r)+I(t)*I(r)*I(n))}function o(n,t){return _*(280.16+360.9856235*n)-t}function c(n){return _*(357.5291+.98560028*n)}function f(n){return _*(1.9148*E(n)+.02*E(2*n)+3e-4*E(3*n))}function d(n,t){var r=102.9372*_;return n+t+r+v}function s(n,t){var r=c(n),i=f(r),a=d(r,i);return t||(t={dec:0,ra:0}),t.dec=u(a,0),t.ra=e(a,0),t}function O(n,t){return Math.round(n-H-t/(2*v))}function M(n,t,r){return H+(n+t)/(2*v)+r}function N(n,t,r){return m+n+.0053*E(t)-.0069*E(2*r)}function P(n,t,r){return R((E(n)-E(t)*E(r))/(I(t)*I(r)))}function h(n){var t=_*(218.316+13.176396*n),r=_*(134.963+13.064993*n),i=_*(93.272+13.22935*n),a=t+6.289*_*E(r),o=5.128*_*E(i),c=385001-20905*I(r);return{ra:e(a,o),dec:u(a,o),dist:c}}var v=Math.PI,E=Math.sin,I=Math.cos,T=Math.tan,A=Math.asin,L=Math.atan2,R=Math.acos,_=v/180,l=864e5,g=2440588,m=2451545,p={dec:0,ra:0},C=23.4397*_,X={};X.POLAR_EXCEPTION={NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},X.getPosition=function(n,t,e,u){var c=_*-e,f=_*t,d=r(n),O=s(d,p),M=o(d,c)-O.ra;return u||(u={azimuth:0,altitude:0}),u.azimuth=i(M,f,O.dec),u.altitude=a(M,f,O.dec),u};var G=[[-.83,"sunrise","sunset"]];X.addTime=function(n,t,r){G.push([n,t,r])};var H=9e-4;return X.getTimes=function(n,e,i){function a(n){var t=P(n,R,z),r=M(t,L,g);return N(r,p,H)}function o(n){var t=(E(n)-E(R)*E(z))/(I(R)*I(z));return-1>t?X.POLAR_EXCEPTION.MIDNIGHT_SUN:t>1?X.POLAR_EXCEPTION.POLAR_NIGHT:X.POLAR_EXCEPTION.NORMAL}var s,h,v,T,A,L=_*-i,R=_*e,l=r(n),g=O(l,L),m=M(0,L,g),p=c(m),C=f(p),H=d(p,C),z=u(H,0),D=N(m,p,H),x={solarNoon:t(D),nadir:t(D-.5),polarException:X.POLAR_EXCEPTION.NORMAL};for(s=0,h=G.length;h>s;s+=1)v=G[s],T=a(v[0]*_),A=D-(T-D),x[v[1]]=t(A),x[v[2]]=t(T);return x.polarException=o(G[0][0]*_),x},X.getMoonPosition=function(n,t,e){var u=_*-e,c=_*t,f=r(n),d=h(f),s=o(f,u)-d.ra,O=a(s,c,d.dec);return O+=.017*_/T(O+10.26*_/(O+5.1*_)),{azimuth:i(s,c,d.dec),altitude:O,distance:d.dist}},X.getMoonFraction=function(n){var t=r(n),e=s(t),u=h(t),i=149598e3,a=R(E(e.dec)*E(u.dec)+I(e.dec)*I(u.dec)*I(e.ra-u.ra)),o=L(i*E(a),u.dist-i*I(a));return(1+I(o))/2},X});