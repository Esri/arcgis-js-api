/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../chunks/ajv.bundle","../../portal/schemas/buildingSceneLayerItem","../../portal/schemas/integratedMeshLayerItem","../../portal/schemas/pointCloudLayerItem","../../portal/schemas/sceneLayerItem","../../support/validationUtilsAjv"],(function(e,t,n,r,a,s,o,c){"use strict";const i=new n.Ajv({allErrors:!0,extendRefs:!0});function l(e,t){return i.validate(u(t),e),c.convertAjvErrors(i.errors||[])}function u(e){switch(e){case"building-scene":return r.json;case"integrated-mesh":return a.json;case"point-cloud":return s.json;case"scene":return o.json;default:throw new t("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}e.validate=l,Object.defineProperty(e,"__esModule",{value:!0})}));
