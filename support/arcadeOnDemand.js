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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/tsSupport/assignHelper","../geometry","../core/promiseUtils"],function(e,r,t,n,a,i,c){function s(){return n(this,void 0,void 0,function(){return t(this,function(r){return o||(o=c.all([c.create(function(r){return e(["./arcadeUtils"],r)})]).then(function(e){var r=e[0];return{arcade:r.arcade,arcadeUtils:r,Dictionary:r.Dictionary,Feature:r.arcadeFeature}})),[2,o]})})}Object.defineProperty(r,"__esModule",{value:!0});var o;r.loadArcade=s,r.createLabelExpression=function(e,r,t){return u.create(e,r,t,["$feature"])},r.createVVExpression=function(e,r,t){return u.create(e,r,t,["$feature","$view"])},r.createRendererExpression=function(e,r,t){return u.create(e,r,t,["$feature","$view"])};var u=function(){function e(e,r,t,n,a,i,c){this.evaluate=n,this._syntaxTree=t,this._arcade=e,this._arcadeDictionary=r,this._arcadeFeature=a,this._fields=i,this._spatialReference=c,this._referencesGeometry=e.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"$view.scale")}return e.create=function(r,o,u,p,f){return n(this,void 0,void 0,function(){var n,l,d,h,y,_,v,m,F,S,w,b,x,$;return t(this,function(t){switch(t.label){case 0:return[4,s()];case 1:return n=t.sent(),l=n.arcade,d=n.Feature,h=n.Dictionary,y=i.SpatialReference.fromJSON(o),_=l.parseScript(r,f),v=p.reduce(function(e,r){var t;return a({},e,(t={},t[r]=null,t))},{}),m=l.scriptUsesGeometryEngine(_)&&l.enableGeometrySupport(),F=l.scriptUsesFeatureSet(_)&&l.enableFeatureSetSupport(),S=l.scriptIsAsync(_)&&l.enableAsyncSupport(),w={vars:v,spatialReference:y,useAsync:!!S},b=new h,b.immutable=!1,b.setField("scale",0),x=l.compileScript(_,w),$=function(e){return"$view"in e&&e.$view&&(b.setField("scale",e.$view.scale),e.$view=b),x({vars:e,spatialReference:y})},[4,c.all([m,F,S])];case 2:return t.sent(),[2,new e(l,h,_,$,new d,u,y)]}})})},e.prototype.repurposeFeature=function(e){return e.geometry.spatialReference||(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this._fields}),this._arcadeFeature},e.prototype.createDictionary=function(){return new this._arcadeDictionary},e.prototype.referencesMember=function(e){return this._arcade.referencesMember(this._syntaxTree,e)},e.prototype.referencesFunction=function(e){return this._arcade.referencesFunction(this._syntaxTree,e)},e.prototype.referencesGeometry=function(){return this._referencesGeometry},e.prototype.referencesScale=function(){return this._referencesScale},e.prototype.extractFieldLiterals=function(e){return this._arcade.extractFieldLiterals(this._syntaxTree,e)},e}();r.default=u});