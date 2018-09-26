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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../ViewState","../viewStateUtils","./Container"],function(t,e,r,n,i,a,o){var h=[0,0];return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenCanvas=null,e._childrenRenderParameters={context:null,pixelRatio:1,state:new i,stationary:!0},e}return r(e,t),e.prototype.attach=function(e){return this._childrenCanvas||(this._childrenCanvas=document.createElement("canvas"),this._childrenRenderParameters.context=this._childrenCanvas.getContext("2d")),t.prototype.attach.call(this,e)},e.prototype.detach=function(e){t.prototype.detach.call(this,e),this._childrenCanvas=null,this._childrenRenderParameters.context=null},e.prototype.doRender=function(e){this.visible&&t.prototype.doRender.call(this,e)},e.prototype.prepareChildrenRenderParameters=function(t){var e=this._childrenCanvas,r=this._childrenRenderParameters,n=t.state,i=n.pixelRatio,o=r.state;o.copy(n);var s=a.getOuterSize(h,n),l=s[0],c=s[1];return l*=i,c*=i,o.size=h,o.viewpoint.rotation=0,e.width!==l||e.height!==c?(e.width=l,e.height=c):r.context.clearRect(0,0,l,c),r.pixelRatio=t.pixelRatio,r},e.prototype.beforeRenderChildren=function(t,e){this.sortChildren(function(t,e){return e.resolution-t.resolution})},e.prototype.afterRenderChildren=function(t,e){var r=t.context,n=t.state,i=e.context,a=e.state;0===n.rotation?r.drawImage(i.canvas,0,0):(r.save(),r.translate(.5*n.width,.5*n.height),r.rotate(n.rotation*Math.PI/180),r.translate(.5*-n.width,.5*-n.height),r.drawImage(i.canvas,.5*(n.width-a.width),.5*(n.height-a.height)),r.restore())},e}(o)});