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

define(["require","exports","tslib","../../core/Collection","../../core/Evented","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../LayerList/support/layerListUtils","./ListItem"],(function(t,e,i,o,r,n,s,a,l,d){var c="map",p="tables",u="layer-list-mode",m=o.ofType(d);return function(t){function e(e){var i=t.call(this,e)||this;return i._handles=new n,i.listItemCreatedFunction=null,i.tableItems=new m,i.map=null,i}return i.__extends(e,t),e.prototype.initialize=function(){var t=this;this._handles.add([s.init(this,["map","map.loaded"],(function(){return t._mapHandles()}))],c)},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.map=null,this.tableItems.removeAll()},Object.defineProperty(e.prototype,"state",{get:function(){var t,e=null===(t=this.map)||void 0===t?void 0:t.loadStatus;return"loaded"===e?"ready":"loading"===e?"loading":"disabled"},enumerable:!0,configurable:!0}),e.prototype.triggerAction=function(t,e){t&&this.emit("trigger-action",{action:t,item:e})},e.prototype._mapHandles=function(){var t=this,e=this._handles,i=this.map;e.remove(p),this._compileList(),i&&i.loaded&&e.add([s.init(this,"map.tables",(function(){return t._compileList()})),s.init(this,"listItemCreatedFunction",(function(){return t._compileList()}))],p)},e.prototype._modifyListItem=function(t){if("function"==typeof this.listItemCreatedFunction){var e={item:t};this.listItemCreatedFunction.call(null,e)}},e.prototype._removeAllItems=function(){this.tableItems.removeAll()},e.prototype._getViewableTables=function(t){if(t)return t.filter((function(t){return"hide"!==l.findLayerListMode(t)}))},e.prototype._watchTablesListMode=function(t){var e=this,i=this._handles;i.remove(u),t&&t.forEach((function(t){i.add(s.watch(t,"listMode",(function(){return e._compileList()})),u)}))},e.prototype._compileList=function(){var t=this.get("map.tables");this._watchTablesListMode(t);var e=this._getViewableTables(t);e&&e.length?(this._createNewItems(e),this._modifyOrRemoveItems(e),this._sortItems(e)):this._removeAllItems()},e.prototype._createNewItems=function(t){var e=this.tableItems;t.forEach((function(t){e.find((function(e){return e.layer===t}))||e.add(new d({layer:t}))}))},e.prototype._modifyOrRemoveItems=function(t){var e=this,i=this.tableItems;i.forEach((function(o){o&&(t&&t.find((function(t){return o.layer===t}))?e._modifyListItem(o):i.remove(o))}))},e.prototype._sortItems=function(t){this.tableItems.sort((function(e,i){var o=t.indexOf(e.layer),r=t.indexOf(i.layer);return o>r?-1:o<r?1:0}))},i.__decorate([a.property()],e.prototype,"listItemCreatedFunction",void 0),i.__decorate([a.property({type:m})],e.prototype,"tableItems",void 0),i.__decorate([a.property()],e.prototype,"map",void 0),i.__decorate([a.property({dependsOn:["map","map.loadStatus"],readOnly:!0})],e.prototype,"state",null),e=i.__decorate([a.subclass("esri.widgets.TableList.TableListViewModel")],e)}(r.EventedAccessor)}));