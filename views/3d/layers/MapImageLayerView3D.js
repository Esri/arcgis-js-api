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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","../../../layers/support/ExportImageParameters","./DynamicLayerView3D","../../layers/MapImageLayerView","../../support/drapedUtils"],(function(e,t,r,a,i,s,n,o){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateWhenStationary=!0,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this.imageParameters=new i.ExportImageParameters({view:this.view,layer:this.layer}),this.updatingHandles.add(this.imageParameters,"version",(function(){e.updatingHandles.addPromise(e.refreshDebounced())}))},t.prototype.destroy=function(){this.imageParameters&&(this.imageParameters.destroy(),this.imageParameters=null)},t.prototype.createFetchPopupFeaturesQueryGeometry=function(e,t){return o.createQueryGeometry(e,t,this.view)},t.prototype.getFetchOptions=function(){return{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp}},t=r.__decorate([a.subclass("esri.views.3d.layers.MapImageLayerView3D")],t)}(n.MapImageLayerView(s))}));