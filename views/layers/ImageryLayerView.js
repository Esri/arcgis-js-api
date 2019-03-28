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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../tasks/support/Query","./RefreshableLayerView","./support/popupUtils"],function(e,r,t,p,o,i,u,a,s,n,l,c,y){return function(e){function r(r){return e.call(this,r)||this}return t(r,e),r.prototype.fetchPopupFeatures=function(e,r){return i(this,void 0,void 0,function(){var t,p,i,n,c,d;return o(this,function(o){switch(o.label){case 0:if(t=this.layer,!e)return[2,s.reject(new u("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(p=t.popupEnabled,i=y.getFetchPopupTemplate(t,r),!p||!a.isSome(i))throw new u("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:i});return[4,i.getRequiredFields()];case 1:return n=o.sent(),c=new l,c.geometry=e,c.outFields=n,d={rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0,layerView:this,popupTemplate:i},[2,t.queryVisibleRasters(c,d).then(function(e){return e})]}})})},p([n.property()],r.prototype,"layer",void 0),r=p([n.subclass("esri.views.layers.ImageryLayerView")],r)}(n.declared(c))});