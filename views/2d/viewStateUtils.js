/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=Math.PI/180;function n(t){return t*e}function o(t,e){const o=n(e.rotation),r=Math.abs(Math.cos(o)),u=Math.abs(Math.sin(o)),[a,i]=e.size;return t[0]=Math.round(i*u+a*r),t[1]=Math.round(i*r+a*u),t}function r(t,e,n,o){const[r,u]=e,[a,i]=o,s=.5*n;return t[0]=r-s*a,t[1]=u-s*i,t[2]=r+s*a,t[3]=u+s*i,t}t.getBBox=r,t.getOuterSize=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
