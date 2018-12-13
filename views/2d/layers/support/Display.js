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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../ViewState","../../engine/DisplayObject","../../engine/webgl/enums","../../../webgl/Texture"],function(e,t,a,r,i,n,s){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var a=e.call(this)||this;return a.layerView=t,a._childrenRenderParameters={context:document.createElement("canvas").getContext("2d"),pixelRatio:1,state:new r,stationary:!0},a.requestRender=a.requestRender.bind(a),a}return a(t,e),t.prototype.attach=function(){return this._texture=new s(this.stage.context,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0}),e.prototype.attach.call(this)},t.prototype.detach=function(){this._texture.dispose(),this._texture=null,e.prototype.detach.call(this)},t.prototype.doRender=function(e){if(e.drawPhase===n.WGLDrawPhase.MAP){var t=window.devicePixelRatio,a=this.stage,r=a.context,i=a.painter,s=e.drawPhase,o=e.state,c=e.state.size,d=c[0],h=c[1],l=this._childrenRenderParameters.context.canvas,p=this._childrenRenderParameters;l.width=d*t,l.height=h*t,p.state.copy(o),p.state.pixelRatio=t,p.stationary=e.stationary,this.layerView.render(p),this._texture.resize(l.width,l.height),this._texture.setData(l),i.startStencilDraw(),i.drawImage(r,this._texture,0,0,d,h,0,0,this.opacity,t,s),i.endStencilDraw()}},t}(i.DisplayObject);t.Display=o,t.default=o});