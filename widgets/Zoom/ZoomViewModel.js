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

define(["require","exports","tslib","../../core/Accessor","../../core/promiseUtils","../../core/accessorSupport/decorators","./ZoomConditions2D","./ZoomConditions3D"],(function(o,e,t,r,i,n,s,a){"use strict";return function(o){function e(e){var t=o.call(this,e)||this;return t.canZoomIn=!1,t.canZoomOut=!1,t}return t.__extends(e,o),e.prototype.destroy=function(){this.view=null},Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"view",{set:function(o){o?"2d"===o.type?this._zoomConditions=new s({view:o}):"3d"===o.type&&(this._zoomConditions=new a({view:o})):this._zoomConditions=null,this._set("view",o)},enumerable:!1,configurable:!0}),e.prototype.zoomIn=function(){if(this.canZoomIn){var o=this.view;"2d"===o.type?o.mapViewNavigation.zoomIn():i.ignoreAbortErrors(o.goTo({zoomFactor:2}))}},e.prototype.zoomOut=function(){if(this.canZoomOut){var o=this.view;"2d"===o.type?o.mapViewNavigation.zoomOut():i.ignoreAbortErrors(o.goTo({zoomFactor:.5}))}},t.__decorate([n.property()],e.prototype,"_zoomConditions",void 0),t.__decorate([n.property({aliasOf:"_zoomConditions.canZoomIn",readOnly:!0})],e.prototype,"canZoomIn",void 0),t.__decorate([n.property({aliasOf:"_zoomConditions.canZoomOut",readOnly:!0})],e.prototype,"canZoomOut",void 0),t.__decorate([n.property({dependsOn:["view.ready"],readOnly:!0})],e.prototype,"state",null),t.__decorate([n.property()],e.prototype,"view",null),e=t.__decorate([n.subclass("esri.widgets.Zoom.ZoomViewModel")],e)}(r)}));