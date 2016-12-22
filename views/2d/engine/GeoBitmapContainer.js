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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./Container","../ViewState","../viewStateUtils","../viewpointUtils"],function(e,t,n,r,i,o,a,c){var s=[0,0],h=function(e){function t(){e.apply(this,arguments),this._offScreenCanvas=null,this._offScreenRenderParameters={budget:null,clip:[],context:null,devicePixelRatio:1,state:new o({viewpoint:c.create()}),stationary:!0}}return n(t,e),t.prototype.attach=function(t){return this._offScreenCanvas||(this._offScreenCanvas=document.createElement("canvas"),this._offScreenRenderParameters.context=this._offScreenCanvas.getContext("2d")),e.prototype.attach.call(this,t)},t.prototype.detach=function(t){e.prototype.detach.call(this,t),this._offScreenCanvas=null,this._offScreenRenderParameters.context=null},t.prototype.render=function(t){this.visible&&e.prototype.render.call(this,t)},t.prototype.prepareChildrenRenderParameters=function(e){var t=e.state,n=this._offScreenRenderParameters,r=this._offScreenCanvas,i=n.state,o=n.context,c=a.getOuterSize(s,t),h=c[0],l=c[1];return i.viewpoint=t.viewpoint.clone(),i.viewpoint.rotation=0,i.size=s,r.width!==h||r.height!==l?(r.width=h,r.height=l):o.clearRect(0,0,h,l),n.budget=e.budget,n.devicePixelRatio=e.devicePixelRatio,n.clip.length=0,n},t.prototype.detachChild=function(e,t){e.detach()},t.prototype.attachChild=function(e,t){return e.attach(t)},t.prototype.renderChild=function(e,t){e.render(t)},t.prototype.beforeRenderChildren=function(e,t){this.sortChildren(function(e,t){return t.resolution-e.resolution})},t.prototype.afterRenderChildren=function(e,t){var n=e.context,r=e.state,i=t.state,o=t.context;0===r.rotation?n.drawImage(o.canvas,0,0):(n.save(),n.translate(.5*r.width,.5*r.height),n.rotate(r.rotation*Math.PI/180),n.translate(.5*-r.width,.5*-r.height),n.drawImage(o.canvas,.5*(r.width-i.width),.5*(r.height-i.height)),n.restore())},t}(i);return h});