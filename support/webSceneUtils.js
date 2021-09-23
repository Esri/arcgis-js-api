/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../core/Error"],(function(e,r){"use strict";const o="webscene:failed-to-copy-embedded-resources",n="webscene:schema-validation";function t(){return new r(o,"Copying of embedded resources is currently not supported")}function i(e){return e&&e.name===o}function a(e){return new r(n,"Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:e})}function s(e){return e&&e.name===n}e.createCopyError=t,e.createSchemaValidationError=a,e.isCopyError=i,e.isSchemaValidationError=s,Object.defineProperty(e,"__esModule",{value:!0})}));
