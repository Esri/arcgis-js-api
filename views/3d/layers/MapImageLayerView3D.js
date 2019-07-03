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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","./DynamicLayerView3D","../../layers/MapImageLayerView","../../support/drapedUtils"],function(e,t,r,a,s,o,i,p,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageParameters=null,t.updateWhenStationary=!0,t}return r(t,e),t.prototype.initialize=function(){var e=this;this._exportImageParameters=new o.ExportImageParameters({view:this.view,layer:this.layer}),this.handles.add(this._exportImageParameters.watch("version",function(t){e.refreshDebounced()}))},t.prototype.destroy=function(){this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return n.createQueryGeometry(e,t,this.view)},t.prototype.getFetchOptions=function(){return{timeExtent:this._exportImageParameters.timeExtent,timestamp:this.refreshTimestamp}},t=a([s.subclass("esri.views.3d.layers.MapImageLayerView3D")],t)}(s.declared(i,p))});