// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary","../../support/arcadeUtils"],function(e,r,t,o,n,s,i,p){var u=i({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),a=i({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"}),f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),s=r,Object.defineProperty(r.prototype,"requiredFields",{get:function(){return p.extractFieldNames(this.expression)},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new s({expression:this.expression})},o([n.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),o([n.property({readOnly:!0,dependsOn:["expression"]})],r.prototype,"requiredFields",null),r=s=o([n.subclass("esri.layers.support.FeatureExpressionInfo")],r);var s}(n.declared(s)),l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),s=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,o){r[t]=e.write(null,o),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){var e=this._get("mode");return e?e:null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._set("mode",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new s({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},o([n.property({type:f,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),o([n.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),o([n.writer("featureExpressionInfo")],r.prototype,"writeFeatureExpressionInfo",null),o([n.property({type:String,dependsOn:["offset","featureExpressionInfo"],json:{read:u.read,write:{writer:u.write,isRequired:!0}}})],r.prototype,"mode",null),o([n.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),o([n.property({type:String,json:{read:a.read,write:a.write}})],r.prototype,"unit",void 0),r=s=o([n.subclass("esri.layers.support.ElevationInfo")],r);var s}(n.declared(s));return l});