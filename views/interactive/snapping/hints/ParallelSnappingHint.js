/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../core/has.js";import i from"../../../../core/Logger.js";import{objectEqual as t}from"../snappingUtils.js";import{SnappingHint as n}from"./SnappingHint.js";i.getLogger("esri.views.interactive.snapping.hints.ParallelSnappingHint");class e extends n{constructor(i,t,n){super(n),this.lineStart=i,this.lineEnd=t}equals(i){return i instanceof e&&(t(this.lineStart,i.lineStart)&&t(this.lineEnd,i.lineEnd))}}export{e as ParallelSnappingHint};
