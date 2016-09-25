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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(e,t,r,h){var n;!function(e){e[e.BEFORE=0]="BEFORE",e[e.ATTACHING=1]="ATTACHING",e[e.DETACHING=2]="DETACHING",e[e.RENDERING=3]="RENDERING",e[e.AFTER=4]="AFTER",e[e.DONE=5]="DONE"}(n||(n={}));var i=function(e){function t(){e.apply(this,arguments),this._childrenToAttach=[],this._childrenToDetach=[],this._renderPhase=n.DONE,this.children=[]}return r(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.attach=function(e){return!0},t.prototype.detach=function(e){for(var t=this.children,r=this.prepareChildrenRenderParameters(e),h=0,n=t.length;n>h;h++){var i=t[h];i.attached&&(this.detachChild(i,r),i.attached=!1,i.parent=null)}},t.prototype.render=function(e){var t=this.prepareChildrenRenderParameters(e);this._renderPhase=n.BEFORE,this.beforeRenderChildren(e,t),this._renderPhase=n.ATTACHING,this.attachChildren(t)||this.requestRender(),this._renderPhase=n.DETACHING;for(var r=this._childrenToDetach;r.length>0;){var h=r.shift();this.detachChild(h,t),h.attached=!1,h.parent=null}this._renderPhase=n.RENDERING,this.renderChildren(t),this._renderPhase=n.AFTER,this.afterRenderChildren(e,t),this._renderPhase=n.DONE},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),this.contains(e))return e;var r=e.parent;r&&r!==this&&r.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e);var h=this._childrenToDetach.indexOf(e);return h>-1&&this._childrenToDetach.splice(h,1),this._childrenToAttach.push(e),this._renderPhase>=n.RENDERING&&this.requestRender(),e},t.prototype.contains=function(e){return this.getChildIndex(e)>-1},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return 0>e||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){var t=this.getChildIndex(e);return t>-1?this.removeChildAt(t):e},t.prototype.removeChildAt=function(e){var t;if(0>e||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],t.attached)this._childrenToDetach.push(t),this._renderPhase>=n.RENDERING&&this.requestRender();else{var r=this._childrenToAttach.indexOf(t);r>-1&&this._childrenToAttach.splice(r,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=n.RENDERING&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var r=this.getChildIndex(e);r>-1&&(this.children.splice(r,1),this.children.splice(t,0,e),this._renderPhase>=n.RENDERING&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>n.RENDERING&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(e){var t=this._childrenToAttach;if(0===t.length)return!0;for(var r=e.budget,h=r.done||0===t.length;!h;){var n=t.shift();this.attachChild(n,e)&&(n.attached=!0,n.parent=this),h=r.done||0===t.length}return 0===t.length},t.prototype.renderChildren=function(e){for(var t=this.children,r=0,h=t.length;h>r;r++){var n=t[r];n.attached&&n.visible&&this.renderChild(n,e)}},t.prototype.beforeRenderChildren=function(e,t){},t.prototype.afterRenderChildren=function(e,t){},t}(h);return i});