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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/has","dojo/_base/array","dojo/dom-construct","dojox/gfx/_base","./svg","./Container","./Circle","./Group","./Path","./Image","./Rect","./Text"],function(e,t,r,n,o,a,i,s,u,c,h,d,l,p,f){Object.defineProperty(t,"__esModule",{value:!0});var y=navigator.userAgent,g=function(){var e=/WebKit\/(\d*)/.exec(y);return e?parseInt(e[1],10):0}()>534,w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rawNode=null,t._parent=null,t._nodes=[],t._events=[],t}return r(t,e),t.prototype.destroy=function(){if(o.forEach(this._nodes,a.destroy),this._nodes=[],o.forEach(this._events,function(e){e&&e.remove()}),this._events=[],this.rawNode=null,n("ie"))for(;this._parent.lastChild;)a.destroy(this._parent.lastChild);else this._parent.innerHTML="";this._parent=null,this.defNode=null},t.prototype.setDimensions=function(e,t){if(!this.rawNode)return this;var r=0>e?0:e,n=0>t?0:t;return this.rawNode.setAttribute("width",r),this.rawNode.setAttribute("height",n),g&&(this.rawNode.style.width=r,this.rawNode.style.height=n),this},t.prototype.getDimensions=function(){return this.rawNode?{width:i.normalizedLength(this.rawNode.getAttribute("width")),height:i.normalizedLength(this.rawNode.getAttribute("height"))}:null},t.prototype.getEventSource=function(){return this.rawNode},t.prototype._getRealMatrix=function(){return null},t.prototype.createShape=function(e){switch(e.type){case i.defaultPath.type:return this.createPath(e);case i.defaultRect.type:return this.createRect(e);case i.defaultCircle.type:return this.createCircle(e);case i.defaultImage.type:return this.createImage(e);case i.defaultText.type:return this.createText(e)}return console.error("[gfx] unknown shape",e),null},t.prototype.createGroup=function(){return this.createObject(h["default"])},t.prototype.createRect=function(e){return this.createObject(p["default"],e)},t.prototype.createCircle=function(e){return this.createObject(c["default"],e)},t.prototype.createImage=function(e){return this.createObject(l["default"],e)},t.prototype.createText=function(e){return this.createObject(f["default"],e)},t.prototype.createPath=function(e){return this.createObject(d["default"],e)},t.prototype.createObject=function(e,t){if(!this.rawNode)return null;var r=new e,n=s._createElementNS(s.xmlns.svg,e.nodeType);return r.setRawNode(n),r.setShape(t),this.add(r),r},t}(u["default"]);t["default"]=w});