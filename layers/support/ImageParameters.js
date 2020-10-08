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

define(["require","exports","tslib","../../TimeExtent","../../core/Accessor","../../core/accessorSupport/decorators","../../geometry/Extent","../../geometry/SpatialReference","./LayerTimeOptions","./layerUtils"],(function(e,t,r,i,o,n,p,l,a,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.width=null,r.height=null,r.dpi=null,r.format=null,r.imageSpatialReference=null,r.layerDefinitions=[],r.layerOption=null,r.layerIds=null,r.transparent=!0,r.timeExtent=null,r.layerTimeOptions=null,r}return r.__extends(t,e),t.prototype.toJSON=function(){var e,t=this.extent;if(t=t&&t.clone()._normalize(!0),this.timeExtent){var r=this.timeExtent.toJSON(),i=r.start,o=r.end;null==i&&null==o||(e=i===o?""+i:(null==i?"null":i)+","+(null==o?"null":o))}var n=this.layerOption,p=t?t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()):null,l=this.imageSpatialReference,a={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:t?t.xmin+","+t.ymin+","+t.xmax+","+t.ymax:null,bboxSR:p,layers:n?n+":"+this.layerIds.join(","):null,layerDefs:s.serializeLayerDefinitions(this.layerDefinitions),layerTimeOptions:s.serializeTimeOptions(this.layerTimeOptions),imageSR:l?l.wkid||JSON.stringify(l.toJSON()):p,time:e},y={};return Object.keys(a).filter((function(e){return null!==a[e]})).forEach((function(e){return y[e]=a[e]})),y},r.__decorate([n.property({type:p})],t.prototype,"extent",void 0),r.__decorate([n.property()],t.prototype,"width",void 0),r.__decorate([n.property()],t.prototype,"height",void 0),r.__decorate([n.property()],t.prototype,"dpi",void 0),r.__decorate([n.property()],t.prototype,"format",void 0),r.__decorate([n.property({type:l})],t.prototype,"imageSpatialReference",void 0),r.__decorate([n.property()],t.prototype,"layerDefinitions",void 0),r.__decorate([n.property()],t.prototype,"layerOption",void 0),r.__decorate([n.property()],t.prototype,"layerIds",void 0),r.__decorate([n.property()],t.prototype,"transparent",void 0),r.__decorate([n.property({type:i})],t.prototype,"timeExtent",void 0),r.__decorate([n.property({type:[a]})],t.prototype,"layerTimeOptions",void 0),t=r.__decorate([n.subclass("esri.layers.support.ImageParameters")],t)}(o)}));