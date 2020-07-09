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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Collection","../../../core/Handles","../../../core/maybe","../../../core/watchUtils","../../../core/accessorSupport/decorators"],(function(e,t,r,n,o,i,l,a,p){Object.defineProperty(t,"__esModule",{value:!0});var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.id="root",t.parent=null,t.children=new o,t.layers=new o,t.level=0,t.collapsed=!0,t._handles=new i,t._childIds=new Set,t._layerUniqueIds=new Set,t}return r.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([this.layers.on("before-add",(function(t){e._layerUniqueIds.has(t.item.uid)?t.preventDefault():e._layerUniqueIds.add(t.item.uid)})),this.layers.on("after-add",(function(t){var r=t.item;e._handles.add([a.init(r,"visible",(function(){return e.notifyChange("visible")})),a.init(r,"title",(function(){return e.notifyChange("title")}))],r.uid)})),this.layers.on("before-remove",(function(t){var r=t.item;e._handles.remove(r.uid),e.notifyChange("title"),e.notifyChange("visible")})),this.children.on("before-add",(function(t){e._childIds.has(t.item.id)?t.preventDefault():(t.item._set("parent",e),e._childIds.add(t.item.id))}))])},t.prototype.destroy=function(){this._handles.destroy(),this.children.forEach((function(e){return e.destroy()}))},Object.defineProperty(t.prototype,"hasChildren",{get:function(){return this.children.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isRoot",{get:function(){return 0===this.level},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isLeaf",{get:function(){return!this.hasChildren},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isDiscipline",{get:function(){return 1===this.level},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return s(this.layers,(function(e){return e.visible}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return s(this.layers,(function(e){return e.title}))||this.layers.items.map((function(e){return e.title})).join(", ")||null},enumerable:!0,configurable:!0}),t.prototype.toggleVisibility=function(e){var t=void 0===e?!this.visible:e;this.layers.forEach((function(e){return e.visible=t}))},t.prototype.toggleCollapsed=function(e){this.collapsed=void 0===e?!this.collapsed:e},t.prototype.expand=function(){this.collapsed=!1},t.prototype.expandAll=function(){this.expand(),this.children.forEach((function(e){return e.expandAll()}))},t.prototype.collapse=function(){this.collapsed=!0},t.prototype.collapseAll=function(){this.collapse(),this.children.forEach((function(e){return e.collapseAll()}))},r.__decorate([p.property({nonNullable:!0})],t.prototype,"id",void 0),r.__decorate([p.property()],t.prototype,"parent",void 0),r.__decorate([p.property({nonNullable:!0,readOnly:!0})],t.prototype,"children",void 0),r.__decorate([p.property({nonNullable:!0,readOnly:!0})],t.prototype,"layers",void 0),r.__decorate([p.property({nonNullable:!0})],t.prototype,"level",void 0),r.__decorate([p.property({nonNullable:!0})],t.prototype,"collapsed",void 0),r.__decorate([p.property({readOnly:!0,dependsOn:["children.length"]})],t.prototype,"hasChildren",null),r.__decorate([p.property({readOnly:!0,dependsOn:["level"]})],t.prototype,"isRoot",null),r.__decorate([p.property({readOnly:!0,dependsOn:["hasChildren"]})],t.prototype,"isLeaf",null),r.__decorate([p.property({readOnly:!0,dependsOn:["level"]})],t.prototype,"isDiscipline",null),r.__decorate([p.property({readOnly:!0})],t.prototype,"visible",null),r.__decorate([p.property({readOnly:!0})],t.prototype,"title",null),t=r.__decorate([p.subclass("esri.widgets.BuildingExplorer.support.LayerTreeNode")],t)}(n);function s(e,t){for(var r=null,n=0,o=e.items;n<o.length;n++){var i=t(o[n]);if(l.isSome(r)&&r!==i)return null;r=i}return r}t.LayerTreeNode=d}));