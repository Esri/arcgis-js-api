/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../../core/maybe.js";import{h as t}from"../../../../chunks/vec3.js";import{c as e}from"../../../../chunks/vec3f64.js";import{e as n}from"../../../../chunks/boundedPlane.js";import{IntersectorType as o}from"./IntersectorInterfaces.js";function c(t){return r(t)&&r(t.dist)}function s(r){return(e,o,c)=>(t(f,e,o,c),!n(r,f))}function i(r){return c(r)&&r.intersector===o.OBJECT&&!!r.target}function u(t){return c(t)&&t.intersector===o.HUD&&!!t.target&&r(t.target.center)}const f=e();export{u as isHudIntersectorResult,i as isObjectIntersectorResult,c as isValidIntersectorResult,s as sliceFilterPredicate};
