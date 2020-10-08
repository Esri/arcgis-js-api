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

define(["require","exports","../../core/lang"],(function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.clone=r.SimpleGeometryCursor=void 0;var o=function(){function e(e){this._geometry=e}return e.prototype.next=function(){var e=this._geometry;return this._geometry=null,e},e}();r.SimpleGeometryCursor=o,r.clone=function(e){return t.clone(e)}}));