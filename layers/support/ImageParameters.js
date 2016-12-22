// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../TimeExtent","../../core/Accessor","./LayerTimeOptions","./layerUtils","../../geometry/Extent","../../geometry/SpatialReference"],function(t,e,i,r,o,p,n,l,s,a,y){var h=function(t){function e(e){t.call(this),this.extent=null,this.width=null,this.height=null,this.dpi=null,this.format=null,this.imageSpatialReference=null,this.layerDefinitions=[],this.layerOption=null,this.layerIds=null,this.transparent=!0,this.timeExtent=null,this.layerTimeOptions=null}return i(e,t),e.prototype.toJSON=function(){var t=this.extent,e=this.timeExtent;t=t&&t.clone()._normalize(!0);var i=this.layerOption,r=t?t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()):null,o=this.imageSpatialReference,p={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:t?t.xmin+","+t.ymin+","+t.xmax+","+t.ymax:null,bboxSR:r,layers:i?i+":"+this.layerIds.join(","):null,layerDefs:s._serializeLayerDefinitions(this.layerDefinitions),layerTimeOptions:s._serializeTimeOptions(this.layerTimeOptions),imageSR:o?o.wkid||JSON.stringify(o.toJSON()):r,time:e?e.toJSON().join(","):null},n={};return Object.keys(p).filter(function(t){return null!==p[t]}).forEach(function(t){return n[t]=p[t]}),n},r([o.property({type:a})],e.prototype,"extent",void 0),r([o.property()],e.prototype,"width",void 0),r([o.property()],e.prototype,"height",void 0),r([o.property()],e.prototype,"dpi",void 0),r([o.property()],e.prototype,"format",void 0),r([o.property({type:y})],e.prototype,"imageSpatialReference",void 0),r([o.property()],e.prototype,"layerDefinitions",void 0),r([o.property()],e.prototype,"layerOption",void 0),r([o.property()],e.prototype,"layerIds",void 0),r([o.property()],e.prototype,"transparent",void 0),r([o.property({type:p})],e.prototype,"timeExtent",void 0),r([o.property({type:l})],e.prototype,"layerTimeOptions",void 0),e=r([o.subclass("esri.layers.support.ImageParameters")],e)}(o.declared(n));return h});