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

define(["require","exports","tslib","../../geometry","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,r,t,o,p,a,n){var i=function(e){function r(r){var t=e.call(this,r)||this;return t.contains=!0,t.dynamicLayerInfos=null,t.geometryPrecision=null,t.layerDefinitions=null,t.layerIds=null,t.maxAllowableOffset=null,t.outSpatialReference=null,t.returnGeometry=!1,t.searchFields=null,t.searchText=null,t}return t.__extends(r,e),t.__decorate([a.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"contains",void 0),t.__decorate([a.property({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],r.prototype,"dynamicLayerInfos",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],r.prototype,"geometryPrecision",void 0),t.__decorate([a.property({type:[Object],json:{write:!0}})],r.prototype,"layerDefinitions",void 0),t.__decorate([a.property({type:[Number],json:{write:!0}})],r.prototype,"layerIds",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],r.prototype,"maxAllowableOffset",void 0),t.__decorate([a.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],r.prototype,"outSpatialReference",void 0),t.__decorate([a.property({type:Boolean,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"returnGeometry",void 0),t.__decorate([a.property({type:[String],json:{write:!0}})],r.prototype,"searchFields",void 0),t.__decorate([a.property({type:String,json:{write:!0}})],r.prototype,"searchText",void 0),r=t.__decorate([a.subclass("esri.tasks.support.FindParameters")],r)}(p.JSONSupport);return i.from=n.default(i),i}));