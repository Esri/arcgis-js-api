/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../core/has.js";import{packFloatRGBA as t}from"../../../../core/floatRGBA.js";import{Texture as n}from"../../webgl-engine/lib/Texture.js";import{TextureWrapMode as r}from"../../../webgl/enums.js";const e=128,a=.5;function o(t,o=e,c=o*a,s=0){const i=u(t,o,c,s);return new n(i,{mipmap:!1,wrap:{s:r.CLAMP_TO_EDGE,t:r.CLAMP_TO_EDGE},width:o,height:o,components:4,noUnpackFlip:!0})}function u(t,n=e,r=n*a,o=0){switch(t){case"circle":default:return c(n,r);case"square":return s(n,r);case"cross":return h(n,r,o);case"x":return f(n,r,o);case"kite":return i(n,r);case"triangle":return M(n,r);case"arrow":return m(n,r)}}function c(t,n){const r=t/2-.5;return w(t,T(r,r,n/2))}function s(t,n){return l(t,n,!1)}function i(t,n){return l(t,n,!0)}function h(t,n,r=0){return p(t,n,!1,r)}function f(t,n,r=0){return p(t,n,!0,r)}function M(t,n){return w(t,b(t/2,n,n/2))}function m(t,n){const r=n,e=n/2,a=t/2,o=.8*r,u=T(a,(t-n)/2-o,Math.sqrt(o*o+e*e)),c=b(a,r,e);return w(t,((t,n)=>Math.max(c(t,n),-u(t,n))))}function l(t,n,r){return r&&(n/=Math.SQRT2),w(t,((e,a)=>{let o=e-.5*t+.25,u=.5*t-a-.75;if(r){const t=(o+u)/Math.SQRT2;u=(u-o)/Math.SQRT2,o=t}return Math.max(Math.abs(o),Math.abs(u))-.5*n}))}function p(t,n,r,e=0){n-=e,r&&(n*=Math.SQRT2);const a=.5*n;return w(t,((n,o)=>{let u,c=n-.5*t,s=.5*t-o-1;if(r){const t=(c+s)/Math.SQRT2;s=(s-c)/Math.SQRT2,c=t}return c=Math.abs(c),s=Math.abs(s),u=c>s?c>a?Math.sqrt((c-a)*(c-a)+s*s):s:s>a?Math.sqrt(c*c+(s-a)*(s-a)):c,u-=e/2,u}))}function T(t,n,r){return(e,a)=>{const o=e-t,u=a-n;return Math.sqrt(o*o+u*u)-r}}function b(t,n,r){const e=Math.sqrt(n*n+r*r);return(a,o)=>{const u=Math.abs(a-t)-r,c=o-t+n/2+.75,s=(n*u+r*c)/e,i=-c;return Math.max(s,i)}}function w(n,r){const e=new Uint8Array(4*n*n);for(let a=0;a<n;a++)for(let o=0;o<n;o++){const u=o+n*a;let c=r(o,a);c=c/n+.5,t(c,e,4*u)}return e}export{a as DEFAULT_SYMBOL_SIZE_RATIO,e as DEFAULT_TEX_SIZE,m as createArrow,c as createCircle,h as createCross,i as createKite,u as createPrimitive,s as createSquare,o as createTexture,M as createTriangle,f as createX};