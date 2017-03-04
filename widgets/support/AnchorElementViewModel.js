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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/watchUtils","../../core/Accessor","../../core/HandleRegistry"],function(e,t,i,r,n,o,s,a){var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t.screenPoint=null,t.state="disabled",t}return i(t,e),t.prototype.destroy=function(){this._viewReady&&this._viewReady.cancel(),this.view=null,this._handles.destroy(),this._handles=null,this._viewWatch=null},Object.defineProperty(t.prototype,"point",{set:function(e){this._viewControl(e),this._createScreenPoint(e,this.view),this._set("point",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"view",{set:function(e){var t=this;this._handles&&(this._handles.remove("viewHandles"),this._viewWatch=null),this._viewReady&&this._viewReady.cancel(),this._set("state","disabled"),e&&(this._viewReady=e.then(function(){t._set("state","ready");var i="viewpoint";"3d"===e.type&&(i="camera"),t._viewWatch=o.pausable(e,i,function(){t._createScreenPoint(t.point,t.view)}),t._handles.add(t._viewWatch,"viewHandles"),t._viewControl(t.point)})),this._set("view",e)},enumerable:!0,configurable:!0}),t.prototype._viewControl=function(e){this._viewWatch&&(e?this._viewWatch.resume():this._viewWatch.pause())},t.prototype._createScreenPoint=function(e,t){e?this.screenPoint=t.toScreen(e.x,e.y,e.z):this.screenPoint=null},t}(n.declared(s));return r([n.property()],c.prototype,"point",null),r([n.property()],c.prototype,"screenPoint",void 0),r([n.property({readOnly:!0})],c.prototype,"state",void 0),r([n.property()],c.prototype,"view",null),c=r([n.subclass("esri.widgets.support.AnchorElementViewModel")],c)});