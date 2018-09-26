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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/promiseUtils","../ViewState","./Container","../../support/screenshotUtils"],function(t,e,r,i,n,a,o){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenRenderParameters={context:null,pixelRatio:1,state:new n,stationary:!0},e.hidpi=!1,e}return r(e,t),e.prototype.createElement=function(){var t=document.createElement("canvas");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.element=t},e.prototype.takeScreenshot=function(t){var e=this._childrenRenderParameters.state,r={context:null,pixelRatio:t.pixelRatio,state:new n,stationary:!0};r.opacity=this._childrenRenderParameters.opacity,r.state.copy(e);var a=t.framebufferWidth,s=t.framebufferHeight,h=t.region,l=document.createElement("canvas");if(l.width=a,l.height=s,r.context=l.getContext("2d"),this.beforeRenderChildren(r,r),void 0!==t.rotation&&null!==t.rotation){var p=r.state,d=p.clone();d.viewpoint.rotation=t.rotation,r.state=d,this.renderChildren(r),r.state=p}else this.renderChildren(r);this.afterRenderChildren(r,r);var c;try{c=r.context.getImageData(h.x,h.y,h.width,h.height)}catch(t){return i.reject(t)}return i.resolve(o.encodeResult(c,t,l,{flipY:!1,premultipliedAlpha:!1}))},e.prototype.doRender=function(e){var r=this.element,i=r.style;if(!this.visible)return void(i.display="none");var n=e.state,a=e.pixelRatio,o=n.width,s=n.height;r.width=o*(this.hidpi?a:1),r.height=s*(this.hidpi?a:1),i.display="block",i.opacity=""+Math.min(this.opacity,this.parent.opacity),i.width=o+"px",i.height=s+"px",t.prototype.doRender.call(this,e)},e.prototype.prepareChildrenRenderParameters=function(t){var e=this._childrenRenderParameters;return e.context=this.element.getContext("2d"),e.pixelRatio=t.pixelRatio,e.state.copy(t.state),e.state.pixelRatio=this.hidpi?t.pixelRatio:1,e.stationary=t.stationary,e},e.prototype.beforeRenderChildren=function(t,e){var r=e.context,i=e.state;if(r.save(),i.spatialReference.isWrappable){var n=i.width,a=i.height,o=i.rotation,s=i.pixelRatio,h=this.hidpi?s:1,l=o*Math.PI/180,p=Math.abs(Math.cos(l)),d=Math.abs(Math.sin(l)),c=Math.round(n*h*p+a*h*d),u=i.worldScreenWidth*h;if(u<c){var f=n*h*.5,y=a*h*.5;l&&(r.translate(f,y),r.rotate(l),r.translate(-f,-y)),r.beginPath(),r.rect(f-.5*u,y-.5*c,u,c),r.closePath(),l&&(r.translate(f,y),r.rotate(-l),r.translate(-f,-y)),r.clip("evenodd")}}},e.prototype.afterRenderChildren=function(t,e){e.context.restore()},e.prototype.renderChild=function(t,e){e.context.save(),t.processRender(e),e.context.restore()},e}(a)});