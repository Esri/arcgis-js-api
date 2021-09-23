/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";var t,r,e,u={exports:{}};t=u,r=function(){var n=Math.PI,t=Math.sin,r=Math.cos,e=Math.tan,u=Math.asin,i=Math.atan2,a=Math.acos,o=n/180,c=864e5,f=2440588,d=2451545,s={dec:0,ra:0};function v(n){return n.valueOf()/c-.5+f}function O(n){return new Date((n+.5-f)*c)}function M(n){return v(n)-d}var N=23.4397*o;function P(n,u){return i(t(n)*r(N)-e(u)*t(N),r(n))}function h(n,e){return u(t(e)*r(N)+r(e)*t(N)*t(n))}function E(n,u,a){return i(t(n),r(n)*t(u)-e(a)*r(u))}function I(n,e,i){return u(t(e)*t(i)+r(e)*r(i)*r(n))}function T(n,t){return o*(280.16+360.9856235*n)-t}function A(n){return o*(357.5291+.98560028*n)}function L(n){return o*(1.9148*t(n)+.02*t(2*n)+3e-4*t(3*n))}function R(t,r){return t+r+102.9372*o+n}function l(n,t){var r=A(n),e=R(r,L(r));return t||(t={dec:0,ra:0}),t.dec=h(e,0),t.ra=P(e,0),t}var p={POLAR_EXCEPTION:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(n,t,r,e){var u=o*-r,i=o*t,a=M(n),c=l(a,s),f=T(a,u)-c.ra;return e||(e={azimuth:0,altitude:0}),e.azimuth=E(f,i,c.dec),e.altitude=I(f,i,c.dec),e}},_=[[-.83,"sunrise","sunset"]];p.addTime=function(n,t,r){_.push([n,t,r])};var x=9e-4;function C(t,r){return Math.round(t-x-r/(2*n))}function g(t,r,e){return x+(t+r)/(2*n)+e}function m(n,r,e){return d+n+.0053*t(r)-.0069*t(2*e)}function X(n,e,u){return a((t(n)-t(e)*t(u))/(r(e)*r(u)))}function G(n){var e=o*(134.963+13.064993*n),u=o*(93.272+13.22935*n),i=o*(218.316+13.176396*n)+6.289*o*t(e),a=5.128*o*t(u),c=385001-20905*r(e);return{ra:P(i,a),dec:h(i,a),dist:c}}return p.getTimes=function(n,e,u){var i=o*-u,a=o*e,c=C(M(n),i),f=g(0,i,c),d=A(f),s=L(d),v=R(d,s),N=h(v,0),P=m(f,d,v);function E(n){return m(g(X(n,a,N),i,c),d,v)}function I(n){var e=(t(n)-t(a)*t(N))/(r(a)*r(N));return e<-1?p.POLAR_EXCEPTION.MIDNIGHT_SUN:e>1?p.POLAR_EXCEPTION.POLAR_NIGHT:p.POLAR_EXCEPTION.NORMAL}var T,l,x,G,H,z={solarNoon:O(P),nadir:O(P-.5),polarException:p.POLAR_EXCEPTION.NORMAL};for(T=0,l=_.length;T<l;T+=1)H=P-((G=E((x=_[T])[0]*o))-P),z[x[1]]=O(H),z[x[2]]=O(G);return z.polarException=I(_[0][0]*o),z},p.getMoonPosition=function(n,t,r){var u=o*-r,i=o*t,a=M(n),c=G(a),f=T(a,u)-c.ra,d=I(f,i,c.dec);return d+=.017*o/e(d+10.26*o/(d+5.1*o)),{azimuth:E(f,i,c.dec),altitude:d,distance:c.dist}},p.getMoonFraction=function(n){var e=M(n),u=l(e),o=G(e),c=149598e3,f=a(t(u.dec)*t(o.dec)+r(u.dec)*r(o.dec)*r(u.ra-o.ra)),d=i(c*t(f),o.dist-c*r(f));return(1+r(d))/2},p},void 0!==(e=r())&&(t.exports=e);var i=u.exports;n.SunCalc=i}));
