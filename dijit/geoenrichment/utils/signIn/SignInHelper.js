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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","esri/arcgis/OAuthInfo","esri/IdentityManager","esri/kernel"],function(e,r,n,t,o){return{signIn:function(i){var a=new e;i.forceFreshStart&&o.id.destroyCredentials();var l=function(){var e=o.id.credentials[0];r(i.callback&&i.callback(e),function(){a.resolve(e)})},p=new n({portalUrl:i.portalUrl,appId:i.appId,popup:!!i.popup});return t.registerOAuthInfos([p]),t.checkSignInStatus(p.portalUrl).then(l).otherwise(function(){t.getCredential(p.portalUrl,{oAuthPopupConfirmation:!1}).then(l)}),a.promise}}});