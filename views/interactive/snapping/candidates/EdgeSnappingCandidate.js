/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{LineConstraint as t}from"../SnappingConstraint.js";import{LineSegmentHintType as n}from"../snappingUtils.js";import{FeatureSnappingCandidate as i}from"./FeatureSnappingCandidate.js";import{LineSnappingHint as r}from"../hints/LineSnappingHint.js";class e extends i{constructor(n){super({...n,constraint:new t(n.coordinateHelper,n.edgeStart,n.edgeEnd)})}get hints(){return[new r(n.REFERENCE,this.constraint.start,this.constraint.end,this.elevationInfo)]}}export{e as EdgeSnappingCandidate};
