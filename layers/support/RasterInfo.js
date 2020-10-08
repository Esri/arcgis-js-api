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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent","../../tasks/support/FeatureSet"],(function(e,t,o,r,p,i,n){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.attributeTable=null,o.bandCount=null,o.colormap=null,o.extent=null,o.format=void 0,o.height=null,o.width=null,o.histograms=null,o.keyProperties={},o.multidimensionalInfo=null,o.noDataValue=null,o.pixelSize=null,o.pixelType=null,o.spatialReference=null,o.statistics=null,o.storageInfo=null,o}return o.__extends(t,e),Object.defineProperty(t.prototype,"dataType",{get:function(){var e=this.keyProperties&&this.keyProperties.DataType;return e?e.toLowerCase():"generic"},enumerable:!1,configurable:!0}),o.__decorate([p.property({type:n,json:{write:!0}})],t.prototype,"attributeTable",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"bandCount",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"colormap",void 0),o.__decorate([p.property({type:String,readOnly:!0})],t.prototype,"dataType",null),o.__decorate([p.property({type:i,json:{write:!0}})],t.prototype,"extent",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"format",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"height",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"width",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"histograms",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"keyProperties",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"multidimensionalInfo",void 0),o.__decorate([p.property()],t.prototype,"noDataValue",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"pixelSize",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"pixelType",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"spatialReference",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"statistics",void 0),o.__decorate([p.property({json:{write:!0}})],t.prototype,"storageInfo",void 0),t=o.__decorate([p.subclass("esri.layers.support.RasterInfo")],t)}(r.JSONSupport)}));