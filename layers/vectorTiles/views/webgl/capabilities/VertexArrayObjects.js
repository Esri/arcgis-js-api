// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","./isWebGL2Context"],(function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.load=function(e,r){if(t.default(e))return{createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),bindVertexArray:e.bindVertexArray.bind(e)};if(r.vao)return null;var n=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}}));