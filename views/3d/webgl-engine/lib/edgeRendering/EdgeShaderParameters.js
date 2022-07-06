/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as r}from"../../../../../chunks/mat3f64.js";import{c as s}from"../../../../../chunks/vec3f64.js";import{VertexPositionPassParameters as o,VertexPositionDrawParameters as t}from"../../core/shaderLibrary/attributes/VertexPosition.glsl.js";class a extends o{constructor(s,o,t){super(),this.distanceFalloffFactor=s,this.minimumEdgeLength=o,this.transparency=t,this.transformNormalViewFromGlobal=r()}}class e extends t{constructor(){super(...arguments),this.transformNormalViewFromGlobal=r(),this.slicePlaneLocalOrigin=s(),this.transformNormalGlobalFromModel=r()}}export{e as EdgeDrawParameters,a as EdgePassParameters};
