/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context"],(function(r,e){"use strict";function n(r,n){if(n.disjointTimerQuery)return null;if(e(r))return{drawBuffers:r.drawBuffers.bind(r),MAX_DRAW_BUFFERS:r.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:r.MAX_COLOR_ATTACHMENTS};if(n.drawBuffers)return null;const A=r.getExtension("WEBGL_draw_buffers");return A?{drawBuffers:A.drawBuffersWEBGL.bind(A),MAX_DRAW_BUFFERS:A.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:A.MAX_COLOR_ATTACHMENTS_WEBGL}:null}r.load=n,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
