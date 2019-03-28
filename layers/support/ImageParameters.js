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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../TimeExtent","../../core/Accessor","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","./LayerTimeOptions","./layerUtils"],function(e,t,r,i,o,n,p,l,a,s,y){return function(e){function t(t){var r=e.call(this)||this;return r.extent=null,r.width=null,r.height=null,r.dpi=null,r.format=null,r.imageSpatialReference=null,r.layerDefinitions=[],r.layerOption=null,r.layerIds=null,r.transparent=!0,r.timeExtent=null,r.layerTimeOptions=null,r}return r(t,e),t.prototype.toJSON=function(){var e=this.extent;e=e&&e.clone()._normalize(!0);var t;if(this.timeExtent){var r=this.timeExtent.toJSON(),i=r.start,o=r.end;null==i&&null==o||(t=i===o?""+i:(null==i?"null":i)+","+(null==o?"null":o))}var n=this.layerOption,p=e?e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()):null,l=this.imageSpatialReference,a={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null,bboxSR:p,layers:n?n+":"+this.layerIds.join(","):null,layerDefs:y.serializeLayerDefinitions(this.layerDefinitions),layerTimeOptions:y.serializeTimeOptions(this.layerTimeOptions),imageSR:l?l.wkid||JSON.stringify(l.toJSON()):p,time:t},s={};return Object.keys(a).filter(function(e){return null!==a[e]}).forEach(function(e){return s[e]=a[e]}),s},i([p.property({type:l})],t.prototype,"extent",void 0),i([p.property()],t.prototype,"width",void 0),i([p.property()],t.prototype,"height",void 0),i([p.property()],t.prototype,"dpi",void 0),i([p.property()],t.prototype,"format",void 0),i([p.property({type:a})],t.prototype,"imageSpatialReference",void 0),i([p.property()],t.prototype,"layerDefinitions",void 0),i([p.property()],t.prototype,"layerOption",void 0),i([p.property()],t.prototype,"layerIds",void 0),i([p.property()],t.prototype,"transparent",void 0),i([p.property({type:o})],t.prototype,"timeExtent",void 0),i([p.property({type:[s]})],t.prototype,"layerTimeOptions",void 0),t=i([p.subclass("esri.layers.support.ImageParameters")],t)}(p.declared(n))});