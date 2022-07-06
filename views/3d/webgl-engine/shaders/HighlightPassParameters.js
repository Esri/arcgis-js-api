/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{f as s}from"../../../../chunks/vec4f32.js";import{f as o}from"../../../../chunks/vec4f64.js";import{NoParameters as t}from"../core/shaderModules/interfaces.js";class c extends t{constructor(){super(...arguments),this.color=s(1,0,1,1),this.haloColor=s(1,0,1,1),this.haloOpacity=1,this.haloOpacityOccluded=.25,this.fillOpacity=.2,this.fillOpacityOccluded=.05,this.shadowColor=o(1,0,1,1),this.shadowOpacity=.15,this.occludedShadowOpacity=.075}}export{c as HighlightPassParameters};
