// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../ViewState","./Container"],function(e,t,i,r,n){var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenRenderParameters={budget:null,context:null,devicePixelRatio:1,state:new r,stationary:!0},t.hidpi=!1,t}return i(t,e),t.prototype.createElement=function(){var e=document.createElement("canvas");return e.setAttribute("class","esri-display-object"),e},t.prototype.setElement=function(e){this.element=e},t.prototype.doRender=function(t){var i=this.element,r=i.style;if(!this.visible)return void(r.display="none");var n=t.state,a=t.devicePixelRatio,o=n.width,s=n.height;i.width=o*(this.hidpi?a:1),i.height=s*(this.hidpi?a:1),r.display="block",r.opacity=""+this.opacity,r.width=o+"px",r.height=s+"px",e.prototype.doRender.call(this,t)},t.prototype.prepareChildrenRenderParameters=function(e){var t=this._childrenRenderParameters;return t.budget=e.budget,t.context=this.element.getContext("2d"),t.devicePixelRatio=e.devicePixelRatio,t.state.copy(e.state),t.state.pixelRatio=this.hidpi?e.devicePixelRatio:1,t.stationary=e.stationary,t},t.prototype.beforeRenderChildren=function(e,t){var i=t.context,r=t.state;if(i.save(),r.spatialReference.isWrappable){var n=r.width,a=r.height,o=r.rotation,s=r.pixelRatio,d=this.hidpi?s:1,h=o*Math.PI/180,l=Math.abs(Math.cos(h)),p=Math.abs(Math.sin(h)),c=Math.round(n*d*l+a*d*p),u=r.worldScreenWidth*d;if(c>u){var v=n*d*.5,y=a*d*.5;h&&(i.translate(v,y),i.rotate(h),i.translate(-v,-y)),i.beginPath(),i.rect(v-.5*u,y-.5*c,u,c),i.closePath(),h&&(i.translate(v,y),i.rotate(-h),i.translate(-v,-y)),i.clip("evenodd")}}},t.prototype.afterRenderChildren=function(e,t){t.context.restore()},t.prototype.renderChild=function(e,t){t.context.save(),e.processRender(t),t.context.restore()},t}(n);return a});