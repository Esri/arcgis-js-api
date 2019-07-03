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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/libs/gl-matrix-2/vec2f64","../../engine","../../ViewState"],function(t,e,a,i,r,n){Object.defineProperty(e,"__esModule",{value:!0});var s=i.vec2f64.create(),o=function(t){function e(e){var a=t.call(this)||this;return a.layerView=e,a._childrenRenderParameters={context:document.createElement("canvas").getContext("2d"),pixelRatio:1,state:new n,stationary:!0,drawPhase:r.enums.WGLDrawPhase.MAP,globalOpacity:1},a.requestRender=a.requestRender.bind(a),a}return a(e,t),e.prototype.attach=function(){return this._bitmap=new r.Bitmap,this._bitmap.stage=this.stage,this._bitmap.attach(),this._bitmap.attached=!0,t.prototype.attach.call(this)},e.prototype.detach=function(){this._bitmap.detach(),this._bitmap=null},e.prototype.doRender=function(t){var e;if(t.drawPhase===r.enums.WGLDrawPhase.MAP&&this.layerView.attached){var a=window.devicePixelRatio,n=this.stage.painter,o=t.globalOpacity,c=t.state,l=t.state.size,h=l[0],p=l[1],d=this._childrenRenderParameters.context.canvas,u=this._childrenRenderParameters;d.width=h*a,d.height=p*a,u.globalOpacity=o,u.state.copy(c),u.state.pixelRatio=a,u.stationary=t.stationary;var y=this._bitmap;y.resolution=c.resolution,this.layerView.render(u),y.source=d,e=u.state.toMap(s,i.vec2f64.ZEROS),y.x=e[0],y.y=e[1],u.state.viewpoint.rotation=0,u.state.rotation=0,n.startStencilDraw(),n.drawBitmap(u,y,1/a),n.endStencilDraw()}},e}(r.DisplayObject);e.Display=o,e.default=o});