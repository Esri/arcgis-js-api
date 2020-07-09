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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Widget","./support/widget","./Zoom/IconButton","./Zoom/ZoomViewModel"],(function(o,t,e,i,n,r,s,a){var l="esri-zoom esri-widget",u="esri-zoom--horizontal",d="esri-icon-plus",p="esri-icon-minus",c="esri-icon-zoom-in-magnifying-glass";return function(o){function t(t,e){var i=o.call(this,t,e)||this;return i.iconClass=c,i.label=void 0,i.messages=null,i.view=null,i.viewModel=new a,i}return e.__extends(t,o),t.prototype.initialize=function(){this._zoomInButton=new s({action:this.zoomIn,iconClass:d}),this._zoomOutButton=new s({action:this.zoomOut,iconClass:p})},t.prototype.destroy=function(){this._zoomInButton.destroy(),this._zoomOutButton.destroy(),this._zoomInButton=null,this._zoomOutButton=null},Object.defineProperty(t.prototype,"layout",{set:function(o){"horizontal"!==o&&(o="vertical"),this._set("layout",o)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var o,t=this.viewModel,e=((o={})[u]="horizontal"===this.layout,o);return this._zoomInButton.enabled="ready"===t.state&&t.canZoomIn,this._zoomOutButton.enabled="ready"===t.state&&t.canZoomOut,this._zoomInButton.title=this.messages.zoomIn,this._zoomOutButton.title=this.messages.zoomOut,r.tsx("div",{class:this.classes(l,e)},this._zoomInButton.render(),this._zoomOutButton.render())},t.prototype.zoomIn=function(){},t.prototype.zoomOut=function(){},e.__decorate([i.property()],t.prototype,"iconClass",void 0),e.__decorate([i.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],t.prototype,"label",void 0),e.__decorate([i.property({value:"vertical"}),r.renderable()],t.prototype,"layout",null),e.__decorate([i.property(),r.renderable(),r.messageBundle("esri/widgets/Zoom/t9n/Zoom")],t.prototype,"messages",void 0),e.__decorate([i.aliasOf("viewModel.view"),r.renderable()],t.prototype,"view",void 0),e.__decorate([i.property({type:a}),r.renderable(["viewModel.canZoomIn","viewModel.canZoomOut","viewModel.state"])],t.prototype,"viewModel",void 0),e.__decorate([i.aliasOf("viewModel.zoomIn")],t.prototype,"zoomIn",null),e.__decorate([i.aliasOf("viewModel.zoomOut")],t.prototype,"zoomOut",null),t=e.__decorate([i.subclass("esri.widgets.Zoom")],t)}(n)}));