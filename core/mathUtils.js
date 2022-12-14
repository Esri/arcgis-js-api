/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{l as n,s as t}from"../chunks/vec3.js";import{s as r}from"../chunks/vec4.js";const u=new Float32Array(1);function a(n){--n;for(let t=1;t<32;t<<=1)n|=n>>t;return n+1}function o(n,t,r){return Math.min(Math.max(n,t),r)}function e(n,t){return 0===t?0:Math.round(n/t)*t}function i(n){return 0==(n&n-1)}function c(n){return n--,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>16,++n}function f(n){return 10**Math.ceil(Math.LOG10E*Math.log(n))}function s(n,t,r){return n+(t-n)*r}function h(n,t,r,u,a){return s(u,a,(n-t)/(r-t))}function M(n){return n*Math.PI/180}function m(n){return 180*n/Math.PI}function N(n,t=1e-6){return(n<0?-1:1)/Math.max(Math.abs(n),t)}function l(n){return Math.acos(o(n,-1,1))}function b(n){return Math.asin(o(n,-1,1))}function x(n,t,r=1e-6){if(isNaN(n)||isNaN(t))return!1;if(n===t)return!0;const u=Math.abs(n-t),a=Math.abs(n),o=Math.abs(t);if(0===n||0===t||a<1e-12&&o<1e-12){if(u>.01*r)return!1}else if(u/(a+o)>r)return!1;return!0}function p(n,t,r=1e-6){if(isNaN(n)||isNaN(t))return!1;return(n>t?n-t:t-n)<=r}function j(n){return k(Math.max(-y,Math.min(n,y)))}function k(n){return u[0]=n,u[0]}function v(n,t){return t<n?0:1}function I(n,t,r){const u=o((r-n)/(t-n),0,1);return u*u*(3-2*u)}function P(r,u){const a=n(r),o=b(r[2]/a),e=Math.atan2(r[1]/a,r[0]/a);return t(u,a,o,e),u}function d(n,r){const u=n[0],a=n[1],o=n[2],e=Math.cos(a);t(r,u*e*Math.cos(o),u*e*Math.sin(o),u*Math.sin(a))}function g(n,t,u){return r(n,t[0],t[1],t[2],t[3]*u)}function w(n){const t=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],r=n[3]*n[3]+n[4]*n[4]+n[5]*n[5],u=n[6]*n[6]+n[7]*n[7]+n[8]*n[8];return!(p(t,1)&&p(r,1)&&p(u,1))}const y=k(34028234663852886e22);export{y as NUMBER_MAX_FLOAT32,l as acosClamped,g as applyOpacity,b as asinClamped,P as cartesianToSpherical,o as clamp,j as clampFloat32,M as deg2rad,p as floatEqualAbsolute,x as floatEqualRelative,w as hasScaling,i as isPowerOfTwo,s as lerp,f as nextHighestPowerOfTen,a as nextHighestPowerOfTwo,c as nextPowerOfTwo,m as rad2deg,N as reciprocalClamped,e as roundToNearest,h as scale,I as smoothstep,d as sphericalToCartesian,v as step};