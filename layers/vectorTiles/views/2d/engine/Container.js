// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(e,t,r,h){function n(e,t){e.delete(t)}var i;return function(e){e[e.BEFORE=0]="BEFORE",e[e.ATTACHING=1]="ATTACHING",e[e.DETACHING=2]="DETACHING",e[e.RENDERING=3]="RENDERING",e[e.AFTER=4]="AFTER",e[e.DONE=5]="DONE"}(i||(i={})),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=i.DONE,t.children=[],t}return r(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(e){for(var t=this.children.concat(this._childrenToDetach),r=this.prepareChildrenRenderParameters(e),h=0,n=t;h<n.length;h++){var i=n[h];i.attached&&(this.detachChild(i,r),i.attached=!1,i.parent=null)}},t.prototype.doRender=function(e){var t=this.prepareChildrenRenderParameters(e);this._renderPhase=i.BEFORE,this.beforeRenderChildren(e,t),this._renderPhase=i.ATTACHING,this.attachChildren(t),this._renderPhase=i.DETACHING;for(var r=this._childrenToDetach;r.length>0;){var h=r.shift();this.detachChild(h,t),h.attached=!1,h.parent=null}this._renderPhase=i.RENDERING,this.renderChildren(t),this._renderPhase=i.AFTER,this.afterRenderChildren(e,t),this._renderPhase=i.DONE},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var r=e.parent;r&&r!==this&&r.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var h=this._childrenToDetach.indexOf(e);return h>-1&&this._childrenToDetach.splice(h,1),this._childrenToAttach.push(e),this._renderPhase>=i.RENDERING&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],n(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=i.RENDERING&&this.requestRender();else{var r=this._childrenToAttach.indexOf(t);r>-1&&this._childrenToAttach.splice(r,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=i.RENDERING&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var r=this.getChildIndex(e);r>-1&&(this.children.splice(r,1),this.children.splice(t,0,e),this._renderPhase>=i.RENDERING&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>i.RENDERING&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(e){var t=this._childrenToAttach;if(0!==t.length)for(var r=0,h=!1;!h;){var n=t[r];this.attachChild(n,e)?(n.attached=!0,n.parent=this,t.splice(r,1)):++r,h=t.length===r}},t.prototype.renderChildren=function(e){for(var t=this.children,r=t.length,h=0;h<r;h++){var n=t[h];n.attached&&this.renderChild(n,e)}},t.prototype.beforeRenderChildren=function(e,t){},t.prototype.attachChild=function(e,t){return e.attach(t)},t.prototype.detachChild=function(e,t){e.detach(t)},t.prototype.renderChild=function(e,t){e.processRender(t)},t.prototype.afterRenderChildren=function(e,t){},t}(h)});