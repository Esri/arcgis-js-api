// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/assignHelper","../../engine","../../engine/BitmapContainer"],function(e,t,i,a,n,o){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t){var i=e.call(this,null)||this;return i.requestRender=i.requestRender.bind(i),i._layerView=t,i._canvas=document.createElement("canvas"),i._context=i._canvas.getContext("2d"),i._bitmap=new n.Bitmap,i._bitmap.stage=i.stage,i.addChild(i._bitmap),i}return i(t,e),t.prototype.doRender=function(t){var i=t.state,n=this._createCustomRenderParams(t),o=this._canvas,r=this._bitmap,s=window.devicePixelRatio;o.width=i.size[0]*s,o.height=i.size[1]*s,r.resolution=i.resolution;var p=i.clone();p.pixelRatio=s,r.pixelRatio=s,n.state=p,r.x=i.viewpoint.targetGeometry.x-i.extent.width/2,r.y=i.viewpoint.targetGeometry.y+i.extent.height/2,this._layerView.render(n),r.source=this._canvas,r.rotation=i.rotation,e.prototype.doRender.call(this,a({},t,{state:p}))},t.prototype._createCustomRenderParams=function(e){return{globalOpacity:e.globalOpacity,state:e.state,stationary:e.stationary,pixelRatio:window.devicePixelRatio,context:this._context}},t}(o.BitmapContainer);t.Display=r,t.default=r});