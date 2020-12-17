/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const n=Math.PI/180;t.bboxIntersects=function(t,n){const[e,o,r,s]=t,[u,i,a,c]=n;return!(e>a||r<u||o>c||s<i)},t.getBBox=function(t,n,e,o){const[r,s]=n,[u,i]=o,a=.5*e;return t[0]=r-a*u,t[1]=s-a*i,t[2]=r+a*u,t[3]=s+a*i,t},t.getOuterSize=function(t,e){const o=e.rotation*n,r=Math.abs(Math.cos(o)),s=Math.abs(Math.sin(o)),[u,i]=e.size;return t[0]=Math.round(i*s+u*r),t[1]=Math.round(i*r+u*s),t},t.snapToPixel=function(t,n,e){const{resolution:o,size:r}=e;return t[0]=o*(Math.round(n[0]/o)+r[0]%2*.5),t[1]=o*(Math.round(n[1]/o)+r[1]%2*.5),t},Object.defineProperty(t,"__esModule",{value:!0})}));
