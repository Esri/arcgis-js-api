/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{PointConstraint as t}from"../SnappingConstraint.js";import{FeatureSnappingCandidate as n}from"./FeatureSnappingCandidate.js";import{PointSnappingHint as i}from"../hints/PointSnappingHint.js";class r extends n{constructor(n){super({...n,constraint:new t(n.coordinateHelper,n.targetPoint)})}get hints(){return[new i(this.targetPoint,this.elevationInfo)]}}export{r as VertexSnappingCandidate};
