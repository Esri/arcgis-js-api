/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{h as t,g as n}from"../../../../chunks/vec2.js";import{a as e}from"../../../../chunks/vec2f64.js";import{LineConstraint as i}from"../SnappingConstraint.js";import{LineSegmentHintType as s}from"../snappingUtils.js";import{SnappingCandidate as r}from"./SnappingCandidate.js";import{LineSnappingHint as o}from"../hints/LineSnappingHint.js";class a extends r{constructor({coordinateHelper:t,lineStart:n,lineEnd:e,targetPoint:r,elevationInfo:a}){super(t,r,new i(t,n,e),a),this.referenceLineHint=new o(s.REFERENCE_EXTENSION,n,e,a)}get hints(){return[this.referenceLineHint,new o(s.TARGET,this._lineEndClosestToTarget(),this.targetPoint,this.elevationInfo)]}_lineEndClosestToTarget(){const e=this.constraint.start,i=this.constraint.end;return Math.sign(t(n(c,i,e),n(p,this.targetPoint,e)))>0?i:e}}const p=e(),c=e();export{a as LineSnappingCandidate};
