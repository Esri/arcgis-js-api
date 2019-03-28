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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","./DynamicLayerView3D","./support/popupUtils3D","../../layers/MapImageLayerView"],function(e,r,t,a,s,o,i,p,n){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._exportImageParameters=null,r._imageVersion=null,r.updateWhenStationary=!0,r}return t(r,e),r.prototype.initialize=function(){var e=this;this._exportImageParameters=new o.ExportImageParameters({layer:this.layer}),this.handles.add(this._exportImageParameters.watch("version",function(r){e._imageVersion!==r&&(e._imageVersion=r,e.refetch())}))},r.prototype.destroy=function(){this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)},r.prototype.createFetchPopupFeaturesQueryGeometry=function(e,r){return p.createQueryGeometry(e,r,this.view)},r.prototype.beforeFetch=function(){this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale),this._imageVersion=this._exportImageParameters.version},r=a([s.subclass("esri.views.3d.layers.MapImageLayerView3D")],r)}(s.declared(i,n))});