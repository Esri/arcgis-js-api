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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape","./svg"],function(e,t,r,s,i,n){var o=function(e){function t(t){e.call(this),this.shape=s.getDefault("Image"),this.rawNode=t}return r(t,e),t.prototype.setShape=function(e){this.shape=s.makeParameters(this.shape,e),this.bbox=null;var t=this.rawNode;for(var r in this.shape)if("type"!==r&&"src"!==r){var i=this.shape[r];("width"===r||"height"===r)&&(i=0>i?0:i),t.setAttribute(r,i)}return t.setAttribute("preserveAspectRatio","none"),n._setAttributeNS(t,n.xmlns.xlink,"xlink:href",this.shape.src),t.__gfxObject__=this,this},t.prototype.getBoundingBox=function(){return this.shape},t.prototype.setStroke=function(){return this},t.prototype.setFill=function(){return this},t.nodeType="image",t}(i["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o});