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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojox/gfx/_base","./Circle","./Container","./Image","./Path","./Rect","./svg","./Text"],function(e,t,r,a,c,n,o,u,i,p,s){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.setRawNode=function(e){this.rawNode=e,this.rawNode.__gfxObject__=this},t.prototype.destroy=function(){e.prototype.clear.call(this,!0),e.prototype.destroy.call(this)},t.prototype.createShape=function(e){switch(e.type){case a.defaultPath.type:return this.createPath(e);case a.defaultRect.type:return this.createRect(e);case a.defaultCircle.type:return this.createCircle(e);case a.defaultImage.type:return this.createImage(e);case a.defaultText.type:return this.createText(e)}return console.error("[gfx] unknown shape",e),null},t.prototype.createGroup=function(){return this.createObject(t)},t.prototype.createRect=function(e){return this.createObject(i.default,e)},t.prototype.createCircle=function(e){return this.createObject(c.default,e)},t.prototype.createImage=function(e){return this.createObject(o.default,e)},t.prototype.createText=function(e){return this.createObject(s.default,e)},t.prototype.createPath=function(e){return this.createObject(u.default,e)},t.prototype.createObject=function(e,t){if(!this.rawNode)return null;var r=new e,a=p._createElementNS(p.xmlns.svg,e.nodeType);return r.setRawNode(a),r.setShape(t),this.add(r),r},t.nodeType="g",t}(n.default);t.default=l});