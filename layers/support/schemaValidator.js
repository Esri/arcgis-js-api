// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/Error","../../libs/ajv/ajv.bundle","../../portal/schemas/buildingSceneLayerItem","../../portal/schemas/integratedMeshLayerItem","../../portal/schemas/pointCloudLayerItem","../../portal/schemas/sceneLayerItem","../../support/validationUtilsAjv"],(function(e,r,t,n,a,s,o,i,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.validate=void 0;var c=new n({allErrors:!0,extendRefs:!0});r.validate=function(e,r){return c.validate(e,function(e){switch(e){case"building-scene":return a.json;case"integrated-mesh":return s.json;case"point-cloud":return o.json;case"scene":return i.json;default:throw new t("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}(r))?[]:l.convertAjvErrors(c.errors)}}));