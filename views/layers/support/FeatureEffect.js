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

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/JSONSupport","../../../core/Logger","../../../core/maybe","../../../core/accessorSupport/decorators","./FeatureFilter","./ParsedFeatureEffect","./Transition"],function(e,t,r,d,f,i,c,n,o,l,u){var s=i.getLogger("esri.views.layers.support.FeatureEffect");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.filter=null,t.includedEffect=null,t.excludedEffect=null,t.excludedLabelsVisible=!1,t}d(t,e),f=t,Object.defineProperty(t.prototype,"insideEffect",{get:function(){return s.warn("insideEffect is a temporary interface that will be removed. Use includedEffect instead"),this.includedEffect},set:function(e){s.warn("insideEffect is a temporary interface that will be removed. Use includedEffect instead"),this.includedEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"outsideEffect",{get:function(){return s.warn("outsideEffect is a temporary interface that will be removed. Use excludedEffect instead"),this.excludedEffect},set:function(e){s.warn("outsideEffect is a temporary interface that will be removed. Use excludedEffect instead"),this.excludedEffect=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parsedIncludedEffect",{get:function(){return c.isSome(this.includedEffect)?"string"==typeof this.includedEffect?l.fromString(this.includedEffect):new u({from:l.fromString(this.includedEffect.from),to:l.fromString(this.includedEffect.to),duration:this.includedEffect.duration}):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parsedExcludedEffect",{get:function(){return c.isSome(this.excludedEffect)?"string"==typeof this.excludedEffect?l.fromString(this.excludedEffect):new u({from:l.fromString(this.excludedEffect.from),to:l.fromString(this.excludedEffect.to),duration:this.excludedEffect.duration}):null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingHash",{get:function(){return this.excludedLabelsVisible+"-"+this.includedEffect+"-"+this.excludedEffect},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"done",{get:function(){return(!c.isSome(this.parsedIncludedEffect)||this.parsedIncludedEffect.done)&&(!c.isSome(this.parsedExcludedEffect)||this.parsedExcludedEffect.done)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new f({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})};var f;return r([n.property({type:o,json:{write:!0}})],t.prototype,"filter",void 0),r([n.property({type:String,json:{write:!0}})],t.prototype,"includedEffect",void 0),r([n.property({type:String,json:{write:!0}})],t.prototype,"excludedEffect",void 0),r([n.property({type:Boolean,json:{write:!0}})],t.prototype,"excludedLabelsVisible",void 0),r([n.property({dependsOn:["includedEffect"]})],t.prototype,"parsedIncludedEffect",null),r([n.property({dependsOn:["excludedEffect"]})],t.prototype,"parsedExcludedEffect",null),r([n.property({dependsOn:["includedEffect","excludedEffect"]})],t.prototype,"renderingHash",null),t=f=r([n.subclass("esri.views.layers.support.FeatureEffect")],t)}(n.declared(f.JSONSupport))});