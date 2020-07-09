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

define(["require","exports","tslib","../../../core/Collection","../../../core/collectionUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../engine","../../layers/support/ClipArea","../../layers/support/ClipRect","../../layers/support/Geometry","../../layers/support/Path"],(function(e,t,i,r,o,n,a,s,p,d,c,u){Object.defineProperty(t,"__esModule",{value:!0});var l=r.ofType({key:"type",base:p,typeMap:{rect:d,path:u,geometry:c}});t.LayerView2DMixin=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new l,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return i.__extends(t,e),t.prototype.initialize=function(){var e,t=this;this.container||(this.container=new s.Container),this.handles.add([n.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestUpdate()}),!0),n.init(this,["layer.opacity","container"],(function(){var e,i;t.container&&(t.container.opacity=null!==(i=null===(e=t.layer)||void 0===e?void 0:e.opacity)&&void 0!==i?i:1)}),!0),n.init(this,["layer.blendMode"],(function(e){t.container&&(t.container.blendMode=e)}),!0),this.clips.on("change",(function(){t.container.clips=t.clips,t.notifyChange("clips")}))]),this.container.clips=this.clips,(null===(e=this.view)||void 0===e?void 0:e.whenLayerView)?this.view.whenLayerView(this.layer).then((function(e){e!==t||t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){})):this.when().then((function(){t.attached||t.destroyed||(t.attach(),t.requestUpdate(),t.attached=!0)}),(function(){}))},t.prototype.destroy=function(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,o=i.maxScale;if(null!=r&&null!=o){var n=!r,a=!o;!n&&e<=r&&(n=!0),!a&&e>=o&&(a=!0),t=n&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){return!!e.prototype.canResume.call(this)&&this.isVisibleAtScale(this.view.scale)},i.__decorate([a.property({type:l,set:function(e){var t=o.referenceSetter(e,this._get("clips"),l);this._set("clips",t)}})],t.prototype,"clips",void 0),i.__decorate([a.property()],t.prototype,"moving",void 0),i.__decorate([a.property()],t.prototype,"attached",void 0),i.__decorate([a.property()],t.prototype,"container",void 0),i.__decorate([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i.__decorate([a.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i.__decorate([a.property()],t.prototype,"updateRequested",void 0),i.__decorate([a.property({dependsOn:["attached","updateRequested","suspended"]})],t.prototype,"updating",null),i.__decorate([a.property()],t.prototype,"view",void 0),t=i.__decorate([a.subclass("esri.views.2d.layers.LayerView2D")],t)}(e)}}));