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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["./kernel","dojo/_base/declare","dojo/has"],(function(e,t,s){var r=t(null,{declaredClass:"esri.OAuthCredential",oAuthInfo:null,storage:null,appId:null,codeVerifier:null,expires:null,refreshToken:null,ssl:null,stateUID:null,token:null,userId:null,constructor:function(e,t){this.oAuthInfo=e,this.storage=t,this._init()},isValid:function(){var e=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)e=!0;else{var t=Date.now();if(this.expires>t)(this.expires-t)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(e=!0)}return e},save:function(){if(!this.storage)return!1;var e=this._load(),t=this.oAuthInfo;if(t&&t.authNamespace&&t.portalUrl){var s=e[t.authNamespace];s||(s=e[t.authNamespace]={}),this.appId||(this.appId=t.appId),s[t.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(e))}catch(e){return console.warn(e),!1}return!0}return!1},destroy:function(){var e=this._load(),t=this.oAuthInfo;if(t&&t.appId&&t.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){var s=t.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",r=new FormData;if(r.append("f","json"),r.append("auth_token",this.refreshToken||this.token),r.append("client_id",t.appId),r.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(s,r);else{var i=new XMLHttpRequest;i.open("POST",s),i.send(r)}}if(t&&t.authNamespace&&t.portalUrl&&this.storage){var n=e[t.authNamespace];if(n){delete n[t.portalUrl];try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(e))}catch(e){console.log(e)}}}t&&(t._oAuthCred=null,this.oAuthInfo=null)},_init:function(){var e=this._load(),t=this.oAuthInfo;if(t&&t.authNamespace&&t.portalUrl){var s=e[t.authNamespace];s&&(s=s[t.portalUrl])&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId)}},_load:function(){var e={};if(this.storage){var t=this.storage.getItem("esriJSAPIOAuth");if(t)try{e=JSON.parse(t)}catch(e){console.warn(e)}}return e}});return s("extend-esri")&&(e.OAuthCredential=r),r}));