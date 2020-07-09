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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/promiseUtils","../../core/accessorSupport/decorators"],(function(e,t,r,o,n,u){Object.defineProperty(t,"__esModule",{value:!0}),t.WMSLayerView=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,u,i,a,p,s,c,h,f;return r.__generator(this,(function(r){if(t=this.layer,!e)return[2,n.reject(new o("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(!(u=t.popupEnabled))return[2,n.reject(new o("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:u}))];if(i=this.createFetchPopupFeaturesQuery(e),a=i.extent,p=i.width,s=i.height,c=i.x,h=i.y,!(a&&p&&s))throw new o("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:p,height:s});return[2,(f=t.fetchFeatureInfo(a,p,s,c,h))?f.then((function(e){return[e]})):n.resolve([])]}))}))},r.__decorate([u.property()],t.prototype,"layer",void 0),t=r.__decorate([u.subclass("esri.layers.mixins.WMSLayerView")],t)}(e)}}));