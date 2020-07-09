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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../assets","../../../core/promiseUtils","../../webgl","../engine"],(function(e,t,r,i,s,a,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o.enums.WGLDrawPhase,h=function(e){function t(){var t=e.call(this)||this;return t.visible=!1,t}return r.__extends(t,e),t.prototype.destroy=function(){this._readbackTexture&&(this._readbackTexture.dispose(),this._readbackTexture=null,this._maskTexture.dispose(),this._maskTexture=null,this._overlayTexture.dispose(),this._overlayTexture=null,this._vertexArrayObject.dispose(),this._vertexArrayObject=null,this._program.dispose(),this._program=null,this._resourcesPromise=null)},Object.defineProperty(t.prototype,"magnifier",{get:function(){return this._magnifier},set:function(e){var t=this;this._magnifier=e,this._handle&&this._handle.remove(),this._handle=e.watch("version",(function(){t.visible=e.visible,t.requestRender()})),this.visible=e.visible,this.requestRender()},enumerable:!0,configurable:!0}),t.prototype.doRender=function(e){var t=this.stage.context;if(this._resourcesPromise){if(e.drawPhase===n.MAP&&this._canRender()){this._updateResources(t);var r=this._magnifier,i=1/r.factor,s=Math.ceil(i*this.overlay.width),a=Math.ceil(i*this.overlay.height),o=e.state.size,h=e.pixelRatio,u=h*o[0],l=h*o[1],d=r.position||{x:.5*o[0],y:.5*o[1]},c=h*d.x,p=l-h*d.y,f=.5*s,m=.5*a;f>c?c=f:c>=u-f&&(c=u-f-1),m>p?p=m:p>=l-m&&(p=l-m-1);var _=c-f,g=p-m,y=this._readbackTexture;t.bindTexture(y,0),t.gl.copyTexImage2D(y.descriptor.target,0,y.descriptor.pixelFormat,_,g,s,a,0);var v=this.stage.background&&this.stage.background.color,x=v?[v.a*v.r/255,v.a*v.g/255,v.a*v.b/255,v.a]:[1,1,1,1],b=(c+r.offsetX)/u*2-1,T=(p-r.offsetY)/l*2-1,w=this.overlay.width/u*2,k=this.overlay.height/l*2,M=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.bindProgram(M),M.setUniform4fv("u_background",x),M.setUniform1i("u_readbackTexture",0),M.setUniform1i("u_overlyTexture",6),M.setUniform1i("u_maskTexture",7),M.setUniform2f("u_drawPos",b,T),M.setUniform1f("u_width",w),M.setUniform1f("u_height",k),t.setStencilTestEnabled(!1),t.drawArrays(5,0,4),t.bindVAO()}}else this._resourcesPromise=this._loadResources("esri/images/magnifier/mask.png","esri/images/magnifier/overlay.png")},t.prototype._canRender=function(){return this.mask&&this.overlay&&null!=this._magnifier},t.prototype._loadResources=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var a,o,n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,s.all([i.fetchAsset(e,{responseType:"image"}),i.fetchAsset(t,{responseType:"image"})])];case 1:return a=r.sent(),o=a[0].data,n=a[1].data,this.mask=o,this.overlay=n,this.requestRender(),[2]}}))}))},t.prototype._updateResources=function(e){if(!this._readbackTexture){var t=1/this._magnifier.factor,r=Math.ceil(t*this.overlay.width),i=Math.ceil(t*this.overlay.height);this._program=o.createMagnifierProgram(e);var s=new Uint16Array([0,1,0,0,1,1,1,0]),n=o.magnifier.attributes;this._vertexArrayObject=new a.VertexArrayObject(e,n,{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:a.BufferObject.createVertex(e,35044,s)}),this._overlayTexture=new a.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay),this._maskTexture=new a.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask),this._readbackTexture=new a.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:i})}},t}(o.DisplayObject);t.default=h}));