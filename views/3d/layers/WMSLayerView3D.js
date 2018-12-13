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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./DynamicLayerView3D","../../layers/WMSLayerView"],function(e,t,r,a,i,s,n,o,p){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){var e=this;this._exportWMSImageParameters=new n({layer:this.layer}),this.handles.add(this._exportWMSImageParameters.watch("version",function(t){e._imageVersion!==t&&(e._imageVersion=t,e.refetch())}))},t.prototype.destroy=function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null)},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?this.layer.supportsSpatialReference(this.view.spatialReference):e},t.prototype.createFetchPopupFeaturesQuery=function(e){var t=this.findExtentInfoAt(e),r=t.extent,a=new s(r[0],r[1],r[2],r[3],t.spatialReference),i=t.imageSize,n=i.width,o=i.height,p=a.width/n;return{extent:a,width:n,height:o,x:Math.round((e.x-a.xmin)/p),y:Math.round((a.ymax-e.y)/p)}},t.prototype.beforeFetch=function(){this._imageVersion=this._exportWMSImageParameters.version},a([i.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],t.prototype,"suspended",void 0),t=a([i.subclass("esri.views.3d.layers.WMSLayerView3D")],t)}(i.declared(o,p))});