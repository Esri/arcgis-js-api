// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","dojo/has","../../../core/promiseUtils","./Container","../engine/webgl/Fader","./webgl/BitBlitRenderer","./webgl/enums","./webgl/WGLPainter","./webgl/shaders/glShaderSnippets","../libs/gl-matrix/common","../libs/gl-matrix/mat2d","../libs/gl-matrix/vec2","../../support/screenshotUtils","../../webgl/BufferObject","../../webgl/context-util","../../webgl/FramebufferObject","../../webgl/Program","../../webgl/RenderingContext","../../webgl/VertexArrayObject"],(function(e,t,i,r,a,n,h,s,l,o,d,p,c,_,g,u,b,f,F,m,w){function B(e){return{state:e.state,pixelRatio:e.pixelRatio,stationary:e.stationary}}var C={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._clipData=new Float32Array(8),t._upperLeft=_.create(),t._upperRight=_.create(),t._lowerLeft=_.create(),t._lowerRight=_.create(),t._mat2=c.create(),t._clipRendererInitialized=!1,t._contextVersion=null,t._labelFader=new h.default(t),t}return i(t,e),Object.defineProperty(t.prototype,"glPainter",{get:function(){return this._painter},enumerable:!0,configurable:!0}),t.prototype.fadeInLabels=function(){this._labelFader.reset(),this.requestRender()},t.prototype.createElement=function(){var e=document.createElement("canvas");return e.setAttribute("class","esri-display-object"),e},t.prototype.setElement=function(e){this.element=e},t.prototype.useContextVersion=function(e){this._renderingContext||(this._contextVersion=e)},t.prototype.attach=function(t){if(this.attached)return!0;this._resizeCanvas(t);var i=b.createContextOrErrorHTML(this.element,{alpha:!0,antialias:!1,depth:!0,stencil:!0},this._contextVersion);return this._renderingContext=new m(i),this._contextVersion=this._renderingContext.contextVersion,this.attached=!0,this._cachedRenderParams=B(t),this._painter||(this._painter=new o.default,this._painter.initialize(this._renderingContext)),e.prototype.attach.call(this,t)},t.prototype.detach=function(t){e.prototype.detach.call(this,t),this._boundFBO=null,this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null),this._labelsFBO1&&(this._labelsFBO1.dispose(),this._labelsFBO1=null),this._labelsFBO2&&(this._labelsFBO2.dispose(),this._labelsFBO2=null),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._clipVAO&&(this._clipVAO.dispose(),this._clipVAO=null,this._clipVBO=null),this._painter&&(this._painter.dispose(),this._painter=null),this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=null),this._renderingContext&&(this._renderingContext.dispose(),this._renderingContext=null),this._cachedRenderParams=null},t.prototype.renderChildren=function(e){var t=this.children;e.drawPhase=l.WGLDrawPhase.FILL|l.WGLDrawPhase.LINE|l.WGLDrawPhase.MARKER|l.WGLDrawPhase.TEXT;for(var i=t.length,a=0;a<i;a++){(o=t[a]).attached&&this.renderChild(o,e)}if(r("esri-featurelayer-webgl-labeling")){var n=e.context,h=n.getBoundFramebufferObject();n.bindFramebuffer(this._labelsFBO2);var s=e.stationary;if(n.setClearColor(0,0,0,s?0:1),n.clear(n.gl.COLOR_BUFFER_BIT),s){e.drawPhase=l.WGLDrawPhase.LABEL_ALPHA,e.labelFBO=this._labelsFBO1,e.labelStep=this._labelFader.step();for(a=0;a<i;a++){(o=t[a]).attached&&this.renderChild(o,e)}}else this._labelFader.reset();n.bindFramebuffer(h),e.labelFBO=this._labelsFBO2,e.drawPhase=l.WGLDrawPhase.LABEL;for(a=0;a<i;a++){var o;(o=t[a]).attached&&this.renderChild(o,e)}var d=this._labelsFBO2;this._labelsFBO2=this._labelsFBO1,this._labelsFBO1=d}},t.prototype.beforeRenderChildren=function(e,t){var i=t.context,a=t.state,n=t.pixelRatio,h=this._painter;if(h){i.enforceState(),h.update(a,n);var s=a.width,l=a.height,o=a.rotation;if(s=Math.round(s*n),l=Math.round(l*n),this._boundFBO=i.getBoundFramebufferObject(),!r("esri-featurelayer-webgl-labeling")||this._labelsFBO1&&this._labelsFBO1.width===s&&this._labelsFBO1.height===l||(this._labelsFBO1&&(this._labelsFBO1.dispose(),this._labelsFBO2.dispose()),this._labelsFBO1=f.createWithAttachments(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:s,height:l},{colorTarget:0,depthStencilTarget:0}),i.bindFramebuffer(this._labelsFBO1),i.setDepthWriteEnabled(!0),i.setStencilWriteMask(255),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.setClearStencil(0),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT|i.gl.STENCIL_BUFFER_BIT),i.setDepthWriteEnabled(!1),i.bindFramebuffer(this._boundFBO),this._labelsFBO2=f.createWithAttachments(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:s,height:l},{colorTarget:0,depthStencilTarget:0})),a.spatialReference&&(a.spatialReference._isWrappable?a.spatialReference._isWrappable():a.spatialReference.isWrappable)){var d=p.toRadian(o),g=Math.abs(Math.cos(d)),u=Math.abs(Math.sin(d)),b=Math.round(s*g+l*u),F=Math.round(a.worldScreenWidth);if(b<=F)this._clipFrame=!1;else{this._clipFBO&&this._clipFBO.width===s&&this._clipFBO.height===l||(this._clipFBO=new f(i,{colorTarget:0,depthStencilTarget:3,width:s,height:l}));var m=.5*s,w=.5*l,B=1/s,C=1/l,O=.5*F*n,R=.5*(s*u+l*g),x=this._upperLeft,v=this._upperRight,y=this._lowerLeft,E=this._lowerRight;_.set(x,-O,-R),_.set(v,O,-R),_.set(y,-O,R),_.set(E,O,R),c.identity(this._mat2),c.translate(this._mat2,this._mat2,[m,w]),0!==o&&c.rotate(this._mat2,this._mat2,d),_.transformMat2d(x,x,this._mat2),_.transformMat2d(v,v,this._mat2),_.transformMat2d(y,y,this._mat2),_.transformMat2d(E,E,this._mat2);var M=this._clipData;M.set([2*y[0]*B-1,2*(l-y[1])*C-1,2*E[0]*B-1,2*(l-E[1])*C-1,2*x[0]*B-1,2*(l-x[1])*C-1,2*v[0]*B-1,2*(l-v[1])*C-1]),this._clipRendererInitialized||this._initializeClipRenderer(i),this._clipVBO.setData(M),this._boundFBO=i.getBoundFramebufferObject(),i.bindFramebuffer(this._clipFBO),i.setDepthWriteEnabled(!0),i.setStencilWriteMask(255),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.setClearStencil(0),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT|i.gl.STENCIL_BUFFER_BIT),i.setDepthWriteEnabled(!1),this._clipFrame=!0}}else this._clipFrame=!1}},t.prototype.afterRenderChildren=function(e,t){if(this._clipFrame&&this._clipRendererInitialized){var i=this._renderingContext;i.bindFramebuffer(this._boundFBO),this._boundFBO=null,i.bindVAO(this._clipVAO),i.bindProgram(this._clipStencilProgram),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setStencilTestEnabled(!0),i.setBlendingEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setStencilOp(7680,7680,7681),i.setStencilWriteMask(255),i.setStencilFunction(519,1,255),i.drawElements(4,6,5123,0),i.bindVAO(),i.setColorMask(!0,!0,!0,!0),i.setBlendingEnabled(!0),i.setStencilFunction(514,1,255),this._blitRenderer.render(i,this._clipFBO.colorTexture,9728,1),i.setStencilTestEnabled(!1)}},t.prototype.doRender=function(t){var i=this.element.style;this.visible?(i.display="block",i.opacity=""+this.opacity,this._resizeCanvas(t),e.prototype.doRender.call(this,t),this._cachedRenderParams=B(t)):i.display="none"},t.prototype.takeScreenshot=function(e){void 0===e&&(e={});var t=e.pixelRatio||1;this._cachedRenderParams.pixelRatio=t;var i=Math.round(t*this._cachedRenderParams.state.width),r=Math.round(t*this._cachedRenderParams.state.height),n={x:0,y:0,width:i,height:r},h={x:0,y:0,width:i,height:r},s=e.area;if(s&&(n.x=Math.round(t*s.x),n.y=Math.round(t*s.y),n.width=Math.round(t*s.width),n.height=Math.round(t*s.height)),void 0!==e.width&&void 0!==e.height){var l=e.width/e.height;if(n.height*l<n.width){var o=n.height*l;n.x+=Math.floor((n.width-o)/2),n.width=Math.floor(o)}else{var d=n.width/l;n.y+=Math.floor((n.height-d)/2),n.height=Math.floor(d)}h.width=e.width,h.height=e.height}else h.width=n.width,h.height=n.height;var p=document.createElement("canvas");p.width=h.width,p.height=h.height;var c=p.getContext("2d"),_=new Uint8Array(n.width*n.height*4),u=this._renderingContext,b=f.create(u,{colorTarget:1,depthStencilTarget:3,width:i,height:r});u.bindFramebuffer(b),u.setViewport(0,0,i,r);var F=this._cachedRenderParams,m=this._renderingContext.gl;if(this._renderingContext.setClearColor(0,0,0,0),this._renderingContext.setClearDepth(1),this._renderingContext.setClearStencil(0),this._renderingContext.clear(m.COLOR_BUFFER_BIT|m.DEPTH_BUFFER_BIT|m.STENCIL_BUFFER_BIT),F.context=this._renderingContext,F.painter=this._painter,this.beforeRenderChildren(F,F),void 0!==e.rotation&&null!==e.rotation){var w=F.state,B=w.clone();B.viewpoint.rotation=e.rotation,F.state=B,this.renderChildren(F),F.state=w}else this.renderChildren(F);this.afterRenderChildren(F,F),b.readPixels(n.x,r-(n.y+n.height),n.width,n.height,6408,5121,_),u.bindFramebuffer();var O=c.getImageData(h.x,h.y,h.width,h.height);if(0!==n.x||0!==n.y||n.width!==i||n.height!==r||0!==h.x||0!==h.y||h.width!==i||h.height!==r)g.resampleHermite(_,n.width,n.height,O.data,h.width,h.height,!0);else{for(var R=n.height-1,x=0,v=4*n.width,y=void 0,E=void 0,M=void 0,T=void 0,S=void 0,L=void 0,P=void 0;x<R;){for(L=x*v,P=R*v,y=0;y<v;y+=4)E=_[L+y],M=_[L+y+1],T=_[L+y+2],S=_[L+y+3],_[L+y]=_[P+y],_[L+y+1]=_[P+y+1],_[L+y+2]=_[P+y+2],_[L+y+3]=_[P+y+3],_[P+y]=E,_[P+y+1]=M,_[P+y+2]=T,_[P+y+3]=S;x++,R--}for(var D=O.data,I=_.length,W=0;W<I;W++)D[W]=_[W]}var V=O.data,A=V.length;for(W=0;W<A;W+=4){if((S=V[W+3])>0){var U=S/255;E=Math.floor(V[W+0]/U),M=Math.floor(V[W+1]/U),T=Math.floor(V[W+2]/U);V[W+0]=E<=255?E:255,V[W+1]=M<=255?M:255,V[W+2]=T<=255?T:255}}c.putImageData(O,h.x,h.y);var j=C[e.format?e.format.toLowerCase():"png"],z=1;void 0!==e.quality&&(z=e.quality/100);var k=p.toDataURL(j,z);return a.resolve({dataURL:k,x:h.x,y:h.y,width:h.width,height:h.height})},t.prototype.prepareChildrenRenderParameters=function(e){if(!this.attached||!this._renderingContext)return null;var t=B(e),i=this._renderingContext,r=i.gl;return i.setDepthWriteEnabled(!0),i.setStencilWriteMask(255),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.setClearStencil(0),i.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT),i.setViewport(0,0,this.element.width,this.element.height),i.setDepthWriteEnabled(!1),t.context=i,t.painter=this._painter,t},t.prototype.attachChild=function(e,t){return e.attach(t)},t.prototype.detachChild=function(e,t){return e.detach(t)},t.prototype.renderChild=function(e,t){return e.processRender(t)},t.prototype._resizeCanvas=function(e){var t=this.element,i=t.style,r=e.state,a=e.pixelRatio,n=Math.round(r.width*a),h=Math.round(r.height*a);t.width===n&&t.height===h||(t.width=n,t.height=h),i.width=r.width+"px",i.height=r.height+"px"},t.prototype._initializeClipRenderer=function(e){if(this._clipRendererInitialized)return!0;this._blitRenderer=new s;var t={a_pos:0},i=new F(e,d.stencilVS,d.stencilFS,t);if(!i)return!1;var r=u.createVertex(e,35040,32),a=new Uint16Array([0,1,2,2,1,3]),n=u.createIndex(e,35044,a),h=new w(e,t,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:r},n);return this._clipStencilProgram=i,this._clipVBO=r,this._clipVAO=h,this._clipRendererInitialized=!0,!0},t}(n)}));