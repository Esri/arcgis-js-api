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

define([],function(){"use strict";function n(n){return n.valueOf()/l-.5+g}function t(n){return new Date((n+.5-g)*l)}function r(t){return n(t)-m}function e(n,t){return L(I(n)*v(C)-T(t)*I(C),v(n))}function u(n,t){return A(I(t)*v(C)+v(t)*I(C)*I(n))}function i(n,t,r){return L(I(n),v(n)*I(t)-T(r)*v(t))}function a(n,t,r){return A(I(t)*I(r)+v(t)*v(r)*v(n))}function o(n,t){return _*(280.16+360.9856235*n)-t}function c(n){return _*(357.5291+.98560028*n)}function f(n){return _*(1.9148*I(n)+.02*I(2*n)+3e-4*I(3*n))}function d(n,t){return n+t+102.9372*_+E}function s(n,t){var r=c(n),i=f(r),a=d(r,i);return t||(t={dec:0,ra:0}),t.dec=u(a,0),t.ra=e(a,0),t}function O(n,t){return Math.round(n-H-t/(2*E))}function M(n,t,r){return H+(n+t)/(2*E)+r}function N(n,t,r){return m+n+.0053*I(t)-.0069*I(2*r)}function P(n,t,r){return R((I(n)-I(t)*I(r))/(v(t)*v(r)))}function h(n){var t=_*(218.316+13.176396*n),r=_*(134.963+13.064993*n),i=_*(93.272+13.22935*n),a=t+6.289*_*I(r),o=5.128*_*I(i),c=385001-20905*v(r);return{ra:e(a,o),dec:u(a,o),dist:c}}var E=Math.PI,I=Math.sin,v=Math.cos,T=Math.tan,A=Math.asin,L=Math.atan2,R=Math.acos,_=E/180,l=864e5,g=2440588,m=2451545,p={dec:0,ra:0},C=23.4397*_,X={};X.POLAR_EXCEPTION={NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},X.getPosition=function(n,t,e,u){var c=_*-e,f=_*t,d=r(n),O=s(d,p),M=o(d,c)-O.ra;return u||(u={azimuth:0,altitude:0}),u.azimuth=i(M,f,O.dec),u.altitude=a(M,f,O.dec),u};var G=[[-.83,"sunrise","sunset"]];X.addTime=function(n,t,r){G.push([n,t,r])};var H=9e-4;return X.getTimes=function(n,e,i){var a,o,s,h,E,T=_*-i,A=_*e,L=r(n),R=O(L,T),l=M(0,T,R),g=c(l),m=f(g),p=d(g,m),C=u(p,0),H=N(l,g,p),z={solarNoon:t(H),nadir:t(H-.5),polarException:X.POLAR_EXCEPTION.NORMAL};for(a=0,o=G.length;a<o;a+=1)s=G[a],h=function(n){return N(M(P(n,A,C),T,R),g,p)}(s[0]*_),E=H-(h-H),z[s[1]]=t(E),z[s[2]]=t(h);return z.polarException=function(n){var t=(I(n)-I(A)*I(C))/(v(A)*v(C));return t<-1?X.POLAR_EXCEPTION.MIDNIGHT_SUN:t>1?X.POLAR_EXCEPTION.POLAR_NIGHT:X.POLAR_EXCEPTION.NORMAL}(G[0][0]*_),z},X.getMoonPosition=function(n,t,e){var u=_*-e,c=_*t,f=r(n),d=h(f),s=o(f,u)-d.ra,O=a(s,c,d.dec);return O+=.017*_/T(O+10.26*_/(O+5.1*_)),{azimuth:i(s,c,d.dec),altitude:O,distance:d.dist}},X.getMoonFraction=function(n){var t=r(n),e=s(t),u=h(t),i=R(I(e.dec)*I(u.dec)+v(e.dec)*v(u.dec)*v(e.ra-u.ra)),a=L(149598e3*I(i),u.dist-149598e3*v(i));return(1+v(a))/2},X});