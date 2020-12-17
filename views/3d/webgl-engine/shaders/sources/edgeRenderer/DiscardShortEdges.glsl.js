/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces"],(function(e,t){"use strict";e.DiscardShortEdges=function(e,i){const s=e.vertex;switch(i.mode){case 1:s.code.add(t.glsl`
        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}
      `);break;case 2:s.code.add(t.glsl`
        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}
      `);break;case 0:s.code.add(t.glsl`
        #define discardShortEdges(unpackedAttributes, lineLengthPixels) {}
      `)}},Object.defineProperty(e,"__esModule",{value:!0})}));
