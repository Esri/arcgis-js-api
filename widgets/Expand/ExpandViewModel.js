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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators"],function(e,t,n,o,i,r,p,a){return function(e){function t(t){var n=e.call(this,t)||this;return n._viewpointHandle=null,n._handles=new r,n.group=null,n}return n(t,e),t.prototype.initialize=function(){var e=this;this._handles.add(p.on(this,"view.ui","expand",function(t){var n=t.target;n&&n!==e&&n.expanded&&n.group&&n.group===e.group&&e._collapse()}))},t.prototype.destroy=function(){this._viewpointHandle=null,this.view=null,this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"autoCollapse",{set:function(e){this._set("autoCollapse",e),this._watchViewpoint()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"expanded",{set:function(e){var t=!!e;this._set("expanded",t);var n=this.get("view.ui");n&&n.emit("expand",{target:this}),this._viewpointHandleChange(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){this._set("view",e),this._watchViewpoint()},enumerable:!0,configurable:!0}),t.prototype._viewpointHandleChange=function(e){var t=this;this._viewpointHandle&&(e?p.whenTrueOnce(this.view,"stationary",function(){return t._viewpointHandle.resume()}):this._viewpointHandle.pause())},t.prototype._watchViewpoint=function(){var e=this;this._handles.remove("viewpoint"),this._viewpointHandle=null;var t=this,n=t.autoCollapse,o=t.view;o&&n&&o.when(function(){var t="3d"===o.type?"camera":"viewpoint",n=p.pausable(o,t,function(){return e._collapse()});e._handles.add(n,"viewpoint"),e._viewpointHandle=n})},t.prototype._collapse=function(){this.expanded=!1},o([a.property({value:!1})],t.prototype,"autoCollapse",null),o([a.property({value:!1})],t.prototype,"expanded",null),o([a.property()],t.prototype,"group",void 0),o([a.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),o([a.property({value:null})],t.prototype,"view",null),t=o([a.subclass("esri.widgets.Expand.ExpandViewModel")],t)}(a.declared(i))});