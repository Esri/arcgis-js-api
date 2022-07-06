/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{JSONMap as e}from"../../core/jsonMap.js";import{getJsonType as t}from"../../geometry/support/jsonUtils.js";const i=new e({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});function r(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:t(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),i.write(s,n,"deviationUnit"),n}export{r as generalizeToRESTParameters};
