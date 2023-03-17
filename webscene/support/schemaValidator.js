/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/ajv.bundle","../../portal/schemas/webScene","../../support/validationUtilsAjv"],(function(n,e,t,o){"use strict";const i=new e.Ajv({allErrors:!0,extendRefs:!0});function s(n,e){return a(e),i.validate(c(e),n)?[]:o.convertAjvErrors(i.errors??[])}function r(n){const e=t.json.definitions[c(n)];if(!e)throw new Error(`invalid schema name to validate against '${n}'`);const o={};for(const t in e)o[t]=e[t];return o.definitions=t.json.definitions,o}function a(n){const e=c(n);if(!i.getSchema(e)){const t=r(n);i.addSchema(t,e)}}function c(n){return n?`${n}_schema.json`:"webScene_schema.json"}i.addSchema(t.json,c()),n.validate=s,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
