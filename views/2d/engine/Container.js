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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(e,t,i,r){function h(e,t){e.delete(t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=3,t.children=[],t}return i(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(){for(var e=this.children.concat(this._childrenToDetach),t=0,i=e;t<i.length;t++){var r=i[t];r.attached&&(this.detachChild(r),r.attached=!1,r.parent=null)}},t.prototype.doRender=function(e){var t=e.globalOpacity;e.globalOpacity*=this.opacity,this._renderPhase=0,this.attachChildren(),this._renderPhase=1;for(var i=this._childrenToDetach;i.length>0;){var r=i.shift();this.detachChild(r),r.attached=!1,r.parent=null,r.stage=null}this._renderPhase=2,this.renderChildren(e),this._renderPhase=3,e.globalOpacity=t},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var i=e.parent;i&&i!==this&&i.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var r=this._childrenToDetach.indexOf(e);return r>-1&&this._childrenToDetach.splice(r,1),this._childrenToAttach.push(e),this._renderPhase>=2&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],h(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=2&&this.requestRender();else{var i=this._childrenToAttach.indexOf(t);i>-1&&this._childrenToAttach.splice(i,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=2&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var i=this.getChildIndex(e);i>-1&&(this.children.splice(i,1),this.children.splice(t,0,e),this._renderPhase>=2&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>2&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(){var e=this._childrenToAttach;if(0!==e.length)for(var t=0,i=!1;!i;){var r=e[t];r.parent=this,r.stage=this.stage,this.attachChild(r)?(r.attached=!0,e.splice(t,1)):++t,i=e.length===t}},t.prototype.renderChildren=function(e){for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].processRender(e)},t.prototype.attachChild=function(e){return e.attach()},t.prototype.detachChild=function(e){e.detach()},t}(r.DisplayObject);t.Container=n});