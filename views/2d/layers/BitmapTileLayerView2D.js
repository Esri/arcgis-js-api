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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","../engine/BitmapTileContainer"],(function(e,i,t,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.BitmapTileLayerView2D=void 0,i.BitmapTileLayerView2D=function(e){return function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(i,e),i.prototype.attach=function(){this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new n.BitmapTileContainer(this._tileInfoView),this.container.addChild(this._bitmapView)},i.prototype.detach=function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()},i=t.__decorate([r.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],i)}(e)}}));