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

define(["require","exports","tslib","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./DynamicLayerView3D","../../layers/WMSLayerView"],(function(e,t,r,a,i,s,n,o,p,c){"use strict";return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.layer.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(i.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view")));var t=this.layer,r=this.view;this._exportWMSImageParameters=new o({layer:t,view:r}),this.updatingHandles.add(this._exportWMSImageParameters,"version",(function(){e.updatingHandles.addPromise(e.refreshDebounced())}))},t.prototype.destroy=function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null)},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this.findExtentInfoAt(e),r=t.extent,a=new n(r[0],r[1],r[2],r[3],t.spatialReference),i=t.imageSize,s=i.width,o=i.height,p=a.width/s;return{extent:a,width:s,height:o,x:Math.round((e.x-a.xmin)/p),y:Math.round((a.ymax-e.y)/p)}},t.prototype.getFetchOptions=function(){return{timeExtent:this._exportWMSImageParameters.timeExtent}},r.__decorate([s.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),t=r.__decorate([s.subclass("esri.views.3d.layers.WMSLayerView3D")],t)}(c.WMSLayerView(p))}));