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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./DisplayObject"],(function(t,e,n,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenSet=new Set,e.children=[],e}return n.__extends(e,t),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this._blendMode},set:function(t){this._blendMode=t,this.requestRender()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"clips",{get:function(){return this._clips},set:function(t){this._clips=t,this.children.forEach((function(e){return e.clips=t}))},enumerable:!0,configurable:!0}),e.prototype.doRender=function(t){var e=this.createRenderParams(t);this.renderChildren(e)},e.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},e.prototype.addChildAt=function(t,e){if(void 0===e&&(e=this.children.length),!t)return t;if(this.contains(t))return t;var n=t.parent;return n&&n!==this&&n.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t},e.prototype.contains=function(t){return this._childrenSet.has(t)},e.prototype.removeAllChildren=function(){this._childrenSet.clear();for(var t=0,e=this.children;t<e.length;t++){var n=e[t];this!==this.stage&&(n.clips=null),n.stage=null,n.parent=null}this.children.length=0},e.prototype.removeChild=function(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t},e.prototype.removeChildAt=function(t){var e;return t<0||t>=this.children.length?null:(e=this.children.splice(t,1)[0],this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e)},e.prototype.sortChildren=function(t){return this.children.sort(t)},e.prototype.onAttach=function(){t.prototype.onAttach.call(this);for(var e=this.stage,n=0,i=this.children;n<i.length;n++){i[n].stage=e}},e.prototype.onDetach=function(){t.prototype.onDetach.call(this);for(var e=0,n=this.children;e<n.length;e++){n[e].stage=null}},e.prototype.renderChildren=function(t){for(var e=this.children,n=e.length,i=0;i<n;i++)e[i].processRender(t)},e.prototype.createRenderParams=function(t){return n.__assign(n.__assign({},t),{blendMode:this.blendMode,globalOpacity:t.globalOpacity*this.opacity})},e}(i.DisplayObject);e.Container=r}));