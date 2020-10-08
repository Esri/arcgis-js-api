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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/on","esri/dijit/geoenrichment/when","esri/arcgis/Portal","../../../utils/requests/UniversalClient","../commands/mapToImage/MapToURLUtil","../../../utils/CacheUtil","../../../utils/ProjectionUtil"],(function(r,e,t,o,n,i,s,l){return{getPortalInfo:function(n){var i=s.get("PortalManager");if(!i[n]){var l=new o.Portal(n),a=new r;return e(l,"load",(function(){if(l.user)return i[n]={user:new o.PortalUser({portal:l,credential:{userId:l.user.username,server:l.url,token:"",expires:9999999999999,creationTime:9999999999999,scope:"portal",resources:[l.portalUrl]}}),portal:l},a.resolve(i[n]);i[n]=t(l.signIn(),(function(r){return a.resolve({user:r,portal:l}),{user:r,portal:l}}))})),a.promise}return i[n]},tryConfigureServicesFromAGOLPublic:function(){return n.requestPublicFirst("https://www.arcgis.com/sharing/rest/portals/self",{},{retryOnAnyError:!1}).then((function(r){var e=r&&r.helperServices;e&&(e.geometry&&l.setGeometryServiceUrl(e.geometry.url),e.printTask&&i.setPrintMapTaskUrl(e.printTask.url))})).otherwise((function(r){console.log(r)}))}}}));