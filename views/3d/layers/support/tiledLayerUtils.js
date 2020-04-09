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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../core/Logger","../../../../core/promiseUtils","../../../../layers/support/arcgisLayerUrl"],(function(e,r,o,i,s,t){Object.defineProperty(r,"__esModule",{value:!0});var n=i.getLogger("esri.views.3d.layers.support.tiledLayerUtils");r.checkArcGISServiceVersionCompatibility=function(e){if(!t.isHostedAgolService(e.url)){if(e.version<10.22){var r=new o("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+e.version,{minVersion:10.22,detectedVersion:e.version});return s.reject(r)}return 10.22!==e.version||t.isHostedSecuredProxyService(e.url,e.get("portalItem.id"))||n.warnOnce("ArcGIS server version 10.2.2 needs the following patch installed in order for map layers to work properly: https://support.esri.com/en/download/2146"),s.resolve()}}}));