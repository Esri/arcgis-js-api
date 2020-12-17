/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../support/validationUtilsAjv","../../chunks/ajv.bundle","../../portal/schemas/webScene"],(function(n,e,t,o){"use strict";const s=new t.Ajv({allErrors:!0,extendRefs:!0});function i(n){return n?`${n}_schema.json`:"webScene_schema.json"}s.addSchema(o.json,i()),n.validate=function(n,t){return function(n){const e=i(n);if(!s.getSchema(e)){const t=function(n){const e=o.json.definitions[i(n)];if(!e)throw new Error(`invalid schema name to validate against '${n}'`);const t={};for(const n in e)t[n]=e[n];return t.definitions=o.json.definitions,t}(n);s.addSchema(t,e)}}(t),s.validate(i(t),n)?[]:e.convertAjvErrors(s.errors)},Object.defineProperty(n,"__esModule",{value:!0})}));
