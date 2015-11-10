define(["./kernel","dojo/_base/declare","dojo/has","dojo/json"],function(t,e,s,i){var r="esriJSAPIOAuth",o=e(null,{declaredClass:"esri.OAuthCredential",oAuthInfo:null,storage:null,expires:null,ssl:null,token:null,userId:null,constructor:function(t,e){this.oAuthInfo=t,this.storage=e,this._init()},isValid:function(){var t=!1;if(this.oAuthInfo&&this.token&&this.userId){var e=(new Date).getTime();if(this.expires>e){var s=(this.expires-e)/1e3;s>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t},save:function(){if(this.storage){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){var s=t[e.authNamespace];s||(s=t[e.authNamespace]={}),s[e.portalUrl]={expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem(r,i.stringify(t))}catch(o){console.log(o)}}}},destroy:function(){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl&&this.storage){var s=t[e.authNamespace];if(s){delete s[e.portalUrl];try{this.storage.setItem(r,i.stringify(t))}catch(o){console.log(o)}}}e&&(e._oAuthCred=null,this.oAuthInfo=null)},_init:function(){var t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){var s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.expires=s.expires,this.ssl=s.ssl,this.token=s.token,this.userId=s.userId))}},_load:function(){var t={};if(this.storage){var e=this.storage.getItem(r);if(e)try{t=i.parse(e)}catch(s){console.log(s)}}return t}});return s("extend-esri")&&(t.OAuthCredential=o),o});