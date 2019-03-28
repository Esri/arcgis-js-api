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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","esri/arcgis/OAuthInfo","esri/IdentityManager","esri/kernel"],function(e,r,n,t,i){return{signIn:function(o){var a=new e;o.forceFreshStart&&i.id.destroyCredentials();var s=function(){var e=i.id.credentials[0];r(o.callback&&o.callback(e),function(){a.resolve(e)})},c=new n({portalUrl:o.portalUrl,appId:o.appId,popup:!!o.popup});return t.registerOAuthInfos([c]),t.checkSignInStatus(c.portalUrl).then(s).otherwise(function(){t.getCredential(c.portalUrl,{oAuthPopupConfirmation:!1}).then(s)}),a.promise},registerToken:function(){}}});