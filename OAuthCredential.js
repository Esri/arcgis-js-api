// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./kernel","dojo/_base/declare","dojo/has","dojo/json"],function(t,e,s,i){var r="esriJSAPIOAuth",o=e(null,{declaredClass:"esri.OAuthCredential",oAuthInfo:null,storage:null,expires:null,ssl:null,token:null,userId:null,constructor:function(t,e){this.oAuthInfo=t,this.storage=e,this._init()},isValid:function(){var t=!1;if(this.oAuthInfo&&this.token&&this.userId){var e=(new Date).getTime();if(this.expires>e){var s=(this.expires-e)/1e3;s>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t},save:function(){if(this.storage){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){var s=t[e.authNamespace];s||(s=t[e.authNamespace]={}),s[e.portalUrl]={expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem(r,i.stringify(t))}catch(o){console.log(o)}}}},destroy:function(){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl&&this.storage){var s=t[e.authNamespace];if(s){delete s[e.portalUrl];try{this.storage.setItem(r,i.stringify(t))}catch(o){console.log(o)}}}e&&(e._oAuthCred=null,this.oAuthInfo=null)},_init:function(){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){var s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.expires=s.expires,this.ssl=s.ssl,this.token=s.token,this.userId=s.userId))}},_load:function(){var t={};if(this.storage){var e=this.storage.getItem(r);if(e)try{t=i.parse(e)}catch(s){console.log(s)}}return t}});return s("extend-esri")&&(t.OAuthCredential=o),o});