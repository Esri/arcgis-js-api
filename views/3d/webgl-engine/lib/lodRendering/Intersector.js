/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{IntersectorType as r}from"../IntersectorInterfaces.js";import{isValidIntersectorResult as t}from"../intersectorUtils.js";function e(e){return t(e)&&e.intersector===r.LOD&&!!e.target}export{e as isLodIntersectorResult};
