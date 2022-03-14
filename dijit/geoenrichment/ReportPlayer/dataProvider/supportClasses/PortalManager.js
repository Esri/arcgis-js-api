// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/on","esri/dijit/geoenrichment/when","esri/arcgis/Portal","../../../utils/CacheUtil"],(function(e,r,o,n,t){return{getSignedInPortal:function(a){var i=t.get("PortalManager.portal");if(!i[a]){var s=new e;i[a]=s.promise;var l=new n.Portal(a);r(l,"load",(function(){l.user?s.resolve({user:new n.PortalUser({portal:l,credential:{userId:l.user.username,server:l.url,token:"",expires:9999999999999,creationTime:9999999999999,scope:"portal",resources:[l.portalUrl]}}),portal:l}):o(l.signIn()).then((function(e){s.resolve({user:e,portal:l})}))}))}return i[a]}}}));