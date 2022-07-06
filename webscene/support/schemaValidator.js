/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{A as n}from"../../chunks/ajv.bundle.js";import{json as e}from"../../portal/schemas/webScene.js";import{convertAjvErrors as o}from"../../support/validationUtilsAjv.js";const t=new n({allErrors:!0,extendRefs:!0});function i(n,e){return r(e),t.validate(a(e),n)?[]:o(t.errors)}function s(n){const o=e.definitions[a(n)];if(!o)throw new Error(`invalid schema name to validate against '${n}'`);const t={};for(const e in o)t[e]=o[e];return t.definitions=e.definitions,t}function r(n){const e=a(n);if(!t.getSchema(e)){const o=s(n);t.addSchema(o,e)}}function a(n){return n?`${n}_schema.json`:"webScene_schema.json"}t.addSchema(e,a());export{i as validate};
