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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","./RefreshableLayerView"],function(e,r,t,o,u,p,a,n){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){var r=this.layer;if(!e)return p.reject(new u("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}));var t=r.popupEnabled;if(!t)return p.reject(new u("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}));var o=this.createFetchPopupFeaturesQuery(e),a=o.extent,n=o.width,s=o.height,i=o.x,c=o.y;if(!(a&&n&&s))return p.reject(new u("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:n,height:s}));var h=r.fetchFeatureInfo(a,n,s,i,c);return h?h.then(function(e){return[e]}):p.resolve([])},o([a.property()],r.prototype,"layer",void 0),r=o([a.subclass("esri.views.layers.WMSLayerView")],r)}(a.declared(n))});