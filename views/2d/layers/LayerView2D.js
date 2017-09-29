// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/watchUtils","../../layers/LayerView"],function(e,t,i,r,n,o,s){var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.then(function(){e.requestUpdate()}),o.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),o.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.isRendering()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){return this.isFulfilled()&&!this.isResolved()?void(this.updateRequested=!1):(this._set("updateParameters",e),void(this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))))},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return this.attached&&(this.moving||this.container.renderRequested)},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var i=this.view.scale,r=t.minScale,n=t.maxScale,o=!r,s=!n;!o&&r>=i&&(o=!0),!s&&i>=n&&(s=!0),e=o&&s}return e},r([n.property()],t.prototype,"attached",void 0),r([n.property()],t.prototype,"container",void 0),r([n.property()],t.prototype,"moving",void 0),r([n.property({dependsOn:["moving"]})],t.prototype,"rendering",null),r([n.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([n.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([n.property()],t.prototype,"updateRequested",void 0),r([n.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([n.property()],t.prototype,"view",void 0),t=r([n.subclass("esri.views.2d.layers.LayerView2D")],t)}(n.declared(s));return p});