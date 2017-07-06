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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/watchUtils","../../core/Accessor","../../core/Evented","../../core/HandleRegistry","../../core/watchUtils"],function(e,t,n,o,i,r,a,c,s,p){var l=function(e){function t(){var t=e.call(this)||this;return t._handles=new s,t.location=null,t.screenLocation=null,t.screenLocationEnabled=!1,t.view=null,t._handles.add([p.watch(t,"screenLocationEnabled,location",function(){return t._updateScreenPointAndHandle()}),p.watch(t,"view, view.ready",function(){return t._wireUpView()})]),t}return n(t,e),t.prototype.destroy=function(){this.view=null,this._handles.destroy(),this._handles=null,this._viewpointHandle=null},t.prototype._wireUpView=function(){var e=this,t="view";this._handles.remove(t),this._viewpointHandle=null;var n=this.get("view.ready");if(n){this._setScreenLocation();var o=this.view,i="3d"===o.type?"camera":"viewpoint",a=r.pausable(o,i,function(){return e._viewpointChange()});this._handles.add(a,t),this._viewpointHandle=a,this._toggleWatchingViewpoint()}},t.prototype._viewpointChange=function(){this._setScreenLocation(),this.emit("view-change")},t.prototype._updateScreenPointAndHandle=function(){this._setScreenLocation(),this._toggleWatchingViewpoint()},t.prototype._toggleWatchingViewpoint=function(){var e=this,t=e._viewpointHandle,n=e.location,o=e.screenLocationEnabled;if(t){var i=n&&o;i?t.resume():t.pause()}},t.prototype._setScreenLocation=function(){var e=this,t=e.location,n=e.view,o=e.screenLocationEnabled,i=this.get("view.ready"),r=o&&t&&i,a=r?n.toScreen(t.x,t.y,t.z):null;this._set("screenLocation",a)},t}(i.declared(a,c));return o([i.property()],l.prototype,"location",void 0),o([i.property({readOnly:!0})],l.prototype,"screenLocation",void 0),o([i.property()],l.prototype,"screenLocationEnabled",void 0),o([i.property()],l.prototype,"view",void 0),l=o([i.subclass("esri.widgets.support.AnchorElementViewModel")],l)});