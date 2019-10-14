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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/arcgis/OAuthInfo","esri/IdentityManager","esri/kernel","esri/dijit/geoenrichment/utils/UrlUtil"],function(e,r,i,n,t,a){return{signIn:function(o){var s=new e,l=a.getPortalUrl(o.portalUrl);o.forceFreshStart&&t.id.destroyCredentials();var c=function(){var e=t.id.findCredential(l+"/sharing")||t.id.credentials[0];r(o.callback&&o.callback(e),function(){s.resolve(e)})},d=new i({portalUrl:l,appId:o.appId,popup:!!o.popup});return n.registerOAuthInfos([d]),n.checkSignInStatus(l+"/sharing").then(c).otherwise(function(){n.getCredential(l+"/sharing",{oAuthPopupConfirmation:!1}).then(c)}),s.promise}}});