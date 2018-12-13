// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports"],function(t,e){var s=function(){function t(t,e){this.oAuthInfo=null,this.storage=null,this.expires=null,this.ssl=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init()}return t.prototype.isValid=function(){var t=!1;if(this.oAuthInfo&&this.token&&this.userId){var e=(new Date).getTime();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t},t.prototype.save=function(){if(this.storage){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){var s=t[e.authNamespace];s||(s=t[e.authNamespace]={}),s[e.portalUrl]={expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(t))}catch(t){console.log(t)}}}},t.prototype.destroy=function(){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl&&this.storage){var s=t[e.authNamespace];if(s){delete s[e.portalUrl];try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(t))}catch(t){console.log(t)}}}e&&(e._oAuthCred=null,this.oAuthInfo=null)},t.prototype._init=function(){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){var s=t[e.authNamespace];s&&(s=s[e.portalUrl])&&(this.expires=s.expires,this.ssl=s.ssl,this.token=s.token,this.userId=s.userId)}},t.prototype._load=function(){var t={};if(this.storage){var e=this.storage.getItem("esriJSAPIOAuth");if(e)try{t=JSON.parse(e)}catch(t){console.log(t)}}return t},t}();return s.prototype.declaredClass="esri.identity.OAuthCredential",s});