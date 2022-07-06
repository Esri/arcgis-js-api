/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../core/Error.js";const r="webscene:failed-to-copy-embedded-resources",o="webscene:schema-validation";function n(){return new e(r,"Copying of embedded resources is currently not supported")}function t(e){return e&&e.name===r}function s(r){return new e(o,"Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:r})}function i(e){return e&&e.name===o}export{n as createCopyError,s as createSchemaValidationError,t as isCopyError,i as isSchemaValidationError};
