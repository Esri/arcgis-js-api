/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"./isWebGL2Context.js";function A(A,_){if(_.disjointTimerQuery)return null;if(r(A))return{drawBuffers:A.drawBuffers.bind(A),MAX_DRAW_BUFFERS:A.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:A.MAX_COLOR_ATTACHMENTS};if(_.drawBuffers)return null;const e=A.getExtension("WEBGL_draw_buffers");return e?{drawBuffers:e.drawBuffersWEBGL.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS_WEBGL}:null}export{A as load};
