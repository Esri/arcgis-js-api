/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../core/Error"],(function(e,r){"use strict";const o="webscene:failed-to-copy-embedded-resources",t="webscene:schema-validation";function n(){return new r(o,"Copying of embedded resources is currently not supported")}function a(e){return new r(t,"Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",{errors:e})}e.createCopyError=n,e.createSchemaValidationError=a,e.schemaValidationErrorName=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
