/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{objectEqual as t}from"../snappingUtils.js";import{SnappingHint as n}from"./SnappingHint.js";class s extends n{constructor(t,n){super(n),this.point=t}equals(n){return n instanceof s&&t(this.point,n.point)}}export{s as PointSnappingHint};
