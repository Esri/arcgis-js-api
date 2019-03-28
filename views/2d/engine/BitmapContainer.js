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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","./Container","./webgl/enums"],function(e,r,t,n,a,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.doRender=function(r){this.visible&&r.drawPhase===i.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,r)},r.prototype.renderChildren=function(e){var r=this,t=r.stage.painter,n=r.children,a=e.drawPhase;this.sortChildren(function(e,r){return r.resolution-e.resolution}),e.drawPhase=i.WGLDrawPhase.CLIP,t.startStencilBurn();for(var o=0,s=n.length;o<s;o++){var l=n[o];l.attached&&l.visible&&(t.stencilRef=o,l.processRender(e))}e.drawPhase=a,t.startStencilDraw();for(var o=0,s=n.length;o<s;o++){var l=n[o];l.attached&&l.visible&&(t.stencilRef=o,l.processRender(e))}t.endStencilDraw()},r}(a.Container);r.BitmapContainer=o});