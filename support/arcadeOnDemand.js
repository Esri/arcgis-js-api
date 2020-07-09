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

define(["require","exports","tslib","../geometry","../core/maybe","../core/promiseUtils","@dojo/framework/shim/Promise"],(function(e,r,t,n,a,i){var s;function c(){return t.__awaiter(this,void 0,void 0,(function(){var r=this;return t.__generator(this,(function(n){return s||(s=t.__awaiter(r,void 0,void 0,(function(){var r;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(r,t){e(["./arcadeUtils"],r,t)}))];case 1:return[4,(r=t.sent()).arcade.load()];case 2:return t.sent(),[2,{arcade:r.arcade,arcadeUtils:r,Dictionary:r.Dictionary,Feature:r.arcadeFeature}]}}))}))),[2,s]}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.loadArcade=c,r.createLabelExpression=function(e,r,t){return o.create(e,r,t,null,["$feature"])},r.createVVExpression=function(e,r,t){return o.create(e,r,t,null,["$feature","$view"])},r.createRendererExpression=function(e,r,t){return o.create(e,r,t,null,["$feature","$view"])},r.createDictionaryExpression=function(e,r,t,n){return o.create(e,r,t,n,["$feature","$view"])};var o=function(){function e(e,r,t,n,a,i,s){this.evaluate=n,this._syntaxTree=t,this._arcade=e,this._arcadeDictionary=r,this._arcadeFeature=a,this._fields=i,this._spatialReference=s,this._referencesGeometry=e.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}return e.create=function(r,s,o,u,l,f){return t.__awaiter(this,void 0,void 0,(function(){var p,_,d,h,y,m,v,w,b,F,x,g,S,$,R;return t.__generator(this,(function(D){switch(D.label){case 0:return[4,c()];case 1:return p=D.sent(),_=p.arcade,d=p.Feature,h=p.Dictionary,y=n.SpatialReference.fromJSON(s),m=_.parseScript(r,f),v=l.reduce((function(e,r){var n;return t.__assign(t.__assign({},e),((n={})[r]=null,n))}),{}),w=null,a.isSome(u)&&((w=new h(u)).immutable=!0,v.$config=null),b=_.scriptUsesGeometryEngine(m)&&_.enableGeometrySupport(),F=_.scriptUsesFeatureSet(m)&&_.enableFeatureSetSupport(),x=_.scriptIsAsync(m)&&_.enableAsyncSupport(),g={vars:v,spatialReference:y,useAsync:!!x},(S=new h).immutable=!1,S.setField("scale",0),$=_.compileScript(m,g),R=function(e){return"$view"in e&&e.$view&&(S.setField("scale",e.$view.scale),e.$view=S),w&&(e.$config=w),$({vars:e,spatialReference:y})},[4,i.all([b,F,x])];case 2:return D.sent(),[2,new e(_,h,m,R,new d,o,y)]}}))}))},e.prototype.repurposeFeature=function(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this._fields}),this._arcadeFeature},e.prototype.createDictionary=function(){return new this._arcadeDictionary},e.prototype.referencesMember=function(e){return this._arcade.referencesMember(this._syntaxTree,e)},e.prototype.referencesFunction=function(e){return this._arcade.referencesFunction(this._syntaxTree,e)},e.prototype.referencesGeometry=function(){return this._referencesGeometry},e.prototype.referencesScale=function(){return this._referencesScale},e.prototype.extractFieldLiterals=function(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)},e}();r.ArcadeExpression=o,r.default=o}));