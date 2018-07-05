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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/promiseUtils","../ViewState","./Container","../../support/screenshotUtils"],function(t,e,i,r,a,h,n){var o={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenRenderParameters={context:null,pixelRatio:1,state:new a,stationary:!0},e.hidpi=!1,e}return i(e,t),e.prototype.createElement=function(){var t=document.createElement("canvas");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.element=t},e.prototype.takeScreenshot=function(t){void 0===t&&(t={});var e=t.pixelRatio||1,i={context:null,pixelRatio:e,state:new a,stationary:!0};i.opacity=this._childrenRenderParameters.opacity,i.state.copy(this._childrenRenderParameters.state);var h=Math.round(e*i.state.width),d=Math.round(e*i.state.height),s={x:0,y:0,width:h,height:d},l={x:0,y:0,width:h,height:d},p=t.area;if(p&&(s.x=Math.round(e*p.x),s.y=Math.round(e*p.y),s.width=Math.round(e*p.width),s.height=Math.round(e*p.height)),void 0!==t.width&&void 0!==t.height){var c=t.width/t.height;if(s.height*c<s.width){var g=s.height*c;s.x+=Math.floor((s.width-g)/2),s.width=Math.floor(g)}else{var u=s.width/c;s.y+=Math.floor((s.height-u)/2),s.height=Math.floor(u)}l.width=t.width,l.height=t.height}else l.width=s.width,l.height=s.height;var y=document.createElement("canvas"),w=new Uint8Array(s.width*s.height*4);if(y.width=l.width,y.height=l.height,i.context=y.getContext("2d"),this.beforeRenderChildren(i,i),void 0!==t.rotation&&null!==t.rotation){var x=i.state,f=x.clone();f.viewpoint.rotation=t.rotation,i.state=f,this.renderChildren(i),i.state=x}else this.renderChildren(i);this.afterRenderChildren(i,i);var v;try{v=i.context.getImageData(l.x,l.y,l.width,l.height)}catch(t){return r.reject(t)}0===s.x&&0===s.y&&s.width===h&&s.height===d&&0===l.x&&0===l.y&&l.width===h&&l.height===d||n.resampleHermite(w,s.width,s.height,v.data,l.width,l.height,!0),i.context.putImageData(v,l.x,l.y);var m=o[t.format?t.format.toLowerCase():"png"],R=y.toDataURL(m,null!=t.quality?t.quality/100:1),M={dataURL:R,x:l.x,y:l.y,width:l.width,height:l.height};return t.returnByteBuffer&&(M.data=w),r.resolve(M)},e.prototype.doRender=function(e){var i=this.element,r=i.style;if(!this.visible)return void(r.display="none");var a=e.state,h=e.pixelRatio,n=a.width,o=a.height;i.width=n*(this.hidpi?h:1),i.height=o*(this.hidpi?h:1),r.display="block",r.opacity=""+Math.min(this.opacity,this.parent.opacity),r.width=n+"px",r.height=o+"px",t.prototype.doRender.call(this,e)},e.prototype.prepareChildrenRenderParameters=function(t){var e=this._childrenRenderParameters;return e.context=this.element.getContext("2d"),e.pixelRatio=t.pixelRatio,e.state.copy(t.state),e.state.pixelRatio=this.hidpi?t.pixelRatio:1,e.stationary=t.stationary,e},e.prototype.beforeRenderChildren=function(t,e){var i=e.context,r=e.state;if(i.save(),r.spatialReference.isWrappable){var a=r.width,h=r.height,n=r.rotation,o=r.pixelRatio,d=this.hidpi?o:1,s=n*Math.PI/180,l=Math.abs(Math.cos(s)),p=Math.abs(Math.sin(s)),c=Math.round(a*d*l+h*d*p),g=r.worldScreenWidth*d;if(g<c){var u=a*d*.5,y=h*d*.5;s&&(i.translate(u,y),i.rotate(s),i.translate(-u,-y)),i.beginPath(),i.rect(u-.5*g,y-.5*c,g,c),i.closePath(),s&&(i.translate(u,y),i.rotate(-s),i.translate(-u,-y)),i.clip("evenodd")}}},e.prototype.afterRenderChildren=function(t,e){e.context.restore()},e.prototype.renderChild=function(t,e){e.context.save(),t.processRender(e),e.context.restore()},e}(h)});