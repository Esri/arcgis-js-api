/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{neverReached as e}from"../../../../../../core/compilerUtils.js";import{glsl as t}from"../../../core/shaderModules/interfaces.js";import{VertexAttribute as n}from"../../../lib/VertexAttribute.js";import{EdgeUtilMode as s}from"./EdgeUtil.glsl.js";function i(i,o){const d=i.vertex;switch(i.attributes.add(n.SIDENESS,"vec2"),o.mode===s.MIXED?d.code.add(t`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
float type;
};`):d.code.add(t`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
};`),o.mode){case s.MIXED:d.code.add(t`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float fType = component.type;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
if (fType <= 0.0) {
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
}
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}`);break;case s.SKETCH:d.code.add(t`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case s.SOLID:d.code.add(t`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case s.COUNT:break;default:e(o.mode)}}export{i as UnpackAttributes};
