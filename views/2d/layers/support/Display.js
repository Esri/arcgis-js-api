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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../ViewState","../../engine/Bitmap","../../engine/DisplayObject","../../engine/webgl/enums"],function(t,e,a,i,r,n,s){Object.defineProperty(e,"__esModule",{value:!0});var o=[0,0],c=[0,0],p=function(t){function e(e){var a=t.call(this)||this;return a.layerView=e,a._childrenRenderParameters={context:document.createElement("canvas").getContext("2d"),pixelRatio:1,state:new i,stationary:!0,drawPhase:s.WGLDrawPhase.MAP,globalOpacity:1},a.requestRender=a.requestRender.bind(a),a}return a(e,t),e.prototype.attach=function(){return this._bitmap=new r.Bitmap,this._bitmap.stage=this.stage,this._bitmap.attach(),this._bitmap.attached=!0,t.prototype.attach.call(this)},e.prototype.detach=function(){this._bitmap.detach(),this._bitmap=null},e.prototype.doRender=function(t){var e;if(t.drawPhase===s.WGLDrawPhase.MAP&&this.layerView.attached){var a=window.devicePixelRatio,i=this.stage.painter,r=t.globalOpacity,n=t.state,p=t.state.size,l=p[0],h=p[1],d=this._childrenRenderParameters.context.canvas,u=this._childrenRenderParameters;d.width=l*a,d.height=h*a,u.globalOpacity=r,u.state.copy(n),u.state.pixelRatio=a,u.stationary=t.stationary;var y=this._bitmap;y.resolution=n.resolution,this.layerView.render(u),y.source=d,e=u.state.toMap(c,o),y.x=e[0],y.y=e[1],u.state.viewpoint.rotation=0,u.state.rotation=0,i.startStencilDraw(),i.drawBitmap(u,y,1),i.endStencilDraw()}},e}(n.DisplayObject);e.Display=p,e.default=p});