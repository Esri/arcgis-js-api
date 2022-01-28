/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/ajv.bundle","../../portal/schemas/webScene","../../support/validationUtilsAjv"],(function(n,e,t,o){"use strict";const s=new e.Ajv({allErrors:!0,extendRefs:!0});function i(n,e){return a(e),s.validate(c(e),n)?[]:o.convertAjvErrors(s.errors)}function r(n){const e=t.json.definitions[c(n)];if(!e)throw new Error(`invalid schema name to validate against '${n}'`);const o={};for(const t in e)o[t]=e[t];return o.definitions=t.json.definitions,o}function a(n){const e=c(n);if(!s.getSchema(e)){const t=r(n);s.addSchema(t,e)}}function c(n){return n?`${n}_schema.json`:"webScene_schema.json"}s.addSchema(t.json,c()),n.validate=i,Object.defineProperty(n,"__esModule",{value:!0})}));
