/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as e}from"../../../core/shaderModules/interfaces.js";import{EdgeUtilMode as t}from"./EdgeUtil.glsl.js";function i(i,d){const s=i.vertex;switch(d.mode){case t.SKETCH:s.code.add(e`#define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}`);break;case t.MIXED:s.code.add(e`#define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}`);break;case t.SOLID:s.code.add(e`#define discardShortEdges(unpackedAttributes, lineLengthPixels) {}`)}}export{i as DiscardShortEdges};
