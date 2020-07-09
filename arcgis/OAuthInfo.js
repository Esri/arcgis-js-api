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

define(["../kernel","../lang","dojo/_base/declare","dojo/_base/lang","dojo/has"],(function(e,i,t,o,a){var r=t(null,{declaredClass:"esri.arcgis.OAuthInfo",constructor:function(e){o.mixin(this,{expiration:20160,minTimeUntilExpiration:30,portalUrl:"https://www.arcgis.com",authNamespace:"/",forceLogin:!1,popup:!1,popupCallbackUrl:"oauth-callback.html",popupWindowFeatures:"height=490,width=800,resizable,scrollbars,status",preserveUrlHash:!1},e)},_oAuthCred:null,toJson:function(){return i.fixJson({appId:this.appId,expiration:this.expiration,locale:this.locale,minTimeUntilExpiration:this.minTimeUntilExpiration,portalUrl:this.portalUrl,authNamespace:this.authNamespace,forceLogin:this.forceLogin,popup:this.popup,popupCallbackUrl:this.popupCallbackUrl,popupWindowFeatures:this.popupWindowFeatures,preserveUrlHash:this.preserveUrlHash})},clone:function(){return new r(this.toJson())}});return a("extend-esri")&&o.setObject("arcgis.OAuthInfo",r,e),r}));