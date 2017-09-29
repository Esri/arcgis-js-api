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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./Container","../ViewState","../viewStateUtils"],function(t,e,r,n,i,a,o){var h=[0,0],s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenCanvas=null,e._childrenRenderParameters={budget:null,context:null,devicePixelRatio:1,state:new a,stationary:!0},e}return r(e,t),e.prototype.attach=function(e){return this._childrenCanvas||(this._childrenCanvas=document.createElement("canvas"),this._childrenRenderParameters.context=this._childrenCanvas.getContext("2d")),t.prototype.attach.call(this,e)},e.prototype.detach=function(e){t.prototype.detach.call(this,e),this._childrenCanvas=null,this._childrenRenderParameters.context=null},e.prototype.doRender=function(e){this.visible&&t.prototype.doRender.call(this,e)},e.prototype.prepareChildrenRenderParameters=function(t){var e=this._childrenCanvas,r=this._childrenRenderParameters,n=t.state,i=n.pixelRatio,a=r.state;a.copy(n);var s=o.getOuterSize(h,n),c=s[0],l=s[1];return c*=i,l*=i,a.size=h,a.viewpoint.rotation=0,e.width!==c||e.height!==l?(e.width=c,e.height=l):r.context.clearRect(0,0,c,l),r.budget=t.budget,r.devicePixelRatio=t.devicePixelRatio,r},e.prototype.beforeRenderChildren=function(t,e){this.sortChildren(function(t,e){return e.resolution-t.resolution})},e.prototype.afterRenderChildren=function(t,e){var r=t.context,n=t.state,i=e.context,a=e.state;0===n.rotation?r.drawImage(i.canvas,0,0):(r.save(),r.translate(.5*n.width,.5*n.height),r.rotate(n.rotation*Math.PI/180),r.translate(.5*-n.width,.5*-n.height),r.drawImage(i.canvas,.5*(n.width-a.width),.5*(n.height-a.height)),r.restore())},e}(i);return s});