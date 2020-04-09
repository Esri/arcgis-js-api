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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,t,o,p,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.age=null,r.displayCount=null,r.maxObservations=1,r}var p;return o(r,e),p=r,r.prototype.clone=function(){return new p({age:this.age,displayCount:this.displayCount,maxObservations:this.maxObservations})},t([s.property({type:Number,json:{write:!0}})],r.prototype,"age",void 0),t([s.property({type:Number,json:{write:!0}})],r.prototype,"displayCount",void 0),t([s.property({type:Number,json:{write:!0}})],r.prototype,"maxObservations",void 0),r=p=t([s.subclass("esri.layers.support.PurgeOptions")],r)}(s.declared(p.JSONSupport))}));