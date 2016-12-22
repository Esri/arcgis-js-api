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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","dojo/has","dojo/_base/array","dojo/dom-construct","dojox/gfx/_base","./svg","./Container","./Circle","./Group","./Path","./Image","./Rect","./Text"],function(t,e,r,n,o,i,a,s,u,c,h,d,l,p,f){var y=navigator.userAgent,g=function(){var t=/WebKit\/(\d*)/.exec(y);return t?parseInt(t[1],10):0}()>534,w=function(t){function e(){t.apply(this,arguments),this.rawNode=null,this._parent=null,this._nodes=[],this._events=[]}return r(e,t),e.prototype.destroy=function(){if(o.forEach(this._nodes,i.destroy),this._nodes=[],o.forEach(this._events,function(t){t&&t.remove()}),this._events=[],this.rawNode=null,n("ie"))for(;this._parent.lastChild;)i.destroy(this._parent.lastChild);else this._parent.innerHTML="";this._parent=null,this.defNode=null},e.prototype.setDimensions=function(t,e){if(!this.rawNode)return this;var r=0>t?0:t,n=0>e?0:e;return this.rawNode.setAttribute("width",r),this.rawNode.setAttribute("height",n),g&&(this.rawNode.style.width=r,this.rawNode.style.height=n),this},e.prototype.getDimensions=function(){return this.rawNode?{width:a.normalizedLength(this.rawNode.getAttribute("width")),height:a.normalizedLength(this.rawNode.getAttribute("height"))}:null},e.prototype.getEventSource=function(){return this.rawNode},e.prototype._getRealMatrix=function(){return null},e.prototype.createShape=function(t){switch(t.type){case a.defaultPath.type:return this.createPath(t);case a.defaultRect.type:return this.createRect(t);case a.defaultCircle.type:return this.createCircle(t);case a.defaultImage.type:return this.createImage(t);case a.defaultText.type:return this.createText(t)}return console.error("[gfx] unknown shape",t),null},e.prototype.createGroup=function(){return this.createObject(h["default"])},e.prototype.createRect=function(t){return this.createObject(p["default"],t)},e.prototype.createCircle=function(t){return this.createObject(c["default"],t)},e.prototype.createImage=function(t){return this.createObject(l["default"],t)},e.prototype.createText=function(t){return this.createObject(f["default"],t)},e.prototype.createPath=function(t){return this.createObject(d["default"],t)},e.prototype.createObject=function(t,e){if(!this.rawNode)return null;var r=new t,n=s._createElementNS(s.xmlns.svg,t.nodeType);return r.setRawNode(n),r.setShape(e),this.add(r),r},e}(u["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=w});