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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DrawCompleteEvent=t.CursorUpdateEvent=t.VertexRemoveEvent=t.VertexUpdateEvent=t.VertexAddEvent=void 0;var n=function(){function e(e,t,n,i){this.view=e,this.native=t,this.vertexIndex=n,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-add"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}();t.VertexAddEvent=n;var i=function(){function e(e,t,n,i){this.view=e,this.native=t,this.vertexIndex=n,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-update"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}();t.VertexUpdateEvent=i;var r=function(){function e(e,t,n,i){this.view=e,this.native=t,this.vertexIndex=n,this.vertices=i,this.defaultPrevented=!1,this.type="vertex-remove"}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}();t.VertexRemoveEvent=r;var v=function(){function e(e,t,n,i,r){void 0===r&&(r=null),this.view=e,this.native=t,this.vertexIndex=n,this.vertices=i,this.mapPoint=r,this.coordinates=null,this.defaultPrevented=!1,this.type="cursor-update",this.coordinates=1===i.length?i[0]:null}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}();t.CursorUpdateEvent=v;var s=function(){function e(e,t){this.native=e,this.vertices=t,this.coordinates=null,this.defaultPrevented=!1,this.type="draw-complete",this.coordinates=1===t.length?t[0]:null}return e.prototype.preventDefault=function(){this.defaultPrevented=!0},e}();t.DrawCompleteEvent=s}));