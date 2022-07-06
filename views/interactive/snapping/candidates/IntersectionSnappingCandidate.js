/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{IntersectionConstraint as t}from"../SnappingConstraint.js";import{SnappingCandidate as i}from"./SnappingCandidate.js";import{IntersectionSnappingHint as n}from"../hints/IntersectionSnappingHint.js";class s extends i{constructor(i,n,s,r,o){super(i,n,new t(i,n,s.constraint,r.constraint),o),this.first=s,this.second=r}get hints(){return this.first.targetPoint=this.targetPoint,this.second.targetPoint=this.targetPoint,[...this.first.hints,...this.second.hints,new n(this.targetPoint,this.elevationInfo)]}}export{s as IntersectionSnappingCandidate};
