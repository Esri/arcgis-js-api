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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../libs/ajv/ajv.bundle","../support/validationUtilsAjv","./schema"],(function(e,n,r,a,i){Object.defineProperty(n,"__esModule",{value:!0});var o=new r({allErrors:!0,extendRefs:!0});function t(e){return e?e+"_schema.json":"webScene_schema.json"}o.addSchema(i.json,t()),n.validate=function(e,n){return function(e){var n=t(e);if(!o.getSchema(n)){var r=function(e){var n=i.json.definitions[t(e)];if(!n)throw new Error("invalid schema name to validate against '"+e+"'");var r={};for(var a in n)r[a]=n[a];return r.definitions=i.json.definitions,r}(e);o.addSchema(r,n)}}(n),o.validate(t(n),e)?[]:a.convertAjvErrors(o.errors)}}));