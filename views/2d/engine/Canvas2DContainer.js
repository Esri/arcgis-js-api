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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./Container"],function(t,e,r,n){var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.createElement=function(){var t=document.createElement("canvas");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.element=t},e.prototype.render=function(e){var r=this.element.style;return this.visible?(r.display="block",r.opacity=""+this.opacity,this.element.width=e.state.width,this.element.height=e.state.height,void t.prototype.render.call(this,e)):void(r.display="none")},e.prototype.prepareChildrenRenderParameters=function(t){var e=t;return e.context=this.element.getContext("2d"),e},e.prototype.beforeRenderChildren=function(t,e){var r=e.context,n=e.state;if(r.save(),n.spatialReference.isWrappable){var o=n.width,a=n.height,i=n.rotation,s=i*Math.PI/180,h=Math.abs(Math.cos(s)),c=Math.abs(Math.sin(s)),p=Math.round(o*h+a*c),l=Math.round(n.worldScreenWidth);if(p>l){var d=.5*o,u=.5*a;s&&(r.translate(d,u),r.rotate(s),r.translate(-d,-u)),r.beginPath(),r.rect(d-.5*l,u-.5*p,l,p),r.closePath(),s&&(r.translate(d,u),r.rotate(-s),r.translate(-d,-u)),r.clip("evenodd")}}},e.prototype.afterRenderChildren=function(t,e){e.context.restore()},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.detachChild=function(t,e){t.detach(e)},e.prototype.renderChild=function(t,e){e.context.save(),t.render(e),e.context.restore()},e}(n);return o});