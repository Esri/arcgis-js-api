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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/on","esri/dijit/geoenrichment/when","esri/arcgis/Portal","../../../utils/CacheUtil"],(function(r,e,n,o,t){return{getSignedInPortal:function(a){var i=t.get("PortalManager.portal");if(!i[a]){var s=new o.Portal(a),l=new r;return e(s,"load",(function(){if(s.user)return i[a]={user:new o.PortalUser({portal:s,credential:{userId:s.user.username,server:s.url,token:"",expires:9999999999999,creationTime:9999999999999,scope:"portal",resources:[s.portalUrl]}}),portal:s},l.resolve(i[a]);i[a]=n(s.signIn(),(function(r){return l.resolve({user:r,portal:s}),{user:r,portal:s}}))})),l.promise}return i[a]}}}));