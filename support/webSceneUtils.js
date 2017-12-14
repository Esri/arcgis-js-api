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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/Error"],function(e,r,o){function n(){return new o(c,"Copying of embedded resources is currently not supported")}function t(e){return e&&e.name===c}function i(e){return new o(d,"Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:e})}function a(e){return e&&e.name===d}Object.defineProperty(r,"__esModule",{value:!0});var c="webscene:failed-to-copy-embedded-resources",d="webscene:schema-validation";r.createCopyError=n,r.isCopyError=t,r.createSchemaValidationError=i,r.isSchemaValidationError=a});