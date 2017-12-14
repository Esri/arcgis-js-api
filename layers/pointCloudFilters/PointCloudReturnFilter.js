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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/lang","./PointCloudFilter"],function(e,r,t,o,n,i,u){var d=function(e){function r(r){var t=e.call(this)||this;return t.includedReturns=[],t.type="return",t}return t(r,e),u=r,r.prototype.clone=function(){return new u({field:this.field,includedReturns:i.clone(this.includedReturns)})},o([n.property({type:[String],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),o([n.property()],r.prototype,"type",void 0),r=u=o([n.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r);var u}(n.declared(u));return d});