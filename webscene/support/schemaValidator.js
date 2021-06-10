/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../support/validationUtilsAjv","../../chunks/ajv.bundle","../../portal/schemas/webScene"],(function(n,e,t,o){"use strict";const s=new t.Ajv({allErrors:!0,extendRefs:!0});function i(n,t){return a(t),s.validate(c(t),n)?[]:e.convertAjvErrors(s.errors)}function r(n){const e=o.json.definitions[c(n)];if(!e)throw new Error(`invalid schema name to validate against '${n}'`);const t={};for(const o in e)t[o]=e[o];return t.definitions=o.json.definitions,t}function a(n){const e=c(n);if(!s.getSchema(e)){const t=r(n);s.addSchema(t,e)}}function c(n){return n?`${n}_schema.json`:"webScene_schema.json"}s.addSchema(o.json,c()),n.validate=i,Object.defineProperty(n,"__esModule",{value:!0})}));
