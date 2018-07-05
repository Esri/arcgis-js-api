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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../geometry/Extent","../../../layers/support/ExportWMSImageParameters","./DynamicLayerView3D"],function(e,t,r,a,i,n,o,s){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){var e=this;this._exportWMSImageParameters=new o({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(t){e._imageVersion!==t&&(e._imageVersion=t,e.refetch())}))},t.prototype.destroy=function(){this._exportWMSImageParameters&&(this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null)},t.prototype.beforeFetch=function(){this._imageVersion=this._exportWMSImageParameters.version},t.prototype.getPopupData=function(e){var t=e.center,r=this.findExtentInfoAt(t);if(r){var a=r.extent,i=new n(a[0],a[1],a[2],a[3],r.spatialReference),o=r.imageSize,s=o.width,p=o.height,u=i.width/s,h=Math.round((t.x-i.xmin)/u),c=Math.round((i.ymax-t.y)/u),m=this.layer.fetchFeatureInfo(i,s,p,h,c);if(m)return m.then(function(e){return[e]})}return null},t=a([i.subclass("esri.views.3d.layers.WMSLayerView3D")],t)}(i.declared(s))});