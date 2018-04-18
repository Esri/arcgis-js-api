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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Zoom/nls/Zoom","../core/accessorSupport/decorators","./Widget","./Zoom/IconButton","./Zoom/ZoomViewModel","./support/widget"],function(o,t,e,n,i,r,l,a,s,u){var p={base:"esri-zoom esri-widget",horizontalLayout:"esri-zoom--horizontal",zoomInIcon:"esri-icon-plus",zoomOutIcon:"esri-icon-minus",widgetIcon:"esri-icon-zoom-in-magnifying-glass"};return function(o){function t(t){var e=o.call(this)||this;return e.iconClass=p.widgetIcon,e.label=i.widgetLabel,e.view=null,e.viewModel=new s,e}return e(t,o),t.prototype.postInitialize=function(){this._zoomInButton=new a({action:this.zoomIn,iconClass:p.zoomInIcon,title:i.zoomIn}),this._zoomOutButton=new a({action:this.zoomOut,iconClass:p.zoomOutIcon,title:i.zoomOut})},Object.defineProperty(t.prototype,"layout",{set:function(o){"horizontal"!==o&&(o="vertical"),this._set("layout",o)},enumerable:!0,configurable:!0}),t.prototype.render=function(){var o=this.viewModel,t=(e={},e[p.horizontalLayout]="horizontal"===this.layout,e);return this._zoomInButton.enabled="ready"===o.state&&o.canZoomIn,this._zoomOutButton.enabled="ready"===o.state&&o.canZoomOut,u.tsx("div",{class:p.base,classes:t},this._zoomInButton.render(),this._zoomOutButton.render());var e},t.prototype.zoomIn=function(){},t.prototype.zoomOut=function(){},n([r.property()],t.prototype,"iconClass",void 0),n([r.property()],t.prototype,"label",void 0),n([r.property({value:"vertical"}),u.renderable()],t.prototype,"layout",null),n([r.aliasOf("viewModel.view"),u.renderable()],t.prototype,"view",void 0),n([r.property({type:s}),u.renderable(["viewModel.canZoomIn","viewModel.canZoomOut","viewModel.state"])],t.prototype,"viewModel",void 0),n([r.aliasOf("viewModel.zoomIn")],t.prototype,"zoomIn",null),n([r.aliasOf("viewModel.zoomOut")],t.prototype,"zoomOut",null),t=n([r.subclass("esri.widgets.Zoom")],t)}(r.declared(l))});