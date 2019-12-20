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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/tsSupport/assignHelper","../geometry","../core/maybe","../core/promiseUtils","@dojo/framework/shim/Promise"],function(e,r,t,n,i,a,c,s){function o(){return n(this,void 0,void 0,function(){var r=this;return t(this,function(i){return u||(u=function(){return n(r,void 0,void 0,function(){var r;return t(this,function(t){switch(t.label){case 0:return[4,new Promise(function(r,t){e(["./arcadeUtils"],r,t)})];case 1:return r=t.sent(),[4,r.arcade.load()];case 2:return t.sent(),[2,{arcade:r.arcade,arcadeUtils:r,Dictionary:r.Dictionary,Feature:r.arcadeFeature}]}})})}()),[2,u]})})}Object.defineProperty(r,"__esModule",{value:!0});var u;r.loadArcade=o,r.createLabelExpression=function(e,r,t){return l.create(e,r,t,null,["$feature"])},r.createVVExpression=function(e,r,t){return l.create(e,r,t,null,["$feature","$view"])},r.createRendererExpression=function(e,r,t){return l.create(e,r,t,null,["$feature","$view"])},r.createDictionaryExpression=function(e,r,t,n){return l.create(e,r,t,n,["$feature","$view"])};var l=function(){function e(e,r,t,n,i,a,c){this.evaluate=n,this._syntaxTree=t,this._arcade=e,this._arcadeDictionary=r,this._arcadeFeature=i,this._fields=a,this._spatialReference=c,this._referencesGeometry=e.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"$view.scale")}return e.create=function(r,u,l,f,p,d){return n(this,void 0,void 0,function(){var n,h,y,m,_,v,w,F,S,b,$,x,g,R,D;return t(this,function(t){switch(t.label){case 0:return[4,o()];case 1:return n=t.sent(),h=n.arcade,y=n.Feature,m=n.Dictionary,_=a.SpatialReference.fromJSON(u),v=h.parseScript(r,d),w=p.reduce(function(e,r){var t;return i({},e,(t={},t[r]=null,t))},{}),F=null,c.isSome(f)&&(F=new m(f),F.immutable=!0,w.$config=null),S=h.scriptUsesGeometryEngine(v)&&h.enableGeometrySupport(),b=h.scriptUsesFeatureSet(v)&&h.enableFeatureSetSupport(),$=h.scriptIsAsync(v)&&h.enableAsyncSupport(),x={vars:w,spatialReference:_,useAsync:!!$},g=new m,g.immutable=!1,g.setField("scale",0),R=h.compileScript(v,x),D=function(e){return"$view"in e&&e.$view&&(g.setField("scale",e.$view.scale),e.$view=g),F&&(e.$config=F),R({vars:e,spatialReference:_})},[4,s.all([S,b,$])];case 2:return t.sent(),[2,new e(h,m,v,D,new y,l,_)]}})})},e.prototype.repurposeFeature=function(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this._fields}),this._arcadeFeature},e.prototype.createDictionary=function(){return new this._arcadeDictionary},e.prototype.referencesMember=function(e){return this._arcade.referencesMember(this._syntaxTree,e)},e.prototype.referencesFunction=function(e){return this._arcade.referencesFunction(this._syntaxTree,e)},e.prototype.referencesGeometry=function(){return this._referencesGeometry},e.prototype.referencesScale=function(){return this._referencesScale},e.prototype.extractFieldLiterals=function(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)},e}();r.default=l});