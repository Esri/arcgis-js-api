/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as e}from"../../../../core/shaderModules/interfaces.js";var a;function r(r,c){const i=r.vertex;switch(i.code.add(e`#define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)`),c.vertexDiscardMode){case a.None:i.code.add(e`#define vertexDiscardByOpacity(_opacity_) {}`);break;case a.Opaque:i.code.add(e`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);break;case a.Transparent:i.code.add(e`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`)}}!function(e){e[e.None=0]="None",e[e.Transparent=1]="Transparent",e[e.Opaque=2]="Opaque",e[e.COUNT=3]="COUNT"}(a||(a={}));export{r as VertexDiscardByOpacity,a as VertexDiscardMode};
