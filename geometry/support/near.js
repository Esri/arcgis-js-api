/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import{j as t}from"../../chunks/vec2.js";import{projectPointOnLine as e}from"./coordsUtils.js";import n from"../Point.js";function o(o,m){const{spatialReference:r}=m,i=[m.x,m.y];let s=Number.POSITIVE_INFINITY,x=0,c=0;const a=[0,0],f="extent"===o.type?[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]:o.rings;for(const n of f)for(let o=0;o<n.length-1;o++){e(a,i,n,o);const m=t(i,a);m<s&&(s=m,x=a[0],c=a[1])}return{coordinate:new n({x,y:c,spatialReference:r}),distance:s}}export{o as nearestCoordinate};
