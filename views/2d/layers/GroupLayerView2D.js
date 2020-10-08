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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","../engine/webgl/GroupContainer","./LayerView2D","../../layers/GroupLayerView"],(function(e,t,r,n,i,o,a){"use strict";return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new i.GroupContainer,t}return r.__extends(t,e),t.prototype.attach=function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")},t.prototype.detach=function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()},t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){},t.prototype._updateStageChildren=function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(t,r){return e.container.addChildAt(t.container,r)}))},t=r.__decorate([n.subclass("esri.views.2d.layers.GroupLayerView2D")],t)}(o.LayerView2DMixin(a))}));