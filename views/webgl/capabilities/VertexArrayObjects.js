/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./isWebGL2Context.js";function r(r,t){if(e(r))return{createVertexArray:r.createVertexArray.bind(r),deleteVertexArray:r.deleteVertexArray.bind(r),bindVertexArray:r.bindVertexArray.bind(r)};if(t.vao)return null;const n=r.getExtension("OES_vertex_array_object")||r.getExtension("MOZ_OES_vertex_array_object")||r.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}export{r as load};
