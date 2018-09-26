// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this._reference=null}return Object.defineProperty(e.prototype,"dirty",{get:function(){return this.reference&&this.reference.isDirty},set:function(e){this.reference&&(this.reference.isDirty=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this._reference.labelIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reference",{get:function(){return this._reference},set:function(e){this._reference=e},enumerable:!0,configurable:!0}),e}();r.default=t});