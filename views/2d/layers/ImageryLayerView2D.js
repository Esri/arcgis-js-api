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

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./LayerView2D","./imagery/ImageryGraphicsView2D","./imagery/ImageryView2D","../../layers/ImageryLayerView","../../layers/LayerView","../../layers/RefreshableLayerView"],(function(e,t,i,r,s,a,n,o,u,p,l,y){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t}return i.__extends(t,e),Object.defineProperty(t.prototype,"pixelData",{get:function(){return this.updating?null:this.subview.getPixelData()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!(this.subview&&!this.subview.updating)},enumerable:!1,configurable:!0}),t.prototype.hitTest=function(e,t){return this.suspended||!this.subview?r.resolve(null):this.subview.hitTest(e,t)},t.prototype.update=function(e){var t;null===(t=this.subview)||void 0===t||t.update(e)},t.prototype.attach=function(){var e=this;this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.handles.add([s.init(this,"layer.exportImageServiceParameters.version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),this.watch("timeExtent",(function(){e.subview.timeExtent=e.timeExtent,e.requestUpdate()})),this.layer.on("redraw",(function(){return e.subview.redraw()})),s.watch(this.layer,"renderer",(function(){return e._setSubView()}))],"imagerylayerview-update")},t.prototype.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.subview.destroy(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return!this.subview||this.subview.isUpdating()},t.prototype._setSubView=function(){var e,t,i,r="Imagery";"vector-field"===(null===(e=this.layer.renderer)||void 0===e?void 0:e.type)&&"lerc"===this.layer.format&&(r="Graphics"),this.subview&&this.subview.type===r||(null===(t=this.subview)||void 0===t||t.uninstall(this.container),null===(i=this.subview)||void 0===i||i.destroy(),this.subview="Imagery"===r?new u.default({layer:this.layer,view:this.view}):new o.default({layer:this.layer,view:this.view}),this.subview.attach(),this.subview.install(this.container)),this.requestUpdate()},i.__decorate([a.property({dependsOn:["updating"]})],t.prototype,"pixelData",null),i.__decorate([a.property({readOnly:!0,dependsOn:["subview.updating"]})],t.prototype,"updating",null),i.__decorate([a.property()],t.prototype,"subview",void 0),t=i.__decorate([a.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(p.ImageryLayerView(y.RefreshableLayerView(n.LayerView2DMixin(l))))}));