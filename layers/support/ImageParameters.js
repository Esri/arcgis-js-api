// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../core/Accessor","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","./LayerTimeOptions","./layerUtils"],function(e,t,r,i,o,p,n,l,a,s,y){return function(e){function t(t){var r=e.call(this)||this;return r.extent=null,r.width=null,r.height=null,r.dpi=null,r.format=null,r.imageSpatialReference=null,r.layerDefinitions=[],r.layerOption=null,r.layerIds=null,r.transparent=!0,r.timeExtent=null,r.layerTimeOptions=null,r}return r(t,e),t.prototype.toJSON=function(){var e=this.extent,t=this.timeExtent;e=e&&e.clone()._normalize(!0);var r=this.layerOption,i=e?e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()):null,o=this.imageSpatialReference,p={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null,bboxSR:i,layers:r?r+":"+this.layerIds.join(","):null,layerDefs:y.serializeLayerDefinitions(this.layerDefinitions),layerTimeOptions:y.serializeTimeOptions(this.layerTimeOptions),imageSR:o?o.wkid||JSON.stringify(o.toJSON()):i,time:t?t.toJSON().join(","):null},n={};return Object.keys(p).filter(function(e){return null!==p[e]}).forEach(function(e){return n[e]=p[e]}),n},i([n.property({type:l})],t.prototype,"extent",void 0),i([n.property()],t.prototype,"width",void 0),i([n.property()],t.prototype,"height",void 0),i([n.property()],t.prototype,"dpi",void 0),i([n.property()],t.prototype,"format",void 0),i([n.property({type:a})],t.prototype,"imageSpatialReference",void 0),i([n.property()],t.prototype,"layerDefinitions",void 0),i([n.property()],t.prototype,"layerOption",void 0),i([n.property()],t.prototype,"layerIds",void 0),i([n.property()],t.prototype,"transparent",void 0),i([n.property({type:o})],t.prototype,"timeExtent",void 0),i([n.property({type:[s]})],t.prototype,"layerTimeOptions",void 0),t=i([n.subclass("esri.layers.support.ImageParameters")],t)}(n.declared(p))});