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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../layers/support/fieldUtils"],function(e,r,t,o,p,i,s,n,u){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}t(r,e),s=r,r.prototype.collectRequiredFields=function(e,r){return i(this,void 0,void 0,function(){return p(this,function(t){return[2,u.collectArcadeFieldNames(e,r,this.expression)]})})},r.prototype.clone=function(){return new s({expression:this.expression,title:this.title})};var s;return o([n.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),r=s=o([n.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(n.declared(s.JSONSupport))});