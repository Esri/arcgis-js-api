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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./PointCloudFilter"],(function(e,t,r,n,i,o){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.includedReturns=[],r.type="return",r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({field:this.field,includedReturns:n.clone(this.includedReturns)})},r.__decorate([i.property({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"includedReturns",void 0),r.__decorate([i.enumeration({pointCloudReturnFilter:"return"})],t.prototype,"type",void 0),t=o=r.__decorate([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],t)}(o)}));