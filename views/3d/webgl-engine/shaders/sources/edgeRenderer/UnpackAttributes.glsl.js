/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","../../../core/shaderModules/interfaces","../../../lib/VertexAttribute","./EdgeUtil.glsl"],(function(e,t,n,s,i){"use strict";function o(e,o){const d=e.vertex;switch(e.attributes.add(s.VertexAttribute.SIDENESS,"vec2"),o.mode===i.EdgeUtilMode.MIXED?d.code.add(n.glsl`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
float type;
};`):d.code.add(n.glsl`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
};`),o.mode){case i.EdgeUtilMode.MIXED:d.code.add(n.glsl`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float fType = component.type;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
if (fType <= 0.0) {
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
}
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}`);break;case i.EdgeUtilMode.SKETCH:d.code.add(n.glsl`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case i.EdgeUtilMode.SOLID:d.code.add(n.glsl`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);break;case i.EdgeUtilMode.COUNT:break;default:t.neverReached(o.mode)}}e.UnpackAttributes=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
