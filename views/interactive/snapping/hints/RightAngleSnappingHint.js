/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../core/has.js";import e from"../../../../core/Logger.js";import{objectEqual as t}from"../snappingUtils.js";import{SnappingHint as r}from"./SnappingHint.js";e.getLogger("esri.views.interactive.snapping.hints.RightAngleSnappingHint");class i extends r{constructor(e,t,r,i){super(i),this.previousVertex=e,this.centerVertex=t,this.nextVertex=r}equals(e){return e instanceof i&&(t(this.previousVertex,e.previousVertex)&&t(this.centerVertex,e.centerVertex)&&t(this.nextVertex,e.nextVertex))}}export{i as RightAngleSnappingHint};
