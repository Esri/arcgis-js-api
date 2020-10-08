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

define(["require","exports","tslib","../core/Accessor","../core/Collection","../core/watchUtils","../core/accessorSupport/decorators"],(function(e,t,r,i,o,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BasemapView=void 0;var s=function(e){function t(t){var r=e.call(this,t)||this;return r.view=null,r.baseLayerViews=new o,r.referenceLayerViews=new o,r._loadingHandle=n.init(r,"view.map.basemap",(function(e){e&&e.load().catch((function(){}))})),r}return r.__extends(t,e),t.prototype.destroy=function(){this._set("view",null),this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null)},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.view||this.view.suspended},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return(!this.view||!this.view.suspended)&&!(!(this.view&&this.view.map&&this.view.map.basemap)||this.view.map.basemap.loaded)},enumerable:!1,configurable:!0}),r.__decorate([a.property({constructOnly:!0})],t.prototype,"view",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"baseLayerViews",void 0),r.__decorate([a.property({readOnly:!0})],t.prototype,"referenceLayerViews",void 0),r.__decorate([a.property({readOnly:!0,dependsOn:["view.suspended"]})],t.prototype,"suspended",null),r.__decorate([a.property({type:Boolean,readOnly:!0,dependsOn:["view.suspended","view.map.basemap.loaded"]})],t.prototype,"updating",null),t=r.__decorate([a.subclass("esri.views.BasemapView")],t)}(i);t.BasemapView=s}));