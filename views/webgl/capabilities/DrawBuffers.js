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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./isWebGL2Context"],(function(e,r,_){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.load=void 0,r.load=function(e,r){if(r.disjointTimerQuery)return null;if(_.default(e))return{drawBuffers:e.drawBuffers.bind(e),MAX_DRAW_BUFFERS:e.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:e.MAX_COLOR_ATTACHMENTS};if(r.drawBuffers)return null;var u=e.getExtension("WEBGL_draw_buffers");return u?{drawBuffers:u.drawBuffersWEBGL.bind(u),MAX_DRAW_BUFFERS:u.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:u.MAX_COLOR_ATTACHMENTS_WEBGL}:null}}));