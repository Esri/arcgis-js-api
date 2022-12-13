/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../chunks/ajv.bundle","../../portal/schemas/buildingSceneLayerItem","../../portal/schemas/integratedMeshLayerItem","../../portal/schemas/pointCloudLayerItem","../../portal/schemas/sceneLayerItem","../../support/validationUtilsAjv"],(function(e,t,n,r,a,o,s,i){"use strict";const l=new n.Ajv({allErrors:!0,extendRefs:!0});function c(e,t){return l.validate(u(t),e),i.convertAjvErrors(l.errors||[])}function u(e){switch(e){case"building-scene":return r.json;case"integrated-mesh":return a.json;case"point-cloud":return o.json;case"scene":return s.json;default:throw new t("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}e.validate=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
