/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=Math.PI/180;function e(t){return t*n}function o(t,n,e){const{resolution:o,size:r}=e;return t[0]=o*(Math.round(n[0]/o)+r[0]%2*.5),t[1]=o*(Math.round(n[1]/o)+r[1]%2*.5),t}function r(t,n){const o=e(n.rotation),r=Math.abs(Math.cos(o)),u=Math.abs(Math.sin(o)),[s,i]=n.size;return t[0]=Math.round(i*u+s*r),t[1]=Math.round(i*r+s*u),t}function u(t,n,e,o){const[r,u]=n,[s,i]=o,a=.5*e;return t[0]=r-a*s,t[1]=u-a*i,t[2]=r+a*s,t[3]=u+a*i,t}function s(t,n){const[e,o,r,u]=t,[s,i,a,c]=n;return!(e>a||r<s||o>c||u<i)}t.bboxIntersects=s,t.getBBox=u,t.getOuterSize=r,t.snapToPixel=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
