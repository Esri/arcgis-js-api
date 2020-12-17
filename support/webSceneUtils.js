/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/Error"],(function(e,r){"use strict";const o="webscene:failed-to-copy-embedded-resources",n="webscene:schema-validation";e.createCopyError=function(){return new r(o,"Copying of embedded resources is currently not supported")},e.createSchemaValidationError=function(e){return new r(n,"Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:e})},e.isCopyError=function(e){return e&&e.name===o},e.isSchemaValidationError=function(e){return e&&e.name===n},Object.defineProperty(e,"__esModule",{value:!0})}));
