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

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/has","dojox/gfx/_base","./Shape","./svg"],function(t,e,i,r,o,n,s){Object.defineProperty(e,"__esModule",{value:!0});var a=r("android"),h=r("chrome")||a&&a>=4?"auto":"optimizeLegibility",d=function(t){function e(e){var i=t.call(this)||this;return i.fontStyle=null,i.shape=o.getDefault("Text"),i.rawNode=e,i}return i(e,t),e.prototype.getFont=function(){return this.fontStyle},e.prototype.setFont=function(t){return this.fontStyle="string"==typeof t?o.splitFontString(t):o.makeParameters(o.defaultFont,t),this._setFont(),this},e.prototype._setFont=function(){var t=this.fontStyle;this.rawNode.setAttribute("font-style",t.style),this.rawNode.setAttribute("font-variant",t.variant),this.rawNode.setAttribute("font-weight",t.weight),this.rawNode.setAttribute("font-size",t.size),this.rawNode.setAttribute("font-family",t.family)},e.prototype.setShape=function(t){this.shape=o.makeParameters(this.shape,t),this.bbox=null;var e=this.rawNode,i=this.shape;return e.setAttribute("x",i.x),e.setAttribute("y",i.y),e.setAttribute("text-anchor",i.align),e.setAttribute("text-decoration",i.decoration),e.setAttribute("rotate",i.rotated?90:0),e.setAttribute("kerning",i.kerning?"auto":0),e.setAttribute("text-rendering",h),e.firstChild?e.firstChild.nodeValue=i.text:e.appendChild(s._createTextNode(i.text)),this},e.prototype.getTextWidth=function(){var t=this.rawNode,e=t.parentNode,i=t.cloneNode(!0);i.style.visibility="hidden";var r=0,o=i.firstChild.nodeValue;if(e.appendChild(i),""!==o)for(;!r;)r=i.getBBox?parseInt(i.getBBox().width,10):68;return e.removeChild(i),r},e.prototype.getBoundingBox=function(){var t=this.getShape(),e=null;if(t.text)try{e=this.rawNode.getBBox()}catch(i){e={x:0,y:0,width:0,height:0}}return e},e.nodeType="text",e}(n["default"]);e["default"]=d});