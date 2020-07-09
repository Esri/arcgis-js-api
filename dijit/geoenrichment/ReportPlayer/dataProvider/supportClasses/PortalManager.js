// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/arcgis/Portal","../../../utils/requests/UniversalClient","../commands/mapToImage/MapToURLUtil","../../../utils/ProjectionUtil"],(function(r,e,t,n,i){var o={_cache:{},getPortalInfo:function(t){if(!o._cache[t]){var n=new e.Portal(t);o._cache[t]=r(n.signIn(),(function(r){return{user:r,portal:n}}))}return o._cache[t]},tryConfigureServicesFromAGOLPublic:function(){return t.requestPublicFirst("https://www.arcgis.com/sharing/rest/portals/self",{},{retryOnAnyError:!1}).then((function(r){var e=r&&r.helperServices;e&&(e.geometry&&i.setGeometryServiceUrl(e.geometry.url),e.printTask&&n.setPrintMapTaskUrl(e.printTask.url))})).otherwise((function(r){console.log(r)}))}};return o}));