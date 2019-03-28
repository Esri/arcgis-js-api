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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators","./RefreshableLayerView"],function(e,r,t,o,p,u,n,i,s,a){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e){return u(this,void 0,void 0,function(){var r,t,o,u,s,a,c,h,l,f;return p(this,function(p){if(r=this.layer,!e)return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];if(!(t=r.popupEnabled))return[2,i.reject(new n("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:t}))];if(o=this.createFetchPopupFeaturesQuery(e),u=o.extent,s=o.width,a=o.height,c=o.x,h=o.y,!(l=u&&s&&a))throw new n("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:u,width:s,height:a});return f=r.fetchFeatureInfo(u,s,a,c,h),[2,f?f.then(function(e){return[e]}):i.resolve([])]})})},o([s.property()],r.prototype,"layer",void 0),r=o([s.subclass("esri.views.layers.WMSLayerView")],r)}(s.declared(a))});