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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../ViewState","./Container"],function(t,e,i,r,n){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenRenderParameters={context:null,pixelRatio:1,state:new r,stationary:!0},e.hidpi=!1,e}return i(e,t),e.prototype.createElement=function(){var t=document.createElement("canvas");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.element=t},e.prototype.doRender=function(e){var i=this.element,r=i.style;if(!this.visible)return void(r.display="none");var n=e.state,a=e.pixelRatio,o=n.width,s=n.height;i.width=o*(this.hidpi?a:1),i.height=s*(this.hidpi?a:1),r.display="block",r.opacity=""+this.opacity,r.width=o+"px",r.height=s+"px",t.prototype.doRender.call(this,e)},e.prototype.prepareChildrenRenderParameters=function(t){var e=this._childrenRenderParameters;return e.context=this.element.getContext("2d"),e.pixelRatio=t.pixelRatio,e.state.copy(t.state),e.state.pixelRatio=this.hidpi?t.pixelRatio:1,e.stationary=t.stationary,e},e.prototype.beforeRenderChildren=function(t,e){var i=e.context,r=e.state;if(i.save(),r.spatialReference.isWrappable){var n=r.width,a=r.height,o=r.rotation,s=r.pixelRatio,p=this.hidpi?s:1,h=o*Math.PI/180,l=Math.abs(Math.cos(h)),d=Math.abs(Math.sin(h)),c=Math.round(n*p*l+a*p*d),u=r.worldScreenWidth*p;if(u<c){var y=n*p*.5,x=a*p*.5;h&&(i.translate(y,x),i.rotate(h),i.translate(-y,-x)),i.beginPath(),i.rect(y-.5*u,x-.5*c,u,c),i.closePath(),h&&(i.translate(y,x),i.rotate(-h),i.translate(-y,-x)),i.clip("evenodd")}}},e.prototype.afterRenderChildren=function(t,e){e.context.restore()},e.prototype.renderChild=function(t,e){e.context.save(),t.processRender(e),e.context.restore()},e}(n)});