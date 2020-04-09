// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],(function(t,e,i,h){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenSet=new Set,e._childrenToAttach=[],e._childrenToDetach=[],e.children=[],e}return i(e,t),Object.defineProperty(e.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),e.prototype.detach=function(){for(var t=0,e=this.children.concat(this._childrenToDetach);t<e.length;t++){var i=e[t];i.attached&&(this.detachChild(i),i.attached=!1,i.parent=null)}},e.prototype.doRender=function(t){var e=t.globalOpacity;t.globalOpacity*=this.opacity,this.attachChildren(),this.detachChildren(),this.renderChildren(t),t.globalOpacity=e},e.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},e.prototype.addChildAt=function(t,e){if(void 0===e&&(e=this.numChildren),!t)return t;if(this.contains(t))return t;var i=t.parent;i&&i!==this&&i.removeChild(t),e>=this.numChildren?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t);var h=this._childrenToDetach.indexOf(t);return h>-1&&this._childrenToDetach.splice(h,1),this._childrenToAttach.push(t),this.requestRender(),t},e.prototype.contains=function(t){return this._childrenSet.has(t)},e.prototype.getChildIndex=function(t){return this.children.indexOf(t)},e.prototype.getChildAt=function(t){return t<0||t>this.children.length?null:this.children[t]},e.prototype.removeAllChildren=function(){for(var t=this.numChildren;t--;)this.removeChildAt(0)},e.prototype.removeChild=function(t){return this.contains(t)?this.removeChildAt(this.getChildIndex(t)):t},e.prototype.removeChildAt=function(t){var e,i,h;if(t<0||t>=this.children.length)return null;if(e=this.children.splice(t,1)[0],i=this._childrenSet,h=e,i.delete(h),e.attached)this._childrenToDetach.push(e);else{var n=this._childrenToAttach.indexOf(e);n>-1&&this._childrenToAttach.splice(n,1)}return e},e.prototype.setChildIndex=function(t,e){var i=this.getChildIndex(t);i>-1&&(this.children.splice(i,1),this.children.splice(e,0,t))},e.prototype.sortChildren=function(t){return this.children.sort(t)},e.prototype.attachChildren=function(){var t=this._childrenToAttach;if(0!==t.length)for(var e=0,i=!1;!i;){var h=t[e];h.parent=this,h.stage=this.stage,this.attachChild(h)?(h.attached=!0,t.splice(e,1)):++e,i=t.length===e}},e.prototype.detachChildren=function(){for(var t=this._childrenToDetach;t.length>0;){var e=t.shift();this.detachChild(e),e.attached=!1,e.parent=null,e.stage=null}},e.prototype.renderChildren=function(t){for(var e=this.children,i=e.length,h=0;h<i;h++)e[h].processRender(t)},e.prototype.attachChild=function(t){return t.attach()},e.prototype.detachChild=function(t){t.detach()},e}(h.DisplayObject);e.Container=n}));