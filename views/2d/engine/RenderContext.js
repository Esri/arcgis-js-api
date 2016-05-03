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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/dom-construct","../math/mat2d","../math/vec2","./cssUtils"],function(t,s,i,e){var r=function(){this._parentStack=[],this._tStack=[],this._tStackSize=0,this._tmpMat2d=s.create(),this._tmpVec2=i.create(),this.transform=s.create(),this.viewTransform=s.create()};return r.prototype={reset:function(){this._parentStack.length=0,this._tStackSize=0,this.child=null,s.identity(this.transform)},setSize:function(t,s){this.surface.style.width=t+"px",this.surface.style.height=s+"px"},setOpacity:function(t){this.surface.style.opacity=t},setVisibility:function(t){this.surface.style.display=t?"block":"none"},setBlendMode:function(t){this.surface.style["mix-blend-mode"]=t?t:"normal"},setViewTransform:function(t){s.copy(this.transform,t),s.copy(this.viewTransform,t)},reflowChild:function(t,s){this.child=t,this.placeChild(t,s),t.reflow(this)},renderChild:function(t){this.child=t,this.surface=t.surface,this.setChildTransform(t),t.render(this)},placeChild:function(t,s){var i=this._parentStack[this._parentStack.length-1],e=i.surface,r=e.childNodes,n=t.createSurface();r[s]?r[s]!==n&&e.insertBefore(n,r[s]):e.appendChild(n)},setChildTransform:function(t){var r=t.transform,n=null;r&&(6===r.length?(n=s.invert(this._tmpMat2d,r),s.multiply(n,this.transform,n),e.setTransform(this.surface.style,n),s.copy(this.transform,r)):2===r.length&&(n=i.transformMat2d(this._tmpVec2,r,this.transform),e.setTransform(this.surface.style,n)))},pushParent:function(t){this._parentStack.push(t)},popParent:function(){this._parentStack.pop()},pushMatrix:function(){var t=this._tStack;t.length<this._tStackSize+1&&t.push(s.create()),s.copy(t[this._tStackSize++],this.transform)},popMatrix:function(){s.copy(this.transform,this._tStack[--this._tStackSize])},emptyTrash:function(s){if(s.trash&&s.trash.children.length){var i,e,r=s.trash,n=r.children;for(i=0,e=n.length;e>i;i++)t.destroy(n[i].surface);n.length=0,r.ids={}}}},r});