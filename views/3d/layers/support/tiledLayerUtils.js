// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/request/xhr","../../../../core/Error","../../../../core/promiseUtils","../../../../layers/support/arcgisLayerUrl"],function(e,r,i,o,s,t){function n(e){if(!t.isHostedAgolService(e.url)){if(e.version<10.22){var r=new o("layerview:service-version-too-old","Tiled Map Layers on servers prior to 10.2.2 are not supported. Detected version: "+e.version,{minVersion:10.22,detectedVersion:e.version});return s.reject(r)}if(10.22!==e.version||t.isHostedSecuredProxyService(e.url,e.get("portalItem.id")))return s.resolve();var n=c(e.url),l={headers:{"X-Requested-With":null},timeout:1e4,handleAs:"json"},u=new o("tiledlayerview3d:service-missing-cors-patch","Tiled Map Layers from 10.2.2 servers are only supported if all server updates have been applied.");return i(n+"self?f=json",l).then(function(e){if(!e||e.error)throw u}).catch(function(){throw u})}}function c(e){var r=null,i=e.search(/\/rest\/services\//i);return i>0&&(r=e.substring(0,i+6)),r}function l(e){if(e)throw e}Object.defineProperty(r,"__esModule",{value:!0}),r.checkArcGISServiceVersionCompatibility=n,r.throwIfError=l});