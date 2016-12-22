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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","./Container","dojox/gfx/_base","./svg","./Circle","./Path","./Image","./Rect","./Text"],function(e,t,r,a,c,o,n,u,p,i,s){var l=function(e){function t(){e.apply(this,arguments)}return r(t,e),t.prototype.setRawNode=function(e){this.rawNode=e,this.rawNode.__gfxObject__=this},t.prototype.destroy=function(){e.prototype.clear.call(this,!0),e.prototype.destroy.call(this)},t.prototype.createShape=function(e){switch(e.type){case c.defaultPath.type:return this.createPath(e);case c.defaultRect.type:return this.createRect(e);case c.defaultCircle.type:return this.createCircle(e);case c.defaultImage.type:return this.createImage(e);case c.defaultText.type:return this.createText(e)}return console.error("[gfx] unknown shape",e),null},t.prototype.createGroup=function(){return this.createObject(t)},t.prototype.createRect=function(e){return this.createObject(i["default"],e)},t.prototype.createCircle=function(e){return this.createObject(n["default"],e)},t.prototype.createImage=function(e){return this.createObject(p["default"],e)},t.prototype.createText=function(e){return this.createObject(s["default"],e)},t.prototype.createPath=function(e){return this.createObject(u["default"],e)},t.prototype.createObject=function(e,t){if(!this.rawNode)return null;var r=new e,a=o._createElementNS(o.xmlns.svg,e.nodeType);return r.setRawNode(a),r.setShape(t),this.add(r),r},t.nodeType="g",t}(a["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l});