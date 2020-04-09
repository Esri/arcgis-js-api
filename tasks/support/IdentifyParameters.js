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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../geometry","../../geometry","../../TimeExtent","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType","../../geometry/support/jsonUtils"],(function(e,t,r,o,p,n,y,i,s,l,a){var u=function(e){function t(t){var r=e.call(this,t)||this;return r.dpi=96,r.dynamicLayerInfos=null,r.geometry=null,r.geometryPrecision=null,r.height=400,r.layerDefinitions=null,r.layerIds=null,r.layerOption="top",r.layerTimeOptions=null,r.mapExtent=null,r.maxAllowableOffset=null,r.returnFieldName=!1,r.returnGeometry=!1,r.returnM=!1,r.returnUnformattedValues=!1,r.returnZ=!1,r.spatialReference=null,r.timeExtent=null,r.tolerance=null,r.width=400,r}return o(t,e),r([s.property({type:Number,json:{write:!0}})],t.prototype,"dpi",void 0),r([s.property({type:[Object],json:{read:{source:"dynamicLayers"},write:{target:"dynamicLayers"}}})],t.prototype,"dynamicLayerInfos",void 0),r([s.property({types:n.geometryTypes,json:{read:a.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([s.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),r([s.property({type:Number,json:{write:!0}})],t.prototype,"height",void 0),r([s.property({type:[Object],json:{write:!0}})],t.prototype,"layerDefinitions",void 0),r([s.property({type:[Number],json:{write:!0}})],t.prototype,"layerIds",void 0),r([s.property({type:String,json:{write:!0}})],t.prototype,"layerOption",void 0),r([s.property({type:[Object],json:{write:!0}})],t.prototype,"layerTimeOptions",void 0),r([s.property({type:p.Extent,json:{write:!0}})],t.prototype,"mapExtent",void 0),r([s.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),r([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnFieldName",void 0),r([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),r([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnM",void 0),r([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnUnformattedValues",void 0),r([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnZ",void 0),r([s.property({type:p.SpatialReference,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([s.property({type:y,json:{write:!0}})],t.prototype,"timeExtent",void 0),r([s.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),r([s.property({type:Number,json:{write:!0}})],t.prototype,"width",void 0),t=r([s.subclass("esri.tasks.support.IdentifyParameters")],t)}(s.declared(i.JSONSupport));return u.from=l.default(u),u}));