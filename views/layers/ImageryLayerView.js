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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","../../tasks/support/Query","./RefreshableLayerView"],function(e,r,t,p,o,a,i,u,s){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){var r=this.layer;if(!e)return a.reject(new o("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));var t=r.popupTemplate,p=r.popupEnabled;if(!p||!t)return a.reject(new o("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:t}));var i=t.requiredFields,s=new u;s.geometry=e,s.outFields=i;var n={rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0,layerView:this};return r.queryVisibleRasters(s,n).then(function(e){return e})},p([i.property()],r.prototype,"layer",void 0),r=p([i.subclass("esri.views.layers.ImageryLayerView")],r)}(i.declared(s))});