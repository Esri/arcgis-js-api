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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/jsonMap","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","./FeatureExpressionInfo","./unitConversionUtils"],(function(e,t,r,o,n,s,i,p,u,a,f,l){var d=i.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),c=new i.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=null,t}var n;return r(t,e),n=t,t.prototype.readFeatureExpressionInfo=function(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0},t.prototype.writeFeatureExpressionInfo=function(e,t,r,o){t[r]=e.write(null,o),"0"===e.expression&&(t.featureExpression={value:0})},Object.defineProperty(t.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):u.isSome(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),t.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},t.prototype.clone=function(){return new n({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},o([a.property({type:f,json:{write:!0}})],t.prototype,"featureExpressionInfo",void 0),o([a.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],t.prototype,"readFeatureExpressionInfo",null),o([a.writer("featureExpressionInfo",{featureExpressionInfo:{type:f},"featureExpression.value":{type:[0]}})],t.prototype,"writeFeatureExpressionInfo",null),o([a.property({type:d.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:d.jsonValues,read:d.read,write:{writer:d.write,isRequired:!0}}})],t.prototype,"mode",null),o([a.property({type:Number,json:{write:!0}})],t.prototype,"offset",void 0),o([a.property({type:l.supportedUnits,json:{type:String,read:c.read,write:c.write}})],t.prototype,"unit",null),t=n=o([a.subclass("esri.layers.support.ElevationInfo")],t)}(a.declared(p.JSONSupport))}));