/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../core/Error.js";import{A as r}from"../../chunks/ajv.bundle.js";import{json as t}from"../../portal/schemas/buildingSceneLayerItem.js";import{json as o}from"../../portal/schemas/integratedMeshLayerItem.js";import{json as s}from"../../portal/schemas/pointCloudLayerItem.js";import{json as a}from"../../portal/schemas/sceneLayerItem.js";import{convertAjvErrors as n}from"../../support/validationUtilsAjv.js";const i=new r({allErrors:!0,extendRefs:!0});function m(e,r){return i.validate(c(r),e),n(i.errors||[])}function c(r){switch(r){case"building-scene":return t;case"integrated-mesh":return o;case"point-cloud":return s;case"scene":return a;default:throw new e("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}export{m as validate};
