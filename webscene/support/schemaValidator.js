/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../chunks/ajv.bundle","../../portal/schemas/webScene","../../support/validationUtilsAjv"],(function(e,n,t,o){"use strict";const s=new n.Ajv({allErrors:!0,extendRefs:!0});function i(e,n){return a(n),s.validate(c(n),e)?[]:o.convertAjvErrors(s.errors)}function r(e){const n=t.json.definitions[c(e)];if(!n)throw new Error(`invalid schema name to validate against '${e}'`);const o={};for(const t in n)o[t]=n[t];return o.definitions=t.json.definitions,o}function a(e){const n=c(e);if(!s.getSchema(n)){const t=r(e);s.addSchema(t,n)}}function c(e){return e?`${e}_schema.json`:"webScene_schema.json"}s.addSchema(t.json,c()),e.validate=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
