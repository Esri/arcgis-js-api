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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../core/kebabDictionary"],function(e,r,t,o,n,s,i){var p=i({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",absoluteHeight:"absolute-height"}),u=l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.clone=function(){return new l({value:this.value})},r}(n.declared(s));o([n.property({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=l=o([n.subclass("esri.layers.support.FeatureExpression")],u);var a=c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.write=function(e,r){return this.offset||this.mode||this.featureExpression?this.inherited(arguments):null},r.prototype.clone=function(){return new c({mode:this.mode,offset:this.offset,featureExpression:this.featureExpression?this.featureExpression.clone():void 0})},r}(n.declared(s));o([n.property({type:u,json:{write:!0}})],a.prototype,"featureExpression",void 0),o([n.property({type:String,json:{read:p.read,write:p.write}})],a.prototype,"mode",void 0),o([n.property({type:Number,json:{write:!0}})],a.prototype,"offset",void 0),a=c=o([n.subclass("esri.layers.support.ElevationInfo")],a);var l,c;return a});