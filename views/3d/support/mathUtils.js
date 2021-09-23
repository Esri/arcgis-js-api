/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../core/mathUtils","../../../chunks/vec3","../../../chunks/vec3f64"],(function(t,n,i,o){"use strict";function e(t,n){return t>n?Math.cos(n):Math.cos(t)}function r(t,n,i){return 2*Math.atan(i*Math.tan(.5*t)/n)}function a(t,n,i){return 2*Math.atan(n*Math.tan(.5*t)/i)}function c(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],i=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],o=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,i,o))}function s(t,n){const o=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),e=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),r=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return i.set(t,o,e,r),t}function u(t,n,o){o=o||t;const e=i.dot(t,n);i.set(o,t[0]-e*n[0],t[1]-e*n[1],t[2]-e*n[2]),i.normalize(o,o)}function h(t,n,o){Math.abs(t[0])>Math.abs(t[1])?i.set(n,0,1,0):i.set(n,1,0,0),i.cross(o,t,n),i.normalize(n,n),i.cross(n,o,t),i.normalize(o,o)}function l(t,n){return(t%n+n)%n}function f(t,n,i,o,e,r){const a=t+(n-t)*e;return a+(i+(o-i)*e-a)*r}function m(t,n,e,r=o.create()){const a=i.length(t),c=i.length(n),s=i.dot(t,n)/(a*c);if(s<.9999999999999999){const o=Math.acos(s),u=((1-e)*a+e*c)/Math.sin(o),h=u/a*Math.sin((1-e)*o),l=u/c*Math.sin(e*o);return i.scale(_,t,h),i.scale(k,n,l),i.add(r,_,k)}return i.lerp(r,t,n,e)}function M(t,n,e,r=o.create(),a=o.create()){const c=i.length(t),s=i.length(n),u=i.dot(t,n)/(c*s);if(u<.9999999999999999){const o=Math.acos(u),h=Math.sin(o),l=Math.sin(e*o),f=Math.sin((1-e)*o),m=(1-e)*c+e*s;{const o=m/h,e=o/c*f,a=o/s*l;i.scale(_,t,e),i.scale(k,n,a),i.add(r,_,k)}{const r=1/c*(-Math.cos((1-e)*o)*o*m+f*(-c+s));i.scale(_,t,r);const u=1/s*(Math.cos(e*o)*o*m+l*(-c+s));i.scale(k,n,u),i.add(a,_,k),i.scale(a,a,1/h)}return a}return i.lerp(r,t,n,e),i.subtract(a,n,t),i.normalize(a,a),a}function d(t,o,e){t=i.normalize(_,t),o=i.normalize(k,o);const r=n.acosClamped(i.dot(t,o));if(e){const n=i.cross(I,t,o);if(i.dot(n,e)<0)return-r}return r}function p(t){const n=t.length;return function(i){if(i<=t[0][0])return t[0][1];if(i>=t[n-1][0])return t[n-1][1];let o=1;for(;i>t[o][0];)o++;const e=t[o-1][0],r=t[o][0],a=(r-i)/(r-e);return a*t[o-1][1]+(1-a)*t[o][1]}}let g=function(){function t(t,n){this.min=t,this.max=n,this.range=n-t}var i=t.prototype;return i.ndiff=function(t,n=0){return Math.ceil((t-n)/this.range)*this.range+n},i._normalize=function(t,n,i,o=0,e=!1){return(i-=o)<t?i+=this.ndiff(t-i):i>n&&(i-=this.ndiff(i-n)),e&&i===n&&(i=t),i+o},i.normalize=function(t,n=0,i=!1){return this._normalize(this.min,this.max,t,n,i)},i.clamp=function(t,i=0){return n.clamp(t-i,this.min,this.max)+i},i.monotonic=function(t,n,i){return t<n?n:n+this.ndiff(t-n,i)},i.minimalMonotonic=function(t,n,i){return this._normalize(t,t+this.range,n,i)},i.center=function(t,n,i){return n=this.monotonic(t,n,i),this.normalize((t+n)/2,i)},i.diff=function(t,n,i){return this.monotonic(t,n,i)-t},i.shortestSignedDiff=function(t,n){t=this.normalize(t);const i=(n=this.normalize(n))-t,o=n<t?this.minimalMonotonic(t,n)-t:n-this.minimalMonotonic(n,t);return Math.abs(i)<Math.abs(o)?i:o},i.contains=function(t,n,i){return n=this.minimalMonotonic(t,n),(i=this.minimalMonotonic(t,i))>t&&i<n},t}();function z(t,n,o,e){i.subtract(b,n,t),i.subtract(v,o,t),i.cross(e,b,v),i.normalize(e,e),e[3]=-i.dot(t,e)}const b=o.create(),v=o.create();function x(t){for(const n in t){const i=t[n];i instanceof Function&&(t[n]=i.bind(t))}return t}const P=x(new g(0,2*Math.PI)),y=x(new g(-Math.PI,Math.PI)),F=x(new g(0,360)),I=o.create(),_=o.create(),k=o.create();t.Cyclical=g,t.angle=d,t.bilerp=f,t.cosCapped=e,t.cyclical2PI=P,t.cyclicalDeg=F,t.cyclicalPI=y,t.fovx2fovy=r,t.fovy2fovx=a,t.makeOrthonormal=u,t.makePiecewiseLinearFunction=p,t.maxScale=c,t.moduloPositive=l,t.planeFromPoints=z,t.scaleFromMatrix=s,t.slerp=m,t.slerpTangent=M,t.tangentFrame=h,Object.defineProperty(t,"__esModule",{value:!0})}));
