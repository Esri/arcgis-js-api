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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/JSONSupport","../../core/kebabDictionary","../../core/accessorSupport/decorators","../../layers/support/fieldUtils","./unitConversionUtils"],function(e,t,r,o,n,i,s,p,u,a,l){var f=p.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new p.KebabDictionary({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"}),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r(t,e),s=t,t.prototype.collectRequiredFields=function(e,t){return i(this,void 0,void 0,function(){return n(this,function(r){return[2,a.collectArcadeFieldNames(e,t,this.expression)]})})},t.prototype.clone=function(){return new s({expression:this.expression,title:this.title})};var s;return o([u.property({type:String,json:{write:!0}})],t.prototype,"expression",void 0),o([u.property({type:String,json:{write:!0}})],t.prototype,"title",void 0),t=s=o([u.subclass("esri.layers.support.FeatureExpressionInfo")],t)}(u.declared(s));return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r(t,e),n=t,t.prototype.readFeatureExpressionInfo=function(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0},t.prototype.writeFeatureExpressionInfo=function(e,t,r,o){t[r]=e.write(null,o),"0"===e.expression&&(t.featureExpression={value:0})},Object.defineProperty(t.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),t.prototype.write=function(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},t.prototype.clone=function(){return new n({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})};var n;return o([u.property({type:c,json:{write:!0}})],t.prototype,"featureExpressionInfo",void 0),o([u.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],t.prototype,"readFeatureExpressionInfo",null),o([u.writer("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],t.prototype,"writeFeatureExpressionInfo",null),o([u.property({type:f.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:f.jsonValues,read:f.read,write:{writer:f.write,isRequired:!0}}})],t.prototype,"mode",null),o([u.property({type:Number,json:{write:!0}})],t.prototype,"offset",void 0),o([u.property({type:l.supportedUnits,json:{type:String,read:d.read,write:d.write}})],t.prototype,"unit",null),t=n=o([u.subclass("esri.layers.support.ElevationInfo")],t)}(u.declared(s))});