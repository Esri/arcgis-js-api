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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/HandleRegistry","../../core/watchUtils"],function(e,t,n,o,r,i,a,p){var l=function(e){function t(t){var n=e.call(this,t)||this;return n._viewpointHandle=null,n._handles=new a,n}return n(t,e),t.prototype.destroy=function(){this._viewpointHandle=null,this.view=null,this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"autoCollapse",{set:function(e){this._set("autoCollapse",e),this._watchViewpoint()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"expanded",{set:function(e){var t=!!e;this._set("expanded",t),this._viewpointHandleChange(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){this._set("view",e),this._watchViewpoint()},enumerable:!0,configurable:!0}),t.prototype._viewpointHandleChange=function(e){var t=this;this._viewpointHandle&&(e?p.whenTrueOnce(this.view,"stationary",function(){return t._viewpointHandle.resume()}):this._viewpointHandle.pause())},t.prototype._watchViewpoint=function(){var e=this;this._handles.removeAll(),this._viewpointHandle=null;var t=this,n=t.autoCollapse,o=t.view;o&&n&&o.then(function(){var t="3d"===o.type?"camera":"viewpoint",n=p.pausable(o,t,function(){return e._collapse()});e._handles.add(n),e._viewpointHandle=n})},t.prototype._collapse=function(){this.expanded=!1},o([r.property()],t.prototype,"autoCollapse",null),o([r.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),o([r.property({value:!1})],t.prototype,"expanded",null),o([r.property({value:null})],t.prototype,"view",null),t=o([r.subclass("esri.widgets.Expand.ExpandViewModel")],t)}(r.declared(i));return l});