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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Collection","../../../core/collectionUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../layers/support/ClipArea","../../layers/support/ClipRect","../../layers/support/Geometry","../../layers/support/Path"],(function(e,t,i,r,n,s,p,o,a,d,u,c){Object.defineProperty(t,"__esModule",{value:!0});var l=n.ofType({key:"type",base:a,typeMap:{rect:d,path:c,geometry:u}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new l,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e.requestUpdate()}),(function(){}));var t=function(){return e.notifyChange("rendering")};this.handles.add([p.init(this,"suspended",(function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)}),!0),p.init(this,["fullOpacity","container"],(function(){e.container&&(e.container.opacity=e.fullOpacity)}),!0),p.on(this,"container","post-render",t),p.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var s=!r,p=!n;!s&&e<=r&&(s=!0),!p&&e>=n&&(p=!0),t=s&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([o.property({type:l,set:function(e){var t=s.referenceSetter(e,this._get("clips"),l);this._set("clips",t)}})],t.prototype,"clips",void 0),r([o.property()],t.prototype,"moving",void 0),r([o.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([o.property()],t.prototype,"attached",void 0),r([o.property()],t.prototype,"container",void 0),r([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([o.property()],t.prototype,"updateRequested",void 0),r([o.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),r([o.property()],t.prototype,"view",void 0),t=r([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(o.declared(e))}}));