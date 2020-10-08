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

define(["require","exports","../../libs/ajv/ajv.bundle","../../portal/schemas/webScene","../../support/validationUtilsAjv"],(function(e,n,r,a,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.validate=void 0;var t=new r({allErrors:!0,extendRefs:!0});function o(e){return e?e+"_schema.json":"webScene_schema.json"}t.addSchema(a.json,o()),n.validate=function(e,n){return function(e){var n=o(e);if(!t.getSchema(n)){var r=function(e){var n=a.json.definitions[o(e)];if(!n)throw new Error("invalid schema name to validate against '"+e+"'");var r={};for(var i in n)r[i]=n[i];return r.definitions=a.json.definitions,r}(e);t.addSchema(r,n)}}(n),t.validate(o(n),e)?[]:i.convertAjvErrors(t.errors)}}));