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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../layers/LayerView"],function(e,t,i,r,n,o,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()}),n.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.isRendering()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){if(this.isFulfilled()&&!this.isResolved())return void(this.updateRequested=!1);this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return this.attached&&(this.moving||this.container.renderRequested)},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var i=this.view.scale,r=t.minScale,n=t.maxScale,o=!r,p=!n;!o&&i<=r&&(o=!0),!p&&i>=n&&(p=!0),e=o&&p}return e},r([o.property()],t.prototype,"attached",void 0),r([o.property()],t.prototype,"container",void 0),r([o.property()],t.prototype,"moving",void 0),r([o.property({dependsOn:["moving"]})],t.prototype,"rendering",null),r([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([o.property()],t.prototype,"updateRequested",void 0),r([o.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([o.property()],t.prototype,"view",void 0),t=r([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(o.declared(p))});