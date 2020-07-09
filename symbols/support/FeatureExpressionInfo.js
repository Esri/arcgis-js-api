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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../layers/support/fieldUtils"],(function(e,t,r,o,i,n){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return r.__extends(t,e),o=t,t.prototype.collectRequiredFields=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){return[2,n.collectArcadeFieldNames(e,t,this.expression)]}))}))},t.prototype.clone=function(){return new o({expression:this.expression,title:this.title})},r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"expression",void 0),r.__decorate([i.property({type:String,json:{write:!0}})],t.prototype,"title",void 0),t=o=r.__decorate([i.subclass("esri.layers.support.FeatureExpressionInfo")],t)}(o.JSONSupport)}));