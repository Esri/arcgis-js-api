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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./Zoom/nls/Zoom","../core/accessorSupport/decorators","./Widget","./Zoom/IconButton","./Zoom/ZoomViewModel","./support/widget"],(function(o,e,t,i,n,r,l,s,a,u){var p="esri-zoom esri-widget",c="esri-zoom--horizontal",d="esri-icon-plus",m="esri-icon-minus",y="esri-icon-zoom-in-magnifying-glass";return function(o){function e(e){var t=o.call(this,e)||this;return t.iconClass=y,t.label=n.widgetLabel,t.view=null,t.viewModel=new a,t}return t(e,o),e.prototype.postInitialize=function(){this._zoomInButton=new s({action:this.zoomIn,iconClass:d,title:n.zoomIn}),this._zoomOutButton=new s({action:this.zoomOut,iconClass:m,title:n.zoomOut})},Object.defineProperty(e.prototype,"layout",{set:function(o){"horizontal"!==o&&(o="vertical"),this._set("layout",o)},enumerable:!0,configurable:!0}),e.prototype.render=function(){var o,e=this.viewModel,t=((o={})[c]="horizontal"===this.layout,o);return this._zoomInButton.enabled="ready"===e.state&&e.canZoomIn,this._zoomOutButton.enabled="ready"===e.state&&e.canZoomOut,u.tsx("div",{class:this.classes(p,t)},this._zoomInButton.render(),this._zoomOutButton.render())},e.prototype.zoomIn=function(){},e.prototype.zoomOut=function(){},i([r.property()],e.prototype,"iconClass",void 0),i([r.property()],e.prototype,"label",void 0),i([r.property({value:"vertical"}),u.renderable()],e.prototype,"layout",null),i([r.aliasOf("viewModel.view"),u.renderable()],e.prototype,"view",void 0),i([r.property({type:a}),u.renderable(["viewModel.canZoomIn","viewModel.canZoomOut","viewModel.state"])],e.prototype,"viewModel",void 0),i([r.aliasOf("viewModel.zoomIn")],e.prototype,"zoomIn",null),i([r.aliasOf("viewModel.zoomOut")],e.prototype,"zoomOut",null),e=i([r.subclass("esri.widgets.Zoom")],e)}(r.declared(l))}));