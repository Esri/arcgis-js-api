// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../geometry/Point","../../layers/support/timeUtils","../../tasks/support/Query","./support/popupUtils"],function(e,r,t,o,p,i,s,a,n,u,l,c,y,d){Object.defineProperty(r,"__esModule",{value:!0}),r.ImageryLayerView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.view=null,r}return t(r,e),r.prototype.fetchPopupFeatures=function(e,r){return i(this,void 0,void 0,function(){var t,o,i,u,c,w,h,f,m,v,R;return p(this,function(p){switch(p.label){case 0:if(t=this.layer,!e)return[2,n.reject(new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}))];if(o=t.popupEnabled,i=d.getFetchPopupTemplate(t,r),!o||!a.isSome(i))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:o,popupTemplate:i});return[4,i.getRequiredFields()];case 1:return u=p.sent(),c=new y,c.geometry=e,c.outFields=u,c.outSpatialReference=e.spatialReference,w=this.view.resolution,h="2d"===this.view.type?new l(w,w,this.view.spatialReference):new l(.5*w,.5*w,this.view.spatialReference),f=i.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},m=f.returnTopmostRaster,v=f.showNoDataRecords,R={returnDomainValues:!0,returnTopmostRaster:m,pixelSize:h,showNoDataRecords:v},[2,t.queryVisibleRasters(c,R).then(function(e){return e})]}})})},o([u.property()],r.prototype,"layer",void 0),o([u.property()],r.prototype,"view",void 0),o([u.property(c.combinedViewLayerTimeExtentProperty)],r.prototype,"timeExtent",void 0),r=o([u.subclass("esri.views.layers.ImageryLayerView")],r)}(u.declared(e))}});