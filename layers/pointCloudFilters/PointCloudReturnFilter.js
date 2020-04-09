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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","./PointCloudFilter"],(function(e,r,t,n,o,i,u){return function(e){function r(r){var t=e.call(this,r)||this;return t.includedReturns=[],t.type="return",t}var u;return t(r,e),u=r,r.prototype.clone=function(){return new u({field:this.field,includedReturns:o.clone(this.includedReturns)})},n([i.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),n([i.property({type:["return"],json:{type:["pointCloudReturnFilter"]}})],r.prototype,"type",void 0),r=u=n([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r)}(i.declared(u))}));