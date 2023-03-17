/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=Math.PI/180;function e(t){return t*n}function o(t,n){const o=e(n.rotation),r=Math.abs(Math.cos(o)),u=Math.abs(Math.sin(o)),[a,i]=n.size;return t[0]=Math.round(i*u+a*r),t[1]=Math.round(i*r+a*u),t}function r(t,n,e,o){const[r,u]=n,[a,i]=o,s=.5*e;return t[0]=r-s*a,t[1]=u-s*i,t[2]=r+s*a,t[3]=u+s*i,t}t.getBBox=r,t.getOuterSize=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
