/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{l as t,j as n}from"../../../../chunks/vec2.js";import{a as i}from"../../../../chunks/vec2f64.js";import{PlanarCircleConstraint as s}from"../SnappingConstraint.js";import{LineSegmentHintType as o}from"../snappingUtils.js";import{SnappingCandidate as p}from"./SnappingCandidate.js";import{LineSnappingHint as r}from"../hints/LineSnappingHint.js";import{RightAngleSnappingHint as e}from"../hints/RightAngleSnappingHint.js";class a extends p{constructor({coordinateHelper:i,targetPoint:o,point1:p,point2:r,elevationInfo:e}){super(i,o,new s(i,t(h,p,r,.5),.5*n(p,r)),e),this.p1=p,this.p2=r}get hints(){const t=this.elevationInfo;return[new r(o.REFERENCE,this.targetPoint,this.p1,t),new r(o.REFERENCE,this.targetPoint,this.p2,t),new e(this.p1,this.targetPoint,this.p2,t)]}}const h=i();export{a as RightAngleTriangleSnappingCandidate};
