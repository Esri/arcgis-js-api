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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","./FeatureExpressionInfo","./unitConversionUtils"],(function(e,t,r,o,n,s,i,p,u){"use strict";var a=o.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),f=new o.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=null,t}var o;return r.__extends(t,e),o=t,t.prototype.readFeatureExpressionInfo=function(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0},t.prototype.writeFeatureExpressionInfo=function(e,t,r,o){t[r]=e.write(null,o),"0"===e.expression&&(t.featureExpression={value:0})},Object.defineProperty(t.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):s.isSome(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!1,configurable:!0}),t.prototype.write=function(t,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?e.prototype.write.call(this,t,r):null},t.prototype.clone=function(){return new o({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},r.__decorate([i.property({type:p,json:{write:!0}})],t.prototype,"featureExpressionInfo",void 0),r.__decorate([i.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],t.prototype,"readFeatureExpressionInfo",null),r.__decorate([i.writer("featureExpressionInfo",{featureExpressionInfo:{type:p},"featureExpression.value":{type:[0]}})],t.prototype,"writeFeatureExpressionInfo",null),r.__decorate([i.property({type:a.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:a.jsonValues,read:a.read,write:{writer:a.write,isRequired:!0}}})],t.prototype,"mode",null),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"offset",void 0),r.__decorate([i.property({type:u.supportedUnits,json:{type:String,read:f.read,write:f.write}})],t.prototype,"unit",null),t=o=r.__decorate([i.subclass("esri.layers.support.ElevationInfo")],t)}(n.JSONSupport)}));