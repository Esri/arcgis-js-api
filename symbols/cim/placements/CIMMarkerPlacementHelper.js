/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{cloneAndDecodeGeometry as r}from"../CIMCursor.js";import{getPlacementOperator as t}from"../CIMOperators.js";class e{static getPlacement(e,o,s,c){const n=t(o);if(!n)return null;const m=r(e);return n.execute(m,o,s,c)}}export{e as CIMMarkerPlacementHelper};
