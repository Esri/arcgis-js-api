/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context"],(function(e,r){"use strict";function t(e,t){if(r(e))return{createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),bindVertexArray:e.bindVertexArray.bind(e)};if(t.vao)return null;const n=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}e.load=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
