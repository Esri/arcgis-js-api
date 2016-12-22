// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../core/tsSupport/extendsHelper","../math/common","./Container"],function(t,e,r,n,o){var a=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.prototype.createElement=function(){var t=document.createElement("canvas");return t.setAttribute("class","esri-display-object"),t},e.prototype.setElement=function(t){this.element=t},e.prototype.render=function(e){var r=this.element.style;return this.visible?(r.display="block",r.opacity=""+this.opacity,this.element.width=e.state.width,this.element.height=e.state.height,void t.prototype.render.call(this,e)):void(r.display="none")},e.prototype.prepareChildrenRenderParameters=function(t){var e=t;return e.context=this.element.getContext("2d"),e},e.prototype.beforeRenderChildren=function(t,e){var r=e.context,o=e.state;if(o.spatialReference.isWrappable){var a=o.width,i=o.height,s=o.rotation,c=n.toRadian(s),p=Math.abs(Math.cos(c)),h=Math.abs(Math.sin(c)),l=Math.round(a*p+i*h),d=Math.round(o.worldScreenWidth);if(l>d){var u=.5*a,f=.5*i;r.translate(u,f),r.rotate(c),r.translate(-u,-f),r.rect(u-.5*d,f-.5*l,d,l),r.translate(u,f),r.rotate(-c),r.translate(-u,-f),r.clip()}}},e.prototype.afterRenderChildren=function(t,e){},e.prototype.attachChild=function(t,e){return t.attach(e)},e.prototype.detachChild=function(t,e){t.detach(e)},e.prototype.renderChild=function(t,e){e.context.save(),t.render(e),e.context.restore()},e}(o);return a});