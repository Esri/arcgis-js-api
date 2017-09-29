// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function r(e){var t=e.extensions.disjointTimerQuery;if(!t)return null;var r=new i;return r.start(e),r}Object.defineProperty(t,"__esModule",{value:!0}),t.startMeasurement=r;var i=function(){function e(){}return e.prototype.start=function(e){this._rctx=e;var t=e.extensions.disjointTimerQuery;this._query=t.createQueryEXT(),t.beginQueryEXT(t.TIME_ELAPSED_EXT,this._query)},e.prototype.stop=function(e,t){void 0===t&&(t=50),this._cb=e,this._checkInterval=t;var r=this._rctx.extensions.disjointTimerQuery;r.endQueryEXT(r.TIME_ELAPSED_EXT),this._checkQueryResult()},e.prototype._checkQueryResult=function(){var e=this._rctx.extensions.disjointTimerQuery,t=e.getQueryObjectEXT(this._query,e.QUERY_RESULT_AVAILABLE_EXT),r=this._rctx.gl.getParameter(e.GPU_DISJOINT_EXT);if(t&&!r){var i=e.getQueryObjectEXT(this._query,e.QUERY_RESULT_EXT);return void this._cb(i/1e6)}return r?void this._cb(null):void setTimeout(this._checkQueryResult.bind(this),this._checkInterval)},e}()});