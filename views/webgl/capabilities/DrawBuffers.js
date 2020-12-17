/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context"],(function(e,r){"use strict";e.load=function(e,_){if(_.disjointTimerQuery)return null;if(r(e))return{drawBuffers:e.drawBuffers.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS};if(_.drawBuffers)return null;const n=e.getExtension("WEBGL_draw_buffers");return n?{drawBuffers:n.drawBuffersWEBGL.bind(n),MAX_DRAW_BUFFERS:n.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:n.MAX_COLOR_ATTACHMENTS_WEBGL}:null},Object.defineProperty(e,"__esModule",{value:!0})}));
