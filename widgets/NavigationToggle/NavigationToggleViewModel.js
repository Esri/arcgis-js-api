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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/watchUtils","../../core/Accessor","../../core/HandleRegistry"],function(e,t,o,i,r,n,a,s){var p=function(e){function t(t){var o=e.call(this,t)||this;return o._handles=new s,o.navigationMode="pan",o.view=null,o.toggle=o.toggle.bind(o),o}return o(t,e),t.prototype.initialize=function(){this._handles.add(n.when(this,"view.inputManager",this._setNavigationMode.bind(this)))},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"3d"===this.view.type?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.toggle=function(){"disabled"!==this.state&&(this.navigationMode="pan"!==this.navigationMode?"pan":"rotate",this._setNavigationMode())},t.prototype._setNavigationMode=function(){var e=this.get("view.inputManager");e.primaryDragAction="pan"===this.navigationMode?"pan":"rotate"},i([r.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),i([r.property()],t.prototype,"navigationMode",void 0),i([r.property()],t.prototype,"view",void 0),i([r.property()],t.prototype,"toggle",null),t=i([r.subclass("esri.widgets.NavigationToggleViewModel")],t)}(r.declared(a));return p});