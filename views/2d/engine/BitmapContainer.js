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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./Container","../ViewState","../viewStateUtils","../viewpointUtils"],function(e,t,r,n,o,i,a,c){var s=[0,0],h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._offScreenCanvas=null,t._offScreenRenderParameters={budget:null,clip:[],context:null,devicePixelRatio:1,state:new i({viewpoint:c.create()}),stationary:!0,rotated:!0},t}return r(t,e),t.prototype.attach=function(t){return this._offScreenCanvas||(this._offScreenCanvas=document.createElement("canvas"),this._offScreenRenderParameters.context=this._offScreenCanvas.getContext("2d")),e.prototype.attach.call(this,t)},t.prototype.detach=function(t){e.prototype.detach.call(this,t),this._offScreenCanvas=null,this._offScreenRenderParameters.context=null},t.prototype.render=function(t){this.visible&&e.prototype.render.call(this,t)},t.prototype.prepareChildrenRenderParameters=function(e){var t=e.state,r=this._offScreenRenderParameters,n=this._offScreenCanvas,o=r.state,i=r.context,c=a.getOuterSize(s,t),h=c[0],l=c[1];return o.viewpoint=t.viewpoint.clone(),o.viewpoint.rotation=0,o.size=s,n.width!==h||n.height!==l?(n.width=h,n.height=l):i.clearRect(0,0,h,l),r.budget=e.budget,r.devicePixelRatio=e.devicePixelRatio,r.clip.length=0,r},t.prototype.detachChild=function(e,t){e.detach()},t.prototype.attachChild=function(e,t){return e.attach(t)},t.prototype.renderChild=function(e,t){e.render(t)},t.prototype.beforeRenderChildren=function(e,t){this.sortChildren(function(e,t){return t.resolution-e.resolution})},t.prototype.afterRenderChildren=function(e,t){var r=e.context,n=e.state,o=t.context,i=t.state;0===n.rotation?r.drawImage(o.canvas,0,0):(r.save(),r.translate(.5*n.width,.5*n.height),r.rotate(n.rotation*Math.PI/180),r.translate(.5*-n.width,.5*-n.height),r.drawImage(o.canvas,.5*(n.width-i.width),.5*(n.height-i.height)),r.restore())},t}(o);return h});