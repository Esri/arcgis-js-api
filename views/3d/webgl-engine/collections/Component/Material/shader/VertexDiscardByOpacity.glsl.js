/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/shaderModules/interfaces"],(function(e,c){"use strict";e.VertexDiscardByOpacity=function(e,i){const t=e.vertex;switch(t.code.add(c.glsl`
  #define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)
  `),i.vertexDiscardMode){case 0:t.code.add(c.glsl`
        #define vertexDiscardByOpacity(_opacity_) {}
      `);break;case 2:t.code.add(c.glsl`
        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }
      `);break;case 1:t.code.add(c.glsl`
        #define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }
      `)}},Object.defineProperty(e,"__esModule",{value:!0})}));
