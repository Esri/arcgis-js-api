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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent","../../tasks/support/FeatureSet"],function(e,t,r,o,p,i,n,s,l){return function(e){function t(t){var r=e.call(this)||this;return r.attributeTable=null,r.bandCount=null,r.colormap=null,r.extent=null,r.format=void 0,r.histograms=null,r.keyProperties=null,r.multidimensionalInfo=null,r.pixelSize=null,r.pixelType=null,r.spatialReference=null,r.statistics=null,r}return o(t,e),Object.defineProperty(t.prototype,"dataType",{get:function(){var e=this.keyProperties&&this.keyProperties.DataType;return e?e.toLowerCase():"generic"},enumerable:!0,configurable:!0}),p([n.property({type:l,json:{write:!0}})],t.prototype,"attributeTable",void 0),p([n.property({json:{write:!0}})],t.prototype,"bandCount",void 0),p([n.property({json:{write:!0}})],t.prototype,"colormap",void 0),p([n.property({type:String,readOnly:!0})],t.prototype,"dataType",null),p([n.property({type:s,json:{write:!0}})],t.prototype,"extent",void 0),p([n.property({json:{write:!0}})],t.prototype,"format",void 0),p([n.property({json:{write:!0}})],t.prototype,"histograms",void 0),p([n.property({json:{write:!0}})],t.prototype,"keyProperties",void 0),p([n.property({json:{write:!0}})],t.prototype,"multidimensionalInfo",void 0),p([n.property({json:{write:!0}})],t.prototype,"pixelSize",void 0),p([n.property({json:{write:!0}})],t.prototype,"pixelType",void 0),p([n.property({json:{write:!0}})],t.prototype,"spatialReference",void 0),p([n.property({json:{write:!0}})],t.prototype,"statistics",void 0),t=p([n.subclass("esri.layers.support.RasterInfo")],t)}(n.declared(i.JSONSupport))});