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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Shape"],function(e,t,r,s,i){var h=function(e){function t(t){e.call(this),this.shape=s.getDefault("Rect"),this.rawNode=t}return r(t,e),t.prototype.getBoundingBox=function(){return this.shape},t.prototype.setShape=function(e){this.shape=s.makeParameters(this.shape,e),this.bbox=null;for(var t in this.shape)if("type"!==t&&"r"!==t){var r=this.shape[t];("width"===t||"height"===t)&&(r=0>r?0:r),this.rawNode.setAttribute(t,r)}return null!=this.shape.r&&(this.rawNode.setAttribute("ry",this.shape.r),this.rawNode.setAttribute("rx",this.shape.r)),this},t.nodeType="rect",t}(i["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=h});