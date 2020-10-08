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

define(["require","exports","../core/Error"],(function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isSchemaValidationError=r.createSchemaValidationError=r.isCopyError=r.createCopyError=void 0;var i="webscene:failed-to-copy-embedded-resources";r.createCopyError=function(){return new o(i,"Copying of embedded resources is currently not supported")},r.isCopyError=function(e){return e&&e.name===i},r.createSchemaValidationError=function(e){return new o("webscene:schema-validation","Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:e})},r.isSchemaValidationError=function(e){return e&&"webscene:schema-validation"===e.name}}));