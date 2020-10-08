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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators"],(function(e,t,i,o,n,a,r){"use strict";return function(e){function t(t){var i=e.call(this,t)||this;return i._handles=new n,i.navigationMode="pan",i.view=null,i}return i.__extends(t,e),t.prototype.initialize=function(){this._handles.add(a.when(this,"view.inputManager",this._setNavigationMode.bind(this)))},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")&&"3d"===this.view.type?"ready":"disabled"},enumerable:!1,configurable:!0}),t.prototype.toggle=function(){"disabled"!==this.state&&(this.navigationMode="pan"!==this.navigationMode?"pan":"rotate",this._setNavigationMode())},t.prototype._setNavigationMode=function(){this.get("view.inputManager").primaryDragAction="pan"===this.navigationMode?"pan":"rotate"},i.__decorate([r.property({dependsOn:["view.ready"],readOnly:!0})],t.prototype,"state",null),i.__decorate([r.property()],t.prototype,"navigationMode",void 0),i.__decorate([r.property()],t.prototype,"view",void 0),t=i.__decorate([r.subclass("esri.widgets.NavigationToggleViewModel")],t)}(o)}));