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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","dojo/debounce","../../core/Accessor","../../core/Collection","../../core/Evented","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","./ListItem","./support/layerListUtils"],function(e,t,i,r,o,n,s,a,l,c,d,p,u){var h={map:"map",view:"view",layers:"layers",layerListMode:"layer-list-mode"},m=s.ofType(p);return function(e){function t(t){var i=e.call(this)||this;return i._handles=new l,i.listItemCreatedFunction=null,i.operationalItems=new m,i.view=null,i._handles.add(c.init(i,"view",function(){return i._viewHandles()}),h.view),i._compileList=o(i._compileList,0),i}return i(t,e),t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()},Object.defineProperty(t.prototype,"state",{get:function(){var e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"},enumerable:!0,configurable:!0}),t.prototype.triggerAction=function(e,t){e&&this.emit("trigger-action",{action:e,item:t})},t.prototype._createMapHandles=function(e){var t=this,i=this._handles;i.remove(h.map);var r=e&&e.get("map.layers");if(r){var o=r.on("change",function(){return t._compileList(e)});i.add(o,h.map)}},t.prototype._resetMapItems=function(e){this._createMapHandles(e),this._compileList(e)},t.prototype._watchItemProperties=function(e){var t=this;this._handles.add([e.children.on("change",function(){t._modifyListItemChildren(e.children)})],"children-change-"+e.uid)},t.prototype._modifyListItemChildren=function(e){var t=this;e.forEach(function(e){return t._modifyListItem(e)})},t.prototype._modifyListItem=function(e){if("function"==typeof this.listItemCreatedFunction){var t={item:e};this.listItemCreatedFunction.call(null,t)}this._modifyListItemChildren(e.children)},t.prototype._createListItem=function(e){var t=this.view,i=new p({layer:e,view:t});return this._watchItemProperties(i),i},t.prototype._removeAllItems=function(){var e=this,t=e._handles,i=e.operationalItems;i.forEach(function(e){t.remove("children-change-"+e.uid)}),i.removeAll()},t.prototype._compileList=function(e){var t=this;if(!this.destroyed){var i=this,r=i._handles,o=i.operationalItems,n=e&&e.get("map.layers");if(!n)return void this._removeAllItems();var s=n.filter(function(e){return"hide"!==u.findLayerListMode(e)});r.remove(h.layerListMode),n.forEach(function(i){r.add(c.watch(i,"listMode",function(){return t._compileList(e)}),h.layerListMode)}),this._createNewItems(o,s),this._modifyItems(o,s),this._sortItems(o,s)}},t.prototype._createNewItems=function(e,t){var i=this;t.forEach(function(t){e.find(function(e){return e.layer===t})||e.add(i._createListItem(t))})},t.prototype._modifyItems=function(e,t){var i=this,r=this._handles;e.forEach(function(o){if(o){t.find(function(e){return o.layer===e})?i._modifyListItem(o):(r.remove("children-change-"+o.uid),e.remove(o))}})},t.prototype._sortItems=function(e,t){e.sort(function(e,i){var r=t.indexOf(e.layer),o=t.indexOf(i.layer);return r>o?-1:r<o?1:0})},t.prototype._viewHandles=function(){var e=this,t=this,i=t._handles,r=t.view;i.remove(h.layers),i.remove(h.layerListMode),this._resetMapItems(r),r&&r.when(function(){i.add([c.init(r,"map",function(){return e._resetMapItems(r)}),r.layerViews.on("change",function(){return e._compileList(r)}),c.init(e,"listItemCreatedFunction",function(){return e._compileList(r)})],h.layers)})},r([d.property()],t.prototype,"listItemCreatedFunction",void 0),r([d.property({type:m})],t.prototype,"operationalItems",void 0),r([d.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),r([d.property()],t.prototype,"view",void 0),r([d.property()],t.prototype,"triggerAction",null),t=r([d.subclass("esri.widgets.LayerList.LayerListViewModel")],t)}(d.declared(n,a))});