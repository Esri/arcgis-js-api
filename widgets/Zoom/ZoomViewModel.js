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

define(["require","exports","tslib","../../core/Accessor","../../core/promiseUtils","../../core/accessorSupport/decorators","./ZoomConditions2D","./ZoomConditions3D"],(function(o,t,e,r,n,i,p,a){return function(o){function t(t){var e=o.call(this,t)||this;return e.canZoomIn=!1,e.canZoomOut=!1,e.zoomIn=e.zoomIn.bind(e),e.zoomOut=e.zoomOut.bind(e),e}return e.__extends(t,o),t.prototype.destroy=function(){this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(o){o?"2d"===o.type?this._zoomConditions=new p({view:o}):"3d"===o.type&&(this._zoomConditions=new a({view:o})):this._zoomConditions=null,this._set("view",o)},enumerable:!0,configurable:!0}),t.prototype.zoomIn=function(){if(this.canZoomIn){var o=this.view;"2d"===o.type?o.mapViewNavigation.zoomIn():n.ignoreAbortErrors(o.goTo({zoomFactor:2}))}},t.prototype.zoomOut=function(){if(this.canZoomOut){var o=this.view;"2d"===o.type?o.mapViewNavigation.zoomOut():n.ignoreAbortErrors(o.goTo({zoomFactor:.5}))}},e.__decorate([i.property()],t.prototype,"_zoomConditions",void 0),e.__decorate([i.property({aliasOf:"_zoomConditions.canZoomIn",readOnly:!0})],t.prototype,"canZoomIn",void 0),e.__decorate([i.property({aliasOf:"_zoomConditions.canZoomOut",readOnly:!0})],t.prototype,"canZoomOut",void 0),e.__decorate([i.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),e.__decorate([i.property()],t.prototype,"view",null),e.__decorate([i.property()],t.prototype,"zoomIn",null),e.__decorate([i.property()],t.prototype,"zoomOut",null),t=e.__decorate([i.subclass("esri.widgets.Zoom.ZoomViewModel")],t)}(r)}));