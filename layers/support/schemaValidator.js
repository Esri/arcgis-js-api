/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../support/validationUtilsAjv","../../chunks/ajv.bundle","../../portal/schemas/buildingSceneLayerItem","../../portal/schemas/integratedMeshLayerItem","../../portal/schemas/pointCloudLayerItem","../../portal/schemas/sceneLayerItem"],(function(e,t,n,r,a,s,o,c){"use strict";const i=new r.Ajv({allErrors:!0,extendRefs:!0});function l(e,t){return i.validate(e,u(t))?[]:n.convertAjvErrors(i.errors)}function u(e){switch(e){case"building-scene":return a.json;case"integrated-mesh":return s.json;case"point-cloud":return o.json;case"scene":return c.json;default:throw new t("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}e.validate=l,Object.defineProperty(e,"__esModule",{value:!0})}));
