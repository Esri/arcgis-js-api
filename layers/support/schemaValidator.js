/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../support/validationUtilsAjv","../../chunks/ajv.bundle","../../portal/schemas/buildingSceneLayerItem","../../portal/schemas/integratedMeshLayerItem","../../portal/schemas/pointCloudLayerItem","../../portal/schemas/sceneLayerItem"],(function(e,t,n,r,a,s,o,c){"use strict";const i=new r.Ajv({allErrors:!0,extendRefs:!0});e.validate=function(e,r){return i.validate(e,function(e){switch(e){case"building-scene":return a.json;case"integrated-mesh":return s.json;case"point-cloud":return o.json;case"scene":return c.json;default:throw new t("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}(r))?[]:n.convertAjvErrors(i.errors)},Object.defineProperty(e,"__esModule",{value:!0})}));
