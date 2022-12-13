// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["./Credential","./domUtils","./lang","./urlUtils","dijit/Dialog","dijit/registry","dojo/_base/config","dojo/_base/Deferred","dojo/_base/kernel","dojo/dom-attr","dojo/i18n!./nls/jsapi","dojo/io-query","./core/events","dijit/form/Button","dojo/query"],(function(e,r,t,o,n,i,s,a,u,d,l,c,h){var p=null,_=null;try{p=window.localStorage,_=window.sessionStorage}catch(e){}var g=window.crypto||window.msCrypto;return{_oAuthDfd:null,_oAuthIntervalId:0,_oAuthDialogContent:"<div class='dijitDialogPaneContentArea'><div style='padding-bottom: 5px; word-wrap: break-word;'>${oAuthInfo}</div><div style='margin: 0px; padding: 0px; height: 10px;'></div><div class='esriErrorMsg' style='display: none; color: white; background-color: #D46464; text-align: center; padding-top: 3px; padding-bottom: 3px;'>${invalidUser}</div><div style='margin: 0px; padding: 0px; height: 10px;'></div><div class='dijitDialogPaneActionBar'><button data-dojo-type='dijit.form.Button' data-dojo-props='type:\"button\", \"class\":\"esriIdSubmit\"'>${lblOk}</button><button data-dojo-type='dijit.form.Button' data-dojo-props='type:\"button\", \"class\":\"esriIdCancel\"'>${lblCancel}</button></div>",setOAuthRedirectionHandler:function(e){this._oAuthRedirectFunc=e},oAuthSignIn:function(e,t,n,i){var s,u=this._oAuthDfd=new a;u.resUrl_=e,u.sinfo_=t,u.oinfo_=n;var c=n._oAuthCred;if(c.storage&&("authorization-code"===n.flowType||"auto"===n.flowType&&!n.popup&&t.currentVersion>=8.4)){var h=g.getRandomValues(new Uint8Array(32));s=o.base64UrlEncode(h),c.codeVerifier=s,h=g.getRandomValues(new Uint8Array(32)),c.stateUID=o.base64UrlEncode(h),c.save()||(c.codeVerifier=s=null)}else c.codeVerifier=null;var p=this;return this._getCodeChallenge(s).then((function(o){var s=!i||!1!==i.oAuthPopupConfirmation;if(!n.popup||!s)return p._doOAuthSignIn(e,t,n,o),u;u.codeChallenge_=o,p._nls||(p._nls=l.identity),p.oAuthDialog||(p.oAuthDialog=p._createOAuthDialog());var a=p.oAuthDialog,c=i&&i.error,h=i&&i.token;r.hide(a.errMsg_),c&&403==c.code&&h&&(d.set(a.errMsg_,"innerHTML",p._nls.forbidden),r.show(a.errMsg_)),d.set(a.serverLink_,{title:t.server,innerHTML:-1!==t.server.toLowerCase().indexOf("arcgis.com")?"ArcGIS Online":t.server}),a.show()})),u},setOAuthResponseHash:function(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(c.queryToObject(e)))},_createOAuthDialog:function(){var e=this._nls,o=t.substitute(e,this._oAuthDialogContent);o=t.substitute({server:"<span class='serverLink' style='word-wrap: break-word;'></span>"},o);var a=new n({title:e.title,content:o,class:"esriOAuthSignInDialog",style:"min-width: 18em;",esriIdMgr_:this,execute_:function(){var e=a.esriIdMgr_._oAuthDfd;a.hide_(),a.esriIdMgr_._doOAuthSignIn(e.resUrl_,e.sinfo_,e.oinfo_,e.codeChallenge_)},cancel_:function(){var e=a.esriIdMgr_._oAuthDfd;a.esriIdMgr_._oAuthDfd=null,a.hide_();var r=new Error("ABORTED");r.code="IdentityManager.2",r.log=!!s.isDebug,e.errback(r)},hide_:function(){r.hide(a.errMsg_),a.hide(),n._DialogLevelManager.hide(a)}}),d=a.domNode;return a.btnSubmit_=i.byNode(u.query(".esriIdSubmit",d)[0]),a.btnCancel_=i.byNode(u.query(".esriIdCancel",d)[0]),a.serverLink_=u.query(".serverLink",d)[0],a.errMsg_=u.query(".esriErrorMsg",d)[0],a.connect(a.btnSubmit_,"onClick",a.execute_),a.connect(a.btnCancel_,"onClick",a.onCancel),a.connect(a,"onCancel",a.cancel_),a},_doOAuthSignIn:function(e,r,t,o){var n=this,i=t._oAuthCred,a={portalUrl:t.portalUrl};!t.popup&&t.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),i.stateUID&&(a.uid=i.stateUID);var u={client_id:t.appId,response_type:i.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:t.expiration,locale:t.locale,redirect_uri:this._getRedirectURI(t,!!i.codeVerifier)};t.forceLogin&&(u.force_login=!0),t.forceUserId&&t.userId&&(u.prepopulatedusername=t.userId),!t.popup&&this._doPortalSignIn(e)&&(u.redirectToUserOrgUrl=!0),i.codeVerifier&&(u.code_challenge=o||i.codeVerifier,u.code_challenge_method=o?"S256":"plain");var d=t.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",l=d+"?"+c.objectToQuery(u);if(t.popup){var p=window.open(l,"esriJSAPIOAuth",t.popupWindowFeatures);if(p)p.focus(),this._oAuthDfd.oAuthWin_=p,this._oAuthIntervalId=setInterval((function(){if(p.closed){clearInterval(n._oAuthIntervalId),n._oAuthOnPopupHandle.remove();var e=n._oAuthDfd;if(e){var r=new Error("ABORTED");r.code="IdentityManager.2",r.log=!!s.isDebug,e.errback(r)}}}),500),n._oAuthOnPopupHandle=h.on(window,["arcgis:auth:hash","arcgis:auth:location:search"],(function(e){"arcgis:auth:hash"===e.type?n.setOAuthResponseHash(e.detail):n._setOAuthResponseQueryString(e.detail)}));else{var _=new Error("ABORTED");_.name="identity-manager:user-aborted",_.code="IdentityManager.2",_.log=!!s.isDebug,this._oAuthDfd.errback(_)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:u,authorizeUrl:d,resourceUrl:e,serverInfo:r,oAuthInfo:t}):window.location.href=l},_getCodeChallenge:function(e){if(e&&window.isSecureContext){var r=(new TextEncoder).encode(e);return g.subtle.digest("SHA-256",r).then((function(e){return o.base64UrlEncode(new Uint8Array(e))}))}var t=new a;return t.resolve(null),t},_getRedirectURI:function(e,r){var t=window.location.href.replace(/#.*$/,"");if(e.popup)return o.getAbsoluteUrl(e.popupCallbackUrl);if(r){var n=o.urlToObject(t);if(n.query){["code","error","error_description","message_code","persist","state"].forEach((function(e){delete n.query[e]}));var i=c.objectToQuery(n.query);return i?n.path+"?"+i:n.path}}return t},_processOAuthPopupParams:function(e){var r=this._oAuthDfd;if(this._oAuthDfd=null,r)if(clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle&&this._oAuthOnPopupHandle.remove(),e.error){var t="access_denied"===e.error,o=new Error(t?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);o.name=t?"identity-manager:user-aborted":"identity-manager:authentication-failed",o.code="IdentityManagerBase."+(t?2:3),o.log=!!s.isDebug,r.errback(o)}else this._processOAuthResponseParams(e,r.oinfo_,r.sinfo_).then((function(e){r.resolve(e)})).catch((function(e){r.reject(e)}))},_processOAuthResponseParams:function(r,t,o){var n=t._oAuthCred;if(r.code){var i=n.codeVerifier;return n.codeVerifier=null,n.stateUID=null,n.save(),this._getOAuthToken(o.server,r.code,t.appId,this._getRedirectURI(t,!0),i).then((function(i){var s=new e({userId:i.username,server:o.server,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:r.state,_oAuthCred:n});return t.userId=s.userId,n.storage=i.persist?p:_,n.refreshToken=i.refresh_token,n.token=null,n.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,n.userId=s.userId,n.ssl=s.ssl,n.save(),s}))}var s=new e({userId:r.username,server:o.server,token:r.access_token,expires:Date.now()+1e3*Number(r.expires_in),ssl:"true"===r.ssl,oAuthState:r.state,_oAuthCred:n});t.userId=s.userId,n.storage=r.persist?p:_,n.refreshToken=null,n.token=s.token,n.expires=s.expires,n.userId=s.userId,n.ssl=s.ssl,n.save();var u=new a;return u.resolve(s),u},_setOAuthResponseQueryString:function(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(c.queryToObject(e)))}}}));