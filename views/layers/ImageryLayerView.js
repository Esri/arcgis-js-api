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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/accessorSupport/decorators","../../geometry/Point","../../layers/support/commonProperties","../../tasks/support/Query","./support/popupUtils"],(function(e,t,r,o,i,p,s,a,n,u,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageryLayerView=void 0,t.ImageryLayerView=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.view=null,t}return r.__extends(t,e),t.prototype.fetchPopupFeatures=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var s,n,l,y,d,m,w,h,f,v,_;return r.__generator(this,(function(r){switch(r.label){case 0:if(s=this.layer,!e)return[2,p.reject(new o("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}))];if(n=s.popupEnabled,l=c.getFetchPopupTemplate(s,t),!n||!i.isSome(l))throw new o("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});return[4,l.getRequiredFields()];case 1:return y=r.sent(),(d=new u).geometry=e,d.outFields=y,d.outSpatialReference=e.spatialReference,m=this.view.resolution,w="2d"===this.view.type?new a(m,m,this.view.spatialReference):new a(.5*m,.5*m,this.view.spatialReference),h=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f=h.returnTopmostRaster,v=h.showNoDataRecords,_={returnDomainValues:!0,returnTopmostRaster:f,pixelSize:w,showNoDataRecords:v},[2,s.queryVisibleRasters(d,_).then((function(e){return e}))]}}))}))},t.prototype.canResume=function(){var t;return!!e.prototype.canResume.call(this)&&(null===(t=this.timeExtent)||void 0===t?!0:!t.isEmpty)},r.__decorate([s.property()],t.prototype,"layer",void 0),r.__decorate([s.property({dependsOn:["timeExtent"]})],t.prototype,"suspended",void 0),r.__decorate([s.property(n.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),r.__decorate([s.property()],t.prototype,"view",void 0),t=r.__decorate([s.subclass("esri.views.layers.ImageryLayerView")],t)}(e)}}));