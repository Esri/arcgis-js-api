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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./PointCloudFilter"],(function(e,t,r,n,o,i){return function(e){function t(t){var r=e.call(this,t)||this;return r.includedReturns=[],r.type="return",r}var i;return r.__extends(t,e),i=t,t.prototype.clone=function(){return new i({field:this.field,includedReturns:n.clone(this.includedReturns)})},r.__decorate([o.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"includedReturns",void 0),r.__decorate([o.property({type:["return"],json:{type:["pointCloudReturnFilter"]}})],t.prototype,"type",void 0),t=i=r.__decorate([o.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],t)}(i)}));