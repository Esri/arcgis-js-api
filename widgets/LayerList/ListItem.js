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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../support/Action","../../layers/support/Sublayer","../../core/Identifiable","../../core/HandleRegistry","../../core/watchUtils","./support/layerListUtils","../../core/accessorSupport/decorators"],function(e,t,r,i,n,o,l,a,p,s,y,d,c){var u=o.ofType(o.ofType(l)),h="layer",f=v=function(e){function t(t){var r=e.call(this)||this;return r._handles=new s,r.actionsSections=new u,r.actionsOpen=!1,r.children=new(o.ofType(v)),r.error=null,r.open=!1,r.view=null,r.visible=null,r}return r(t,e),t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(t.prototype,"layer",{set:function(e){this._set("layer",e),this._watchLayerProperties(e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layerView",{get:function(){return this._findLayerView(this.layer)||null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return this.get("layer.title")||""},set:function(e){return void 0===e?void this._clearOverride("title"):void this._override("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){var e=this.layerView;return e?e.updating:this._isLayerUpdating(this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibleAtCurrentScale",{get:function(){return!d.isLayerOutsideScaleRange(this.layer,this.get("view.scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visibilityMode",{get:function(){return d.findLayerVisibilityMode(this.layer)||"independent"},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new v({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,children:this.children.clone(),layer:this.layer,open:this.open,title:this.title,view:this.view,visible:this.visible})},t.prototype._addChildren=function(e){var t=this;if(this.children.removeAll(),e){var r=[];e.forEach(function(e){if(d.canDisplayLayer(e)){var i=new v({layer:e,view:t.view});r.unshift(i)}}),this.children.addMany(r)}},t.prototype._watchSublayerChanges=function(e){var t=this;e&&this._handles.add(e.on("change",function(){t._addChildren(e)}),h)},t.prototype._initializeChildLayers=function(e){this._addChildren(e),this._watchSublayerChanges(e)},t.prototype._watchLayerProperties=function(e){var t=this;if(this._handles&&(this._handles.remove(h),e)){var r=d.getNormalizedChildLayerProperty(e);r&&this._handles.add(y.init(e,r,function(){t._initializeChildLayers(e[r])}),h)}},t.prototype._findLayerView=function(e){if(e){var t=this.get("view.allLayerViews");if(t){var r=t.find(function(t){return t.layer===e});return r}}},t.prototype._isLayerUpdating=function(e){return e instanceof a?!1:"loading"===e.loadStatus},t}(c.declared(n,p));i([c.property({type:u})],f.prototype,"actionsSections",void 0),i([c.property()],f.prototype,"actionsOpen",void 0),i([c.property({type:o})],f.prototype,"children",void 0),i([c.aliasOf("layer.loadError")],f.prototype,"error",void 0),i([c.property({value:null})],f.prototype,"layer",null),i([c.property({dependsOn:["layer","view"],readOnly:!0})],f.prototype,"layerView",null),i([c.property()],f.prototype,"open",void 0),i([c.property({dependsOn:["layer.title"]})],f.prototype,"title",null),i([c.property({dependsOn:["layer.loadStatus","layerView.updating"],readOnly:!0})],f.prototype,"updating",null),i([c.property({value:null})],f.prototype,"view",void 0),i([c.aliasOf("layer.visible")],f.prototype,"visible",void 0),i([c.property({dependsOn:["layer.minScale","layer.maxScale","view.scale"],readOnly:!0})],f.prototype,"visibleAtCurrentScale",null),i([c.property({dependsOn:["layer.visibilityMode"],readOnly:!0})],f.prototype,"visibilityMode",null),f=v=i([c.subclass("esri.widgets.LayerList.ListItem")],f);var v;return f});