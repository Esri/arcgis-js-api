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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Evented","../../core/Handles","../../core/watchUtils","../../core/watchUtils","../../core/accessorSupport/decorators"],(function(e,t,n,o,i,r,a,c,s){return function(e){function t(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=e.apply(this,t)||this;return o._anchorHandles=new r,o.location=null,o.screenLocation=null,o.screenLocationEnabled=!1,o.view=null,o._anchorHandles.add([c.watch(o,["screenLocationEnabled","location","view.size","view.stationary"],(function(){return o._updateScreenPointAndHandle()})),c.watch(o,["view","view.ready"],(function(){return o._wireUpView()}))]),o}return n(t,e),t.prototype.destroy=function(){this.view=null,this._anchorHandles&&this._anchorHandles.destroy(),this._anchorHandles=null,this._viewpointHandle=null},t.prototype._wireUpView=function(){var e=this;if(this._anchorHandles.remove("view"),this._viewpointHandle=null,this.get("view.ready")){this._setScreenLocation();var t=this.view,n="3d"===t.type?"camera":"viewpoint",o=a.pausable(t,n,(function(){return e._viewpointChange()}));this._anchorHandles.add(o,"view"),this._viewpointHandle=o,this._toggleWatchingViewpoint()}},t.prototype._viewpointChange=function(){this._setScreenLocation(),this.emit("view-change")},t.prototype._updateScreenPointAndHandle=function(){this._setScreenLocation(),this._toggleWatchingViewpoint()},t.prototype._toggleWatchingViewpoint=function(){var e=this._viewpointHandle,t=this.location,n=this.screenLocationEnabled;e&&(t&&n?e.resume():e.pause())},t.prototype._setScreenLocation=function(){var e=this.location,t=this.view,n=this.screenLocationEnabled,o=this.get("view.ready"),i=n&&e&&o?t.toScreen(e):null;this._set("screenLocation",i)},o([s.property()],t.prototype,"location",void 0),o([s.property({readOnly:!0})],t.prototype,"screenLocation",void 0),o([s.property()],t.prototype,"screenLocationEnabled",void 0),o([s.property()],t.prototype,"view",void 0),t=o([s.subclass("esri.widgets.support.AnchorElementViewModel")],t)}(s.declared(i.EventedAccessor))}));