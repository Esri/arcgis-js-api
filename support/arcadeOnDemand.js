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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../geometry","../core/maybe","../core/promiseUtils","@dojo/framework/shim/Promise"],(function(e,r,t,n,a,i){"use strict";var s;function c(){return t.__awaiter(this,void 0,void 0,(function(){var r=this;return t.__generator(this,(function(n){return s||(s=t.__awaiter(r,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(r,t){e(["./arcadeUtils"],r,t)}))];case 1:return[4,(r=t.sent()).arcade.load()];case 2:return t.sent(),[2,{arcade:r.arcade,arcadeUtils:r,Dictionary:r.Dictionary,Feature:r.arcadeFeature}]}}))}))),[2,s]}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.ArcadeExpression=r.createDictionaryExpression=r.createVVExpression=r.createRendererExpression=r.createLabelExpression=r.loadArcade=void 0,r.loadArcade=c,r.createLabelExpression=function(e,r,t){return o.create(e,r,t,null,["$feature"])},r.createRendererExpression=function(e,r,t){return o.create(e,r,t,null,["$feature","$view"])},r.createVVExpression=r.createRendererExpression,r.createDictionaryExpression=function(e,r,t,n){return o.create(e,r,t,n,["$feature","$view"])};var o=function(){function e(e,r,t,n,a,i,s,c){this.script=e,this.evaluate=a,this.fields=s,this._syntaxTree=n,this._arcade=r,this._arcadeDictionary=t,this._arcadeFeature=i,this._spatialReference=c,this._referencesGeometry=r.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}return e.create=function(r,s,o,u,p,l){return t.__awaiter(this,void 0,void 0,(function(){var f,d,_,h,y,m,v,x,F,w,b,g,S,E,$;return t.__generator(this,(function(R){switch(R.label){case 0:return[4,c()];case 1:return f=R.sent(),d=f.arcade,_=f.Feature,h=f.Dictionary,y=n.SpatialReference.fromJSON(s),m=d.parseScript(r,l),v=p.reduce((function(e,r){var n;return t.__assign(t.__assign({},e),((n={})[r]=null,n))}),{}),x=null,a.isSome(u)&&((x=new h(u)).immutable=!0,v.$config=null),F=d.scriptUsesGeometryEngine(m)&&d.enableGeometrySupport(),w=d.scriptUsesFeatureSet(m)&&d.enableFeatureSetSupport(),b=d.scriptIsAsync(m)&&d.enableAsyncSupport(),g={vars:v,spatialReference:y,useAsync:!!b},(S=new h).immutable=!1,S.setField("scale",0),E=d.compileScript(m,g),$=function(e){return"$view"in e&&e.$view&&(S.setField("scale",e.$view.scale),e.$view=S),x&&(e.$config=x),E({vars:e,spatialReference:y})},[4,i.all([F,w,b])];case 2:return R.sent(),[2,new e(r,d,h,m,$,new _,o,y)]}}))}))},e.prototype.repurposeFeature=function(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature},e.prototype.repurposeAdapter=function(e){return this._arcadeFeature.repurposeFromAdapter(e,{fields:this.fields}),this._arcadeFeature},e.prototype.createDictionary=function(){return new this._arcadeDictionary},e.prototype.referencesMember=function(e){return this._arcade.referencesMember(this._syntaxTree,e)},e.prototype.referencesFunction=function(e){return this._arcade.referencesFunction(this._syntaxTree,e)},e.prototype.referencesGeometry=function(){return this._referencesGeometry},e.prototype.referencesScale=function(){return this._referencesScale},e.prototype.extractFieldLiterals=function(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)},e}();r.ArcadeExpression=o,r.default=o}));