// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/tsSupport/assignHelper","../geometry","../core/maybe","../core/promiseUtils"],function(e,r,t,n,a,i,c,s){function o(){return n(this,void 0,void 0,function(){var r;return t(this,function(t){return u||(r={arcade:null,arcadeUtils:null,Dictionary:null,Feature:null},u=s.all([s.create(function(r){return e(["./arcadeUtils"],r)})]).then(function(e){var t=e[0];return r.arcade=t.arcade,r.arcadeUtils=t,r.Dictionary=t.Dictionary,r.Feature=t.arcadeFeature,r.arcade.load()}).then(function(){return r})),[2,u]})})}Object.defineProperty(r,"__esModule",{value:!0});var u;r.loadArcade=o,r.createLabelExpression=function(e,r,t){return l.create(e,r,t,null,["$feature"])},r.createVVExpression=function(e,r,t){return l.create(e,r,t,null,["$feature","$view"])},r.createRendererExpression=function(e,r,t){return l.create(e,r,t,null,["$feature","$view"])},r.createDictionaryExpression=function(e,r,t,n){return l.create(e,r,t,n,["$feature","$view"])};var l=function(){function e(e,r,t,n,a,i,c){this.evaluate=n,this._syntaxTree=t,this._arcade=e,this._arcadeDictionary=r,this._arcadeFeature=a,this._fields=i,this._spatialReference=c,this._referencesGeometry=e.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"$view.scale")}return e.create=function(r,u,l,f,p,d){return n(this,void 0,void 0,function(){var n,y,h,_,m,v,F,S,w,b,$,x,g,D,R;return t(this,function(t){switch(t.label){case 0:return[4,o()];case 1:return n=t.sent(),y=n.arcade,h=n.Feature,_=n.Dictionary,m=i.SpatialReference.fromJSON(u),v=y.parseScript(r,d),F=p.reduce(function(e,r){var t;return a({},e,(t={},t[r]=null,t))},{}),S=null,c.isSome(f)&&(S=new _(f),S.immutable=!0,F.$config=null),w=y.scriptUsesGeometryEngine(v)&&y.enableGeometrySupport(),b=y.scriptUsesFeatureSet(v)&&y.enableFeatureSetSupport(),$=y.scriptIsAsync(v)&&y.enableAsyncSupport(),x={vars:F,spatialReference:m,useAsync:!!$},g=new _,g.immutable=!1,g.setField("scale",0),D=y.compileScript(v,x),R=function(e){return"$view"in e&&e.$view&&(g.setField("scale",e.$view.scale),e.$view=g),S&&(e.$config=S),D({vars:e,spatialReference:m})},[4,s.all([w,b,$])];case 2:return t.sent(),[2,new e(y,_,v,R,new h,l,m)]}})})},e.prototype.repurposeFeature=function(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this._fields}),this._arcadeFeature},e.prototype.createDictionary=function(){return new this._arcadeDictionary},e.prototype.referencesMember=function(e){return this._arcade.referencesMember(this._syntaxTree,e)},e.prototype.referencesFunction=function(e){return this._arcade.referencesFunction(this._syntaxTree,e)},e.prototype.referencesGeometry=function(){return this._referencesGeometry},e.prototype.referencesScale=function(){return this._referencesScale},e.prototype.extractFieldLiterals=function(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)},e}();r.default=l});