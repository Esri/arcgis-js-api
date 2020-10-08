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

define(["require","exports","tslib","../../../core/promiseUtils","../../../tasks/operations/pbfDehydratedFeatureSet","../../../tasks/operations/pbfQueryUtils"],(function(e,t,r,n,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var t=i.parsePBFFeatureQuery(e.buffer,new s.DehydratedFeatureSetParserContext(e.options)),a=r.__assign(r.__assign({},t),{spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((function(e){return e.toJSON()})):void 0});return n.resolve(a)},e}();t.default=function(){return new a}}));