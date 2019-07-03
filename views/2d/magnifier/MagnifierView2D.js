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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/generatorHelper","../../../request","../../../core/promiseUtils","../../webgl","../engine"],function(e,t,r,i,a,s,o,n,u){Object.defineProperty(t,"__esModule",{value:!0});var h=(n.enums.DataType,n.enums.Usage,n.enums.TextureSamplingMode,n.enums.TextureType,n.enums.TextureWrapMode,n.enums.PrimitiveType,n.enums.PixelFormat,n.enums.PixelType,u.enums.WGLDrawPhase),l=function(t){function l(){var r=t.call(this)||this;return r.visible=!1,r._loadResources(e.toUrl("../../../images/magnifier/mask.png"),e.toUrl("../../../images/magnifier/overlay.png")),r}return r(l,t),l.prototype.destroy=function(){this._readbackTexture&&(this._readbackTexture.dispose(),this._readbackTexture=null,this._maskTexture.dispose(),this._maskTexture=null,this._overlayTexture.dispose(),this._overlayTexture=null,this._vertexArrayObject.dispose(),this._vertexArrayObject=null,this._program.dispose(),this._program=null)},Object.defineProperty(l.prototype,"magnifier",{get:function(){return this._magnifier},set:function(e){var t=this;this._magnifier=e,this._handle&&this._handle.remove(),this._handle=e.watch("version",function(){t.visible=e.visible}),this.visible=e.visible},enumerable:!0,configurable:!0}),l.prototype.doRender=function(e){var t=this.stage.context;if(e.drawPhase===h.MAP&&this._canRender()){this._updateResources(t);var r=this._magnifier,i=1/r.factor,a=Math.ceil(i*this.overlay.width),s=Math.ceil(i*this.overlay.height),o=e.state.size,n=e.pixelRatio,u=n*o[0],l=n*o[1],p=r.position||{x:.5*o[0],y:.5*o[1]},d=n*p.x,m=l-n*p.y,c=.5*a,f=.5*s;c>d?d=c:d>=u-c&&(d=u-c-1),f>m?m=f:m>=l-f&&(m=l-f-1);var g=d-c,y=m-f,_=this._readbackTexture;t.bindTexture(_,0),t.gl.copyTexImage2D(_.descriptor.target,0,_.descriptor.pixelFormat,g,y,a,s,0);var x=this.stage.background&&this.stage.background.color,v=x?[x.a*x.r/255,x.a*x.g/255,x.a*x.b/255,x.a]:[1,1,1,1],b=(d+r.offsetX)/u*2-1,T=(m-r.offsetY)/l*2-1,w=this.overlay.width/u*2,k=this.overlay.height/l*2,M=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.bindProgram(M),M.setUniform4fv("u_background",v),M.setUniform1i("u_readbackTexture",0),M.setUniform1i("u_overlyTexture",6),M.setUniform1i("u_maskTexture",7),M.setUniform2f("u_drawPos",b,T),M.setUniform1f("u_width",w),M.setUniform1f("u_height",k),t.drawArrays(5,0,4),t.bindVAO()}},l.prototype._canRender=function(){return this.mask&&this.overlay&&null!=this._magnifier},l.prototype._loadResources=function(e,t){return i(this,void 0,void 0,function(){var r,i,n;return a(this,function(a){switch(a.label){case 0:return[4,o.all([s(e,{responseType:"image"}),s(t,{responseType:"image"})])];case 1:return r=a.sent(),i=r[0].data,n=r[1].data,this.mask=i,this.overlay=n,this.requestRender(),[2]}})})},l.prototype._updateResources=function(e){if(!this._readbackTexture){var t=1/this._magnifier.factor,r=Math.ceil(t*this.overlay.width),i=Math.ceil(t*this.overlay.height);this._program=u.createMagnifierProgram(e);var a={geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},s=new Uint16Array([0,1,0,0,1,1,1,0]),o=u.magnifier.attributes;this._vertexArrayObject=new n.VertexArrayObject(e,o,a,{geometry:n.BufferObject.createVertex(e,35044,s)}),this._overlayTexture=new n.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay),this._maskTexture=new n.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask),this._readbackTexture=new n.Texture(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:i})}},l}(u.DisplayObject);t.default=l});