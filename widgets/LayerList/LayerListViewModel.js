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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Collection","../../core/Evented","../../core/HandleRegistry","../../core/watchUtils","./ListItem","./support/layerListUtils","dojo/debounce","../../core/accessorSupport/decorators"],function(e,t,i,n,o,r,s,a,p,c,l,h,d){var u={map:"map",view:"view",layers:"layers",listItems:"list-items"},y="hide",m=r.ofType(c),_=function(e){function t(t){var i=e.call(this)||this;return i._actionsOpenMap=new Map,i._itemOpenMap=new Map,i._handles=new a,i.createActionsFunction=null,i.operationalItems=new m,i.view=null,i._handles.add(p.init(i,"view",function(){return i._viewHandles()}),u.view),i._compileList=h(i._compileList,0),i}return i(t,e),t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.triggerAction=function(e,t){e&&this.emit("trigger-action",{action:e,item:t})},t.prototype._createMapHandles=function(e){var t=this;this._handles.remove(u.map);var i=e&&e.get("map.layers");if(i){var n=i.on("change",function(){return t._compileList(e)});this._handles.add(n,u.map)}},t.prototype._resetMapItems=function(e){this._actionsOpenMap.clear(),this._itemOpenMap.clear(),this._createMapHandles(e),this._compileList(e)},t.prototype._setUpChildActions=function(e){var t=this;e.forEach(function(e){return t._setupActions(e)})},t.prototype._watchItemProperties=function(e){var t=this;this._handles.add([p.watch(e,"actionsOpen",function(i){t._actionsOpenMap.set(e.layer,i)}),p.watch(e,"open",function(i){t._itemOpenMap.set(e.layer,i)}),e.children.on("change",function(){t._setUpChildActions(e.children)})],u.listItems)},t.prototype._setupActions=function(e){if("function"==typeof this.createActionsFunction){var t={item:e},i=this.createActionsFunction.call(null,t);i&&i.length&&(e.actionsSections=i)}},t.prototype._createListItem=function(e){var t=!!this._actionsOpenMap.get(e),i=!!this._itemOpenMap.get(e),n=new c({actionsOpen:t,open:i,layer:e,view:this.view});return this._setupActions(n),this._setUpChildActions(n.children),this._watchItemProperties(n),n},t.prototype._compileList=function(e){var t=this;if(!this.destroyed){this._handles.remove(u.listItems);var i=e&&e.get("map.layers"),n=[];i&&i.forEach(function(e){var i=l.findLayerListMode(e);if(i!==y){var o=t._createListItem(e);n.unshift(o)}}),this.operationalItems.removeAll(),this.operationalItems.addMany(n)}},t.prototype._viewHandles=function(){var e=this,t=this.view;this._handles.remove(u.layers),this._resetMapItems(t),t&&t.then(function(){e._handles.add([p.init(t,"map",function(){return e._resetMapItems(t)}),t.layerViews.on("change",function(){return e._compileList(t)}),p.init(e,"createActionsFunction",function(){return e._compileList(t)})],u.layers)})},t}(d.declared(o,s));return n([d.property()],_.prototype,"createActionsFunction",void 0),n([d.property({type:m})],_.prototype,"operationalItems",void 0),n([d.property({dependsOn:["view.ready"],readOnly:!0})],_.prototype,"state",null),n([d.property()],_.prototype,"view",void 0),_=n([d.subclass("esri.widgets.LayerList.LayerListViewModel")],_)});