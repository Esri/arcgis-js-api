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

define(["require","exports","tslib","../../engine/Bitmap","../../engine/BitmapContainer"],(function(t,e,i,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Display=void 0;var o=function(t){function e(e){var i=t.call(this)||this;return i.requestRender=i.requestRender.bind(i),i._layerView=e,i._canvas=document.createElement("canvas"),i._context=i._canvas.getContext("2d"),i._bitmap=new a.Bitmap(null,!1),i.addChild(i._bitmap),i}return i.__extends(e,t),e.prototype.doRender=function(e){var a=e.state,n=this._createCustomRenderParams(e),o=this._canvas,r=this._bitmap,s=window.devicePixelRatio;o.width=a.size[0]*s,o.height=a.size[1]*s,r.resolution=a.resolution;var l=a.clone();l.pixelRatio=s,r.pixelRatio=s,n.state=l,r.x=a.viewpoint.targetGeometry.x-a.extent.width/2,r.y=a.viewpoint.targetGeometry.y+a.extent.height/2,this._layerView.render(n),r.source=o,r.rotation=a.rotation,t.prototype.doRender.call(this,i.__assign(i.__assign({},e),{state:l}))},e.prototype._createCustomRenderParams=function(t){return{globalOpacity:t.globalOpacity,state:t.state,stationary:t.stationary,pixelRatio:window.devicePixelRatio,context:this._context}},e}(n.BitmapContainer);e.Display=o,e.default=o}));