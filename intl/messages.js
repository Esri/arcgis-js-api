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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../assets","../core/Error","../core/maybe","../core/promiseUtils","../core/SetUtils","./locale","@dojo/framework/shim/Promise"],(function(e,t,n,r,s,i,a,o,u){Object.defineProperty(t,"__esModule",{value:!0});var c=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,l=o.SetFromValues(["ar","bs","ca","cs","da","de","el","en","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-BR","pt-PT","ro","ru","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"]),d=new Map;function h(e){if(!c.test(e))return null;var t=c.exec(e),n=t[1],r=t[2],s=n+(r?"-"+r.toUpperCase():"");return l.has(s)?s:l.has(n)?n:null}function f(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(n){switch(n.label){case 0:return i.isSome(t.test.fetchBundleAsset)?[2,t.test.fetchBundleAsset(e)]:[4,r.fetchAsset(e,{responseType:"json"})];case 1:return[2,n.sent().data]}}))}))}u.beforeLocaleChange((function(){d.clear()})),t.loadMessageBundle=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t;return n.__generator(this,(function(r){switch(r.label){case 0:return d.has(e)||d.set(e,function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r,i,a,o,c,l,d,_;return n.__generator(this,(function(n){switch(n.label){case 0:if(!(t=/^(.*)\/t9n\/(.*)$/g.exec(e)))throw new s("esri-intl:invalid-bundle",'Missing "t9n" folder in locale bundle path "'+e+'"');r=t[1]+"/t9n/",i=t[2],a=u.getLocale(),o=h(a),c=""+r+i+".json",l=o?""+r+i+"_"+o+".json":c,n.label=1;case 1:return n.trys.push([1,3,,8]),[4,f(l)];case 2:return d=n.sent(),[3,8];case 3:if(_=n.sent(),l===c)throw _;n.label=4;case 4:return n.trys.push([4,6,,7]),[4,f(c)];case 5:return d=n.sent(),[3,7];case 6:throw n.sent(),new s("esri-intl:unknown-bundle",'Bundle "'+e+'" cannot be loaded',{error:_});case 7:return[3,8];case 8:return[2,d]}}))}))}(e)),t=d.get(e),[4,_.add(t)];case 1:return r.sent(),[2,t]}}))}))},t.getKnownMessageBundleLocale=h;var _=new(function(){function e(){this._numLoading=0}return e.prototype.waitForAll=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){switch(e.label){case 0:return this._dfd?[4,this._dfd.promise]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},e.prototype.add=function(e){var t=this;return this._increase(),e.then((function(){return t._decrease()}),(function(){return t._decrease()})),this.waitForAll()},e.prototype._increase=function(){this._numLoading++,this._dfd||(this._dfd=a.createDeferred())},e.prototype._decrease=function(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)},e}());t.test={cache:d}}));