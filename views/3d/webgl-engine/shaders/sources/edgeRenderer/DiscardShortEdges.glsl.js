/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces","./EdgeUtil.glsl"],(function(e,t,d){"use strict";function i(e,i){const s=e.vertex;switch(i.mode){case d.EdgeUtilMode.SKETCH:s.code.add(t.glsl`#define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}`);break;case d.EdgeUtilMode.MIXED:s.code.add(t.glsl`#define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}`);break;case d.EdgeUtilMode.SOLID:s.code.add(t.glsl`#define discardShortEdges(unpackedAttributes, lineLengthPixels) {}`)}}e.DiscardShortEdges=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
