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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Evented","../../core/Handles","../../core/watchUtils","../../core/watchUtils","../../core/accessorSupport/decorators"],function(e,t,n,o,i,r,a,c,s,l){return function(e){function t(t){var n=e.call(this)||this;return n._anchorHandles=new a,n.location=null,n.screenLocation=null,n.screenLocationEnabled=!1,n.view=null,n._anchorHandles.add([s.watch(n,["screenLocationEnabled","location","view.size","view.stationary"],function(){return n._updateScreenPointAndHandle()}),s.watch(n,["view","view.ready"],function(){return n._wireUpView()})]),n}return n(t,e),t.prototype.destroy=function(){this.view=null,this._anchorHandles&&this._anchorHandles.destroy(),this._anchorHandles=null,this._viewpointHandle=null},t.prototype._wireUpView=function(){var e=this;if(this._anchorHandles.remove("view"),this._viewpointHandle=null,this.get("view.ready")){this._setScreenLocation();var t=this.view,n="3d"===t.type?"camera":"viewpoint",o=c.pausable(t,n,function(){return e._viewpointChange()});this._anchorHandles.add(o,"view"),this._viewpointHandle=o,this._toggleWatchingViewpoint()}},t.prototype._viewpointChange=function(){this._setScreenLocation(),this.emit("view-change")},t.prototype._updateScreenPointAndHandle=function(){this._setScreenLocation(),this._toggleWatchingViewpoint()},t.prototype._toggleWatchingViewpoint=function(){var e=this,t=e._viewpointHandle,n=e.location,o=e.screenLocationEnabled;if(t){n&&o?t.resume():t.pause()}},t.prototype._setScreenLocation=function(){var e=this,t=e.location,n=e.view,o=e.screenLocationEnabled,i=this.get("view.ready"),r=o&&t&&i,a=r?n.toScreen(t):null;this._set("screenLocation",a)},o([l.property()],t.prototype,"location",void 0),o([l.property({readOnly:!0})],t.prototype,"screenLocation",void 0),o([l.property()],t.prototype,"screenLocationEnabled",void 0),o([l.property()],t.prototype,"view",void 0),t=o([l.subclass("esri.widgets.support.AnchorElementViewModel")],t)}(l.declared(i,r))});