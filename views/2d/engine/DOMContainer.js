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

define(["require","exports","../../../core/tsSupport/extendsHelper","./Container"],function(e,t,n,r){var i=function(e){function t(){e.apply(this,arguments)}return n(t,e),t.prototype.createElement=function(){var e=document.createElement("div");return e.setAttribute("class","esri-display-object"),e},t.prototype.setElement=function(e){this.element=e},t.prototype.render=function(t){var n=this.element.style;return this.visible?(n.display="block",n.opacity=""+this.opacity,e.prototype.render.call(this,t),void 0):void(n.display="none")},t.prototype.prepareChildrenRenderParameters=function(e){return e},t.prototype.attachChild=function(e,t){var n=e.element;return n||(n=e.createElement(),e.setElement(n)),e.attach(t)},t.prototype.detachChild=function(e,t){e.detach(t),this.element.removeChild(e.element),e.setElement(null)},t.prototype.renderChildren=function(t){for(var n=this.children,r=this.element.childNodes,i=0,o=0,l=n.length;l>o;o++)if(n[o].attached){var p=n[o].element;r[i]!==p&&(null!=r[i+1]?this.element.insertBefore(p,r[i]):this.element.appendChild(p)),i+=1}e.prototype.renderChildren.call(this,t)},t.prototype.renderChild=function(e,t){return e.render(t)},t}(r);return i});