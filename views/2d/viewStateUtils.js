/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=Math.PI/180;function e(t){return t*n}function o(t,n,e){const{resolution:o,size:r}=e;return t[0]=o*(Math.round(n[0]/o)+r[0]%2*.5),t[1]=o*(Math.round(n[1]/o)+r[1]%2*.5),t}function r(t,n){const o=e(n.rotation),r=Math.abs(Math.cos(o)),u=Math.abs(Math.sin(o)),[s,i]=n.size;return t[0]=Math.round(i*u+s*r),t[1]=Math.round(i*r+s*u),t}function u(t,n,e,o){const[r,u]=n,[s,i]=o,c=.5*e;return t[0]=r-c*s,t[1]=u-c*i,t[2]=r+c*s,t[3]=u+c*i,t}function s(t,n){const[e,o,r,u]=t,[s,i,c,a]=n;return!(e>c||r<s||o>a||u<i)}t.bboxIntersects=s,t.getBBox=u,t.getOuterSize=r,t.snapToPixel=o,Object.defineProperty(t,"__esModule",{value:!0})}));
